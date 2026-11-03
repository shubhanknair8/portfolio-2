import { todo, type CaseStudy } from "../types";

/**
 * YatraSure case study, from Shubhank's case-study PDF (Oct 2026).
 * Left out on purpose: the PDF's outcome percentages (45%, 60%, 75%, 85%), "8–10 min", "simplified from 15 steps",
 * the Product Manager quote and "usability tests with low-fi prototypes". There is no real test data for these,
 * and the project is a personal concept. Add real numbers only when a real test has happened.
 */
export const yatrasure: CaseStudy = {
  slug: "yatrasure",
  title: "YatraSure",
  ready: true,
  cover: "/images/yatrasure/cover-v2.jpg",
  summary:
    "YatraSure is a mobile-first motor insurance app for buying and renewing vehicle insurance in India. The goal was to reduce friction, make insurance terms clear and build trust through thoughtful UX design.",
  outcomeLine: "Simplifying the motor insurance experience: a frictionless, trust-first journey from quote to policy.",

  cardLine: "Motor insurance app, personal project",
  meta: {
    role: "UI/UX Designer (solo): research, journey mapping, wireframes, UI design and prototyping",
    team: "Solo, personal project",
    timeline: "2 months",
    year: "2024",
    platform: "Mobile (iOS and Android)",
    industry: "Fintech / Insurance",
    tools: "Figma, Framer, Miro, Notion, Maze, Claude, ChatGPT, Midjourney",
    status: "Personal project (not live)",
  },

  problem: [
    "Buying and renewing motor insurance in India is slow and confusing.",
    "Users face long forms, repeated data entry, jargon (IDV, NCB, add-ons), and a renewal flow that treats returning users like new ones.",
  ],
  painPoints: [
    { title: "Long forms", body: "Repetitive data entry and a lengthy application process cause drop-offs." },
    { title: "Confusing jargon", body: "Terms like IDV, NCB and add-ons are hard to understand." },
    { title: "Repetitive data entry", body: "Users have to re-enter information they have already provided." },
    { title: "Poor renewal UX", body: "Returning users face the same friction as new users, which leads to abandonment." },
  ],

  objectives: [
    { title: "Usability", body: "Make insurance buying effortless." },
    { title: "Clarity", body: "Remove confusion and jargon." },
    { title: "Conversion", body: "Reduce friction and drop-offs." },
  ],
  goals: [
    "Simplify the journey for both purchase and renewal",
    "Reduce cognitive load through progressive disclosure and a clear information hierarchy",
    "Build trust through transparent pricing and policy details",
    "Help users decide faster with guided recommendations",
    "Reduce drop-offs at the critical touchpoints",
  ],
  constraints: "Two months, solo. Research participants were office employees only, and the product is not live, so there is no real usage data.",

  research: {
    method: "User interviews and surveys with 50+ potential users.",
    insights: [
      { finding: "Long forms: users were frustrated at re-entering the same information.", decision: "Auto-fetch vehicle details from the registration number, and pre-fill renewals." },
      { finding: "Confusing terms: IDV, NCB and optional add-ons were hard to understand.", decision: "Plain-language explainers next to each term." },
      { finding: "Wanting guidance: users wanted recommendations and explanations while deciding.", decision: "A suggested plan and suggested add-ons." },
      { finding: "Payment and KYC: users worried about payment security and the KYC process.", decision: "Visible consent, trust cues and a payment retry flow." },
    ],
    stats: "",
    persona: {
      name: "Rajeev Mehta",
      age: 35,
      occupation: "IT professional",
      city: "Mumbai",
      context: "Owns a mid-range sedan.",
      goals: ["Renew insurance quickly", "Understand policy details", "Get value for money", "Avoid unnecessary add-ons"],
      frustrations: ["Long forms every time", "Confusing terminology", "Hidden charges", "Poor customer support"],
      behaviour: ["Mobile-first", "Compares multiple options", "Reads reviews online", "Values transparency"],
      quote: "I need an insurance app that respects my time and doesn’t make me feel stupid with all the jargon.",
    },
  },
  audience: [
    { value: "25–55", label: "Age range" },
    { value: "Tier 1", label: "Cities in India" },
    { value: "High", label: "Digital literacy" },
    { value: "Mobile", label: "Primary device" },
  ],

  journey: {
    asIs: [
      { step: "Open website", note: "Slow loading" },
      { step: "Fill long form", note: "Repetitive fields" },
      { step: "Choose plan", note: "No guidance" },
      { step: "Enter KYC", note: "Confusing process" },
      { step: "Payment", note: "Trust issues" },
    ],
    toBe: [
      { step: "Quick login", note: "One-tap login" },
      { step: "Auto-fill data", note: "Pre-populated fields" },
      { step: "Suggested plan", note: "Guided choices" },
      { step: "Simplified KYC", note: "Clear instructions" },
      { step: "Secure payment", note: "Trust indicators" },
    ],
  },

  strategy: [
    { title: "Auto-fetch vehicle details", body: "Retrieve vehicle information from the registration number, so there is no manual entry." },
    { title: "Progressive disclosure", body: "Show information in small chunks to reduce cognitive load." },
    { title: "Suggested add-ons", body: "Suggest add-ons and coverage based on the vehicle type." },
    { title: "Pre-filled forms", body: "Remember details for returning customers so renewal takes one tap." },
    { title: "Transparent pricing", body: "A clear breakdown of every cost, with no hidden charges." },
  ],

  principle: "Every design decision should either save time, build trust, or reduce confusion for the user.",

  // Short labels only: the flow strip never wraps mid-word and scrolls on small screens.
  flow: ["Entry", "Vehicle", "Plan", "Add-ons", "Details", "KYC", "Payment", "Policy"],

  wireframes: [
    { image: "/images/yatrasure/wf-home.png", label: "Home", alt: "Low-fidelity home wireframe with vehicle number field, renewal card, quick links and help videos" },
    { image: "/images/yatrasure/wf-plan.png", label: "Plan selection", alt: "Low-fidelity plan selection wireframe with stepper, vehicle card, IDV row, plan duration and plan options" },
    { image: "/images/yatrasure/wf-login.png", label: "Login", alt: "Low-fidelity login wireframe with mobile number, terms checkbox, submit and DigiLocker option" },
  ],
  wireframeNote: "Low-fidelity explorations to settle the information architecture and the flow before moving to high fidelity.",

  decisions: [
    {
      screen: "Home and dashboard",
      title: "Renewal-first home screen",
      problem: "Returning users faced the same friction as new ones.",
      detail: "A policy card with a status tag (Expired) and a Renew policy button on the home screen.",
      why: "Renewal is the most common return task, so it should not take navigation.",
      rejected: [
        {
          option: "Renewal pop-up when the app opens",
          why: "A pop-up blocks everyone, including the many users who open the app to buy new insurance. A renewal card on the dashboard stays visible without getting in the way.",
          image: "/images/yatrasure/rej-renew-popup.png",
          alt: "Rejected option: a full-screen pop-up asking the user to renew an expired policy",
        },
        {
          option: "Large renewal hero at the top",
          why: "It pushes insurance types and quick access below the fold for every visit, even when there is nothing to renew.",
          image: "/images/yatrasure/rej-renew-hero.png",
          alt: "Rejected option: a large renewal hero block at the top of the home screen",
        },
        {
          option: "Thin renewal banner",
          why: "Easy to overlook, and too small to show which policy expired and when.",
          image: "/images/yatrasure/rej-renew-banner.png",
          alt: "Rejected option: a slim renewal reminder banner",
        },
      ],
    },
    {
      screen: "Home and dashboard",
      title: "Insurance types as one compact row",
      problem: "People need to start a new purchase quickly without the home screen getting long.",
      detail: "Car, bike and other insurance types sit in one compact row of icons under the search bar.",
      why: "Every type is visible at once and the policy card and quick access stay above the fold.",
      rejected: [
        {
          option: "Big cards for each insurance type",
          why: "Each card takes a lot of space, so only a few types fit before the dashboard has to scroll.",
          image: "/images/yatrasure/rej-type-cards.png",
          alt: "Rejected option: large cards for each insurance type",
        },
        {
          option: "Types grouped by vehicle category",
          why: "Same limit: each new category would push the rest of the dashboard further down.",
          image: "/images/yatrasure/rej-type-category.png",
          alt: "Rejected option: insurance types grouped under vehicle category headings",
        },
      ],
    },
    {
      screen: "Home and dashboard",
      title: "Quick access as a small grid",
      problem: "Claims, KYC and policy documents are frequent tasks but secondary to buying and renewing.",
      detail: "A small grid of quick-access actions below the policy card.",
      why: "Every action is visible without scrolling sideways.",
      rejected: [
        {
          option: "Scrolling row of quick-link chips",
          why: "Chips that scroll sideways hide most actions off screen, so people miss them.",
          image: "/images/yatrasure/rej-quick-links.png",
          alt: "Rejected option: a horizontally scrolling row of quick-link chips",
        },
      ],
    },
    {
      screen: "Vehicle details and plans",
      title: "Enter only the registration number",
      problem: "Long forms and repeated data entry.",
      detail: "Enter only the registration number (with a scan icon) and auto-fetch the rest.",
      why: "It removes the highest-effort step at the start of the flow.",
      rejected: [
        { option: "Manual entry", why: todo("Why rejected") },
        { option: todo("Other option considered"), why: todo("Why rejected") },
      ],
    },
    {
      screen: "Add-ons and customisation",
      title: "Add-ons explained in plain language",
      problem: "Users could not judge which add-ons they needed.",
      detail: "Each add-on gets a one-line plain-language explanation, a real-life example and a clear price, with relevant ones suggested for the vehicle.",
      why: "Guided choice reduces both over-buying and abandoning.",
      rejected: [
        { option: "One long text list", why: todo("Why rejected") },
        { option: "“Learn more” links only", why: todo("Why rejected") },
        { option: "Pre-selected bundles", why: todo("Why rejected") },
      ],
    },
    {
      screen: "KYC and verification",
      title: "Policy summary on top, consent in plain sight",
      problem: "KYC felt confusing and risky.",
      detail: "One policy summary at the top, clear tabs (Aadhaar, PAN, CKYC, Upload) and an explicit consent checkbox.",
      why: "Users see what they are buying while they verify, and consent is visible, not buried.",
      rejected: [],
    },
    {
      screen: "Payment",
      title: "Total first, familiar methods, retry that keeps data",
      problem: "Trust concerns about payment security.",
      detail: "Total premium shown first, familiar methods (UPI, cards, netbanking, wallet) and a retry flow that keeps entered data.",
      why: "A failed payment is the most anxious moment in the journey.",
      rejected: [],
    },
    {
      screen: "Success and post-purchase",
      title: "Clear confirmation and instant download",
      problem: "Users want proof that the policy exists.",
      detail: "A clear confirmation, receipt details and an instant policy download.",
      why: "It ends the anxiety loop and removes the need to contact support.",
      rejected: [],
    },
  ],

  screens: [
    { label: "Home and dashboard", image: "/images/yatrasure/home.png", alt: "YatraSure home: insurance types, an expired car policy with a Renew policy button, and quick access to claims and KYC", caption: "Renewal is the most common return task, so the expired policy and a one-tap Renew sit on the home screen." },
    { label: "Registration number", image: "/images/yatrasure/registration.png", alt: "Bike insurance screen with a single registration number field and a Get Bike Details button", caption: "Entering only the registration number removes the highest-effort step at the start of the flow." },
    { label: "Fetching vehicle details", image: "/images/yatrasure/fetching.png", alt: "Loading screen with a magnifying glass over documents and the text Fetching Vehicle Details", caption: "A clear loading state while the vehicle is looked up, so the wait reads as progress, not an error." },
    { label: "Plan selection", image: "/images/yatrasure/plan.png", alt: "Policy type screen with vehicle details, IDV row, plan duration chips and a suggested Comprehensive plan", caption: "The fetched vehicle is confirmed at the top, one plan is marked as suggested in plain language, and the price stays visible." },
    { label: "Add-ons", image: "/images/yatrasure/addons.png", alt: "Add-ons list with prices and info icons: zero depreciation, engine protection, roadside assistance and more", caption: "Each add-on shows its price as the amount added, with an info icon for a plain-language explanation." },
    { label: "KYC verification", image: "/images/yatrasure/kyc.png", alt: "KYC screen with a policy summary, tabs for Aadhaar, PAN, CKYC and Upload, an Aadhaar number field and a consent checkbox", caption: "Users see what they are buying while they verify, and consent is visible, not buried." },
    { label: "Premium summary", image: "/images/yatrasure/summary.png", alt: "Premium breakup with base premium, each add-on, NCB discount, GST and total premium", caption: "Every add-on, the NCB discount and GST are itemised before payment, so the total holds no surprises." },
    { label: "Payment", image: "/images/yatrasure/payment.png", alt: "Payment screen with the total premium first and options for UPI, cards, netbanking and wallet", caption: "The total comes first, then familiar payment methods." },
    { label: "Payment successful", image: "/images/yatrasure/success.png", alt: "Payment successful screen with payment details, a Download button and a File Downloaded confirmation", caption: "Clear confirmation and an instant download end the anxiety loop and reduce the need to contact support." },
  ],

  designSystem: {
    colors: [
      { name: "Primary Blue", hex: "#0361B5" },
      { name: "Accent Light", hex: "#EEF4FC" },
      { name: "Text Dark", hex: "#111827" },
      { name: "Background", hex: "#F3F4F6" },
      { name: "Success", hex: "#22C55E" },
    ],
    font: "Poppins",
    typeScale: ["16px Bold / Medium / Regular", "14px Bold / Medium / Regular", "12px Bold / Medium / Regular"],
    spacing: [8, 16, 24, 32, 48],
  },

  // No real test data yet, so this renders as "Validation status".
  outcome: {
    kind: "validated",
    items: [
      "This is a personal project, not a live product. The design decisions follow the pain points from my research.",
    ],
  },

  learnings: [
    { title: "Trust shaped most of my decisions", body: "I designed KYC and payment to show what users are buying, why consent is needed, and what happens if payment fails." },
    { title: "Clarity over cleverness", body: "Jargon (IDV, NCB, add-ons) came up most in my research, so plain language became my first priority, ahead of visual polish." },
    { title: "Renewal deserves its own path", body: "In the flows I reviewed, renewal was treated like a new purchase, so I made it a one-tap action from the home screen." },
    { title: "Short steps, measured next time", body: "I split the flow into short steps to reduce load. Next time I would measure completion per step to confirm it helps." },
  ],
  challenges: [
    "Balancing simplicity with complete information",
    "Explaining complex terms without overwhelming users",
    "Designing for different levels of digital literacy",
    "Building trust in a traditionally opaque industry",
  ],

  whatIdChange: [
    "The app is not live, so I could not measure real completion or drop-off. With a live build I would set baseline metrics first, then compare after launch.",
    "I would test the prototype with 5 to 8 drivers, including older users and people with lower digital literacy, before finalising the UI, especially the add-on explanations and the KYC step.",
    "The floating help mascot overlaps content on some screens (Update KYC, Standalone Own Damage). I would dock it so it never covers an action.",
  ],

  next: { slug: "my-haven", title: "My Haven" },
};
