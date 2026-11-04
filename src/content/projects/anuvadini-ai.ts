import { type CaseStudy } from "../types";

/**
 * Hyped Messenger (by Anuvadini AI, AICTE). Live on Android and iOS; ongoing team project.
 * Product facts come from the app screens; the design reasoning is a draft for Shubhank to confirm.
 * Contact names and photos in the screenshots are blurred for privacy.
 */
export const anuvadini: CaseStudy = {
  slug: "anuvadini-ai",
  title: "Hyped Messenger",
  ready: true,
  cover: "/images/hyped/cover-v4-soft.jpg",
  summary:
    "Hyped Messenger (Hyped Samvadini) is a homegrown Indian alternative to WhatsApp, built under Anuvadini AI (AICTE) and live on Android and iOS. Alongside chats and calls it brings an SOS button, guest and emergency chats, offline games and the wider Anuvadini toolkit into one app. I design product flows and screens as part of the team, and the work is ongoing.",
  outcomeLine: "Designing an Indian messenger that does more than chat: calls, safety, games and multilingual tools in one place.",
  cardLine: "Indian messaging app, live on Android and iOS",
  meta: {
    role: "UI/UX Designer",
    team: "Team project at Anuvadini AI (AICTE)",
    timeline: "Sep 2026 – Present (ongoing)",
    year: "2026",
    platform: "Mobile app (Android and iOS)",
    industry: "Communication / AI / Government",
    tools: "Figma, FigJam, Uizard, Google Stitch, Page Flows, Figma Make, ChatGPT, Claude, Gemini, Notion, Miro, Jira",
    status: "Live, ongoing project",
  },

  problem: [
    "Most Indians rely on foreign messaging apps for everyday conversation, work coordination and even emergencies.",
    "A homegrown messenger has to feel as familiar as the apps people already use, while giving them reasons to switch: safety features, Indian languages and things to do beyond chatting.",
  ],
  painPoints: [
    { title: "Familiarity is non-negotiable", body: "People won’t switch to a messenger that makes basic chatting and calling harder." },
    { title: "Many features, one small screen", body: "Chats, calls, SOS, games and the Anuvadini tools all compete for space." },
    { title: "Safety must be one tap away", body: "In an emergency there is no time to dig through menus." },
    { title: "Indian users, many languages", body: "The app has to work for people across scripts and comfort levels with technology." },
  ],

  goals: [
    "Keep chatting and calling as familiar and fast as the apps people already use",
    "Make safety (SOS, emergency contacts) reachable from every screen",
    "Give people reasons to stay: games, planners and multilingual tools",
    "Fit a growing feature set into a navigation that stays simple",
  ],
  constraints: "A live product used by real people, shipped by a team in continuous releases, so changes must be incremental and safe.",

  research: {
    method: "Pattern research across popular messaging apps, flow research with Page Flows, and quick wireframes in Uizard and Google Stitch.",
    insights: [
      { finding: "Users expect chat, calls and search exactly where familiar apps put them.", decision: "Standard chat list, search bar and filter chips (All, Requests, Guest Chat, Emergency)." },
      { finding: "Safety features are forgotten if they live in settings.", decision: "A red SOS button in the header of every screen." },
      { finding: "A long feature list overwhelms people when it sits in tabs.", decision: "A floating menu button opening a clear grid of actions." },
    ],
  },

  strategy: [
    { title: "Familiar core", body: "Chats, calls and search follow patterns people already know, so switching costs little." },
    { title: "Safety always visible", body: "SOS lives in the header; emergency contacts and an Emergency filter sit next to everyday chats." },
    { title: "Pill navigation plus a menu", body: "Four core tabs (Games, Status, Calls, Chats) in a floating bar, with everything else behind one orange menu button." },
    { title: "More than messaging", body: "Offline games with coins, planners, reminders, invoices and Hyped Magic Studio give people reasons to open the app daily." },
  ],

  principle: "Familiar where it matters, helpful where others stop.",

  flow: ["Chats", "Calls", "Games", "Menu", "SOS"],

  decisions: [
    {
      screen: "Every screen",
      title: "SOS in the header, not in settings",
      problem: "An emergency feature is useless if people can’t find it in seconds.",
      detail: "A red SOS button sits in the top bar of every screen, next to the profile.",
      why: "It is always one tap away, and its colour makes it easy to spot under stress.",
      rejected: [],
    },
    {
      screen: "Navigation",
      title: "A floating pill bar with an expanding active tab",
      problem: "Four core tabs and a growing feature set need to fit one hand.",
      detail: "The active tab expands to show its label (Chat, Call, Game) while the others stay as icons, and a separate orange button opens the full menu.",
      why: "People always know where they are, and new features can be added to the menu without crowding the bar.",
      rejected: [],
    },
    {
      screen: "Menu",
      title: "A grid of actions instead of nested settings",
      problem: "New Chat, Create Group, Scan Group QR, Broadcast, Emergency Contact, Planner, Invoice and more were hard to find.",
      detail: "One screen with the profile card, Import Chat and Invite a Friend up top, then a two-column grid of clearly labelled actions.",
      why: "Everything the app can do is visible at once, which also helps new users discover features.",
      rejected: [],
    },
  ],

  screens: [
    { label: "Chats", image: "/images/hyped/chats-v2.png", alt: "Hyped chat list with search, filter chips for All, Requests, Guest Chat and Emergency, and recent conversations (message previews blurred)", caption: "Familiar chat list with filters for requests, guest chats and emergencies." },
    { label: "Calls", image: "/images/hyped/calls.png", alt: "Call history with incoming, outgoing and missed calls (contacts blurred)", caption: "Call history with clear incoming, outgoing and missed states." },
    { label: "Choose your language", image: "/images/hyped/language.png", alt: "Language picker sheet with colour-coded tiles for English, Hindi, Sanskrit, Telugu, Tamil, Kannada, Bengali, Gujarati, Malayalam, Marathi, Urdu and Assamese, each shown in its own script", caption: "Each language is written in its own script with its English name below, so people recognise their language at a glance." },
    { label: "Games", image: "/images/hyped/games.png", alt: "Offline games hub with coins balance and a grid of games like Snakes and Ladders, Carrom, Chess and Ludo", caption: "Offline games with a coin balance: a reason to open the app beyond chatting." },
    { label: "Menu", image: "/images/hyped/menu.png", alt: "Menu with profile card, Import Chat, Invite a Friend and a grid of actions", caption: "Every action on one screen, from New Chat to Hyped Magic Studio." },
    { label: "Also from Anuvadini", image: "/images/hyped/apps.png", alt: "Grid of other Anuvadini apps and tools", caption: "The wider Anuvadini toolkit, one tap away inside the messenger." },
  ],

  // No validation section for this project.
  outcome: { kind: "validated", items: [] },

  learnings: [
    { title: "Familiarity earns the right to innovate", body: "People try new features only once the basics feel exactly like home." },
    { title: "Design for a growing product", body: "A navigation that leaves room for tomorrow’s features avoids redesigns with every release." },
  ],

  whatIdChange: [],
};
