import type { CSSProperties } from "react";

const COLS = 24;
const ROWS = 5;

/** Small seeded random so the pixel edge is the same on the server and in the browser. */
function rand(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

/**
 * Page-load intro, modelled on the reference site: a full-screen panel in the name colour
 * covers the hero, then slides up and away. Its bottom edge breaks into pixel blocks that
 * thin out row by row, so the panel dissolves as it leaves. Pure CSS, so it always finishes,
 * even without JavaScript. Skipped for visitors who prefer reduced motion or pause motion.
 */
export function IntroCurtain({ color }: { color: string }) {
  const cells: { x: number; y: number; o: number }[] = [];
  for (let y = 0; y < ROWS; y++)
    for (let x = 0; x < COLS; x++) {
      // Row 0 sits against the panel and is mostly solid; each row below is sparser.
      const keep = 1 - (y + 0.5) / ROWS;
      const r = rand(x * 31 + y * 7 + 1);
      if (r < keep * 1.15) cells.push({ x, y, o: Math.min(1, 0.35 + keep * 0.8 * (0.6 + r * 0.6)) });
    }
  return (
    <div className="intro-curtain" aria-hidden style={{ "--curtain": color } as CSSProperties}>
      <div className="intro-curtain__panel" />
      <div className="intro-curtain__pixels" style={{ "--cols": COLS, "--rows": ROWS } as CSSProperties}>
        {cells.map((c) => (
          <span key={`${c.x}-${c.y}`} style={{ gridColumn: c.x + 1, gridRow: c.y + 1, opacity: c.o }} />
        ))}
      </div>
    </div>
  );
}
