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
      ...rest,
      ref,
      className: `rv ${inView ? "is-in" : ""} ${className}`,
      style: { "--d": `${delay}ms`, ...(rest.style as CSSProperties) } as CSSProperties,
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
    <p ref={ref} className={`ink ${className}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {words.map((w, i) => (
          <span key={i} className={i < lit ? "ink__on" : undefined}>
            {w}{" "}
          </span>
        ))}
      </span>
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
    <span ref={ref}>
      <span className="sr-only">{`${value}${suffix}`}</span>
      <span aria-hidden>
        {n}
        {suffix}
      </span>
    </span>
  );
}

/* ------------------------------------------------------------------
   Site-wide motion switch (WCAG 2.2.2). Sets html[data-motion="off"],
   which pauses marquees (CSS) and the rotating hero word (JS).
   ------------------------------------------------------------------ */
const MOTION_EVENT = "motionchange";
const motionOff = () =>
  typeof document !== "undefined" &&
  (document.documentElement.dataset.motion === "off" || window.matchMedia("(prefers-reduced-motion: reduce)").matches);

export function MotionToggle({ className = "" }: { className?: string }) {
  const [off, setOff] = useState(false);
  useEffect(() => {
    try {
      if (localStorage.getItem("motion") === "off") setOff(true);
    } catch {}
  }, []);
  useEffect(() => {
    document.documentElement.dataset.motion = off ? "off" : "on";
    try {
      localStorage.setItem("motion", off ? "off" : "on");
    } catch {}
    window.dispatchEvent(new Event(MOTION_EVENT));
  }, [off]);
  return (
    <button type="button" className={`motion-toggle ${className}`} aria-pressed={off} onClick={() => setOff((v) => !v)}>
      <span aria-hidden className="motion-toggle__icon">{off ? "▶" : "❚❚"}</span>
      {off ? "Play motion" : "Pause motion"}
    </button>
  );
}

/** True while motion is allowed; re-checks when the site toggle changes. */
function useMotionOn() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const sync = () => setOn(!motionOff());
    sync();
    window.addEventListener(MOTION_EVENT, sync);
    return () => window.removeEventListener(MOTION_EVENT, sync);
  }, []);
  return on;
}

/**
 * Typewriter word for the hero: types "Convert", holds ~2s, deletes it,
 * then types the next word in its own colour. Shows the first word, still, when motion is off.
 */
export function RotatingWord({ words, hold = 2000 }: { words: { word: string; color: string }[]; hold?: number }) {
  const on = useMotionOn();
  const [i, setI] = useState(0);
  const [len, setLen] = useState(words[0].word.length);
  const [phase, setPhase] = useState<"hold" | "delete" | "type">("hold");

  useEffect(() => {
    if (!on) {
      setI(0);
      setLen(words[0].word.length);
      setPhase("hold");
      return;
    }
    const word = words[i].word;
    let t: ReturnType<typeof setTimeout>;
    if (phase === "hold") t = setTimeout(() => setPhase("delete"), hold);
    else if (phase === "delete")
      t =
        len > 0
          ? setTimeout(() => setLen((n) => n - 1), 55)
          : setTimeout(() => {
              setI((n) => (n + 1) % words.length);
              setPhase("type");
            }, 250);
    else
      t =
        len < word.length
          ? setTimeout(() => setLen((n) => n + 1), 95)
          : setTimeout(() => setPhase("hold"), 0);
    return () => clearTimeout(t);
  }, [on, i, len, phase, hold, words]);

  const w = words[i];
  return (
    <span className="rotator" aria-hidden>
      <span className="rotator__word" style={{ color: w.color }}>
        {w.word.slice(0, len)}
      </span>
      <span className={`rotator__caret ${phase === "hold" ? "is-blinking" : ""}`} style={{ background: w.color }} />
    </span>
  );
}

/** Word that swaps with a soft blur every few seconds (footer "Let's design / shape / build"). */
export function SwapWord({ words, interval = 2600 }: { words: string[]; interval?: number }) {
  const on = useMotionOn();
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!on) return setI(0);
    const id = setInterval(() => setI((n) => (n + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [on, interval, words.length]);
  return (
    <span className="swap" aria-hidden>
      <span key={words[i]} className="swap__word">
        {words[i]}
      </span>
    </span>
  );
}

/** Counts 1 -> value on view, then quietly holds. Used inside the bento. */
export function TickUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [ref, inView] = useInView<HTMLSpanElement>();
  const on = useMotionOn();
  const [n, setN] = useState(value);
  const done = useRef(false);
  useEffect(() => {
    if (!inView || !on || done.current) return;
    done.current = true;
    let k = 1;
    setN(1);
    const id = setInterval(() => {
      k += 1;
      setN(Math.min(k, value));
      if (k >= value) clearInterval(id);
    }, Math.max(120, 900 / value));
    return () => clearInterval(id);
  }, [inView, on, value]);
  return (
    <span ref={ref}>
      <span className="sr-only">{`${value}${suffix}`}</span>
      <span aria-hidden>
        {n}
        {suffix}
      </span>
    </span>
  );
}
