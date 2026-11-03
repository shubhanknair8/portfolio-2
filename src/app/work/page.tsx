import { work } from "@/content/cv";
import { site } from "@/content/site";
import { Band, Eyebrow } from "@/components/site/bits";
import { WorkCard } from "@/components/site/WorkCard";
import { Reveal, SplitText } from "@/components/motion";

export const metadata = { title: "Projects", description: "Case studies and projects by Shubhank Nair, UI/UX and Product Designer." };

export default function Page() {
  return (
    <>
      <Band tone="hero" className="cs-hero">
        <Eyebrow>Projects</Eyebrow>
        <div className="halves">
          <div className="cs-hero__title">
            <SplitText as="h1" text="My projects" className="t-h1" />
          </div>
          <div className="cs-hero__intro t-subtitle reveal reveal-2">
            <p>{String(site.featuredIntro)}</p>
          </div>
        </div>
        <div style={{ height: 64 }} />
      </Band>
      <Band tone="plain" className="section">
        <div className="cards">
          {work.map((w, i) => (
            <Reveal key={w.title} delay={(i % 2) * 120}>
              <WorkCard item={w} index={i} />
            </Reveal>
          ))}
        </div>
      </Band>
    </>
  );
}
