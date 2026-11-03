/**
 * Everything on this page comes from Shubhank's CV. Nothing here is invented:
 * the counts in `stats` are simply counts of entries in this file.
 */

export type Role = {
  title: string;
  org: string;
  orgNote?: string;
  period: string;
  place?: string;
  points: string[];
};

export type Work = {
  title: string;
  kind: string;
  /** Internal case study slug, if one exists. */
  slug?: string;
  /** External link, if one exists. */
  href?: string;
  live?: boolean;
  /** Shown in the home page stack (max 3). The rest are on /work. */
  featured?: boolean;
  /** Short labels shown as chips and on the scrolling ribbons. */
  tags?: string[];
  /** Home page card image (UI screens). Case studies use the project cover. Path under /public. */
  cover?: string;
  /** Photo + logo image for the Work page grid. Path under /public. */
  tile?: string;
  points: string[];
};

export const profile =
  "UI/UX and Product Designer across AI, BFSI, fashion-tech, insurance, mental health and sports-tech. I turn complex problems into clear, accessible experiences, from research and information architecture to production-ready prototypes.";

export const domains = ["AI", "BFSI", "Fashion-tech", "Insurance", "Mental health", "Sports-tech"];

export const experience: Role[] = [
  {
    title: "UI/UX Designer",
    org: "Anuvadini AI",
    orgNote: "AICTE",
    period: "Sep 2026 – Present",
    points: [
      "Design interfaces for AICTE’s multilingual AI platform, Anuvadini AI, with accessibility-first, multi-script screens.",
      "Turn AI behaviour (loading, low-confidence results, errors) into clear interface states.",
      "Use Uizard, Google Stitch and Page Flows to speed up wireframes and flow research.",
    ],
  },
  {
    title: "Product Designer",
    org: "The F* Word",
    period: "Dec 2025 – Aug 2026",
    place: "Remote",
    points: [
      "Owned end-to-end product design for a web-based AI fashion platform, from research and flows to developer handoff.",
      "Ran stakeholder workshops and delivered annotated Figma prototypes that cut engineering back-and-forth.",
    ],
  },
  {
    title: "UI/UX Designer",
    org: "BusinessNext",
    orgNote: "BFSI",
    period: "May 2025 – Oct 2025",
    place: "Delhi, India",
    points: [
      "Contributed to an enterprise design system: reusable components, token-based colour and spacing, pattern documentation.",
      "Led the CustomerNext web redesign, simplifying navigation and high-frequency workflows through usability audits.",
      "Ran heuristic evaluations and formalised handoffs with annotated specs and a shared Figma library.",
    ],
  },
  {
    title: "Visual Designer",
    org: "Matrikas",
    period: "Sep 2021 – Nov 2021",
    place: "Delhi, India",
    points: ["Developed brand-aligned product design concepts, refined through team and market feedback."],
  },
];

export const work: Work[] = [
  {
    title: "Hyped Messenger",
    featured: true,
    live: true,
    slug: "anuvadini-ai",
    cover: "/images/hyped/cover-v4.jpg",
    tile: "/images/hyped/cover-square.jpg",
    kind: "Indian messaging app by Anuvadini AI (AICTE)",
    tags: ["Messaging", "Mobile app", "AICTE"],
    points: [
      "Designing product flows and screens for a homegrown Indian messenger, live on Android and iOS.",
      "Fitting chats, calls, SOS, games and multilingual tools into a navigation that stays simple.",
    ],
  },
  {
    title: "The F* Word AI",
    featured: true,
    live: true,
    slug: "the-f-word-ai",
    cover: "/images/the-f-word-ai/cover-v3.jpg",
    tile: "/images/the-f-word-ai/cover-square.jpg",
    kind: "AI fashion product development platform",
    tags: ["AI", "Fashion-tech", "Web"],
    href: "https://thefword.ai",
    points: [
      "Owned the tech pack experience: AI-drafted, editable specs (BOM, measurements, grading) ready for factory hand-off.",
      "Structured guided workflows so designers keep creative control while AI handles repetitive steps.",
    ],
  },
  {
    title: "YatraSure",
    featured: true,
    slug: "yatrasure",
    cover: "/images/yatrasure/cover-v2.jpg",
    tile: "/images/yatrasure/cover-square.jpg",
    kind: "Motor insurance app, personal project",
    tags: ["Insurance", "Mobile app", "Personal project"],
    points: [
      "Ran interviews and benchmarking to find friction in insurance purchase and renewal journeys.",
      "Designed guided mobile flows with progressive disclosure so policy terms are easier to understand.",
    ],
  },
  {
    title: "PurePick",
    slug: "purepick",
    cover: "/images/purepick/cover-v2.jpg",
    tile: "/images/purepick/cover-square.jpg",
    kind: "Fruit safety scanning app concept",
    tags: ["Food safety", "AI", "Mobile app"],
    points: [
      "Designed a camera-first app that tells shoppers in seconds whether fruit is safe, caution or unsafe.",
      "Built trust through confidence levels, plain-language explanations and safer alternatives.",
    ],
  },
  {
    title: "PlayZone",
    slug: "playzone",
    cover: "/images/playzone/cover-v2.jpg",
    tile: "/images/playzone/cover-square.jpg",
    kind: "Sports facility booking and community app",
    tags: ["Sports", "Booking", "Community"],
    points: [
      "Designed a mobile app to discover sports facilities, book live slots and find people to play with.",
      "Built personas and journey maps, and led ideation workshops to shape an inclusive feature set.",
    ],
  },
  {
    title: "My Haven",
    slug: "my-haven",
    tile: "/images/my-haven/cover-square.jpg",
    kind: "Mental health support app",
    tags: ["Mental health", "Accessibility"],
    points: [
      "Ran interviews and empathy mapping across age groups to shape a calm, trust-building visual language.",
      "Validated through usability testing and met WCAG 2.1 AA accessibility standards.",
    ],
  },
];

