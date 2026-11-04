import { todo, type CaseStudy } from "../types";

/**
 * The F* Word AI: a live, running startup. Product facts come from the public website (thefword.ai);
 * the design reasoning below is a draft for Shubhank to confirm, edit or replace.
 * The company's own marketing figures are not presented as design outcomes.
 */
export const theFWord: CaseStudy = {
  slug: "the-f-word-ai",
  title: "The F* Word AI",
  ready: true,
  cover: "/images/the-f-word-ai/cover-v3-soft.jpg",
  summary:
    "AI workflow software that takes fashion brands from live trends to an editable tech pack, 3D fit and launch visuals in one connected product record. As Product Designer my main responsibility was the tech pack experience, alongside the core product design and the garment creation flows.",
  outcomeLine: "Designing the tech pack experience for an AI fashion platform: from garment idea to a factory-ready spec designers can trust.",
  cardLine: "AI fashion product development platform",
  meta: {
    role: "Product Designer: tech pack experience (main responsibility), core product design and garment creation flows",
    team: todo("Team (for example: founders, engineers, fashion tech experts)"),
    timeline: "Dec 2025 – Aug 2026",
    year: "2025–2026",
    platform: "Web app",
    industry: "Fashion-tech / AI",
    tools: "Figma, FigJam, Figma Make, Google Stitch, Uizard, Framer, ChatGPT, Claude, Gemini, Midjourney, Notion, Miro, Jira, Loom",
    status: "Live product, running startup",
  },

  problem: [
    "Turning a trend into a garment a factory can make takes many hand-offs: moodboards, briefs, sketches, tech packs, measurements, samples and photoshoots, often spread across separate tools and files.",
    "Every hand-off loses context, and every correction means redoing work downstream. AI can generate each piece quickly, but designers still need to stay in control of the result.",
  ],
  painPoints: [
    { title: "Scattered tools", body: "Trends, design, specs and visuals live in different places with no shared source of truth." },
    { title: "Slow, fragile tech packs", body: "Specs, BOM, points of measure and grading are built by hand, and one change means redoing pages of work." },
    { title: "Costly sampling", body: "Fit problems are found late, after physical samples are made." },
    { title: "Trust in AI output", body: "Generated work is only useful if teams can check and edit it before it reaches a factory." },
  ],

  goals: [
    "One connected flow from trend to concept, 3D, tech pack and visuals",
    "Keep designers in creative control while AI handles repetitive steps",
    "Make every AI output editable and reviewable, never a dead end",
    "Serve three roles in one product: creative, technical and merchandising teams",
  ],
  constraints: "A live startup product: designs had to ship in small increments alongside engineering, for expert users with very different jobs.",

  research: {
    method: ["Stakeholder workshops with the team, and flow research with fashion designers ", todo("confirm who you spoke to")],
    insights: [
      { finding: "Each role cares about a different part of the same garment: look, fit and specs, or launch content.", decision: "One product record that every role works on, with views for each job." },
      { finding: "Designers distrust output they can’t change.", decision: "Every generated asset opens as an editable draft." },
      { finding: "Mistakes are most expensive once a tech pack reaches the factory.", decision: "Clear review checkpoints before production hand-off." },
    ],
    stats: "",
  },

  strategy: [
    { title: "One product record", body: "Moodboard, concept, 3D, tech pack and visuals all attach to the same garment, so nothing is re-entered." },
    { title: "Step-by-step garment flow", body: "Trends → Concepts → 3D → Tech Pack → Visuals, with progress always visible and any step revisitable." },
    { title: "Editable AI drafts", body: "AI fills in the tedious parts; designers adjust colorways, measurements and details directly." },
    { title: "Review before hand-off", body: "Technical review gates before anything is sent to the factory." },
  ],

  principle: "AI does the repetitive work; the designer makes the decisions.",

  flow: ["Trends", "Concepts", "3D", "Tech pack", "Visuals", "Handoff"],

  decisions: [
    {
      screen: "Tech pack",
      title: "A tech pack that reads like a document but edits like a form",
      problem: "Tech packs are long, dense specs (BOM, points of measure, grading, construction notes) that were built by hand and redone after every change.",
      detail: "An AI-drafted tech pack split into clear sections, where every field, measurement and material can be edited in place and changes carry through the rest of the pack.",
      why: "The tech pack is what the factory builds from, so it had to be fast to create but easy to check line by line.",
      rejected: [{ option: todo("Option considered"), why: todo("Why rejected") }],
    },
    {
      screen: "Tech pack",
      title: "Version history and review before factory hand-off",
      problem: "A wrong measurement or material in a sent tech pack means a wasted sample.",
      detail: "Versioned tech packs with a technical review step before anything is sent to production.",
      why: "Teams can move fast on drafts and still know exactly what was approved.",
      rejected: [],
    },
    {
      title: "A guided garment flow instead of separate tools",
      problem: "Designers jumped between tools and lost context at every hand-off.",
      detail: "A single step-based flow from trend to tech pack, built around one product record.",
      why: "Context travels with the garment, so a change in one step carries through to the next.",
      rejected: [{ option: todo("Option considered"), why: todo("Why rejected") }],
    },
    {
      title: "AI output always lands as an editable draft",
      problem: "Generated results are hard to trust when they can’t be changed.",
      detail: "Moodboards, specs, BOM and measurements open as drafts the designer can edit before approving.",
      why: "Control builds trust, and trust is what makes people actually use the AI.",
      rejected: [],
    },
  ],

  screens: [],

  outcome: {
    kind: "validated",
    items: ["Live product used by fashion teams.", todo("Add real outcomes you can share (usage, feedback, launches)")],
  },

  learnings: [
    { title: "The tech pack is the product", body: "Everything upstream only matters if it ends in a spec a factory can build from, so I designed backwards from the tech pack." },
    { title: "Design for three jobs at once", body: "Creative, technical and launch teams share one garment but need different views of it." },
    { title: "Control makes AI usable", body: "Editable drafts and clear review steps matter more than how impressive the generation looks." },
  ],

  whatIdChange: [],
};
