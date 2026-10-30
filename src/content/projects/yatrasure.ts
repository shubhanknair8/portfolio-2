import { todo, type CaseStudy } from "../types";

/**
 * YatraSure case study. Content only — no numbers, quotes or results are
 * invented here. Anything unknown is a todo() and renders as a visible [TODO].
 */
export const yatrasure: CaseStudy = {
  slug: "yatrasure",
  title: "YatraSure",
  outcomeLine: "A mobile motor insurance app that makes buying and renewing feel clear and trustworthy.",

  cardLine: "Motor insurance app, personal project",
  meta: {
    role: "Sole designer: research, journey mapping, wireframes, UI design and prototyping.",
    team: "Solo, personal project",
    timeline: "3 months",
    year: "2024",
    platform: "Mobile (iOS and Android)",
    tools: "Figma, Framer, Miro, Notion, Maze, Claude, ChatGPT, Midjourney",
    status: "Personal project (not live)",
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
    stats: todo("Stats: show only if sourced"),
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
      title: "Renewal-first home screen with a one-tap Renew policy",
      detail: "Returning users see their policy status, such as Expired, and a Renew policy button on the home screen, so renewing does not require navigation.",
      rejected: [{ option: todo("Option considered"), why: todo("Why rejected") }],
    },
    {
      title: "Payment retry that keeps entered data",
      rejected: [{ option: todo("Option considered"), why: todo("Why rejected") }],
    },
  ],

  screens: [
    { label: "Home and dashboard", alt: "YatraSure home and dashboard screen", caption: "Renewal is the most common return task, so it should not take navigation." },
    { label: "Vehicle details and plans", alt: "YatraSure vehicle details and plan selection screen", caption: "Entering only the registration number removes the highest-effort step at the start of the flow." },
    { label: "Add-ons", alt: "YatraSure add-ons screen", caption: "Guided choice reduces both over-buying and abandoning." },
    { label: "KYC", alt: "YatraSure KYC screen", caption: "Users see what they are buying while they verify, and consent is visible, not buried." },
    { label: "Payment", alt: "YatraSure payment screen", caption: "A failed payment is the most anxious moment in the journey, so retry keeps what was entered." },
    { label: "Success", alt: "YatraSure policy issued screen", caption: "Clear confirmation and an instant download end the anxiety loop and reduce the need to contact support." },
  ],

  // No real test data yet, so this renders as "What I validated".
  // When you have data, switch to:
  //   { kind: "results", cards: [{ value, label, source: "Prototype test, 8 users" }, ...] }
  // (max 3 cards; each needs a source). Quotes need a real name and consent: true.
  outcome: {
    kind: "validated",
    items: [
      "This is a personal project, not a live product. The design decisions follow the pain points from my research.",
    ],
  },

  whatIdChange: [
    "The app is not live, so I could not measure real completion or drop-off. With a live build I would set baseline metrics first, then compare after launch.",
    "I would test the prototype with 5 to 8 drivers before finalising the UI, especially the add-on explanations and the KYC step.",
  ],

  next: { slug: "my-haven", title: "My Haven" },
};
