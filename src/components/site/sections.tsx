import type { CSSProperties } from "react";
import { certifications, education, experience, services, tools } from "@/content/cv";
import { Eyebrow, PixelArrow } from "./bits";
import { Reveal, SplitText } from "../motion";
import { ServiceIcon, ToolMark } from "./icons";
import { DoodleWireframe } from "./DoodleWireframe";
import { KitChips } from "./KitChips";

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

/** "What I do": left-aligned heading with a pen drawing a doodle wireframe, then a ruled grid of service cards. */
export function Services({ index, title = "Services I offer to bring ideas to life" }: { index?: number; title?: string }) {
  return (
    <>
      <div className="services-head">
        <div>
          <Eyebrow index={index}>What I do</Eyebrow>
          <SplitText text={title} className="t-h2 services-head__title" />
        </div>
        <Reveal className="dd-wrap">
          <DoodleWireframe />
        </Reveal>
      </div>
      <ul className="svc-grid">
        {services.map((s, i) => (
          <Reveal as="li" key={s.title} className="svc" delay={(i % 4) * 60}>
            <span className="svc__icon">
              <ServiceIcon title={s.title} />
            </span>
            <h3 className="t-h3 svc__title">{s.title}</h3>
            <p className="t-body">{s.body}</p>
          </Reveal>
        ))}
      </ul>
    </>
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

/** Tool cards: every description is taken from the CV. */
const toolCards = [
  {
    mark: "figma" as const,
    tint: "#E4E0F7",
    ink: "#4B3FA0",
    name: "Figma & FigJam",
    body: "Flows, wireframes and annotated prototypes, shared component libraries and token-based design systems.",
  },
  {
    mark: "illustrator" as const,
    tint: "#F6E1D3",
    ink: "#A8481A",
    name: "Adobe Illustrator",
    body: "Brand-aligned visual concepts and illustration for product and marketing work.",
  },
  {
    mark: "ai" as const,
    tint: "#DCEFE2",
    ink: "#2E7346",
    name: "AI design tools",
    body: "Google Stitch, Uizard and Page Flows to speed up wireframes and flow research.",
  },
];
const tiles = [
  { mark: "research" as const, tint: "#F6E1D3", ink: "#A8481A" },
  { mark: "maze" as const, tint: "#DCE6F5", ink: "#2C5BA8" },
  { mark: "ai" as const, tint: "#DCEFE2", ink: "#2E7346" },
  { mark: "figma" as const, tint: "#E4E0F7", ink: "#4B3FA0" },
  { mark: "illustrator" as const, tint: "#F3DADA", ink: "#9B3434" },
];

/** Dark "Expertise" band: heading + fading row of tool tiles, then three tool cards and the rest of the kit. */
export function Expertise({ index }: { index?: number }) {
  // Everything except the three tools with their own cards; AI tools first.
  const rest = [...tools.ai, ...tools.design].filter((t) => !/^(Figma|FigJam|Adobe Illustrator)$/.test(t));
  return (
    <section className="band band--dark expertise" aria-labelledby="expertise-h">
      <div className="wrap">
        <div className="expertise__head">
          <div>
            <Eyebrow index={index}>Expertise</Eyebrow>
            <h2 id="expertise-h" className="t-h2 expertise__title">
              The tools I design with
            </h2>
          </div>
          <div className="tiles" aria-hidden>
            <ul className="tiles__track">
              {[...tiles, ...tiles, ...tiles].map((t, i) => (
                <li key={i} className="tile" style={{ background: t.tint, color: t.ink }}>
                  <ToolMark kind={t.mark} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="tool-cards">
          {toolCards.map((t, i) => (
            <Reveal as="li" key={t.name} className="tool-card" delay={i * 100} style={{ "--tint": t.tint, "--ink2": t.ink } as CSSProperties}>
              <span className="tool-card__icon" style={{ background: t.tint, color: t.ink }}>
                <ToolMark kind={t.mark} />
              </span>
              <h3 className="t-h3">{t.name}</h3>
              <p className="t-body">{t.body}</p>
            </Reveal>
          ))}
        </ul>

        <div className="kit">
          <p className="label">Also in my kit</p>
          <KitChips items={rest} />
        </div>
      </div>
    </section>
  );
}

/** Certifications visible before the dropdown. */
const SHOWN = 4;

function Cert({ c }: { c: { title: string; by?: string } }) {
  return (
    <li className="creds__item">
      <h3 className="t-h3">{c.title}</h3>
      {c.by && <p className="t-body">{c.by}</p>}
    </li>
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
          {certifications.slice(0, SHOWN).map((c) => (
            <Cert key={c.title} c={c} />
          ))}
        </ul>
        {certifications.length > SHOWN && (
          <details className="creds__more">
            <summary className="creds__toggle">
              <span className="creds__toggle-open">View all certifications ({certifications.length - SHOWN} more)</span>
              <span className="creds__toggle-close">Show fewer</span>
              <span className="creds__chev" aria-hidden>
                <PixelArrow size={16} />
              </span>
            </summary>
            <ul className="creds__list creds__list--more">
              {certifications.slice(SHOWN).map((c) => (
                <Cert key={c.title} c={c} />
              ))}
            </ul>
          </details>
        )}
      </Reveal>
    </div>
  );
}
