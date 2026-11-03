import { experience, languages, work } from "@/content/cv";
import { site } from "@/content/site";
import { Rich, TodoMark } from "../Rich";
import { Reveal, TickUp } from "../motion";
import { Laurel } from "../site/icons";

const levels: Record<string, number> = { Native: 100, Fluent: 100, Professional: 75, Conversational: 55, Basic: 30 };
const process = ["Discover", "Define", "Design", "Validate", "Deliver"];

/** Small original glyphs for the craft carousel. */
const craft: { label: string; svg: React.ReactNode }[] = [
  {
    label: "Alignment",
    svg: (
      <>
        <rect x="6" y="2" width="2" height="24" fill="#2C5BA8" opacity=".4" />
        <rect x="10" y="4" width="22" height="7" fill="#2C5BA8" opacity=".5" />
        <rect x="10" y="15" width="14" height="7" fill="#2C5BA8" />
      </>
    ),
  },
  {
    label: "Colour",
    svg: (
      <>
        <circle cx="15" cy="10" r="8" fill="#2E7346" opacity=".75" />
        <circle cx="25" cy="10" r="8" fill="#2C5BA8" opacity=".6" />
        <circle cx="20" cy="18" r="8" fill="#A8481A" opacity=".7" />
      </>
    ),
  },
  {
    label: "Consistency",
    svg: (
      <>
        {[4, 12, 20].map((y) => (
          <rect key={y} x="6" y={y} width="28" height="3" rx="1.5" fill="#2E7346" opacity=".6" />
        ))}
      </>
    ),
  },
  {
    label: "Proximity",
    svg: (
      <>
        {[0, 1, 2].flatMap((r) => [0, 1].map((c) => <rect key={`${r}${c}`} x={12 + c * 9} y={3 + r * 8} width="6" height="6" rx="1" fill="#B7862F" />))}
      </>
    ),
  },
  {
    label: "Hierarchy",
    svg: (
      <>
        <rect x="6" y="3" width="28" height="7" rx="1.5" fill="#6A5BC2" opacity=".8" />
        <rect x="6" y="13" width="20" height="5" rx="1.5" fill="#6A5BC2" opacity=".5" />
        <rect x="6" y="21" width="14" height="4" rx="1.5" fill="#6A5BC2" opacity=".3" />
      </>
    ),
  },
  {
    label: "Visual cues",
    svg: (
      <>
        <circle cx="12" cy="8" r="4" fill="#B5458A" />
        <path d="M18 14l12 5-5 1.6-1.6 5z" fill="#B5458A" opacity=".6" />
      </>
    ),
  },
];

/** "About me" bento: portrait, craft, experience, collaboration, projects, languages, process. */
export function AboutBento() {
  return (
    <div className="bento">
      <div className="slot slot--portrait bento__portrait">
        {site.portrait ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={site.portrait} alt={`Portrait of ${site.name}`} />
        ) : (
          <TodoMark hint="portrait" />
        )}
      </div>

      <Reveal className="bento__cell bento__craft">
        <h3 className="t-h3">Design thinking & craft</h3>
        <p className="sr-only">Principles I design with: {craft.map((c) => c.label).join(", ")}.</p>
        <div className="craft" aria-hidden>
          <ul className="craft__track">
            {[...craft, ...craft].map((c, i) => (
              <li key={i}>
                <svg width="40" height="28" viewBox="0 0 40 28">
                  {c.svg}
                </svg>
                <span className="label">{c.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <div className="bento__cell bento__quote">
        <p className="label">How I work</p>
        <p className="bento__quote-text">
          <Rich value={site.tagline} />
        </p>
        <svg className="bento__pointer" width="18" height="18" viewBox="0 0 18 18" aria-hidden>
          <path d="M2 2l13 5.5-5.6 1.8L7.6 15z" fill="#fff" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      </div>

      <Reveal className="bento__cell bento__exp" delay={120}>
        <p className="label">Experience</p>
        <div className="laurel">
          <Laurel />
          <p className="laurel__value">
            <span className="laurel__num">
              <TickUp value={experience.length} />
            </span>
            <span className="laurel__unit">Roles</span>
          </p>
          <Laurel flip />
        </div>
        <h3 className="t-h3">Four industries, one habit</h3>
        <p className="t-body">
          From banking dashboards to a calm mental health app, every role taught me the same thing: listen first, then make the hard
          parts feel simple.
        </p>
      </Reveal>

      <div className="bento__stack">
        <Reveal className="bento__cell bento__collab" delay={160}>
          <p className="label">Collaboration</p>
          <h3 className="t-h3">Cross-functional work</h3>
          <p className="t-body">Stakeholder workshops, and annotated Figma prototypes that cut engineering back-and-forth.</p>
          <span className="cursor cursor--a" aria-hidden>
            <svg width="14" height="14" viewBox="0 0 14 14">
              <path d="M1 1l12 5-5 2-2 5z" fill="currentColor" />
            </svg>
            <span>PM</span>
          </span>
          <span className="cursor cursor--b" aria-hidden>
            <svg width="14" height="14" viewBox="0 0 14 14">
              <path d="M1 1l12 5-5 2-2 5z" fill="currentColor" />
            </svg>
            <span>Dev</span>
          </span>
        </Reveal>
        <Reveal className="bento__cell bento__projects" delay={200}>
          <div>
            <h3 className="t-h3 bento__green">Projects designed</h3>
            <p className="t-body">Across AI, fashion-tech, insurance, mental health and sports.</p>
          </div>
          <p className="bento__big">
            <TickUp value={work.length} />
          </p>
        </Reveal>
      </div>

      <Reveal className="bento__cell bento__langs">
        <p className="label">Languages</p>
        <ul className="langbars">
          {languages.map((l) => (
            <li key={l.name}>
              <p className="langbars__row">
                <span className="langbars__name">{l.name}</span>
                <span className="t-span">{l.level}</span>
              </p>
              <span className="langbars__bar" aria-hidden>
                <span style={{ width: `${levels[l.level] ?? 50}%` }} />
              </span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="bento__cell bento__process" delay={80}>
        <p className="label">My design process</p>
        <ol className="process">
          {process.map((p, i) => (
            <li key={p} className="process__step" style={{ "--i": i } as React.CSSProperties}>
              <span className="process__dot" aria-hidden>
                <svg width="12" height="12" viewBox="0 0 12 12">
                  <path d="M2.5 6.2l2.3 2.3 4.7-4.9" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="process__label">{p}</span>
            </li>
          ))}
        </ol>
      </Reveal>
    </div>
  );
}
