import { profile, work } from "@/content/cv";
import { getProject } from "@/content/projects";
import { site } from "@/content/site";
import { RotatingWord } from "../motion";
import { ArrowUpRight } from "../site/icons";
import { HeroCardsFall } from "./HeroCardsFall";

/** Hero card poses: [rotate, x offset %, y offset %], back to front. */
const POSES: [number, number, number][] = [
  [-7, -12, 6],
  [9, 12, -4],
  [-2, 0, 0],
];

/**
 * Home hero: availability pill, grey/black headline with the typing word, intro line,
 * Download Resume button, and a fanned stack of the three featured project covers.
 * On scroll the cards fall into the "My projects" stack below (see HeroCardsFall).
 */
export function Hero() {
  const words = site.heroWords.map((w) => w.word.toLowerCase());
  const inkWords = site.heroWords.map((w) => ({ ...w, color: "var(--ink)" }));
  const [lead, ...rest] = profile.split(/(?<=\.)\s+/);
  const covers = work
    .filter((w) => w.featured)
    .slice(0, 3)
    .map((w) => ({ title: w.title, src: w.cover ?? (w.slug ? getProject(w.slug)?.cover : undefined) }))
    .filter((c): c is { title: string; src: string } => !!c.src)
    .reverse(); // first featured project ends up on top

  return (
    <section className="hero5" aria-labelledby="hero-h">
      <div className="hero5__inner">
        <div className="hero5__copy">
          {site.available && (
            <p className="hero5__pill">
              <span className="status-dot" aria-hidden /> Available for work
            </p>
          )}
          <h1 id="hero-h" className="hero5__title">
            <span className="sr-only">
              {site.heroLead} {words.slice(0, -1).join(", ")} and {words[words.length - 1]}.
            </span>
            <span aria-hidden className="hero5__lead">
              {site.heroLead}
            </span>
            <span aria-hidden className="hero5__word">
              <RotatingWord words={inkWords} />
            </span>
          </h1>
          <p className="hero5__intro">
            <strong>{lead}</strong> {rest.join(" ")}
          </p>
          {site.resume && (
            <a href={site.resume} download className="hero5__cta">
              Download Resume
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>

        <div className="hero5__cards" aria-hidden>
          {covers.map((c, i) => {
            const [r, x, y] = POSES[(POSES.length - covers.length + i) % POSES.length];
            return (
              <div key={c.title} className="hero5__card" data-rot={r} style={{ ["--r" as string]: `${r}deg`, ["--x" as string]: `${x}%`, ["--y" as string]: `${y}%` }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.src} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <HeroCardsFall />
    </section>
  );
}
