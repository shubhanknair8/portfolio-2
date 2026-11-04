"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll effect from the reference site: while the hero scrolls away, the portrait moves at
 * 60% of the scroll speed (it drifts down 0.4px per pixel scrolled), so it sinks behind the
 * next section while the text scrolls normally. Off for reduced motion, "Pause motion" and phones.
 */
export function HeroParallax() {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const hero = ref.current?.closest<HTMLElement>(".hero3, .hero4");
    if (!hero) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 810px)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const off = reduce.matches || !desktop.matches || document.documentElement.dataset.motion === "off";
      const y = Math.min(Math.max(window.scrollY - hero.offsetTop, 0), hero.offsetHeight);
      hero.style.setProperty("--hero-py", off ? "0px" : `${(y * 0.4).toFixed(1)}px`);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  return <span ref={ref} hidden />;
}
