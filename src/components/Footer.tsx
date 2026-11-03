import Link from "next/link";
import { nav, site } from "@/content/site";
import { ArrowUpRight, Loops, SocialIcon } from "./site/icons";
import { SwapWord } from "./motion";

export function Footer() {
  return (
    <footer className="band band--dark footer2">
      <Loops />
      <div className="wrap">
        <div className="footer2__grid">
          <div>
            <p className="footer2__title">
              <span className="sr-only">Let’s design something clear together.</span>
              <span aria-hidden>
                Let’s <SwapWord words={["design", "shape", "build"]} />
              </span>
              <span className="footer2__dim" aria-hidden>
                something clear together.
              </span>
            </p>

            <div className="footer2__meta">
              <div>
                <p className="label">Social</p>
                <ul className="footer2__icons" aria-label="Social links">
                  {site.socials
                    .filter((s) => s.href.trim())
                    .map((s) => (
                      <li key={s.label}>
                        <a href={s.href} className="social-icon" rel="me noopener" target="_blank" aria-label={s.label} title={s.label}>
                          <SocialIcon kind={s.icon} />
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
              <div>
                <p className="label">Contact details</p>
                <p className="footer2__place">
                  <a href={`mailto:${site.email}`} className="link-underline">
                    {site.email}
                  </a>
                </p>
                <p className="footer2__place">
                  <a href={`tel:${site.phone.tel}`} className="link-underline">
                    {site.phone.display}
                  </a>
                </p>
                <p className="footer2__place footer2__dim-text">{site.location}</p>
              </div>
            </div>
          </div>

          <nav aria-label="Footer">
            <ul className="footer2__nav">
              {nav.filter((l) => !l.download).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="footer2__link">
                    {l.label}
                    <ArrowUpRight size={16} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer2__bottom">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <a href="#top" className="link-underline">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
