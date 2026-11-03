import Link from "next/link";
import { hasContent, type CaseStudy, type Text } from "@/content/types";
import { liveProjects, showDrafts } from "@/content/projects";
import { work } from "@/content/cv";
import { Rich, TodoMark } from "../Rich";
import { Band, Eyebrow } from "../site/bits";
import { WorkCard } from "../site/WorkCard";
import { ArrowUpRight } from "../site/icons";
import { FlowSteps } from "./FlowSteps";
import { Toc } from "./Toc";

/** On the live site, a block whose copy is only [TODO]s is left out; while developing everything shows. */
const show = (t?: Text) => t !== undefined && (showDrafts || hasContent(t));
const showAll = (list: Text[]) => (showDrafts ? list.length > 0 : list.some(hasContent));
const keep = (list: Text[]) => (showDrafts ? list : list.filter(hasContent));

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="cs2-sec" aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`} className="cs2-sec__title">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  const m = study.meta;
  const meta: [string, Text][] = [
    ["Role", m.role],
    ["Timeline", m.timeline],
    ["Year", m.year],
    ["Platform", m.platform],
    ["Tools", m.tools],
    ["Status", m.status],
    ...(m.industry ? ([["Industry", m.industry]] as [string, Text][]) : []),
  ];
  const metaShown = meta.filter(([, v]) => show(v));

  const decisions = study.decisions.filter((d) => show(d.title));
  const outcomeItems = study.outcome.kind === "validated" ? keep(study.outcome.items) : [];
  const sections = [
    { id: "overview", label: "Project overview", on: show(study.summary) || showAll(study.problem) || show(study.outcomeLine) },
    { id: "problem", label: "Problem statement", on: showAll(study.problem) },
    { id: "goals", label: "Goals and constraints", on: showAll(study.goals) || show(study.constraints) },
    { id: "research", label: "Research and insights", on: show(study.research.method) || study.research.insights.length > 0 || !!study.research.persona },
    { id: "journey", label: "Journey mapping", on: !!study.journey },
    { id: "strategy", label: "Design strategy", on: !!study.strategy?.length },
    { id: "principle", label: "Design principle", on: show(study.principle) },
    { id: "flow", label: "User flow", on: !!study.flow?.length },
    { id: "wireframes", label: "Wireframes", on: !!study.wireframes?.length },
    { id: "decisions", label: "Key decisions", on: decisions.length > 0 },
    { id: "solution", label: "Final design", on: study.screens.length > 0 && (showDrafts || study.screens.some((s) => s.image)) },
    { id: "system", label: "Design system", on: !!study.designSystem },
    { id: "outcome", label: study.outcome.kind === "results" ? "Outcome" : "Validation status", on: study.outcome.kind === "results" || outcomeItems.length > 0 },
    { id: "learnings", label: "Key learnings", on: !!study.learnings?.length },
    { id: "change", label: "What I’d change", on: showAll(study.whatIdChange) },
  ].filter((s) => s.on);

  const others = liveProjects().filter((p) => p.slug !== study.slug).slice(0, 2);
  const otherCards = others.map((p) => ({ item: work.find((w) => w.slug === p.slug), p })).filter((x) => x.item);

  return (
    <article className="cs2">
      {/* Hero: title + summary | details */}
      <Band tone="hero" className="cs2-hero">
        <div className="cs2-hero__grid">
          <div className="cs2-hero__main">
            {!study.ready && <Eyebrow>Case study · draft</Eyebrow>}
            <h1 className="cs2-hero__title reveal">{study.title}</h1>
            {show(study.outcomeLine) && (
              <p className="cs2-hero__line reveal reveal-2">
                <Rich value={study.outcomeLine} />
              </p>
            )}
          </div>
          {metaShown.length > 0 && (
            <dl className="cs2-meta reveal reveal-3">
              {metaShown.map(([k, v]) => (
                <div key={k} className="cs2-meta__row">
                  <dt className="label">{k}</dt>
                  <dd>
                    <Rich value={v} />
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </Band>

      {/* Cover: full width under the hero */}
      <div>
        <div className="slot cs2-cover">
          {study.cover ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={study.cover} alt={`${study.title} cover`} />
          ) : (
            <>
              <span className="cs2-cover__word" aria-hidden>
                {study.title}
              </span>
              <span className="cs2-cover__todo">
                <TodoMark hint="cover image" />
              </span>
            </>
          )}
        </div>
      </div>

      {/* Body: sticky contents | sections */}
      <div className="wrap cs2-body">
        <Toc items={sections.map(({ id, label }) => ({ id, label }))} />
        <div className="cs2-content">
          {sections.some((s) => s.id === "overview") && (
            <Section id="overview" title="Project overview">
              {show(study.summary) && (
                <p className="cs2-lead">
                  <Rich value={study.summary!} />
                </p>
              )}
              {study.cardLine && <p className="t-body cs2-kicker">{String(study.cardLine)}</p>}
            </Section>
          )}

          {sections.some((s) => s.id === "problem") && (
            <Section id="problem" title="Problem statement">
              {study.painPoints && (
                <div className="cs2-cards cs2-cards--2">
                  {study.painPoints.map((c) => (
                    <div key={c.title} className="cs2-card">
                      <p className="cs2-card__title">{c.title}</p>
                      <p className="t-body">
                        <Rich value={c.body} />
                      </p>
                    </div>
                  ))}
                </div>
              )}
              <div className="cs2-callout cs2-callout--peach">
                {keep(study.problem).map((p, i) => (
                  <p key={i}>
                    <Rich value={p} />
                  </p>
                ))}
              </div>
            </Section>
          )}

          {sections.some((s) => s.id === "goals") && (
            <Section id="goals" title="Goals and constraints">
              {study.objectives && (
                <div className="cs2-cards cs2-cards--3">
                  {study.objectives.map((c) => (
                    <div key={c.title} className="cs2-card cs2-card--blue">
                      <p className="cs2-card__title">{c.title}</p>
                      <p className="t-body">
                        <Rich value={c.body} />
                      </p>
                    </div>
                  ))}
                </div>
              )}
              {showAll(study.goals) && (
                <ol className="cs2-list">
                  {keep(study.goals).map((g, i) => (
                    <li key={i}>
                      <span className="cs2-list__n">{String(i + 1).padStart(2, "0")}</span>
                      <span>
                        <Rich value={g} />
                      </span>
                    </li>
                  ))}
                </ol>
              )}
              {show(study.constraints) && (
                <div className="cs2-callout">
                  <p className="label">Constraints</p>
                  <p>
                    <Rich value={study.constraints} />
                  </p>
                </div>
              )}
            </Section>
          )}

          {sections.some((s) => s.id === "research") && (
            <Section id="research" title="Research and insights">
              {show(study.research.method) && (
                <p className="cs2-p">
                  <span className="cs2-strong">Method: </span>
                  <Rich value={study.research.method} />
                </p>
              )}
              {study.research.insights.length > 0 && (
                <ol className="cs2-insights">
                  {study.research.insights.map((ins, i) => (
                    <li key={i} className="cs2-insight">
                      <p className="cs2-insight__find">
                        <span className="sr-only">Insight: </span>
                        <Rich value={ins.finding} />
                      </p>
                      <p className="cs2-insight__do">
                        <span className="sr-only">Led to: </span>
                        <span className="cs2-insight__arrow" aria-hidden>
                          <ArrowUpRight size={12} />
                        </span>
                        <Rich value={ins.decision} />
                      </p>
                    </li>
                  ))}
                </ol>
              )}
              {study.research.stats !== undefined && show(study.research.stats) && (
                <p className="cs2-p">
                  <span className="cs2-strong">Numbers: </span>
                  <Rich value={study.research.stats!} />
                </p>
              )}
              {study.research.persona && (
                <div className="cs2-persona">
                  <p className="label">Persona</p>
                  <p className="cs2-persona__name">{study.research.persona.name}</p>
                  <p className="t-span">
                    {study.research.persona.age} · {study.research.persona.occupation} · {study.research.persona.city}
                  </p>
                  <p className="cs2-p">
                    <Rich value={study.research.persona.context} />
                  </p>
                  {(study.research.persona.goals || study.research.persona.frustrations || study.research.persona.behaviour) && (
                    <div className="cs2-persona__cols">
                      {(
                        [
                          ["Goals", study.research.persona.goals],
                          ["Frustrations", study.research.persona.frustrations],
                          ["Behaviour", study.research.persona.behaviour],
                        ] as [string, string[] | undefined][]
                      )
                        .filter(([, l]) => l?.length)
                        .map(([k, l]) => (
                          <div key={k}>
                            <p className="label">{k}</p>
                            <ul className="cs2-bullets">
                              {l!.map((x) => (
                                <li key={x}>{x}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                    </div>
                  )}
                  {study.research.persona.quote && (
                    <p className="cs2-persona__quote">
                      “{study.research.persona.quote}”<span className="t-span"> (persona quote, illustrative)</span>
                    </p>
                  )}
                </div>
              )}
              {study.audience && (
                <div className="cs2-stats cs2-stats--4" aria-label="Target audience">
                  {study.audience.map((a) => (
                    <div key={a.label} className="cs2-stat">
                      <p className="cs2-stat__v">{a.value}</p>
                      <p className="label">{a.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </Section>
          )}

          {study.journey && sections.some((s) => s.id === "journey") && (
            <Section id="journey" title="Journey mapping">
              {(
                [
                  ["Current journey (as is)", study.journey.asIs, "bad"],
                  ["Improved journey (to be)", study.journey.toBe, "good"],
                ] as const
              ).map(([label, steps, tone]) => (
                <div key={label} className={`cs2-journey cs2-journey--${tone}`}>
                  <p className="cs2-journey__label">{label}</p>
                  <ol className="cs2-journey__steps">
                    {steps.map((st) => (
                      <li key={st.step}>
                        <span className="cs2-journey__step">{st.step}</span>
                        <span className="cs2-journey__note">
                          <span aria-hidden>{tone === "bad" ? "⚠ " : "✓ "}</span>
                          {st.note}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </Section>
          )}

          {study.strategy && sections.some((s) => s.id === "strategy") && (
            <Section id="strategy" title="Design strategy">
              <div className="cs2-cards cs2-cards--2">
                {study.strategy.map((c) => (
                  <div key={c.title} className="cs2-card">
                    <p className="cs2-card__title">{c.title}</p>
                    <p className="t-body">
                      <Rich value={c.body} />
                    </p>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {sections.some((s) => s.id === "principle") && (
            <Section id="principle" title="Design principle">
              <blockquote className="cs2-quote">
                <span className="cs2-quote__mark" aria-hidden>
                  “
                </span>
                <Rich value={study.principle} />
              </blockquote>
            </Section>
          )}

          {study.flow && sections.some((s) => s.id === "flow") && (
            <Section id="flow" title="User flow">
              <FlowSteps steps={study.flow} />
            </Section>
          )}

          {study.wireframes && sections.some((s) => s.id === "wireframes") && (
            <Section id="wireframes" title="Wireframes">
              {study.wireframeNote && (
                <p className="cs2-p" style={{ marginBottom: 20 }}>
                  <Rich value={study.wireframeNote} />
                </p>
              )}
              <div className="cs2-screens">
                {study.wireframes.map((w) => (
                  <figure key={w.label} className="cs2-screen">
                    <div className="slot cs2-screen__img">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={w.image} alt={w.alt} loading="lazy" />
                    </div>
                    <figcaption>
                      <p className="cs2-strong">{w.label}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Section>
          )}

          {sections.some((s) => s.id === "decisions") && (
            <Section id="decisions" title="Key decisions">
              <div className="cs2-decisions">
                {decisions.map((d, i) => {
                  const rejected = d.rejected.filter((r) => show(r.option));
                  return (
                    <div key={i} className="cs2-decision">
                      <p className="cs2-list__n">
                        {String(i + 1).padStart(2, "0")}
                        {d.screen && <span className="cs2-decision__screen"> · {d.screen}</span>}
                      </p>
                      <h3 className="cs2-decision__title">
                        <Rich value={d.title} />
                      </h3>
                      {d.problem && show(d.problem) && (
                        <p className="cs2-p">
                          <span className="cs2-strong">Problem: </span>
                          <Rich value={d.problem} />
                        </p>
                      )}
                      {d.detail && show(d.detail) && (
                        <p className="cs2-p">
                          {d.problem && <span className="cs2-strong">Decision: </span>}
                          <Rich value={d.detail} />
                        </p>
                      )}
                      {d.why && show(d.why) && (
                        <p className="cs2-p">
                          <span className="cs2-strong">Why: </span>
                          <Rich value={d.why} />
                        </p>
                      )}
                      {rejected.length > 0 && (
                        <div className="cs2-rejected">
                          <p className="label">Considered and rejected</p>
                          <ul className={rejected.some((r) => r.image) ? "cs2-rejected__grid" : undefined}>
                            {rejected.map((r, j) => (
                              <li key={j} className={r.image ? "cs2-rejected__item" : undefined}>
                                {r.image && (
                                  <span className="cs2-rejected__shot">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={r.image} alt={r.alt ?? ""} loading="lazy" />
                                  </span>
                                )}
                                <span className="cs2-rejected__opt">
                                  <Rich value={r.option} />
                                </span>
                                {show(r.why) && (
                                  <span className="cs2-rejected__why">
                                    <Rich value={r.why} />
                                  </span>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </Section>
          )}

          {sections.some((s) => s.id === "solution") && (
            <Section id="solution" title="Final design">
              <div className="cs2-screens">
                {study.screens
                  .filter((s) => showDrafts || s.image)
                  .map((s) => (
                    <figure key={s.label} className="cs2-screen">
                      <div className="slot cs2-screen__img">
                        {s.image ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={s.image} alt={s.alt} loading="lazy" />
                        ) : (
                          <TodoMark hint={`screen: ${s.label}`} />
                        )}
                      </div>
                      <figcaption>
                        <p className="cs2-strong">{s.label}</p>
                        <p className="t-body">
                          <Rich value={s.caption} />
                        </p>
                      </figcaption>
                    </figure>
                  ))}
              </div>
            </Section>
          )}

          {study.designSystem && sections.some((s) => s.id === "system") && (
            <Section id="system" title="Design system">
              <p className="label">Colour palette</p>
              <ul className="cs2-swatches">
                {study.designSystem.colors.map((c) => (
                  <li key={c.hex}>
                    <span className="cs2-swatch" style={{ background: c.hex }} aria-hidden />
                    <span className="cs2-strong">{c.name}</span>
                    <span className="t-span">{c.hex}</span>
                  </li>
                ))}
              </ul>
              <p className="label" style={{ marginTop: 28 }}>
                Typography: {study.designSystem.font}
              </p>
              <ul className="cs2-type">
                {study.designSystem.typeScale.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {study.designSystem.spacing && (
              <>
              <p className="label" style={{ marginTop: 28 }}>
                Spacing scale
              </p>
              <ul className="cs2-spacing" aria-label={`Spacing: ${study.designSystem.spacing.join(", ")} pixels`}>
                {study.designSystem.spacing.map((n) => (
                  <li key={n}>
                    <span className="cs2-spacing__bar" style={{ width: n * 1.5 }} aria-hidden />
                    <span className="t-span">{n}px</span>
                  </li>
                ))}
              </ul>
              </>
              )}
            </Section>
          )}

          {sections.some((s) => s.id === "outcome") && (
            <Section id="outcome" title={study.outcome.kind === "results" ? "Outcome" : "Validation status"}>
              {study.outcome.kind === "results" ? (
                <>
                  <div className="cs2-stats">
                    {study.outcome.cards.map((c) => (
                      <div key={c.label} className="cs2-stat">
                        <p className="cs2-stat__v">{c.value}</p>
                        <p className="t-body">{c.label}</p>
                        <p className="label">Source: {c.source}</p>
                      </div>
                    ))}
                  </div>
                  {(study.outcome.quotes ?? [])
                    .filter((q) => q.consent === true && q.name.trim())
                    .map((q) => (
                      <figure key={q.name} className="cs2-quote cs2-quote--dark">
                        <span className="cs2-quote__mark" aria-hidden>
                          “
                        </span>
                        <blockquote>{q.text}</blockquote>
                        <figcaption className="label">{q.name}</figcaption>
                      </figure>
                    ))}
                </>
              ) : (
                <ul className="cs2-callout cs2-callout--mint cs2-bullets">
                  {outcomeItems.map((t, i) => (
                    <li key={i}>
                      <Rich value={t} />
                    </li>
                  ))}
                </ul>
              )}
            </Section>
          )}

          {study.learnings && sections.some((s) => s.id === "learnings") && (
            <Section id="learnings" title="Key learnings">
              <div className="cs2-cards cs2-cards--2">
                {study.learnings.map((c) => (
                  <div key={c.title} className="cs2-card">
                    <p className="cs2-card__title">{c.title}</p>
                    <p className="t-body">
                      <Rich value={c.body} />
                    </p>
                  </div>
                ))}
              </div>
              {study.challenges?.length ? (
                <div className="cs2-callout" style={{ marginTop: 20 }}>
                  <p className="label">Challenges I faced</p>
                  <ul className="cs2-bullets">
                    {study.challenges.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </Section>
          )}

          {sections.some((s) => s.id === "change") && (
            <Section id="change" title="What I’d change">
              <ul className="cs2-callout cs2-bullets">
                {keep(study.whatIdChange).map((t, i) => (
                  <li key={i}>
                    <Rich value={t} />
                  </li>
                ))}
              </ul>
            </Section>
          )}
        </div>
      </div>

      {/* More case studies */}
      {otherCards.length > 0 && (
        <Band tone="plain" className="section cs2-more">
          <div className="section-head">
            <Eyebrow center>Keep reading</Eyebrow>
            <h2 className="t-h2">More case studies</h2>
          </div>
          <div className="cards">
            {otherCards.map(({ item }) => (
              <WorkCard key={item!.title} item={item!} index={work.indexOf(item!)} />
            ))}
          </div>
          <div className="cs2-more__cta">
            <Link href="/work" className="btn-dark">
              All projects <ArrowUpRight />
            </Link>
          </div>
        </Band>
      )}
    </article>
  );
}