/** "What I can do" — each line is drawn from the CV. */
export const services = [
  { title: "User research", body: "Interviews, surveys, benchmarking and empathy mapping to find where journeys break." },
  { title: "Usability testing", body: "Usability tests, audits and heuristic evaluations that turn findings into fixes." },
  { title: "Information architecture", body: "Simplifying navigation and high-frequency workflows so complex products feel clear." },
  { title: "Wireframing & prototyping", body: "From flows and wireframes to annotated, production-ready Figma prototypes." },
  { title: "Design systems", body: "Reusable components, token-based colour and spacing, and pattern documentation." },
  { title: "Journey mapping", body: "Personas, journey maps and ideation workshops that shape inclusive feature sets." },
  { title: "AI-assisted design", body: "Designing clear states for AI behaviour, and using AI tools to move faster." },
  { title: "Dev handoff", body: "Annotated specs and shared Figma libraries so designs ship as intended." },
];

export const tools = {
  design: ["Figma", "FigJam", "Adobe Illustrator", "Maze", "Framer", "Miro", "Notion", "Page Flows"],
  // Check these are all tools you really use; delete any you don't.
  ai: ["Google Stitch", "Uizard", "Figma Make", "Framer AI", "ChatGPT", "Claude", "Midjourney", "Gemini", "Perplexity", "Relume", "v0"],
};

/** In display order: the first 4 show, the rest sit in the dropdown. Add `by: "Issuer"` to show who issued it. */
export const certifications: { title: string; by?: string }[] = [
  { title: "Using AI for UX Design and Research" },
  { title: "IBM SkillsBuild" },
  { title: "Product Designer Fellowship" },
  { title: "Learning ServiceNow (Next Experience UI)" },
  { title: "Material Design 3 for Beginners: Building UI Systems" },
  { title: "ChatGPT for Beginners: Using AI for Market Research" },
  { title: "The AI-Driven Product Designer" },
  { title: "What Is the Metaverse?" },
  { title: "Customer Journey Mapping with Generative AI" },
  { title: "How Blockchains Will Change Business" },
  { title: "Evil by Design: Persuasion in UX" },
  { title: "Critical Thinking and Problem Solving" },
  { title: "UI UX Jump Starter Course" },
  { title: "Microsoft Excel 2013 Certification" },
];

export const education = [
  { degree: "Master of Design, UI/UX", school: "Vivekananda Global University, Jaipur", period: "Aug 2023 – May 2025" },
  { degree: "Bachelor of Commerce (Hons.)", school: "Institute of Innovation and Technology Management, Delhi", period: "Jun 2020 – Jul 2023" },
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Fluent" },
  { name: "Malayalam", level: "Conversational" },
];

/** Counts of entries above — not claims, just tallies. */
export const stats = [
  { value: work.length, suffix: "", label: "Design projects" },
  { value: domains.length, suffix: "", label: "Industries" },
  { value: experience.length, suffix: "", label: "Roles" },
  { value: certifications.length, suffix: "", label: "Certifications" },
];
