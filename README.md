# Shubhank Nair, portfolio

Next.js 14 (App Router) + Tailwind. Copy lives in typed data files; components only render it.

```bash
npm install
npm run dev          # http://localhost:3000/work/yatrasure
npm run build        # runs the content check first
```

## Adding / editing a case study

- Content: `src/content/projects/<slug>.ts` (typed by `src/content/types.ts`), registered in `src/content/projects/index.ts`.
- Missing content: use `todo("hint")`. It renders as a visible orange `[TODO] hint` chip so it can't ship unnoticed.
  Mixed text works too: `["Interviews with ", todo("confirm: 50+ people")]`.
- Screens: put images in `public/images/<slug>/` and set `image: "/images/<slug>/kyc.png"` on the slot.
- Card sketch (hover reveal on Home): set `sketch: "/images/<slug>/sketch.png"`.

## Rules the template enforces

- **Outcome heading follows content.** `outcome.kind: "validated"` renders "Validation status";
  `kind: "results"` renders "Outcome" with 1–3 cards (the type allows no more), each with a required `source`.
- **No testimonial without consent.** Quotes need `name` and `consent: true`; anything else is dropped.
- **Flow labels never wrap.** Short labels, `whitespace-nowrap` (also blocks the hyphen break in "Add-ons"), horizontal scroll on small screens.
- **"Aadhaar"** — `npm run check:content` fails the build on any other spelling.
- Motion is CSS-only text reveal + soft hovers, disabled under `prefers-reduced-motion`.

## Content sources

- `src/content/cv.ts` — profile, experience, projects, services, tools, certifications, education, languages (from the CV). Home and About render from here.
- `src/content/site.ts` — name, tagline, email, socials, portrait path.
- `src/content/projects/*.ts` — full case studies (YatraSure, My Haven).

## Motion

`src/components/motion.tsx` (no dependencies): scroll reveals, masked headline reveals, words that ink in on scroll, count-up stats. CSS adds the wordmark rise, toolkit marquee, timeline line-draw, card sheen and a scroll progress bar. All of it is off under `prefers-reduced-motion`, and content stays visible without JavaScript.
