import type { ReactNode } from "react";

/** Pixel chevron used on CTA rows and nav links. */
export function PixelArrow({ size = 20 }: { size?: number }) {
  const s = size / 5;
  const cells = [
    [0, 0],
    [1, 1],
    [2, 2],
    [1, 3],
    [0, 4],
  ];
  return (
    <svg className="pixel" width={size * 0.6} height={size} viewBox={`0 0 ${s * 3} ${size}`} aria-hidden fill="currentColor">
      {cells.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x * s} y={y * s} width={s * 0.8} height={s * 0.8} />
      ))}
    </svg>
  );
}

/** 2×5 dot grid — menu trigger. */
export function DotsIcon() {
  return (
    <svg width="14" height="38" viewBox="0 0 14 38" aria-hidden fill="currentColor">
      {[0, 1, 2, 3, 4].flatMap((r) =>
        [0, 1].map((c) => <rect key={`${r}-${c}`} x={c * 9} y={r * 8.5} width="4.5" height="4.5" />)
      )}
    </svg>
  );
}

/** Vertical dotted kebab on project cards. */
export function Kebab() {
  return (
    <svg className="card__kebab" width="4" height="36" viewBox="0 0 4 36" aria-hidden fill="currentColor">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x="1" y={i * 6.5} width="2" height="2" />
      ))}
    </svg>
  );
}

export function GridLines() {
  return (
    <div className="gridlines" aria-hidden>
      <div className="gridlines__inner">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export function Band({
  tone = "plain",
  children,
  className = "",
  as: Tag = "section",
  ...rest
}: {
  tone?: "hero" | "plain" | "dark";
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "footer" | "header";
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <Tag className={`band band--${tone} ${className}`} {...rest}>
      <GridLines />
      <div className="wrap">{children}</div>
    </Tag>
  );
}

export function Eyebrow({ index, children, center }: { index?: number; children: ReactNode; center?: boolean }) {
  return (
    <p className={`eyebrow ${center ? "eyebrow--center" : ""}`}>
      <span className="eyebrow__slashes" aria-hidden>
        //
      </span>
      {index !== undefined && <span>{String(index).padStart(2, "0")}</span>}
      <span>{children}</span>
    </p>
  );
}
