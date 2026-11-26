"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight } from "../site/icons";

export type WorkItem = {
  title: string;
  cover?: string;
  meta: string;
  status?: string;
  desc: string;
  href?: string;
  external?: boolean;
  areas: string[];
};

/**
 * Horizontal projects section. On laptops the section is tall and its inner frame sticks to the
 * screen; scrolling down moves the row of cards to the left. On phones (and with motion off) the
 * cards simply stack vertically. Filter chips show projects by area.
 */
export function WorkScrollClient({ items, intro }: { items: WorkItem[]; intro: string }) {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);

  const areas = useMemo(() => {
    const counts = new Map<string, number>();
    items.forEach((it) => it.areas.forEach((a) => counts.set(a, (counts.get(a) ?? 0) + 1)));
    return [{ name: "All", n: items.length }, ...Array.from(counts, ([name, n]) => ({ name, n }))];
  }, [items]);
  const shown = filter === "All" ? items : items.filter((it) => it.areas.includes(filter));

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    const wide = window.matchMedia("(min-width: 810px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let distance = 0;
    let shownX = 0;
    let frame = 0;

    const pinned = () => wide.matches && !reduce.matches && document.documentElement.dataset.motion !== "off";

    const measure = () => {
      if (!pinned()) {
        section.style.height = "";
        track.style.transform = "";
        return;
      }
      distance = Math.max(0, track.scrollWidth - track.clientWidth);
      section.style.height = `${window.innerHeight + distance}px`;
    };

    const update = () => {
      frame = 0;
      if (!pinned()) return;
      const top = section.getBoundingClientRect().top;
      const want = Math.min(Math.max(-top, 0), distance);
      shownX += (want - shownX) * 0.14; // light smoothing
      if (Math.abs(want - shownX) < 0.5) shownX = want;
      else frame = requestAnimationFrame(update);
      track.style.transform = `translate3d(${-shownX}px, 0, 0)`;
      const p = distance ? shownX / distance : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${Math.max(p, 0.02)})`;
      // the card nearest the middle of the screen is the "current" one for the counter
      const cards = Array.from(track.querySelectorAll<HTMLElement>(".wscroll__card"));
      const mid = window.innerWidth * 0.55;
      let best = 0;
      let bestD = Infinity;
      cards.forEach((c, i) => {
        const r = c.getBoundingClientRect();
        const d = Math.abs(r.left + r.width / 2 - mid);
        if (d < bestD) {
          bestD = d;
          best = i;
        }
      });
      setActive(best);
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
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    const ro = new ResizeObserver(onResize);
    ro.observe(track);
    const mo = new MutationObserver(onResize);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-motion"] });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      ro.disconnect();
      mo.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [shown.length]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section ref={sectionRef} className="wscroll" id="work" aria-labelledby="work-h">
      <div className="wscroll__pin">
        <p className="wscroll__count" aria-hidden>
          <span className="wscroll__rule" />
          Selected work
          <span>
            {pad(Math.min(active + 1, shown.length))} / {pad(shown.length)}
          </span>
        </p>

        <div ref={trackRef} className="wscroll__track">
          <div className="wscroll__intro">
            <h2 id="work-h" className="wscroll__title">
              <span>My</span> <span>projects</span>
            </h2>
            <p className="wscroll__lead">{intro}</p>
            <div className="wscroll__filters" role="group" aria-label="Show projects by area">
              {areas.map((a) => (
                <button key={a.name} type="button" aria-pressed={filter === a.name} onClick={() => setFilter(a.name)}>
                  {a.name}
                  <span>{a.n}</span>
                </button>
              ))}
            </div>
            <p className="wscroll__hint" aria-hidden>
              Keep scrolling <span>→</span>
            </p>
          </div>

          {shown.map((it, i) => {
            const head = (
              <>
                <span className="wscroll__n">{pad(i + 1)}</span>
                <span className="wscroll__name">{it.title}</span>
                {it.status && <span className="wscroll__status">{it.status}</span>}
                <span className="wscroll__meta">{it.meta}</span>
              </>
            );
            const media = (
              <span className="wscroll__media">
                {it.cover ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={it.cover} alt="" loading={i < 2 ? "eager" : "lazy"} />
                ) : (
                  <span className="wscroll__placeholder">{it.title}</span>
                )}
              </span>
            );
            const linkProps = it.external ? { target: "_blank", rel: "noopener" } : {};
            return (
              <article key={it.title} className="wscroll__card">
                {it.href ? (
                  <>
                    <Link href={it.href} className="wscroll__head" {...linkProps}>
                      {head}
                    </Link>
                    <Link href={it.href} className="wscroll__mediaLink" tabIndex={-1} aria-hidden {...linkProps}>
                      {media}
                    </Link>
                  </>
                ) : (
                  <>
                    <div className="wscroll__head">{head}</div>
                    {media}
                  </>
                )}
                <div className="wscroll__foot">
                  <p className="wscroll__desc">{it.desc}</p>
                  {it.href && (
                    <Link href={it.href} className="wscroll__cta" {...linkProps}>
                      {it.external ? "Visit site" : "View case study"} <ArrowUpRight size={12} />
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
          <div className="wscroll__end" aria-hidden />
        </div>

        <span className="wscroll__bar" aria-hidden>
          <span ref={barRef} />
        </span>
      </div>
    </section>
  );
}
