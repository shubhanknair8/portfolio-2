import Link from "next/link";
import { profile, stats, work } from "@/content/cv";
import { site } from "@/content/site";
import { Rich } from "@/components/Rich";
import { Band, Eyebrow } from "@/components/site/bits";
import { CtaRow } from "@/components/site/CtaRow";
import { Profile } from "@/components/site/Profile";
import { WorkCard } from "@/components/site/WorkCard";
import { Credentials, SectionHead, Services, Timeline, Toolkit } from "@/components/site/sections";
import { CountUp, Reveal, ScrollInk } from "@/components/motion";

export default function Home() {
  const newest = work.slice(0, 2);
  return (
    <>
      {/* 1 — Hero */}
      <Band tone="hero" className="hero">
        <div className="halves hero__grid">
          <div className="reveal">
            <Profile />
            <h1 className="t-subtitle hero__tagline">
              <Rich value={site.tagline} />
            </h1>
            <div className="hero__contact">
              <a href={`mailto:${site.email}`} className="link-underline">
                {site.email}
              </a>
              <span className="t-span">{site.location}</span>
            </div>
          </div>

          <div className="reveal reveal-2">
            <div className="newest">
              <div className="newest__copy">
                <Eyebrow>Newest projects</Eyebrow>
                <p className="t-body">
                  <Rich value={site.newestNote} />
                </p>
              </div>
              <div className="newest__thumbs">
                {newest.map((p, i) => (
                  <Link key={p.title} href={p.slug ? `/work/${p.slug}` : "/#work"} className="slot newest__thumb mini-tile" aria-label={p.title}>
                    <span className="mini-tile__index">{String(i + 1).padStart(2, "0")}</span>
                    <span className="mini-tile__title">{p.title}</span>
                  </Link>
                ))}
              </div>
            </div>
            <CtaRow href="/contact" label="Let’s Start a Collaboration" className="hero__cta cta-row--solo" />
          </div>
        </div>

        <svg className="wordmark" viewBox="0 0 1000 132" role="img" aria-label={site.name}>
          <text x="0" y="118" fontSize="150" textLength="1000" lengthAdjust="spacingAndGlyphs">
            {site.logo.toUpperCase()}
          </text>
        </svg>
      </Band>

      {/* 2 — Stats (counts of CV entries) */}
      <Band tone="plain" className="stats-band">
        <ul className="stats">
          {stats.map((s, i) => (
            <Reveal as="li" key={s.label} className="stat" delay={i * 80}>
              <p className="label">{s.label}</p>
              <p className="stat__value">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
            </Reveal>
          ))}
        </ul>
      </Band>

      {/* 3 — About */}
      <Band tone="plain" className="section about">
        <Eyebrow index={1} center>
          About me
        </Eyebrow>
        <ScrollInk text={profile} className="about__text" />
        <CtaRow href="/about" label="Know Me Better" note="Currently designing for a multilingual AI platform under AICTE." />
      </Band>

      {/* 4 — Work */}
      <Band tone="plain" className="section" id="work">
        <SectionHead index={2} eyebrow="Featured work" title="Projects highlights" intro={String(site.featuredIntro)} />
        <div className="cards">
          {work.map((w, i) => (
            <Reveal key={w.title} delay={(i % 2) * 120}>
              <WorkCard item={w} index={i} />
            </Reveal>
          ))}
        </div>
      </Band>

      {/* 5 — Services */}
      <Band tone="plain" className="section">
        <SectionHead
          index={3}
          eyebrow="Services"
          title="What I can do for you"
          intro="From research and information architecture to production-ready prototypes."
        />
        <Services />
      </Band>

      {/* 6 — Experience */}
      <Band tone="plain" className="section">
        <SectionHead index={4} eyebrow="Experience" title="Where I’ve worked" />
        <Timeline />
      </Band>

      {/* 7 — Toolkit marquee */}
      <section className="band band--dark toolkit-band" aria-labelledby="toolkit-h">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 40 }}>
            <Eyebrow index={5} center>
              Toolkit
            </Eyebrow>
            <h2 id="toolkit-h" className="t-h2">
              Tools I design with
            </h2>
          </div>
        </div>
        <Toolkit />
      </section>

      {/* 8 — Education & certifications */}
      <Band tone="plain" className="section">
        <SectionHead index={6} eyebrow="Credentials" title="Education & certifications" />
        <Credentials />
      </Band>

      {/* 9 — Contact */}
      <Band tone="hero" className="section contact-band">
        <SectionHead index={7} eyebrow="Contact" title="Let’s work together" />
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
