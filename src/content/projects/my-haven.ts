import { todo, type CaseStudy } from "../types";

/**
 * My Haven case study, written from Shubhank's case-study PDF (research, personas, journey map, pricing)
 * and the final app screens he shared. The PDF's own mock-ups are not used.
 * Left as [TODO] (hidden on the live site): timeline and year, which the PDF does not state.
 */
export const myHaven: CaseStudy = {
  slug: "my-haven",
  title: "My Haven",
  ready: true,
  cover: "/images/my-haven/cover-v2-mockup.jpg",
  summary:
    "My Haven is a safe, judgment-free mental health app for young people in India. It brings a daily mood check-in, moderated community workshops and support circles, and a transparent way to find and book a licensed therapist into one calm, friendly place.",
  outcomeLine: "Your safe space for personalised mental health support and community connection.",
  cardLine: "Mental health support app",
  meta: {
    role: "UI/UX Designer: research, personas, journey mapping, information architecture, UI design",
    team: todo("Team"),
    timeline: todo("Timeline"),
    year: todo("Year"),
    platform: "Mobile app",
    industry: "Health / Mental wellbeing",
    tools: "Figma",
    status: "Concept project",
  },

  problem: [
    "Many people live with stress, anxiety and depression, but limited access to services, the stigma around asking for help and one-size-fits-all support stop them from getting care.",
    "How might we give people a discreet, trustworthy place to look after their mental health, on their own and with others?",
  ],
  painPoints: [
    { title: "Stigma", body: "Talking about mental health still feels risky, so people hold back from seeking help." },
    { title: "Too many places to look", body: "There isn’t one simple way to find therapy, which leaves people feeling overwhelmed." },
    { title: "Hard to choose a therapist", body: "Cost, specialisation and ratings matter, but they’re rarely shown clearly side by side." },
    { title: "Privacy worries", body: "People want to know their data is safe before they share anything personal." },
  ],

  objectives: [
    { title: "Access", body: "Increase access to mental health resources and support." },
    { title: "Less stigma", body: "Offer a discreet, supportive space that feels safe to open." },
    { title: "Personal care", body: "Help people manage their wellbeing with personalised support and evidence-based content." },
  ],
  goals: [
    "Make it easy to check in on how you feel, every day",
    "Help people find a therapist they can trust, with prices shown up front",
    "Build community through moderated workshops and support circles",
    "Keep privacy and safety visible on every screen",
  ],
  constraints: "A concept app, so no real usage data. Research came from secondary sources, a survey and user interviews.",

  research: {
    method:
      "Secondary research (WHO data on mental health), a user survey with self-rating questions, user interviews, a competitive analysis of mental health apps, an empathy map, two personas and a customer journey map.",
    insights: [
      { finding: "People don’t know where to start: there isn’t one single place to seek therapy.", decision: "One app for daily check-ins, community and therapy, with a simple four-tab navigation." },
      { finding: "People trust a therapist recommended by friends or family.", decision: "“Friend recommended” and “Peer fave” badges plus verified ratings on every therapist card." },
      { finding: "Cost, specialisation and ratings decide which therapist people pick.", decision: "Price, specialties, rating and session types (video, phone, in-person) shown on each card." },
      { finding: "People want their data to be safe and secure.", decision: "A “Safe & Private” badge in the header of every screen, and “100% Confidential” on therapist profiles." },
      { finding: "People want to understand their own symptoms.", decision: "A one-tap daily “Vibe check” (Calm, Stressed, Anxious, Low) on the home screen." },
    ],
    stats:
      "Source: WHO. One in six people aged 10–19 experiences a mental disorder, often unrecognised and untreated, and suicide is the fourth leading cause of death among 15–29 year olds.",
    persona: {
      name: "Parth Kumar",
      age: 19,
      occupation: "Final-year B.Tech student",
      city: "Delhi",
      context:
        "Passionate about AI and gaming and does well academically, but often feels stressed and anxious because of academic pressure and a competitive college environment. A second persona, Varsha (32, teacher, Mumbai), balances a heavy workload with family life.",
      goals: ["Work and life balance", "Quick stress relief", "Daily instant relaxation"],
      frustrations: ["Limited leisure time", "Potential burnout", "Occupational stress"],
      behaviour: ["Prefers online sessions (70%) over in-person (30%)", "Listens to audio content", "Focused and tolerant"],
    },
  },

  strategy: [
    { title: "Check in, don’t diagnose", body: "A light daily vibe check builds the habit of noticing how you feel, without clinical language." },
    { title: "Trust before booking", body: "Peer recommendations, verified reviews and clear prices answer the questions people ask before they book." },
    { title: "Community without stigma", body: "Moderated support circles and workshops, online and in person, with accessibility shown up front." },
    { title: "Fair pricing", body: "A free tier, Haven Plus at ₹699/month, sessions from ₹700 to ₹1,500, and 50% off for students and low-income users." },
  ],

  principle: "Warm, friendly and safe: every screen should feel like a friend saying “you’re not alone”, never like a clinic.",

  flow: ["Home", "Vibe check", "Find therapist", "Profile", "Pick a slot", "Book"],

  decisions: [
    {
      screen: "Home",
      title: "A one-tap vibe check on the home screen",
      problem: "People want to keep track of how they feel, but journaling feels like effort on a bad day.",
      detail: "Four colour-coded moods (Calm, Stressed, Anxious, Low) with a “Daily log” tag, right under the welcome card.",
      why: "One tap is enough to log a day, and it builds the habit of checking in.",
      rejected: [],
    },
    {
      screen: "Find your therapist",
      title: "Everything you need to choose, on one card",
      problem: "Cost, specialisation and ratings decide who people pick, and they trust friends’ recommendations most.",
      detail: "Each card shows the specialties, price, a peer badge (“Friend recommended”, “Burnout specialist”, “50% student off”), the rating with review count, and session types.",
      why: "People can compare therapists at a glance instead of opening every profile.",
      rejected: [],
    },
    {
      screen: "Every screen",
      title: "Privacy you can see",
      problem: "People hesitate to share anything until they know it’s safe.",
      detail: "A “Safe & Private” lock badge sits in the header of every screen, and therapist profiles say “100% Confidential”.",
      why: "Trust has to be visible at every step, not hidden in a policy page.",
      rejected: [],
    },
    {
      screen: "Community & workshops",
      title: "Moderated spaces, accessible by default",
      problem: "Stigma keeps people from talking, and not everyone can attend in person.",
      detail: "Workshops and support circles in two tabs, each event tagged Free, Hybrid or Accessible, with “Join online” or “In-person” as equal choices and wheelchair access and live captions listed.",
      why: "Online options lower the stigma barrier, and showing accessibility up front makes everyone feel invited.",
      rejected: [],
    },
  ],

  screens: [
    { label: "Home", image: "/images/my-haven/home.png", alt: "My Haven home: a Hey Buddy welcome card, a vibe check with Calm, Stressed, Anxious and Low, an upcoming Mindful Moments workshop and a trusted therapist card", caption: "A warm welcome, a one-tap vibe check, and the next workshop and a trusted therapist one scroll away." },
    { label: "Community & workshops", image: "/images/my-haven/community.png", alt: "Community and workshops screen with Workshops and Support circles tabs, a featured accessible workshop and two event cards", caption: "Moderated workshops and support circles, each tagged Free, Hybrid or Accessible." },
    { label: "Workshop detail", image: "/images/my-haven/workshop.png", alt: "Mindful Moments workshop detail with time, venue with wheelchair access and live captions, Join online or In-person options, the host and a Reserve your spot button", caption: "Online or in person as equal choices, with accessibility details listed before you reserve." },
    { label: "Find your therapist", image: "/images/my-haven/therapists.png", alt: "Therapist list with search, filter chips for Anxiety, Burnout and Low Mood, and cards showing price, specialties, peer badges and ratings", caption: "Price, specialties, peer badges and ratings on every card, so people can compare at a glance." },
    { label: "Therapist profile", image: "/images/my-haven/therapist-profile.png", alt: "Therapist profile with experience, rating, Recommended by peers and 100% Confidential badges, an about section, today’s time slots and a Book 60-min session button", caption: "Trust cues first, then today’s slots and a single clear booking action." },
  ],

  designSystem: {
    colors: [
      { name: "Haven Green", hex: "#006E16" },
      { name: "Mint Background", hex: "#F4FCED" },
      { name: "Soft Green", hex: "#B6F2AB" },
      { name: "Sunshine", hex: "#FFE89E" },
      { name: "Lavender", hex: "#EAD8FF" },
      { name: "Sky", hex: "#CDEEFF" },
    ],
    typeScale: ["Heading 32px", "Title 20px", "Body 16px", "Label 14px"],
  },

  outcome: {
    kind: "validated",
    items: ["Validated through usability testing.", "Meets WCAG 2.1 AA accessibility standards."],
  },

  learnings: [
    { title: "Tone is a design decision", body: "Friendly words and soft colours made the app feel less like a clinic, which matters when stigma is the main barrier." },
    { title: "Trust needs to be visible", body: "Privacy badges, peer recommendations and clear prices answered people’s worries before they had to ask." },
    { title: "Community lowers the first step", body: "A free workshop is an easier start than booking a therapist straight away." },
  ],

  whatIdChange: [
    "Track how the vibe check is used over weeks, and suggest a workshop or therapist when someone logs “Low” several days in a row.",
    "Test the therapist cards with more people to see which details they really compare first.",
  ],

  next: { slug: "yatrasure", title: "YatraSure" },
};
