"use client";

import { useEffect, useRef } from "react";

const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/**
 * Scroll animation: the fanned covers in the hero drop down as you scroll, straighten out and
 * land exactly on the first card of the "My projects" stack. When they land, the real stack
 * takes over (it works as before). Each card falls slightly after the one above it.
 * Off on phones, for reduced motion and when motion is paused: the cards stay put.
 */
export function HeroCardsFall() {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const hero = ref.current?.closest<HTMLElement>(".hero5");
    const stack = document.querySelector<HTMLElement>(".stack");
    const target = stack?.querySelector<HTMLElement>(".stack__item .stack__media");
    if (!hero || !stack || !target) return;
    const cards = Array.from(hero.querySelectorAll<HTMLElement>(".hero5__card"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 810px)");

    type Box = { x: number; y: number; w: number; h: number };
    let bases: Box[] = [];
    let goal: Box = { x: 0, y: 0, w: 0, h: 0 };
    const pageBox = (el: HTMLElement): Box => {
      const r = el.getBoundingClientRect();
      return { x: r.left + window.scrollX, y: r.top + window.scrollY, w: r.width, h: r.height };
    };
    const measure = () => {
      cards.forEach((c) => (c.style.transform = "none"));
      bases = cards.map(pageBox);
      goal = pageBox(target);
      cards.forEach((c) => (c.style.transform = ""));
    };

    let frame = 0;
    const update = () => {
      frame = 0;
      const off = reduce.matches || !desktop.matches || document.documentElement.dataset.motion === "off";
      if (off) {
        cards.forEach((c) => (c.style.transform = ""));
        hero.classList.remove("is-falling", "is-landed");
        stack.classList.remove("is-waiting");
        return;
      }
      // Progress: 0 at the top of the page, 1 once the stack's first card is in view.
      const end = Math.max(1, goal.y - window.innerHeight * 0.18);
      const p = Math.min(Math.max(window.scrollY / end, 0), 1);
      const landed = p >= 1;
      hero.classList.toggle("is-falling", p > 0 && !landed);
      hero.classList.toggle("is-landed", landed);
      stack.classList.toggle("is-waiting", !landed);
      if (p === 0) {
        cards.forEach((c) => (c.style.transform = ""));
        return;
      }
      cards.forEach((c, i) => {
        const b = bases[i];
        if (!b) return;
        // stagger: the top card (last in DOM) moves first
        const k = cards.length - 1 - i;
        const t = ease(Math.min(Math.max((p - k * 0.08) / (1 - k * 0.08), 0), 1));
        const rot = Number(c.dataset.rot || 0);
        const sx = goal.w / b.w;
        const sy = goal.h / b.h;
        const dx = goal.x + goal.w / 2 - (b.x + b.w / 2);
        const dy = goal.y + goal.h / 2 - (b.y + b.h / 2);
        c.style.transform = `translate(calc(var(--x) * ${1 - t} + ${dx * t}px), calc(var(--y) * ${1 - t} + ${dy * t}px)) rotate(${rot * (1 - t)}deg) scale(${1 + (sx - 1) * t}, ${1 + (sy - 1) * t})`;
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    update();
    const imgs = Array.from(document.querySelectorAll<HTMLImageElement>(".hero5__card img, .stack__media img"));
    imgs.forEach((im) => im.complete || im.addEventListener("load", onResize, { once: true }));
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    const ro = new ResizeObserver(onResize);
    ro.observe(document.body);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      ro.disconnect();
      cancelAnimationFrame(frame);
      stack.classList.remove("is-waiting");
    };
  }, []);
  return <span ref={ref} hidden />;
}
