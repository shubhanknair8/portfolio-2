"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import VaporizeTextCycle, { Tag } from "@/components/ui/vapour-text-effect";
import { RotatingWord } from "../motion";

type Word = { word: string; color: string };

/** "#a8481a" or "rgb(…)" -> "rgb(r, g, b)" (the vapour effect only reads rgb). */
function toRgb(value: string, fallback: string) {
  const v = value.trim();
  const hex = v.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
  if (hex) {
    const h = hex[1].length === 3 ? hex[1].split("").map((c) => c + c).join("") : hex[1];
    return `rgb(${parseInt(h.slice(0, 2), 16)}, ${parseInt(h.slice(2, 4), 16)}, ${parseInt(h.slice(4, 6), 16)})`;
  }
  return /^rgb/.test(v) ? v : fallback;
}

/**
 * The changing word in the hero ("Convert / Work / Scale") drawn with the vapour effect:
 * each word dissolves into particles from left to right, then the next word fades in, in its own colour.
 * It copies the headline's font and size, follows the light/dark theme colours, and falls back to the
 * plain typing word for reduced motion or when motion is paused.
 */
export function HeroVaporWord({ words }: { words: Word[] }) {
  const boxRef = useRef<HTMLSpanElement>(null);
  const [ready, setReady] = useState(false);
  const [still, setStill] = useState(false);
  const [font, setFont] = useState({ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontSize: "64px", fontWeight: 700 });
  const [colors, setColors] = useState<string[]>(words.map(() => "rgb(28, 27, 25)"));

  useEffect(() => {
    const box = boxRef.current;
    const heading = box?.closest("h1") ?? box?.parentElement;
    if (!box || !heading) return;
    const root = document.documentElement;

    const read = () => {
      const cs = getComputedStyle(heading);
      setFont({
        fontFamily: cs.fontFamily,
        fontSize: `${Math.round(parseFloat(cs.fontSize))}px`,
        fontWeight: Number(cs.fontWeight) || 700,
      });
      const rs = getComputedStyle(root);
      setColors(
        words.map((w, i) => {
          const m = w.color.match(/var\((--[\w-]+)\)/);
          const raw = m ? rs.getPropertyValue(m[1]) : w.color;
          return toRgb(raw, ["rgb(168, 72, 26)", "rgb(44, 91, 168)", "rgb(46, 115, 70)"][i % 3]);
        })
      );
      setStill(window.matchMedia("(prefers-reduced-motion: reduce)").matches || root.dataset.motion === "off");
      setReady(true);
    };

    read();
    // Re-read when the theme or motion setting changes, and when the headline resizes
    const mo = new MutationObserver(read);
    mo.observe(root, { attributes: true, attributeFilter: ["data-theme", "data-motion"] });
    const ro = new ResizeObserver(read);
    ro.observe(heading);
    return () => {
      mo.disconnect();
      ro.disconnect();
    };
  }, [words]);

  const texts = useMemo(() => words.map((w) => w.word), [words]);
  const fontProp = useMemo(() => font, [font.fontFamily, font.fontSize, font.fontWeight]); // eslint-disable-line react-hooks/exhaustive-deps
  const colorsKey = colors.join("|");
  const colorsProp = useMemo(() => colors, [colorsKey]); // eslint-disable-line react-hooks/exhaustive-deps
  const animation = useMemo(() => ({ vaporizeDuration: 1.1, fadeInDuration: 0.6, waitDuration: 2 }), []);

  return (
    <span ref={boxRef} className="vapor-word">
      {ready && !still ? (
        <VaporizeTextCycle
          texts={texts}
          font={fontProp}
          color={colorsProp[0]}
          colors={colorsProp}
          spread={5}
          density={6}
          animation={animation}
          direction="left-to-right"
          alignment="left"
          tag={Tag.P}
        />
      ) : (
        <RotatingWord words={words} />
      )}
    </span>
  );
}
