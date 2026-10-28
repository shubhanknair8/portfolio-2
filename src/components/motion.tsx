"use client";

/**
 * Tiny, dependency-free motion helpers.
 * - Content is fully visible without JS: hidden start states only apply under `html.js`.
 * - Everything is disabled under prefers-reduced-motion (see globals.css).
 */

import { createElement, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

function useInView<T extends Element>(options: IntersectionObserverInit = { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") return setInView(true);
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, options);
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [ref, inView] as const;
}

type Tag = "div" | "section" | "ul" | "ol" | "li" | "p" | "h1" | "h2" | "h3" | "span" | "article" | "figure";

/** Fades/slides children in when scrolled into view. Children with `--i` stagger. */
export function Reveal({
  as = "div",
  className = "",
  delay = 0,
  children,
  ...rest
}: { as?: Tag; className?: string; delay?: number; children: ReactNode } & React.HTMLAttributes<HTMLElement>) {
  const [ref, inView] = useInView<HTMLElement>();
  return createElement(
    as,
    {
      ref,
      className: `rv ${inView ? "is-in" : ""} ${className}`,
      style: { "--d": `${delay}ms`, ...(rest.style as CSSProperties) } as CSSProperties,
      ...rest,
    },
    children
  );
}

/** Masked word-by-word headline reveal. */
export function SplitText({ text, as = "h2", className = "" }: { text: string; as?: Tag; className?: string }) {
  const [ref, inView] = useInView<HTMLElement>();
  const words = text.split(" ");
  return createElement(
    as,
    { ref, className: `split ${inView ? "is-in" : ""} ${className}`, "aria-label": text },
    words.flatMap((w, i) => [
      <span key={i} className="split__mask" aria-hidden>
        <span className="split__word" style={{ "--i": i } as CSSProperties}>
          {w}
        </span>
      </span>,
      i < words.length - 1 ? " " : null,
    ])
  );
}

/** Paragraph whose words fill from grey to ink as it scrolls through the viewport. */
export function ScrollInk({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(1);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the top enters at 85% of the viewport, 1 when the bottom reaches 45%
      const p = (vh * 0.85 - r.top) / (r.height + vh * 0.4);
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  const words = text.split(" ");
  const lit = Math.round(progress * words.length);
  return (
    <p ref={ref} className={`ink ${className}`} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} aria-hidden className={i < lit ? "ink__on" : undefined}>
          {w}{" "}
        </span>
      ))}
    </p>
  );
}

/** Counts up to `value` once visible. Renders the final value on the server. */
export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [ref, inView] = useInView<HTMLSpanElement>();
  const [n, setN] = useState(value);
  const started = useRef(false);
  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t0 = performance.now();
    const dur = 1200;
    let raf = 0;
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / dur);
      setN(Math.round(value * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    setN(0);
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      <span aria-hidden>
        {n}
        {suffix}
      </span>
    </span>
  );
}
