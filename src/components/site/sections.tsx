import type { CSSProperties } from "react";
import { certifications, education, experience, languages, services, tools } from "@/content/cv";
import { Eyebrow } from "./bits";
import { MarqueePause, Reveal, SplitText } from "../motion";

export function SectionHead({ index, eyebrow, title, intro }: { index?: number; eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="section-head">
      <Eyebrow index={index} center>
        {eyebrow}
      </Eyebrow>
      <SplitText text={title} className="t-h2" />
      {intro && (
        <Reveal as="p" className="t-subtitle" delay={150}>
          {intro}
        </Reveal>
      )}
    </div>
  );
}

export function Services() {
  return (
    <ol className="services">
      {services.map((s, i) => (
        <Reveal as="li" key={s.title} className="service" delay={(i % 4) * 60}>
          <span className="service__num">{i + 1}</span>
          <div>
            <h3 className="t-h3 service__title">{s.title}</h3>
            <p className="t-body service__body">{s.body}</p>
          </div>
          <span className="service__mark" aria-hidden>
            +
          </span>
        </Reveal>
      ))}
    </ol>
  );
}

export function Timeline() {
  return (
    <Reveal as="ol" className="timeline">
      {experience.map((r, i) => (
        <li key={r.org + r.period} className="timeline__item" style={{ "--i": i } as CSSProperties}>
          <div className="timeline__when">
            <span className="timeline__dot" aria-hidden />
            <p className="t-span">{r.period}</p>
            <p className="t-span">{[r.orgNote, r.place].filter(Boolean).join(" · ")}</p>
          </div>
          <div className="timeline__what">
            <h3 className="t-h3">
              {r.title} <span className="timeline__at">at</span> {r.org}
            </h3>
            <ul className="timeline__points">
              {r.points.map((p) => (
                <li key={p} className="t-body">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </Reveal>
  );
}

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  // Repeat until one half is wide enough, then duplicate that half for a seamless loop.
  let half = [...items];
  while (half.length < 8) half = half.concat(items);
  const loop = [...half, ...half];
  return (
    <div className={`marquee ${reverse ? "marquee--rev" : ""}`}>
      <ul className="marquee__track" aria-hidden>
        {loop.map((t, i) => (
          <li key={i} className={`marquee__item ${i >= items.length ? "marquee__dup" : ""}`}>
            {t}
            <span className="marquee__sep">✳</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Toolkit() {
  return (
    <div className="toolkit">
      <p className="sr-only">
        Design and research tools: {tools.design.join(", ")}. AI design tools: {tools.ai.join(", ")}.
      </p>
      <MarqueeRow items={tools.design} />
      <MarqueeRow items={tools.ai} reverse />
      <MarqueePause />
    </div>
  );
}

export function Credentials() {
  return (
    <div className="halves creds">
      <Reveal>
        <p className="label">Education</p>
        <ul className="creds__list">
          {education.map((e) => (
            <li key={e.degree} className="creds__item">
              <h3 className="t-h3">{e.degree}</h3>
              <p className="t-body">{e.school}</p>
              <p className="t-span">{e.period}</p>
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={120}>
        <p className="label">Certifications</p>
        <ul className="creds__list">
          {certifications.map((c) => (
            <li key={c.title} className="creds__item">
              <h3 className="t-h3">{c.title}</h3>
              {c.by && <p className="t-body">{c.by}</p>}
            </li>
          ))}
        </ul>
        <p className="label" style={{ marginTop: 40 }}>
          Languages
        </p>
        <ul className="langs">
          {languages.map((l) => (
            <li key={l.name} className="lang">
              <span className="t-ink">{l.name}</span> <span className="t-span">{l.level}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
