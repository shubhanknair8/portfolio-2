import { site } from "@/content/site";
import { Handshake } from "@/components/site/HandshakeColor";
import { ArrowUpRight } from "@/components/site/icons";
import { Band, Eyebrow } from "@/components/site/bits";
import { Reveal, SplitText } from "@/components/motion";

export const metadata = { title: "Contact", description: "Get in touch with Shubhank Nair: email, LinkedIn, phone or download the CV." };

/** Dotted pixel icons: each string is one row of a 9×9 grid, "#" = dot. */
const PIX: Record<string, string[]> = {
  mail: ["#########", "##.....##", "#.#...#.#", "#..#.#..#", "#...#...#", "#.......#", "#.......#", "#########", "........."],
  linkedin: ["##.......", "##.......", ".........", "##.##.##.", "##.######", "##.##..##", "##.##..##", "##.##..##", "........."],
  phone: ["##.......", "###......", ".##......", ".##......", "..##.....", "...##....", "....####.", ".....####", "......##."],
  download: ["....#....", "....#....", "....#....", "..#.#.#..", "...###...", "....#....", ".........", "#.......#", "#########"],
};
const Icon = ({ kind }: { kind: keyof typeof PIX }) => (
  <svg width="24" height="24" viewBox="0 0 27 27" aria-hidden fill="currentColor">
    {PIX[kind].flatMap((row, y) => row.split("").map((c, x) => (c === "#" ? <rect key={`${x}-${y}`} x={x * 3} y={y * 3} width="2.2" height="2.2" rx="0.4" /> : null)))}
  </svg>
);

export default function Page() {
  const linkedin = site.socials.find((s) => /linkedin/i.test(s.href))?.href;
  const cards = [
    { label: "Email me", value: site.email, href: `mailto:${site.email}`, tint: "#DCE1F7", ink: "#2C3F8F", icon: "mail" },
    linkedin && { label: "Connect on LinkedIn", value: "linkedin.com/in/shubhanknair", href: linkedin, external: true, tint: "#F6E1D3", ink: "#8A3A14", icon: "linkedin" },
    { label: "Call me", value: site.phone.display, href: `tel:${site.phone.tel}`, tint: "#D6EEDC", ink: "#22603A", icon: "phone" },
    site.resume && { label: "Download CV", value: "PDF, 1 page", href: site.resume, download: true, tint: "#F6E3B8", ink: "#7A4A0C", icon: "download" },
  ].filter(Boolean) as { label: string; value: string; href: string; external?: boolean; download?: boolean; tint: string; ink: string; icon: keyof typeof PIX }[];

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
            <Handshake />
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
