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
  /** Card image for projects without a case study. Path under /public. */
  cover?: string;
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
    title: "YatraSure",
    kind: "Motor insurance app, personal project",
    slug: "yatrasure",
    points: [
      "Ran interviews and benchmarking to find friction in insurance purchase and renewal journeys.",
      "Designed guided mobile flows with progressive disclosure so policy terms are easier to understand.",
    ],
  },
  {
    title: "My Haven",
    kind: "Mental health support app",
    slug: "my-haven",
    points: [
      "Ran interviews and empathy mapping across age groups to shape a calm, trust-building visual language.",
      "Validated through usability testing and met WCAG 2.1 AA accessibility standards.",
    ],
  },
  {
    title: "The F* Word AI",
    kind: "AI fashion product development platform",
    href: "https://thefword.ai",
    points: [
      "Designed the web experience for a platform that takes fashion designers from sketch to production-ready tech packs.",
      "Structured guided workflows so designers keep creative control while AI handles repetitive steps.",
    ],
  },
  {
    title: "Anuvadini AI",
    kind: "AICTE multilingual AI platform",
    points: [
      "Designing accessibility-first, multi-script interfaces for AICTE’s multilingual AI platform.",
      "Turning AI behaviour (loading, low-confidence results, errors) into clear interface states.",
    ],
  },
  {
    title: "Hyped Messenger",
    kind: "AICTE messaging app",
    live: true,
    points: [
      "Product designer on a homegrown alternative to WhatsApp, now live.",
      "Owned user flows and managed design timelines alongside development.",
    ],
  },
  {
    title: "Topper",
    kind: "AICTE ed-tech learning platform",
    points: [
      "Designing a web platform for live tuitions and study material, from school level to exams like SSC CGL, then extending it to mobile.",
      "Shaping one stage for all learners, so every level and exam goal is served in one place.",
    ],
  },
  {
    title: "PlayZone",
    kind: "Sports accessibility platform",
    points: [
      "Interviewed differently-abled participants to understand barriers to discovering and booking sports facilities.",
      "Built personas and journey maps, and led ideation workshops to shape an inclusive feature set.",
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
  design: ["Figma", "FigJam", "Adobe Illustrator", "Maze"],
  ai: ["Google Stitch", "Uizard", "Page Flows", "Figma Make", "Framer AI", "Midjourney", "ChatGPT", "Claude"],
};

export const certifications = [
  { title: "Material Design", by: "Google" },
  { title: "The AI-Driven Product Designer" },
  { title: "Customer Journey Mapping with Generative AI" },
  { title: "Enterprise Design Thinking Practitioner" },
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
