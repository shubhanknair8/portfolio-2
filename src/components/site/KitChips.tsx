"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;
const GAP = 8;

/**
 * "Also in my kit" chips kept to a single row: as many chips as fit, then "+N more".
 * Clicking "+N more" shows every chip (wrapping); "Show less" collapses back to one row.
 */
export function KitChips({ items }: { items: string[] }) {
  const rowRef = useRef<HTMLUListElement>(null);
  const measureRef = useRef<HTMLUListElement>(null);
  const [fit, setFit] = useState(Math.min(items.length, 5));
  const [open, setOpen] = useState(false);

  useIsoLayoutEffect(() => {
    const row = rowRef.current;
    const measure = measureRef.current;
    if (!row || !measure) return;
    const calc = () => {
      const avail = row.clientWidth;
      const chips = Array.from(measure.children) as HTMLElement[];
      const widths = chips.slice(0, items.length).map((c) => c.getBoundingClientRect().width);
      const moreW = chips[items.length].getBoundingClientRect().width;
      const all = widths.reduce((a, w) => a + w, 0) + GAP * (widths.length - 1);
      if (all <= avail) return setFit(items.length);
      let used = moreW;
      let n = 0;
      while (n < widths.length && used + GAP + widths[n] <= avail) {
        used += GAP + widths[n];
        n++;
      }
      setFit(n);
    };
    calc();
    const ro = new ResizeObserver(calc);
    ro.observe(row);
    return () => ro.disconnect();
  }, [items]);

  const hidden = items.length - fit;
  const shown = open ? items : items.slice(0, fit);

  return (
    <>
      <ul ref={rowRef} className={`kit__list kit__list--row ${open ? "is-open" : ""}`}>
        {shown.map((t) => (
          <li key={t} className="kit__chip">
            {t}
          </li>
        ))}
        {hidden > 0 && (
          <li>
            <button
              type="button"
              className="kit__chip kit__chip--more"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Show fewer tools" : `Show ${hidden} more tools`}
            >
              {open ? "Show less" : `+${hidden} more`}
            </button>
          </li>
        )}
      </ul>
      {/* Invisible copy used only to measure chip widths */}
      <ul ref={measureRef} className="kit__list kit__measure" aria-hidden>
        {items.map((t) => (
          <li key={t} className="kit__chip">
            {t}
          </li>
        ))}
        <li className="kit__chip kit__chip--more">+{items.length} more</li>
      </ul>
    </>
  );
}
