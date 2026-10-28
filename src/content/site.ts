import type { Text } from "./types";

/** Site-wide details, taken from the CV. */
export const site = {
  name: "Shubhank Nair",
  logo: "Shubhank",
  role: "UI/UX & Product Designer" as Text,
  tagline: "I turn complex problems into clear, accessible experiences." as Text,
  email: "shubhanknair8@gmail.com",
  location: "Delhi, India",
  portrait: undefined as string | undefined, // e.g. "/images/portrait.jpg" (rendered grayscale)
  available: true,
  newestNote: "Recent work across AI, insurance and mental health." as Text,
  featuredIntro: "Products for AI, insurance, mental health, ed-tech and sports accessibility, researched, tested and designed to ship." as Text,
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/shubhanknair" },
    { label: "Framer site", href: "https://shubhanknair.framer.website" },
    { label: "Email", href: "mailto:shubhanknair8@gmail.com" },
  ],
  legal: [] as { label: string; href: string }[],
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
];
