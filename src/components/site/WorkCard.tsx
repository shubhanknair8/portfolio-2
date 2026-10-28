import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import type { Work } from "@/content/cv";
import { getProject } from "@/content/projects";
import { TodoMark } from "../Rich";
import { Kebab, PixelArrow } from "./bits";

/**
 * Project tile. Until a real cover exists it shows a typographic composition
 * (title + index) with a small [TODO] chip, so the page still looks finished.
 * Hover: lift + sheen; if a pencil sketch exists it fades in (signature detail).
 */
export function WorkCard({ item, index }: { item: Work; index: number }) {
  const study = item.slug ? getProject(item.slug) : undefined;
  const cover = study?.cover;
  const sketch = study?.sketch;

  const tile = (
    <>
      <div className="slot card__media work-tile">
        {cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={cover} alt="" loading="lazy" />
        ) : (
          <div className="work-tile__type" aria-hidden>
            <span className="work-tile__index">{String(index + 1).padStart(2, "0")}</span>
            <span className="work-tile__title">{item.title}</span>
            <span className="work-tile__kind">{item.kind}</span>
          </div>
        )}
        {!cover && (
          <span className="work-tile__todo">
            <TodoMark hint="cover image" />
          </span>
        )}
        {sketch && (
          <span className="card__sketch">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={sketch} alt="" />
          </span>
        )}
        <span className="work-tile__sheen" aria-hidden />
        {item.live && <span className="work-tile__badge">Live</span>}
      </div>
      <div className="card__body">
        <div>
          <h3 className="t-name">{item.title}</h3>
          <p className="t-subtitle">{item.kind}</p>
        </div>
        {item.slug || item.href ? <PixelArrow /> : <Kebab />}
      </div>
    </>
  );

  const style = { "--i": index % 2 } as CSSProperties;
  const wrap = (node: ReactNode) => node;

  if (item.slug)
    return wrap(
      <Link href={`/work/${item.slug}`} className="card card--work" style={style} aria-label={`${item.title} — case study`}>
        {tile}
      </Link>
    );
  if (item.href)
    return (
      <a href={item.href} target="_blank" rel="noopener" className="card card--work" style={style} aria-label={`${item.title} — opens ${item.href}`}>
        {tile}
      </a>
    );
  return (
    <div className="card card--work" style={style}>
      {tile}
    </div>
  );
}
