import { todo, type CaseStudy } from "../types";

/** My Haven — partly filled from the CV. Everything else is a visible [TODO]. */
export const myHaven: CaseStudy = {
  slug: "my-haven",
  title: "My Haven",
  outcomeLine: todo("One-line outcome"),
  cardLine: "Mental health support app",
  meta: {
    role: todo(),
    team: todo(),
    timeline: todo(),
    year: todo(),
    platform: todo(),
    tools: todo(),
    status: todo(),
  },
  problem: [todo("Problem")],
  goals: [todo("Goals")],
  constraints: todo("Constraints"),
  research: { method: "Interviews and empathy mapping across age groups.", insights: [], stats: todo("Stats: only if sourced") },
  principle: "A calm, trust-building visual language.",
  decisions: [],
  screens: [],
  outcome: {
    kind: "validated",
    items: [
      "Validated through usability testing.",
      "Meets WCAG 2.1 AA accessibility standards.",
      todo("Test details (real data only)"),
    ],
  },
  whatIdChange: [todo()],
  next: { slug: "yatrasure", title: "YatraSure" },
};
