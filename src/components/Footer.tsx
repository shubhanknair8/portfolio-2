import Link from "next/link";
import { site } from "@/content/site";
import { Rich, TodoMark } from "./Rich";
import { Band } from "./site/bits";
import { NavList } from "./site/NavList";
import { Profile } from "./site/Profile";

export function Footer() {
  return (
    <Band tone="dark" as="footer">
      <div className="footer__top">
        <Link href="/" className="t-logo">
          {site.logo}
        </Link>
        <a href="#top" className="t-span">
          Back to top
        </a>
      </div>

      <div className="footer__main halves">
        <div>
          <Profile />
          <p className="t-subtitle hero__tagline">
            <Rich value={site.tagline} />
          </p>
          <div className="hero__contact">
            <a href={`mailto:${site.email}`} className="link-underline">
              {site.email}
            </a>
            <span className="t-span">{site.location}</span>
          </div>
        </div>
        <nav aria-label="Footer">
          <NavList />
        </nav>
      </div>

      <div className="footer__links">
        <ul aria-label="Social links">
          {site.socials.length ? (
            site.socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} rel="me noopener" target={s.href.startsWith("mailto:") ? undefined : "_blank"} className="link-underline">
                  {s.label}
                </a>
              </li>
            ))
          ) : (
            <li>
              <TodoMark hint="socials" />
            </li>
          )}
        </ul>
        {site.legal.length > 0 && (
          <ul aria-label="Legal">
            {site.legal.map((s) => (
              <li key={s.href}>
                <Link href={s.href}>{s.label}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="footer__legal">
        © {new Date().getFullYear()} {site.name}
      </p>
    </Band>
  );
}
