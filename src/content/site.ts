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
    { word: "Convert", color: "#A8481A" },
    { word: "Work", color: "#2C5BA8" },
    { word: "Scale", color: "#2E7346" },
  ],
  newestNote: "Recent work across AI, insurance and mental health." as Text,
  featuredIntro: "Products for AI, insurance, mental health and sports accessibility, researched and designed to ship." as Text,
  socials: [{ label: "LinkedIn", href: "https://linkedin.com/in/shubhanknair" }],
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
  { title: "", summary: "", href: "" },
  { title: "", summary: "", href: "" },
  { title: "", summary: "", href: "" },
];
