/** Original line icons and decorative shapes. All decorative: aria-hidden. */

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;

/** One icon per service, matched by title in cv.ts `services`. */
export function ServiceIcon({ title }: { title: string }) {
  const paths: Record<string, React.ReactNode> = {
    "User research": (
      <>
        <circle cx="10.5" cy="10.5" r="6" />
        <path d="M15 15l5 5" />
      </>
    ),
    "Usability testing": <path d="M5 4l13 6.5-5.5 1.8L10.7 18z" />,
    "Information architecture": (
      <>
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <rect x="3" y="17" width="6" height="4" rx="1" />
        <rect x="15" y="17" width="6" height="4" rx="1" />
        <path d="M12 7v5M6 17v-5h12v5" />
      </>
    ),
    "Wireframing & prototyping": (
      <>
        <circle cx="6" cy="5" r="2" />
        <circle cx="6" cy="19" r="2" />
        <circle cx="18" cy="9" r="2" />
        <path d="M6 7v10M18 11c0 4-6 3-11.2 6.6" />
      </>
    ),
    "Design systems": (
      <>
        <rect x="4" y="4" width="7" height="7" rx="1" />
        <rect x="13" y="4" width="7" height="7" rx="3.5" />
        <rect x="4" y="13" width="7" height="7" rx="3.5" />
        <rect x="13" y="13" width="7" height="7" rx="1" />
      </>
    ),
    "Journey mapping": (
      <>
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="6" r="2" />
        <path d="M7 18h6a3 3 0 000-6h-2a3 3 0 010-6h6" />
      </>
    ),
    "AI-assisted design": (
      <>
        <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
        <path d="M18.5 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z" />
      </>
    ),
    "Dev handoff": <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 5l-3 14" />,
  };
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden {...stroke}>
      {paths[title] ?? <circle cx="12" cy="12" r="7" />}
    </svg>
  );
}

/** Abstract app-tile marks for the tools section (original shapes, not product logos). */
export function ToolMark({ kind }: { kind: "figma" | "illustrator" | "ai" | "maze" | "research" }) {
  const c = "currentColor";
  const marks = {
    figma: (
      <>
        <circle cx="16" cy="12" r="5" fill="none" stroke={c} strokeWidth="3" />
        <circle cx="16" cy="22" r="5" fill="none" stroke={c} strokeWidth="3" />
      </>
    ),
    illustrator: <path d="M8 24L16 8l8 16M11 18h10" fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" />,
    ai: <path d="M16 6l2.6 7.4L26 16l-7.4 2.6L16 26l-2.6-7.4L6 16l7.4-2.6z" fill={c} />,
    maze: (
      <>
        <path d="M16 6a10 10 0 0110 10H16z" fill={c} />
        <path d="M16 16v10a10 10 0 01-10-10z" fill={c} opacity=".55" />
      </>
    ),
    research: (
      <>
        <circle cx="16" cy="16" r="9" fill="none" stroke={c} strokeWidth="3" />
        <circle cx="16" cy="16" r="3.5" fill={c} />
      </>
    ),
  };
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden>
      {marks[kind]}
    </svg>
  );
}

/** Laurel wreath half, mirrored for the right side. */
export function Laurel({ flip = false }: { flip?: boolean }) {
  const leaves = [0, 1, 2, 3, 4, 5];
  return (
    <svg width="44" height="96" viewBox="0 0 44 96" aria-hidden style={flip ? { transform: "scaleX(-1)" } : undefined}>
      <path d="M34 90C12 78 6 50 16 8" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      {leaves.map((i) => {
        const y = 80 - i * 13;
        const x = 30 - Math.sin((i / 5) * 1.4) * 16;
        return (
          <g key={i} transform={`translate(${x} ${y}) rotate(${-40 + i * 6})`}>
            <ellipse cx="-8" cy="0" rx="8" ry="3.6" fill="currentColor" />
            <ellipse cx="6" cy="-4" rx="7" ry="3.2" fill="currentColor" transform="rotate(70)" />
          </g>
        );
      })}
    </svg>
  );
}

/** Concentric loop lines for the footer corner. */
export function Loops() {
  return (
    <svg className="footer2__loops" viewBox="0 0 420 420" aria-hidden>
      {Array.from({ length: 11 }).map((_, i) => (
        <g key={i} transform={`rotate(${-32 + i * 1.5} 250 230)`}>
          <ellipse
            cx={250 - i * 6}
            cy={230 + i * 4}
            rx={150}
            ry={92}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            style={{ "--i": i } as React.CSSProperties}
          />
        </g>
      ))}
    </svg>
  );
}

/** Dotted pixel chevron, used for every link arrow on the site. */
export function ArrowUpRight({ size = 14 }: { size?: number }) {
  const h = Math.max(10, Math.round(size * 1.15));
  const s = h / 5;
  const cells = [
    [0, 0],
    [1, 1],
    [2, 2],
    [1, 3],
    [0, 4],
  ];
  return (
    <svg className="pixel" width={s * 3} height={h} viewBox={`0 0 ${s * 3} ${h}`} aria-hidden fill="currentColor">
      {cells.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x * s} y={y * s} width={s * 0.8} height={s * 0.8} />
      ))}
    </svg>
  );
}

