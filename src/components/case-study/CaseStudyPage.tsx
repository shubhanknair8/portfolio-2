import type { CaseStudy, Text } from "@/content/types";
import { Rich, TodoMark } from "../Rich";
import { Band, Eyebrow } from "../site/bits";
import { CtaRow } from "../site/CtaRow";
import { WorkCard } from "../site/WorkCard";
import { work } from "@/content/cv";
import { FlowSteps } from "./FlowSteps";
import { OutcomeSection } from "./OutcomeSection";

/* Metadata grouped like the reference: each group separated by a dashed rule */
function MetaGroup({ rows }: { rows: [string, Text, boolean?][] }) {
  return (
    <div className="cs-meta__group">
      {rows.map(([label, value, stack]) => (
        <div key={label} className={`cs-meta__row ${stack ? "cs-meta__row--stack" : ""}`}>
          <dt>{label}:</dt>
          <dd className={stack ? "t-ink" : undefined}>
            <Rich value={value} />
          </dd>
        </div>
      ))}
    </div>
  );
}

function Row({ title, children, aside }: { title: string; children: React.ReactNode; aside?: React.ReactNode }) {
  const id = title.toLowerCase().replace(/[^a-z]+/g, "-");
  return (
    <section className="cs-row halves" aria-labelledby={id}>
      <div className="cs-row__main">
        <h2 id={id} className="t-h2s">
          {title}
        </h2>
        {children}
      </div>
      <div className="cs-row__aside">{aside}</div>
    </section>
  );
}

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-head" style={{ marginTop: 96 }}>
      <Eyebrow center>{eyebrow}</Eyebrow>
      <h2 className="t-h2">{title}</h2>
    </div>
  );
}

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  const nextIndex = study.next ? work.findIndex((w) => w.slug === study.next!.slug) : -1;
  const next = nextIndex >= 0 ? work[nextIndex] : undefined;

  return (
    <article>
      {/* Title + intro (the problem) */}
      <Band tone="hero" className="cs-hero">
        <Eyebrow>Case study</Eyebrow>
        <div className="halves">
          <div className="cs-hero__title">
            <h1 className="t-h1 reveal">{study.title}</h1>
            <p className="t-h2s reveal reveal-2">
              <Rich value={study.outcomeLine} />
            </p>
          </div>
          <div className="cs-hero__intro t-subtitle reveal reveal-3">
            <h2 className="sr-only">Problem</h2>
            {study.problem.map((p, i) => (
              <p key={i}>
                <Rich value={p} />
              </p>
            ))}
          </div>
        </div>
      </Band>

      <Band tone="plain">
        {/* Metadata block + cover */}
        <div className="halves">
          <dl className="cs-meta" aria-label="Project details">
            <MetaGroup rows={[["Role", study.meta.role], ["Team", study.meta.team]]} />
            <MetaGroup rows={[["Timeline", study.meta.timeline], ["Year", study.meta.year], ["Status", study.meta.status]]} />
            <MetaGroup rows={[["Platform", study.meta.platform, true]]} />
            <MetaGroup rows={[["Tools used", study.meta.tools, true]]} />
          </dl>
          <div>
            <div className="slot cs-cover">
              {study.cover ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={study.cover} alt={`${study.title} cover`} />
              ) : (
                <TodoMark hint="cover image" />
              )}
            </div>
          </div>
        </div>

        {study.flow && (
          <section className="cs-row" aria-labelledby="user-flow">
            <div className="cs-row__main cs-row__main--full">
              <h2 id="user-flow" className="t-h2s">
                User flow
              </h2>
              <FlowSteps steps={study.flow} />
            </div>
          </section>
        )}

        <Row
          title="Goals"
          aside={
            <div className="rejected">
              <p className="label">Constraints</p>
              <p className="t-body" style={{ marginTop: 12 }}>
                <Rich value={study.constraints} />
              </p>
            </div>
          }
        >
          <ol className="list">
            {study.goals.map((g, i) => (
              <li key={i} className="list__item">
                <span className="list__num">{i + 1}</span>
                <span>
                  <Rich value={g} />
                </span>
              </li>
            ))}
          </ol>
        </Row>

        <Row
          title="Research and insights"
          aside={
            study.research.persona && (
              <div className="persona">
                <p className="label">Persona</p>
                <p className="t-name persona__name">{study.research.persona.name}</p>
                <p className="t-span" style={{ marginTop: 10 }}>
                  {study.research.persona.age} · {study.research.persona.occupation} · {study.research.persona.city}
                </p>
                <p className="t-body" style={{ marginTop: 16 }}>
                  <Rich value={study.research.persona.context} />
                </p>
              </div>
            )
          }
        >
          <p className="t-body">
            <span className="t-ink">Method: </span>
            <Rich value={study.research.method} />
          </p>
          {study.research.insights.length > 0 && (
            <ol className="insights">
              {study.research.insights.map((ins, i) => (
                <li key={i} className="insight">
                  <span className="insight__num">{i + 1}</span>
                  <p className="insight__finding">
                    <span className="sr-only">Insight: </span>
                    <Rich value={ins.finding} />
                  </p>
                  <p className="insight__decision">
                    <span className="sr-only">Led to: </span>→ <Rich value={ins.decision} />
                  </p>
                </li>
              ))}
            </ol>
          )}
          <p className="t-body">
            <span className="t-ink">Stats: </span>
            <Rich value={study.research.stats} />
          </p>
        </Row>

        <Row title="Design principle">
          <p className="principle">
            <Rich value={study.principle} />
          </p>
        </Row>

        {study.decisions.length > 0 && (
          <>
            <SectionHead eyebrow="Decisions" title="Key decisions" />
            {study.decisions.map((d, i) => (
              <section key={i} className="cs-row halves" aria-labelledby={`decision-${i}`}>
                <div className="cs-row__main">
                  <p className="list__num">{String(i + 1).padStart(2, "0")}</p>
                  <h3 id={`decision-${i}`} className="t-h3">
                    <Rich value={d.title} />
                  </h3>
                  {d.detail && (
                    <p className="t-body">
                      <Rich value={d.detail} />
                    </p>
                  )}
                </div>
                <div className="cs-row__aside">
                  <div className="rejected">
                    <p className="label">Considered and rejected</p>
                    <ul className="rejected__list">
                      {d.rejected.map((r, j) => (
                        <li key={j} className="rejected__item">
                          <span className="rejected__option">
                            <Rich value={r.option} />
                          </span>
                          <span className="rejected__why">
                            <Rich value={r.why} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            ))}
          </>
        )}

        {study.screens.length > 0 && (
          <>
            <SectionHead eyebrow="Final solution" title="Final solution" />
            <div className="cards cards--3">
              {study.screens.map((s) => (
                <figure key={s.label}>
                  <div className="slot card__media card__media--tall">
                    {s.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={s.image} alt={s.alt} loading="lazy" />
                    ) : (
                      <TodoMark hint={`screen: ${s.label}`} />
                    )}
                  </div>
                  <figcaption className="screen__caption">
                    <p className="t-name">{s.label}</p>
                    <p className="t-body">
                      <Rich value={s.caption} />
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div style={{ height: 96 }} />
          </>
        )}

        <OutcomeSection outcome={study.outcome} />

        <Row title="What I’d change">
          <ul className="list">
            {study.whatIdChange.map((t, i) => (
              <li key={i} className="list__item">
                <span className="list__num" aria-hidden>·</span>
                <span>
                  <Rich value={t} />
                </span>
              </li>
            ))}
          </ul>
        </Row>
      </Band>

      {next && (
        <Band tone="plain" className="section" aria-labelledby="next-h">
          <div className="section-head">
            <Eyebrow center>Next project</Eyebrow>
            <h2 id="next-h" className="t-h2">
              Other projects
            </h2>
          </div>
          <div className="cards">
            <WorkCard item={next} index={nextIndex} />
          </div>
          <CtaRow href="/#work" label="All My Projects" />
        </Band>
      )}
    </article>
  );
}
