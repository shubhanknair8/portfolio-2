import type { Text } from "./types";

/** Site-wide details, taken from the CV. */
export const site = {
  name: "Shubhank Nair",
  logo: "Shubhank",
  role: "UI/UX & Product Designer" as Text,
  tagline: "I turn complex problems into clear, accessible experiences." as Text,
  email: "shubhanknair8@gmail.com",
  phone: { display: "+91 8377013524", tel: "+918377013524" },
  location: "Delhi, India",
  portrait: "/images/portrait-v4.jpg" as string | undefined,
  available: true,
  /** Résumé PDF under /public. */
  resume: "/Shubhank_Nair_Resume.pdf" as string | undefined,
  /** Hero headline: "I design things that" + a rotating word. Colours are AA on the hero background. */
  heroLead: "I design things that",
  heroWords: [
    { word: "Convert", color: "var(--word-1)" },
    { word: "Work", color: "var(--word-2)" },
    { word: "Scale", color: "var(--word-3)" },
  ],
  newestNote: "Recent work across AI, insurance and mental health." as Text,
  featuredIntro: "Products for AI, insurance, mental health and sports accessibility, researched and designed to ship." as Text,
  /** Footer icons. Paste your profile links; an icon only shows once its link is filled in. */
  socials: [
    { label: "LinkedIn", icon: "linkedin", href: "https://linkedin.com/in/shubhanknair" },
    { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/shubhanknair/" },
    { label: "X (Twitter)", icon: "x", href: "https://x.com/shubhanknair" },
    { label: "Dribbble", icon: "dribbble", href: "https://dribbble.com/shubhanknair07" },
    { label: "Behance", icon: "behance", href: "https://www.behance.net/shubhanknair07" },
    { label: "Medium", icon: "medium", href: "https://medium.com/@shubhanknair8" },
  ] as { label: string; icon: "linkedin" | "instagram" | "x" | "medium" | "behance" | "dribbble"; href: string }[],
  legal: [] as { label: string; href: string }[],
};

export const nav: { href: string; label: string; download?: boolean }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

/**
 * Medium articles shown on /writing. Paste each article's title, a one-line summary and its link.
 * Entries without a link are left out of the page.
 */
export const articles: { title: string; summary?: string; href: string; date?: string }[] = [
  {
    title: "Brainstorming in UX Design",
    summary: "Sparking ideas and shaping project direction.",
    href: "https://medium.com/@shubhanknair8/brainstorming-in-ux-design-46193527201a",
    date: "Nov 25, 2024",
  },
  {
    title: "Unlocking Creativity and Clarity",
    summary: "The power of mind mapping in UX design.",
    href: "https://medium.com/@shubhanknair8/unlocking-creativity-and-clarity-205ca774e44d",
    date: "Nov 24, 2024",
  },
  {
    title: "The UX Designer’s Guide to Conducting a Meaningful Literature Review",
    summary: "Unearthing insights and building research foundations.",
    href: "https://medium.com/@shubhanknair8/the-ux-designers-guide-to-conducting-a-meaningful-literature-review-db73bf050888",
    date: "Nov 24, 2024",
  },
];
