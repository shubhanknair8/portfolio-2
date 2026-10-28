import { domains, profile } from "@/content/cv";
import { site } from "@/content/site";
import { Band, Eyebrow } from "@/components/site/bits";
import { CtaRow } from "@/components/site/CtaRow";
import { Credentials, SectionHead, Services, Timeline, Toolkit } from "@/components/site/sections";
import { Reveal, SplitText } from "@/components/motion";

export const metadata = { title: "About" };

export default function Page() {
  return (
    <>
      <Band tone="hero" className="cs-hero">
        <Eyebrow>About me</Eyebrow>
        <div className="halves">
          <div className="cs-hero__title">
            <SplitText as="h1" text={site.name} className="t-h1" />
            <p className="t-h2s reveal reveal-2">UI/UX Designer · Product Designer · AI-Assisted Design</p>
          </div>
          <div className="cs-hero__intro t-subtitle reveal reveal-3">
            <p>{profile}</p>
            <ul className="chips" aria-label="Industries">
              {domains.map((d, i) => (
                <Reveal as="li" key={d} className="chip" delay={i * 60}>
                  {d}
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
        <div style={{ height: 64 }} />
      </Band>

      <Band tone="plain" className="section">
        <SectionHead eyebrow="Experience" title="Where I’ve worked" />
        <Timeline />
      </Band>

      <Band tone="plain" className="section">
        <SectionHead eyebrow="Services" title="How I work" />
        <Services />
      </Band>

      <section className="band band--dark toolkit-band" aria-labelledby="toolkit-h">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 40 }}>
            <Eyebrow center>Toolkit</Eyebrow>
            <h2 id="toolkit-h" className="t-h2">
              Tools I design with
            </h2>
          </div>
        </div>
        <Toolkit />
      </section>

      <Band tone="plain" className="section">
        <SectionHead eyebrow="Credentials" title="Education & certifications" />
        <Credentials />
        <div style={{ height: 64 }} />
        <CtaRow href="/contact" label="Get in Touch" note="Comfortable presenting to stakeholders and pairing with engineers." />
      </Band>
    </>
  );
}