/** Hand-drawn scribble for the "What I do" heading: a looping pencil line and an orange underline. */
export function Scribble() {
  return (
    <svg className="scribble" viewBox="0 0 300 180" aria-hidden>
      <path
        className="scribble__loop"
        pathLength={1}
        d="M3.2 94.5C4.9 97.5 7.8 108.8 13.1 112.5C18.4 116.2 27.6 118.0 35.2 116.6C42.7 115.2 52.8 109.8 58.6 104.2C64.5 98.6 69.2 89.3 70.1 83.0C71.0 76.7 67.7 69.6 64.0 66.3C60.3 63.1 52.5 63.0 47.8 63.4C43.1 63.8 37.5 65.7 36.1 68.7C34.7 71.8 35.9 77.2 39.4 81.5C42.8 85.8 50.3 92.0 56.7 94.3C63.2 96.6 72.1 97.4 78.0 95.3C84.0 93.2 89.6 87.2 92.7 81.7C95.7 76.2 96.5 68.6 96.4 62.3C96.2 56.1 93.7 47.4 91.8 44.3C90.0 41.1 86.7 40.9 85.1 43.4C83.5 45.8 81.8 52.7 82.1 59.0C82.5 65.3 84.0 76.0 87.2 81.4C90.4 86.7 95.8 90.4 101.4 91.1C106.9 91.7 114.8 88.9 120.6 85.4C126.3 81.9 132.9 75.1 136.0 70.0C139.0 64.8 140.1 58.2 138.8 54.4C137.5 50.5 132.3 47.1 127.9 46.7C123.6 46.4 116.2 49.1 112.7 52.1C109.3 55.1 106.2 60.1 107.3 64.7C108.4 69.4 113.2 76.2 119.3 80.1C125.5 84.0 136.0 87.6 144.0 88.1C152.0 88.5 161.7 86.5 167.2 82.7C172.7 78.9 176.2 71.4 177.0 65.4C177.8 59.3 174.7 50.0 172.0 46.2C169.3 42.4 163.8 41.1 160.8 42.5C157.8 44.0 154.6 48.7 154.0 54.9C153.5 61.1 154.8 72.8 157.4 79.7C160.0 86.7 165.0 93.5 169.8 96.6C174.5 99.8 180.9 100.2 186.0 98.7C191.0 97.3 196.6 92.3 200.1 88.1C203.6 84.0 206.3 77.6 206.9 73.8C207.6 70.0 206.2 66.4 204.2 65.5C202.1 64.6 197.4 65.8 194.5 68.3C191.5 70.7 187.2 75.2 186.5 80.3C185.7 85.4 186.3 93.3 189.9 98.7C193.5 104.1 200.9 109.9 208.2 112.8C215.5 115.7 226.3 118.0 233.6 116.2C240.9 114.3 248.7 107.6 252.0 101.7C255.3 95.9 255.3 86.4 253.3 81.2C251.4 75.9 244.8 70.3 240.1 70.2C235.5 70.0 228.3 75.2 225.3 80.2C222.2 85.3 220.5 93.5 221.8 100.4C223.2 107.4 228.1 116.6 233.4 121.8C238.6 127.0 247.0 131.1 253.2 131.6C259.5 132.1 266.5 127.7 270.8 124.7C275.2 121.7 278.0 115.5 279.5 113.6"
      />
      <path
        className="scribble__line"
        pathLength={1}
        d="M40.0 151.0C41.5 152.9 46.0 162.2 49.0 162.6C52.0 163.0 55.0 153.1 58.0 153.4C61.0 153.6 64.0 164.5 67.0 164.1C70.0 163.7 73.0 150.9 76.0 150.9C79.0 150.9 82.0 164.2 85.0 164.1C88.0 164.1 91.0 150.6 94.0 150.6C97.0 150.6 100.0 163.6 103.0 164.1C106.0 164.6 109.0 153.3 112.0 153.4C115.0 153.6 118.0 165.2 121.0 165.1C124.0 164.9 127.0 152.9 130.0 152.6C133.0 152.3 136.0 163.4 139.0 163.3C142.0 163.1 145.0 151.6 148.0 151.6C151.0 151.6 154.0 162.8 157.0 163.0C160.0 163.2 163.0 152.6 166.0 152.8C169.0 153.0 172.0 164.1 175.0 164.1C178.0 164.1 181.0 152.9 184.0 152.8C187.0 152.7 190.0 163.8 193.0 163.5C196.0 163.2 199.0 150.9 202.0 151.2C205.0 151.4 208.0 164.6 211.0 164.9C214.0 165.3 217.0 153.4 220.0 153.5C223.0 153.5 226.0 165.1 229.0 165.1C232.0 165.0 235.0 152.9 238.0 152.9C241.0 152.9 245.5 162.9 247.0 165.0"
      />
    </svg>
  );
}

/** Simple social glyphs for the footer, drawn in the current text colour with no background. */
export function SocialIcon({ kind }: { kind: "linkedin" | "instagram" | "x" | "medium" | "behance" | "dribbble" }) {
  const text = (t: string, size = 20) => (
    <text x="14" y="14" dy="0.36em" textAnchor="middle" fontSize={size} fontWeight="700" fill="currentColor" style={{ fontFamily: "var(--body)" }}>
      {t}
    </text>
  );
  const glyph = {
    linkedin: text("in", 21),
    x: text("X", 21),
    medium: text("M", 20),
    behance: text("Bē", 17),
    instagram: (
      <g fill="none" stroke="currentColor" strokeWidth="2.2">
        <rect x="4" y="4" width="20" height="20" rx="6" />
        <circle cx="14" cy="14" r="4.6" />
        <circle cx="19.6" cy="8.4" r="0.8" fill="currentColor" />
      </g>
    ),
    dribbble: (
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="14" cy="14" r="10" />
        <path d="M7.6 6.4c4.8 5 8.4 10.8 10 17.2M4.2 12.6c6 .4 11.8-.9 16.9-4.7M6.2 20.8c3.8-4.4 9.6-6.2 17.4-4.9" />
      </g>
    ),
  }[kind];
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
      {glyph}
    </svg>
  );
}
