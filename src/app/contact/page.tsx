import { site } from "@/content/site";
import { Band, Eyebrow, PixelArrow } from "@/components/site/bits";
import { Reveal, SplitText } from "@/components/motion";

export const metadata = { title: "Contact" };

export default function Page() {
  return (
    <Band tone="hero" className="cs-hero contact-page">
      <Eyebrow>Contact</Eyebrow>
      <div className="halves">
        <div className="cs-hero__title">
          <SplitText as="h1" text="Let’s work together" className="t-h1" />
          <p className="t-subtitle reveal reveal-2" style={{ marginTop: 24 }}>
            {site.location}
          </p>
        </div>
        <div className="cs-hero__intro">
          <a href={`mailto:${site.email}`} className="big-mail reveal reveal-3">
            {site.email}
          </a>
          <ul className="navlist contact-links">
            {site.socials.map((s, i) => (
              <Reveal as="li" key={s.href} className="navlist__item" delay={200 + i * 80}>
                <a
                  href={s.href}
                  className="navlist__link"
                  target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="me noopener"
                >
                  {s.label}
                  <PixelArrow size={24} />
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ height: 96 }} />
    </Band>
  );
}
