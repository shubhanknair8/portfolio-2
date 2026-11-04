import { todo, type CaseStudy } from "../types";

/**
 * PlayZone case study, from Shubhank's case-study PDF (Nov 2026).
 * Left out until sourced: the "Local context" figures (78%, 65%, 3:1), "booking cut from 15 to 5 minutes",
 * and "user testing helped identify issues early". Add them back only with a real source.
 */
export const playzone: CaseStudy = {
  slug: "playzone",
  title: "PlayZone",
  ready: true,
  cover: "/images/playzone/cover-v2-soft.jpg",
  summary:
    "A mobile app that helps people in Indian cities like Jaipur discover sports facilities, book slots without phone calls, and find people to play with.",
  outcomeLine: "Simplifying access to sports facilities and building active communities.",
  cardLine: "Sports facility booking and community app",
  meta: {
    role: "Solo Product Designer",
    team: "Solo",
    timeline: "2 months",
    year: "2024",
    platform: "Mobile app (iOS and Android)",
    industry: "Sports / Community / Booking",
    tools: "Adobe XD, Figma, ChatGPT, Claude, Midjourney, Miro, Notion, Google Forms",
    status: "Concept project",
  },

  problem: [
    "Players struggle to discover, access and book sports facilities, so they miss chances to play and to be part of a sports community.",
    "How might I bridge the gap between players and facilities while enabling community-driven sports participation in India?",
  ],
  painPoints: [
    { title: "No central platform", body: "No single place to discover the sports facilities around you." },
    { title: "Fragmented information", body: "Outdated details scattered across many sources." },
    { title: "Manual booking", body: "Time-consuming phone calls and WhatsApp coordination." },
    { title: "Poor facility management", body: "Popular venues get overcrowded while others sit empty." },
    { title: "No community", body: "Hard to find players and build a local sports group." },
  ],

  goals: [
    "Discover nearby sports facilities with real-time availability",
    "Book slots instantly, without phone calls",
    "Find playing partners and join local communities",
    "Keep players coming back through rewards and progress",
  ],
  constraints: "Two months, solo.",

  research: {
    method: "Secondary research and interviews with 35–40 players in Jaipur.",
    insights: [
      { finding: "Economic barriers: equipment, memberships and travel cost too much.", decision: "Affordable group play and clear prices up front." },
      { finding: "Lack of awareness: people do not know which facilities exist nearby or when they are free.", decision: "Location-based discovery with live slot availability." },
      { finding: "No digital ecosystem: booking happens over calls and WhatsApp.", decision: "Instant booking with confirmation in the app." },
      { finding: "Cultural barriers: gender and social barriers keep some people from playing.", decision: "Community features, events and safe, well-reviewed venues." },
    ],
    stats: "",
    persona: {
      name: "Vishnu",
      age: 21,
      occupation: "College student",
      city: "Jaipur",
      context: "Budget-conscious, coordinates games with friends on WhatsApp.",
      goals: ["Find affordable facilities", "Book without phone calls", "Play with friends regularly", "Discover new sports groups"],
      frustrations: ["Facilities are too expensive", "No real-time availability", "Hard to coordinate with friends", "Few options near campus"],
      behaviour: ["Mobile-first", "Uses WhatsApp to coordinate", "Values social connection", "Budget-conscious"],
      quote: "I want to play regularly but can’t find affordable courts near my college.",
    },
  },
  audience: [
    { value: "18–24", label: "College students" },
    { value: "16–40", label: "Casual players" },
    { value: "40+", label: "Older adults" },
    { value: "Jaipur", label: "Starting city" },
  ],

  journey: {
    asIs: [
      { step: "Awareness", note: "Limited, fragmented info online" },
      { step: "Consideration", note: "No real-time availability" },
      { step: "Booking", note: "Calls, no instant confirmation" },
      { step: "Experience", note: "Overcrowding, poor upkeep" },
      { step: "Advocacy", note: "Still tedious to book again" },
    ],
    toBe: [
      { step: "Discover", note: "Search and filters nearby" },
      { step: "Compare", note: "Ratings, prices, amenities" },
      { step: "Book", note: "Live slots, instant confirmation" },
      { step: "Play", note: "Find players, join events" },
      { step: "Return", note: "Rewards and quick rebooking" },
    ],
  },

  strategy: [
    { title: "Smart discovery", body: "Location-based search with filters for sport, distance, price and amenities, plus ratings and reviews." },
    { title: "Real-time booking", body: "Live slot availability, instant confirmation and several payment options." },
    { title: "Matches and events", body: "Create or join matches, find players and follow an events calendar." },
    { title: "Community", body: "Player profiles, an activity feed and connections with local players." },
    { title: "Rewards", body: "Badges, loyalty points and leaderboards for consistent play." },
    { title: "Personal suggestions", body: "Recommendations based on preferences and play history." },
  ],

  principle: "Turn a booking tool into a community: every step should get people from wanting to play to actually playing.",

  flow: ["Home", "Search", "Details", "Slots", "Payment", "Confirm"],

  decisions: [
    {
      title: "Live slots instead of call-to-book",
      problem: "No real-time booking: players call or message venues and wait.",
      detail: "Show live availability on the facility page and confirm the booking instantly.",
      why: "Removing the call is the single biggest time saver in the journey.",
      rejected: [{ option: todo("Option considered"), why: todo("Why rejected") }],
    },
    {
      title: "Search with filters for discovery",
      problem: "Poor discovery: people do not know what exists nearby.",
      detail: "Smart search with filters for sport, distance, price and amenities.",
      why: "Players choose on location and price first.",
      rejected: [],
    },
    {
      title: "Match-making and events",
      problem: "No community: hard to find people at the same level.",
      detail: "Create or join matches and events from the app.",
      why: "A booking alone does not help if you have nobody to play with.",
      rejected: [],
    },
  ],

  screens: [
    { label: "Login", image: "/images/playzone/login.png", alt: "PlayZone login with username, password, a gradient Login button and fingerprint sign-in", caption: "Quick sign-in with biometric support." },
    { label: "Facility details", image: "/images/playzone/facility.png", alt: "SPV Sports Arena page with photo, rating, date picker, available time slots and a Book Now bar with price per person", caption: "Real-time slots and the price per person on one screen, with booking one tap away." },
    { label: "Payment", image: "/images/playzone/payment.png", alt: "Payment details with game fee and player count, name, phone, email and a Pay button with UPI, Visa and RuPay", caption: "Split by player count, familiar payment methods and a single clear Pay action." },
  ],

  designSystem: {
    colors: [
      { name: "Primary Blue", hex: "#1772C6" },
      { name: "Dark Blue", hex: "#002C60" },
      { name: "Light Gray", hex: "#F6F6F6" },
      { name: "Success", hex: "#10B981" },
      { name: "Warning", hex: "#EF4444" },
      { name: "Error", hex: "#BB0003" },
    ],
    typeScale: ["Header 16px", "Sub-head 14px", "Body 12px"],
  },

  outcome: {
    kind: "validated",
    items: ["This is a concept project, not a live product. The features follow the pain points from my interviews in Jaipur."],
  },

  learnings: [
    { title: "Research shaped the feature set", body: "Real pain points from interviews in Jaipur decided what made it into the app." },
    { title: "Fewer steps drive adoption", body: "I cut every step that did not help someone get from search to a confirmed slot." },
    { title: "Community adds value", body: "Group formation and player matching turn a booking tool into a reason to come back." },
  ],

  whatIdChange: [
    "Test the booking flow with players and venue owners before adding community features.",
    "Plan next: AI-based match suggestions, wearable integration, a coaching marketplace and AR facility previews.",
  ],
};
