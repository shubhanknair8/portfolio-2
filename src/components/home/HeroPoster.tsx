import { site } from "@/content/site";
import { MotionToggle, RotatingWord } from "../motion";
import { ArrowUpRight } from "../site/icons";
import { IntroCurtain } from "./IntroCurtain";
import { HeroParallax } from "./HeroParallax";

/** Blue sampled from the background of Shubhank's portrait. */
const NAME_BLUE = "#4A56C8";

/**
 * Home hero, poster style: role line and rotating headline top left, a giant first name
 * running behind the cut-out portrait, and a "Download résumé" link in the same blue.
 */
export function HeroPoster() {
  const words = site.heroWords.map((w) => w.word.toLowerCase());
  const first = site.name.split(" ")[0].toLowerCase();
  return (
    <>
    {/* Outside the hero so it can cover the header too */}
    <IntroCurtain color={NAME_BLUE} />
    <section className="hero3" aria-labelledby="hero-h" style={{ "--name-blue": NAME_BLUE } as React.CSSProperties}>
      <div className="hero3__inner">
        <p className="hero3__role reveal">
          Product Designer <span aria-hidden>|</span> {site.location}
        </p>

        <h1 id="hero-h" className="hero3__title">
          <span className="sr-only">
            {site.heroLead} {words.slice(0, -1).join(", ")} and {words[words.length - 1]}.
          </span>
          <span aria-hidden className="hero3__lead">
            {site.heroLead}
          </span>
          <span aria-hidden className="hero3__word">
            <RotatingWord words={site.heroWords} />
          </span>
        </h1>

        <p className="hero3__name" aria-hidden>
          {first}
        </p>

        {site.resume && (
          <a href={site.resume} download className="hero3__cta">
            Download Resume <ArrowUpRight size={16} />
          </a>
        )}

        <div className="hero3__motion">
          <MotionToggle />
        </div>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="hero3__photo" src="/images/portrait-bike.png" alt={`Portrait of ${site.name}`} />
      <HeroParallax />
    </section>
    </>
  );
}
