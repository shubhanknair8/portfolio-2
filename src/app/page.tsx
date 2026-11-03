import Link from "next/link";
import { site } from "@/content/site";
import { ArrowUpRight } from "@/components/site/icons";
import { Band, Eyebrow } from "@/components/site/bits";
import { CtaRow } from "@/components/site/CtaRow";
import { Credentials, Expertise, SectionHead, Services } from "@/components/site/sections";
import { Hero } from "@/components/home/Hero";
import { AboutBento } from "@/components/home/AboutBento";
import { WorkStack } from "@/components/home/WorkStack";
import { Reveal, SplitText } from "@/components/motion";

export default function Home() {
  return (
    <>
      {/* Hero: intro, portrait, counts, skills strip */}
      <Hero />

      {/* What I do */}
      <Band tone="plain" className="section">
        <Services index={1} />
      </Band>

      {/* About me bento */}
      <Band tone="plain" className="section about2">
        <div className="about2__head">
          <Eyebrow index={2}>About me</Eyebrow>
          <SplitText text="Know me better" className="t-h2" />
        </div>
        <AboutBento />
        <div style={{ height: 48 }} />
        <CtaRow href="/about" label="More about me" note="Currently designing for a multilingual AI platform under AICTE." />
      </Band>

      {/* Work */}
      <Band tone="plain" className="section work-band" id="work">
        <SectionHead index={3} eyebrow="Featured work" title="My projects" intro={String(site.featuredIntro)} />
        <WorkStack />
        <div className="work-more">
          <Link href="/work" className="btn-dark">
            View more projects <ArrowUpRight />
          </Link>
        </div>
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
