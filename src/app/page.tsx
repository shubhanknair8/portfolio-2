import { site } from "@/content/site";
import { Band, Eyebrow } from "@/components/site/bits";
import { CtaRow } from "@/components/site/CtaRow";
import { Credentials, Expertise, SectionHead, Services } from "@/components/site/sections";
import { Hero } from "@/components/home/Hero";
import { AboutBento } from "@/components/home/AboutBento";
import { WorkScroll } from "@/components/home/WorkScroll";
import { Reveal, SplitText } from "@/components/motion";

export default function Home() {
  return (
    <>
      {/* Hero: headline, intro, Download Resume, and a fanned stack of project covers */}
      <Hero />

      {/* Work: horizontal scroll of all projects */}
      <WorkScroll />

      {/* What I do */}
      <Band tone="plain" className="section">
        <Services index={2} />
      </Band>

      {/* About me bento */}
      <Band tone="plain" className="section about2">
        <div className="about2__head">
          <Eyebrow index={3}>About me</Eyebrow>
          <SplitText text="Know me better" className="t-h2" />
        </div>
        <AboutBento />
        <div style={{ height: 48 }} />
        <CtaRow href="/about" label="More about me" note="Currently designing for a multilingual AI platform under AICTE." />
      </Band>

      {/* Expertise (tools) */}
      <Expertise index={4} />

      {/* Education & certifications */}
      <Band tone="plain" className="section">
        <SectionHead index={5} eyebrow="Credentials" title="Education & certifications" />
        <Credentials />
      </Band>

      {/* Let's work together */}
      <Band tone="hero" className="section contact-band">
        <SectionHead index={6} eyebrow="Contact" title="Let’s work together" />
        <Reveal className="contact-band__mail">
          <a href={`mailto:${site.email}`} className="big-mail">
            {site.email}
          </a>
        </Reveal>
        <CtaRow href="/contact" label="Get in Touch" note={site.location} />
      </Band>
    </>
  );
}
