import type { CSSProperties } from "react";
import { site } from "@/content/site";
import { MotionToggle, RotatingWord } from "../motion";
import { ArrowUpRight } from "../site/icons";
import { IntroCurtain } from "./IntroCurtain";
import { HeroParallax } from "./HeroParallax";

/** Violet from the reference layout. */
const NAME_COLOR = "#561DE2";

/**
 * Home hero: a tall photo strip with the original colourful background, and the name set
 * large across the page. Letters over the strip turn white (a second white copy of the name
 * clipped to the strip), the rest stay violet.
 */
export function HeroStrip() {
  const words = site.heroWords.map((w) => w.word.toLowerCase());
  const first = site.name.split(" ")[0];
  return (
    <>
      {/* Outside the hero so it can cover the header too */}
      <IntroCurtain color={NAME_COLOR} />
      <section className="hero4" aria-labelledby="hero-h" style={{ "--name-color": NAME_COLOR } as CSSProperties}>
        <div className="hero4__strip">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/portrait-strip.jpg" alt={`Portrait of ${site.name}`} />
        </div>

        <p className="hero4__name" aria-hidden>
          <span>{first}</span>
        </p>
        <p className="hero4__name hero4__name--knock" aria-hidden>
          <span>{first}</span>
        </p>

        <div className="hero4__copy">
          <p className="hero4__role">
            Product Designer <span aria-hidden>|</span> {site.location}
          </p>
          <h1 id="hero-h" className="hero4__title">
            <span className="sr-only">
              {site.name}. {site.heroLead} {words.slice(0, -1).join(", ")} and {words[words.length - 1]}.
            </span>
            <span aria-hidden>{site.heroLead}</span>
            <span aria-hidden className="hero4__word">
              <RotatingWord words={site.heroWords} />
            </span>
          </h1>
        </div>

        <div className="hero4__foot">
          {site.resume && (
            <a href={site.resume} download className="hero4__cta">
              Download Resume <ArrowUpRight size={16} />
            </a>
          )}
          <MotionToggle />
        </div>
        <HeroParallax />
      </section>
    </>
  );
}
