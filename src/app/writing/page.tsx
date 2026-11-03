import { articles } from "@/content/site";
import { Band, Eyebrow } from "@/components/site/bits";
import { ArrowUpRight } from "@/components/site/icons";
import { Reveal, SplitText } from "@/components/motion";

export const metadata = { title: "Writing", description: "Articles and drawings by Shubhank Nair." };

export default function Page() {
  const list = articles.filter((a) => a.title.trim() && a.href.trim());
  return (
    <>
      <Band tone="hero" className="cs-hero">
        <Eyebrow>Writing</Eyebrow>
        <div className="halves">
          <div className="cs-hero__title">
            <SplitText as="h1" text="Writing" className="t-h1" />
          </div>
          <div className="cs-hero__intro t-subtitle reveal reveal-2">
            <p>Notes on design, research and the decisions behind my work, plus a few drawings.</p>
          </div>
        </div>
        <div style={{ height: 64 }} />
      </Band>

      <Band tone="plain" className="section">
        <p className="label writing__label">Articles on Medium</p>
        {list.length > 0 ? (
          <ul className="writing__list">
            {list.map((a, i) => (
              <Reveal as="li" key={a.href} delay={i * 80}>
                <a href={a.href} target="_blank" rel="noopener" className="writing__item">
                  <span className="writing__n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="writing__text">
                    <span className="writing__title">{a.title}</span>
                    {a.summary && <span className="t-body">{a.summary}</span>}
                    {a.date && <span className="t-span">{a.date}</span>}
                  </span>
                  <span className="writing__go">
                    Read on Medium <ArrowUpRight size={14} />
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        ) : (
          <p className="t-body writing__empty">Articles coming soon.</p>
        )}

        <p className="label writing__label" style={{ marginTop: 72 }}>
          Drawings
        </p>
        <div className="writing__drawings">
          {[0, 1, 2].map((i) => (
            <div key={i} className="writing__drawing" aria-hidden>
              <span>Drawing coming soon</span>
            </div>
          ))}
        </div>
      </Band>
    </>
  );
}
