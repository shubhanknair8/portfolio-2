"use client";

import { useEffect, useRef } from "react";

const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/**
 * Scroll animation: the fanned covers in the hero drop down as you scroll, straighten out and
 * spread out into a row, each landing on its own project card in "My projects". When they land, the real stack
 * takes over (it works as before). Each card falls slightly after the one above it.
 * Off for reduced motion, when motion is paused, and on phones where the card stack is hidden.
 */
export function HeroCardsFall() {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const hero = ref.current?.closest<HTMLElement>(".hero5");
    const stack = document.querySelector<HTMLElement>(".wscroll");
    const targets = stack ? Array.from(stack.querySelectorAll<HTMLElement>(".wscroll__card .wscroll__media")) : [];
    if (!hero || !stack || !targets.length) return;
    const cards = Array.from(hero.querySelectorAll<HTMLElement>(".hero5__card"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    type Box = { x: number; y: number; w: number; h: number };
    let bases: Box[] = [];
    let goals: Box[] = [];
    const pageBox = (el: HTMLElement): Box => {
      const r = el.getBoundingClientRect();
      return { x: r.left + window.scrollX, y: r.top + window.scrollY, w: r.width, h: r.height };
    };
    const measure = () => {
      cards.forEach((c) => (c.style.transform = "none"));
      bases = cards.map(pageBox);
      // top hero card (last in DOM) lands on project 1, the next on project 2, and so on: a horizontal row
      goals = cards.map((_, i) => pageBox(targets[Math.min(cards.length - 1 - i, targets.length - 1)]));
      cards.forEach((c) => (c.style.transform = ""));
    };

    let frame = 0;
    // Smoothed progress: the cards ease towards the scroll position instead of jumping with it,
    // so the fall feels slower and softer. Lower SMOOTH = slower follow.
    const SMOOTH = 0.06;
    let shown = 0;
    const update = () => {
      frame = 0;
      const hidden = !cards.length || cards[0].offsetParent === null; // card stack hidden (phones)
      const off = hidden || reduce.matches || document.documentElement.dataset.motion === "off";
      if (off) {
        shown = 0;
        cards.forEach((c) => (c.style.transform = ""));
        hero.classList.remove("is-falling", "is-landed");
        stack.classList.remove("is-waiting");
        return;
      }
      // Progress: 0 at the top of the page, 1 just before the projects section pins,
      // so the cards have landed before the row starts sliding sideways.
      const sectionTop = stack.getBoundingClientRect().top + window.scrollY;
      const end = Math.max(1, sectionTop - window.innerHeight * 0.08);
      const want = Math.min(Math.max(window.scrollY / end, 0), 1);
      shown += (want - shown) * SMOOTH;
      shown = Math.min(Math.max(shown, want - 0.12), want + 0.12); // never lag far behind the scroll
      if (Math.abs(want - shown) < 0.001) shown = want;
      else frame = requestAnimationFrame(update); // keep easing until it catches up
      const p = shown;
      const landed = want >= 1;
      // Live targets: follow the project cards wherever they are now (the row moves sideways)
      goals = cards.map((_, i) => {
        const el = targets[Math.min(cards.length - 1 - i, targets.length - 1)];
        return pageBox(el);
      });
      hero.classList.toggle("is-falling", p > 0 && !landed);
      hero.classList.toggle("is-landed", landed);
      stack.classList.toggle("is-waiting", !landed);
      if (p === 0) {
        cards.forEach((c) => (c.style.transform = ""));
        return;
      }
      cards.forEach((c, i) => {
        const b = bases[i];
        const goal = goals[i];
        if (!b || !goal) return;
        // stagger: the top card (last in DOM) moves first
        const k = cards.length - 1 - i;
        const t = ease(Math.min(Math.max((p - k * 0.14) / (1 - k * 0.14), 0), 1));
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
    const imgs = Array.from(document.querySelectorAll<HTMLImageElement>(".hero5__card img, .wscroll__media img"));
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
