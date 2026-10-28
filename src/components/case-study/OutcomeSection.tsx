import type { Outcome } from "@/content/types";
import { Rich } from "../Rich";

/**
 * The heading follows the content:
 *  - real results  -> "Outcome" with up to 3 cards, each labelled with its source
 *  - no data yet   -> "What I validated"
 * Quotes render only with a real name and consent.
 */
export function OutcomeSection({ outcome }: { outcome: Outcome }) {
  if (outcome.kind === "validated") {
    return (
      <section className="cs-row halves" aria-labelledby="validated-h">
        <div className="cs-row__main">
          <h2 id="validated-h" className="t-h2s">
            What I validated
          </h2>
          <ol className="list">
            {outcome.items.map((item, i) => (
              <li key={i} className="list__item">
                <span className="list__num">{i + 1}</span>
                <span>
                  <Rich value={item} />
                </span>
              </li>
            ))}
          </ol>
        </div>
        <div className="cs-row__aside" />
      </section>
    );
  }

  const quotes = (outcome.quotes ?? []).filter((q) => q.consent === true && q.name.trim().length > 0);

  return (
    <section className="cs-row" aria-labelledby="outcome-h">
      <div className="cs-row__main cs-row__main--full">
        <h2 id="outcome-h" className="t-h2s">
          Outcome
        </h2>
        <div className="outcome-cards">
          {outcome.cards.slice(0, 3).map((c) => (
            <div key={c.label} className="outcome-card">
              <p className="label">Source: {c.source}</p>
              <p className="outcome-card__value">{c.value}</p>
              <p className="t-body">{c.label}</p>
            </div>
          ))}
        </div>
        {quotes.map((q) => (
          <figure key={q.name}>
            <blockquote className="quote">“{q.text}”</blockquote>
            <figcaption className="t-name" style={{ marginTop: 16 }}>
              {q.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
