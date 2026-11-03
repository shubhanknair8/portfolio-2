import { site } from "@/content/site";
import { ContactArt } from "@/components/site/ContactArt";
import { ArrowUpRight } from "@/components/site/icons";
import { Band, Eyebrow } from "@/components/site/bits";
import { Reveal, SplitText } from "@/components/motion";

export const metadata = { title: "Contact", description: "Get in touch with Shubhank Nair: email, LinkedIn, phone or download the CV." };

/** Simple line icons for the contact rows. */
const ICONS: Record<string, string> = {
  mail: "M3 6h18v12H3zM3 7l9 6 9-6",
  linkedin: "M4 4h16v16H4zM8 10v6M8 7.5v.5M12 16v-3.5a2 2 0 0 1 4 0V16M12 10v6",
  phone: "M5 4h4l2 5-3 2a11 11 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2",
  download: "M12 4v11M7 10l5 5 5-5M5 20h14",
};
const Icon = ({ kind }: { kind: keyof typeof ICONS }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {kind === "linkedin" ? (
      <>
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <path d="M8 11v6M12 17v-6M12 13.5a2.5 2.5 0 0 1 5 0V17" />
        <circle cx="8" cy="7.6" r="1.1" fill="currentColor" stroke="none" />
      </>
    ) : (
      <path d={ICONS[kind]} />
    )}
  </svg>
);

export default function Page() {
  const linkedin = site.socials.find((s) => /linkedin/i.test(s.href))?.href;
  const cards = [
    { label: "Email me", value: site.email, href: `mailto:${site.email}`, tint: "#DCE1F7", ink: "#2C3F8F", icon: "mail" },
    linkedin && { label: "Connect on LinkedIn", value: "linkedin.com/in/shubhanknair", href: linkedin, external: true, tint: "#F6E1D3", ink: "#8A3A14", icon: "linkedin" },
    { label: "Call me", value: site.phone.display, href: `tel:${site.phone.tel}`, tint: "#D6EEDC", ink: "#22603A", icon: "phone" },
    site.resume && { label: "Download CV", value: "PDF, 1 page", href: site.resume, download: true, tint: "#F6E3B8", ink: "#7A4A0C", icon: "download" },
  ].filter(Boolean) as { label: string; value: string; href: string; external?: boolean; download?: boolean; tint: string; ink: string; icon: keyof typeof ICONS }[];

  return (
    <Band tone="hero" className="contact2">
      <div className="contact2__grid">
        <div className="contact2__intro">
          <Eyebrow>Contact</Eyebrow>
          <SplitText as="h1" text="Let’s work together" className="t-h1 contact2__title" />
          <p className="t-subtitle contact2__lead reveal reveal-2">
            Have a product, a problem or just a question? I usually reply within a day.
          </p>
          <p className="contact2__place reveal reveal-2">
            <span className="status-dot" aria-hidden /> Based in {site.location} · open to remote work
          </p>
          <div className="contact2__art reveal reveal-3">
            <ContactArt />
          </div>
        </div>

        <ul className="contact2__cards">
          {cards.map((c, i) => (
            <Reveal as="li" key={c.label} delay={150 + i * 90}>
              <a
                href={c.href}
                className="ccard"
                style={{ "--tint": c.tint, "--cink": c.ink } as React.CSSProperties}
                {...(c.external ? { target: "_blank", rel: "me noopener" } : {})}
                {...(c.download ? { download: true } : {})}
              >
                <span className="ccard__icon">
                  <Icon kind={c.icon} />
                </span>
                <span className="ccard__text">
                  <span className="ccard__label">{c.label}</span>
                  <span className="ccard__value">{c.value}</span>
                </span>
                <span className="ccard__go" aria-hidden>
                  <ArrowUpRight size={16} />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </Band>
  );
}
