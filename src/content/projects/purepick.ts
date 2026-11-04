import { todo, type CaseStudy } from "../types";

/**
 * PurePick case study, from Shubhank's case-study PDF (Nov 2026).
 * Held back until confirmed as real: research counts (42 interviews, 500+ survey responses, 5 focus groups,
 * 10 experts), survey percentages (89%, 76%, 94%, 68%, 3x), "70% of urban fruits", the 95% accuracy /
 * 100K training images claim, and every "impact" figure (87%, 92%, 4.8/5, 3.2x, 15 minutes saved, 2.4x).
 * A design concept cannot have a trained model or beta-test results; add them back only with a real source.
 */
export const purepick: CaseStudy = {
  slug: "purepick",
  title: "PurePick",
  ready: true,
  cover: "/images/purepick/cover-v2-soft.jpg",
  summary:
    "A concept app that helps shoppers check fruit for chemical adulteration with their phone camera: point, tap, and get a clear safe, caution or unsafe answer while still at the stall.",
  outcomeLine: "Scan your fruit. Eat safe.",
  cardLine: "Fruit safety scanning app concept",
  meta: {
    role: "UI/UX Designer (group project)",
    team: "College group project",
    timeline: "2–3 months",
    year: "2023",
    platform: "Mobile app",
    industry: "Food safety / Health",
    tools: "Figma, ChatGPT, Leonardo.ai, Miro, Notion, Google Forms, Canva, Maze",
    status: "College concept project",
  },

  problem: [
    "Fruit in city markets is often treated with chemicals: calcium carbide for artificial ripening, wax for shine, and pesticide residue that does not wash off.",
    "Shoppers rely on looks, smell and the vendor’s word, but treated fruit is made to look fresh. Lab tests are accurate but take days. There is no quick way to check at the point of purchase.",
  ],
  painPoints: [
    { title: "Can’t tell by looking", body: "Chemical treatment is designed to mimic natural ripeness." },
    { title: "Trust deficit", body: "Every vendor says “organic”, and there is no way to verify it." },
    { title: "No instant method", body: "Lab tests take days and DIY kits don’t work in a busy market." },
  ],

  goals: [
    "Give a clear answer in seconds, while the shopper is still at the stall",
    "Build trust in the result through confidence levels and plain explanations",
    "Offer next steps and safer alternatives, not just a warning",
    "Work on low-end phones and without internet",
  ],
  constraints: "Market conditions: crowds, time pressure and poor connectivity. It has to run on budget phones.",

  research: {
    method: [
      "Secondary research, plus interviews and surveys with 15–20 shoppers.",
    ],
    insights: [
      { finding: "Shoppers don’t trust their own judgement when buying fruit.", decision: "A camera scan that gives a definite verdict." },
      { finding: "Speed is everything: in a market, people need an answer in seconds, not days.", decision: "The app opens straight into the camera." },
      { finding: "People want solutions, not just warnings.", decision: "Every unsafe result suggests safer alternatives." },
      { finding: "Trust in vendor claims is very low.", decision: "Show confidence levels and explain what was detected." },
      { finding: "Parents of young children are the most motivated users.", decision: "Reassuring tone and clear, calm result screens." },
    ],
    stats: "",
    persona: {
      name: "Priya Sharma",
      age: 32,
      occupation: "Marketing manager, parent of a 2-year-old",
      city: "Mumbai",
      context: "Shops 2–3 times a week and spends 15–20 minutes choosing fruit.",
      goals: ["Make sure her daughter eats safe fruit", "Decide quickly while shopping", "Find vendors she can trust"],
      frustrations: ["Can’t tell which fruit is safe by looking", "Misleading “organic” labels", "Worry about long-term effects on her child"],
      behaviour: ["Searches online for tips", "Uses several parenting and health apps", "Prefers morning markets"],
      quote: "I spend ten minutes looking at every apple, and I still don’t know if it’s safe for my daughter.",
    },
  },

  journey: {
    asIs: [
      { step: "Going to market", note: "No way to verify" },
      { step: "Selecting fruit", note: "Guessing by looks" },
      { step: "Doubting quality", note: "Vendor claims unverifiable" },
      { step: "Buying anyway", note: "No better option" },
      { step: "Eating", note: "Lingering worry" },
    ],
    toBe: [
      { step: "Before shopping", note: "A reliable tool in your pocket" },
      { step: "Scan", note: "Answer in seconds" },
      { step: "Clear verdict", note: "Safe, caution or unsafe" },
      { step: "Confident purchase", note: "Or a safer alternative" },
      { step: "Peace of mind", note: "Especially for children" },
    ],
  },

  strategy: [
    { title: "Instant scan", body: "The app opens to the camera. Point at the fruit, tap once, and get a result. Works offline." },
    { title: "Clean, focused UI", body: "One primary action per screen, thumb-friendly layout, advanced features revealed only when needed." },
    { title: "Trust indicators", body: "Three unmistakable results (safe, caution, unsafe), each with a confidence level and a next step." },
    { title: "Plain-language education", body: "“Learn more” explains what was found, its health effects and safer alternatives, without jargon." },
  ],

  principle: "Make a worrying, complex problem feel effortless: instant, trustworthy and empowering.",

  flow: ["Open", "Scan", "Result", "Learn", "History"],

  decisions: [
    {
      title: "Camera scanning over hardware or lab testing",
      problem: "Shoppers need an answer at the stall, on the phone they already have.",
      detail: "A phone-camera scan with on-device detection, chosen from 20+ concepts.",
      why: "It was the only option that was instant, needed no extra purchase and worked in a real market.",
      rejected: [
        { option: "Portable sensor device", why: "Costly hardware is a barrier to everyday use." },
        { option: "Lab testing network", why: "Results take days, which is useless while shopping." },
        { option: "QR-code traceability", why: "Needs vendor cooperation and only covers participating markets." },
        { option: "Knowledge library on its own", why: "Teaches, but gives no instant verification. Kept as a feature instead." },
      ],
    },
    {
      title: "Three-state verdict with a confidence level",
      problem: "A bare yes or no from an AI is hard to trust.",
      detail: "Safe (green), caution (yellow) or unsafe (red), each with a confidence percentage, a short explanation and a next step.",
      why: "Showing certainty openly makes borderline results believable.",
      rejected: [],
    },
    {
      title: "Uncertain results say so",
      problem: "Poor light, unknown fruit and low-confidence scans happen in real markets.",
      detail: "Below a confidence threshold the app shows “Uncertain” and suggests rescanning from another angle or with better light.",
      why: "A wrong confident answer would destroy trust faster than an honest “not sure”.",
      rejected: [],
    },
  ],

  screens: [
    { label: "Home", image: "/images/purepick/home.png", alt: "PurePick home with a large Scan Fruit button, total scans and safe rate, and recent scans", caption: "The scan action dominates the screen; history and stats stay secondary." },
    { label: "Scan", image: "/images/purepick/scan.png", alt: "Camera view with corner guides around fruit, a Ready to Scan tag and a large capture button", caption: "Corner guides and a ready state help people frame the fruit; the dark UI keeps focus on it." },
    { label: "Safe result", image: "/images/purepick/safe.png", alt: "Green No Adulterant Detected result with 95% confidence, fruit photo and scan details", caption: "Green, a confidence level and the scan details: reassurance at a glance." },
    { label: "Unsafe result", image: "/images/purepick/unsafe.png", alt: "Red Not Safe result with 91% confidence, a banana photo and a Detection Found warning about calcium carbide", caption: "Red, what was found and why it matters, with a way to safer alternatives." },
    { label: "Learn more", image: "/images/purepick/learn.png", alt: "Calcium carbide explainer with what it is, health effects and visual signs", caption: "Layered education: a plain explanation first, then health effects and visual signs." },
    { label: "History", image: "/images/purepick/history.png", alt: "Scan history grouped by day with safe, caution and unsafe badges and filters", caption: "Past scans grouped by day, with colour-coded status and quick filters." },
  ],

  designSystem: {
    colors: [
      { name: "Safe Green", hex: "#01B15B" },
      { name: "Caution Orange", hex: "#FE9901" },
      { name: "Unsafe Red", hex: "#FE375C" },
      { name: "Background", hex: "#FFF1F1" },
    ],
    typeScale: ["Soft greens for health and safety", "One clear primary action per screen", "Rounded corners and a friendly tone"],
  },

  outcome: {
    kind: "validated",
    items: ["This is a concept project. The detection model and results are designed, not built or measured."],
  },

  learnings: [
    { title: "Answers, not lectures", body: "Under time pressure people want a verdict first; education is optional depth." },
    { title: "Trust is earned in the details", body: "Confidence levels, explanations and saying “not sure” build more trust than a confident yes/no." },
    { title: "Hide complexity, not capability", body: "The tech stays invisible; the experience is point and tap." },
    { title: "Solve the core problem first", body: "Version 1 is scanning and results only; community and alerts wait until the core is proven." },
  ],
  challenges: [
    "Designing for crowded, noisy markets with poor connectivity",
    "Showing AI uncertainty without causing panic",
    "Keeping the app usable on low-end phones",
  ],

  whatIdChange: [
    "Validate the concept with real shoppers using a clickable prototype before any claims about accuracy or impact.",
    "Talk to food-safety experts about which adulterants a camera can realistically detect, and design honest limits into the UI.",
  ],
};
