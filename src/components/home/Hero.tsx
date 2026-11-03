import Link from "next/link";
import { profile, stats } from "@/content/cv";
import { site } from "@/content/site";
import { TodoMark } from "../Rich";
import { CountUp, MotionToggle, RotatingWord } from "../motion";
import { ArrowUpRight } from "../site/icons";

/** Home hero: copy | portrait | three stat boxes, then a motion toggle. */
export function Hero() {
  const words = site.heroWords.map((w) => w.word.toLowerCase());
  return (
    <section className="band band--hero hero2" aria-labelledby="hero-h">
      <div className="wrap">
        <div className="hero2__grid">
          <div className="hero2__copy">
            <p className="hero2__role reveal">{String(site.role)}</p>
            <h1 id="hero-h" className="hero2__title reveal reveal-2">
              <span className="sr-only">
                {site.heroLead} {words.slice(0, -1).join(", ")} and {words[words.length - 1]}.
              </span>
              <span aria-hidden>{site.heroLead} </span>
              <RotatingWord words={site.heroWords} />
            </h1>
            <p className="t-body hero2__intro reveal reveal-3">{profile}</p>
            <div className="hero2__actions reveal reveal-3">
              {site.resume ? (
                <a href={site.resume} className="btn-dark" download>
                  Download resume <ArrowUpRight />
                </a>
              ) : (
                <Link href="/contact" className="btn-dark">
                  Let’s talk <ArrowUpRight />
                </Link>
              )}
              <a href={`mailto:${site.email}`} className="link-underline t-span">
                {site.email}
              </a>
            </div>
          </div>

          <div className="slot slot--portrait hero2__portrait">
            {site.portrait ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={site.portrait} alt={`Portrait of ${site.name}`} />
            ) : (
              <TodoMark hint="portrait" />
            )}
            <span className="hero2__place">{site.location}</span>
          </div>

          <ul className="hero2__stats" aria-label="At a glance">
            {stats.slice(0, 3).map((s) => (
              <li key={s.label} className="hero2__stat">
                <span className="hero2__num">
                  <CountUp value={s.value} suffix={s.suffix} />
                </span>
                <span className="label">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="wrap hero2__motion">
        <MotionToggle />
      </div>
    </section>
  );
}
