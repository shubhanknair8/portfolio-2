import { todo, type CaseStudy } from "../types";

/**
 * YatraSure case study. Content only — no numbers, quotes or results are
 * invented here. Anything unknown is a todo() and renders as a visible [TODO].
 */
export const yatrasure: CaseStudy = {
  slug: "yatrasure",
  title: "YatraSure",
  outcomeLine: todo(
    'One-line outcome, e.g. "A motor insurance app that turns a 15-step process into a calm 8-step one"'
  ),

  cardLine: "Motor insurance mobile app",
  meta: {
    role: todo("Your exact contribution"),
    team: todo("Solo, or who else"),
    timeline: "3 months",
    year: todo("Year"),
    platform: "Mobile (iOS and Android)",
    tools: todo("Tools"),
    status: todo("Prototype tested with X users / Concept"),
  },

  // Short labels only — the flow strip never wraps mid-word and scrolls on small screens.
  flow: ["Vehicle", "Plan", "Add-ons", "Details", "KYC", "Payment", "Policy"],

  problem: [
    "Buying and renewing motor insurance in India is slow and confusing.",
    "Users face long forms, repeated data entry, jargon (IDV, NCB, add-ons), and a renewal flow that treats returning users like new ones.",
  ],

  goals: [
    "Simplify purchase and renewal",
    "Reduce cognitive load with progressive disclosure",
    "Build trust through transparent pricing",
    "Help users decide with guided recommendations",
  ],
  constraints: todo("Constraints"),

  research: {
    method: ["Interviews, surveys and benchmarking with ", todo("confirm: 50+ people")],
    insights: [
      {
        finding: "Users hate re-entering data.",
        decision: "Auto-fetch vehicle details from the registration number, and pre-fill renewals.",
      },
      {
        finding: "Users are confused by IDV, NCB and add-ons.",
        decision: "Plain-language explainers.",
      },
      {
        finding: "Users want guidance.",
        decision: "Suggested options.",
      },
      {
        finding: "Users worry about payment and KYC.",
        decision: "Consent, trust cues and a retry flow.",
      },
    ],
    stats: todo("Stats — show only if sourced"),
    persona: {
      name: "Rajeev Mehta",
      age: 35,
      occupation: "IT professional",
      city: "Mumbai",
      context: "Drives a mid-range sedan.",
    },
  },

  principle: "Every design decision should save time, build trust, or reduce confusion.",

  decisions: [
    {
      title: "Auto-fetch vehicle details from the registration number",
      rejected: [
        { option: "Manual entry", why: todo("Why rejected") },
        { option: todo("Other option considered"), why: todo("Why rejected") },
      ],
    },
    {
      title: "Add-ons explained in plain language",
      detail:
        "Each add-on has a one-line description, a real-life example, and its price shown as the amount added.",
      rejected: [
        { option: "One long text list", why: todo("Why rejected") },
        { option: '"Learn more" links only', why: todo("Why rejected") },
        { option: "Pre-selected bundles", why: todo("Why rejected") },
      ],
    },
    {
      title: todo("Third decision, e.g. IDV explainer"),
      rejected: [{ option: todo("Option considered"), why: todo("Why rejected") }],
    },
    {
      title: "Payment retry that keeps entered data",
      rejected: [{ option: todo("Option considered"), why: todo("Why rejected") }],
    },
  ],

  screens: [
    { label: "Home and dashboard", alt: "YatraSure home and dashboard screen", caption: todo("Why this screen is built this way") },
    { label: "Vehicle details and plans", alt: "YatraSure vehicle details and plan selection screen", caption: todo("Why this screen is built this way") },
    { label: "Add-ons", alt: "YatraSure add-ons screen", caption: todo("Why this screen is built this way") },
    { label: "KYC", alt: "YatraSure KYC screen", caption: todo("Why this screen is built this way") },
    { label: "Payment", alt: "YatraSure payment screen", caption: todo("Why this screen is built this way") },
    { label: "Success", alt: "YatraSure policy issued screen", caption: todo("Why this screen is built this way") },
  ],

  // No real test data yet, so this renders as "What I validated".
  // When you have data, switch to:
  //   { kind: "results", cards: [{ value, label, source: "Prototype test, 8 users" }, ...] }
  // (max 3 cards; each needs a source). Quotes need a real name and consent: true.
  outcome: {
    kind: "validated",
    items: [
      "Usability tests showed the guided mobile flows, with progressive disclosure, improved policy comprehension.",
      todo("Test details (real data only): users tested, completion without help, time"),
    ],
  },

  whatIdChange: [todo("What I'd change #1"), todo("What I'd change #2")],

  next: { slug: "my-haven", title: "My Haven" },
};
