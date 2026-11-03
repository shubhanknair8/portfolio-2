import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { work, type Work } from "@/content/cv";
import { getProject, liveProject } from "@/content/projects";
import { TodoMark } from "../Rich";
import { ArrowUpRight } from "../site/icons";

/** Ribbon colours: dark text on a soft tint, every pair passes WCAG AA. */
const palette = [
  { tint: "#DCE1F7", ink: "#2C3F8F" },
  { tint: "#F6E3B8", ink: "#7A4A0C" },
  { tint: "#D6EEDC", ink: "#22603A" },
  { tint: "#F3DADA", ink: "#8E2F2F" },
  { tint: "#E4DCF5", ink: "#4B3FA0" },
  { tint: "#F6E1D3", ink: "#8A3A14" },
  { tint: "#D9ECEE", ink: "#1F5B63" },
];

function Ribbon({ words, reverse, tilt }: { words: string[]; reverse?: boolean; tilt: number }) {
  const row = Array.from({ length: 4 }, () => words).flat();
  return (
    <div className={`ribbon ${reverse ? "ribbon--rev" : ""}`} style={{ "--tilt": `${tilt}deg` } as CSSProperties}>
      <div className="ribbon__track">
        {[0, 1].map((half) => (
          <span key={half} className="ribbon__half">
            {row.map((w, i) => (
              <span key={i} className="ribbon__item">
                {w}
                <svg className="ribbon__mark" width="12" height="20" viewBox="0 0 12 20">
                  <path d="M6 0l6 5-6 5-6-5zM6 10l6 5-6 5-6-5z" fill="currentColor" />
                </svg>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

function Card({ item, index }: { item: Work; index: number }) {
  const study = item.slug ? getProject(item.slug) : undefined;
  // Home cards show the UI-screen cover; case studies use the project cover.
  const cover = item.cover ?? study?.cover;
  const live = item.slug ? liveProject(item.slug) : undefined;
  const href = live ? `/work/${item.slug}` : item.href;
  const external = !live && !!item.href;

  const media = (
    <div className="slot stack__media">
      {cover ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={cover} alt="" loading="lazy" />
      ) : (
        <>
          <span className="stack__type" aria-hidden>
            <span className="stack__index">{String(index + 1).padStart(2, "0")}</span>
            <span className="stack__word">{item.title}</span>
          </span>
          <span className="stack__todo">
            <TodoMark hint="cover image" />
          </span>
        </>
      )}
    </div>
  );

  const body: ReactNode = (
    <div className="stack__body">
      <h3 className="stack__title">{item.title}</h3>
      <p className="stack__kind">{item.kind}</p>
      <p className="t-body stack__desc">{item.points[0]}</p>
      {item.tags && (
        <ul className="stack__tags" aria-label="Tags">
          {item.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      )}
      <span className={`stack__go ${href ? "" : "stack__go--off"}`} aria-hidden>
        {href ? <ArrowUpRight size={16} /> : <span className="stack__soon">Case study coming soon</span>}
      </span>
    </div>
  );

  const inner = (
    <>
      {media}
      {body}
    </>
  );

  if (!href) return <div className="stack__card">{inner}</div>;
  if (external)
    return (
      <a href={href} target="_blank" rel="noopener" className="stack__card" aria-label={`${item.title}, opens ${href}`}>
        {inner}
      </a>
    );
  return (
    <Link href={href} className="stack__card" aria-label={`${item.title}, case study`}>
      {inner}
    </Link>
  );
}

/**
 * Projects as a scroll stack: each card pins near the top and the next one slides over it,
 * leaving a thin edge of the previous card visible. Two tilted ribbons with the project's
 * name and tags scroll behind each card.
 */
export function WorkStack() {
  return (
    <div className="stack" style={{ "--n": Math.min(3, work.filter((w) => w.featured).length) } as CSSProperties}>
      {work.filter((w) => w.featured).slice(0, 3).map((w, i) => {
        const c = palette[i % palette.length];
        const words = [w.title, ...(w.tags ?? [w.kind])];
        return (
          <article
            key={w.title}
            className="stack__item"
            style={{ "--i": i, "--rib-tint": c.tint, "--rib-ink": c.ink } as CSSProperties}
            aria-label={w.title}
          >
            <div className="stack__ribbons" aria-hidden>
              <Ribbon words={words} tilt={-7} />
              <Ribbon words={words} tilt={6} reverse />
            </div>
            <Card item={w} index={i} />
          </article>
        );
      })}
    </div>
  );
}
