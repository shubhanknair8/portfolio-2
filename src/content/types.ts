/**
 * Content model for case studies. All copy lives in src/content/projects/*.ts;
 * components only render it.
 *
 * Missing content is never filled with filler. Use `todo("hint")` and it renders
 * as a visible [TODO] placeholder.
 */

export type Todo = { readonly __todo: true; hint: string };
export const todo = (hint = ""): Todo => ({ __todo: true, hint });
export const isTodo = (v: unknown): v is Todo =>
  typeof v === "object" && v !== null && (v as Todo).__todo === true;

/** A piece of copy: plain text, a TODO, or a mix (e.g. "Interviews with " + todo("50+?")). */
export type Text = string | Todo | ReadonlyArray<string | Todo>;

/** True when a piece of copy has real words in it (not only [TODO]s). */
export const hasContent = (t: Text): boolean =>
  typeof t === "string" ? t.trim().length > 0 : isTodo(t) ? false : (t as ReadonlyArray<string | Todo>).some((p) => typeof p === "string" && p.trim().length > 0);

export type Meta = {
  role: Text;
  team: Text;
  timeline: Text;
  year: Text;
  platform: Text;
  tools: Text;
  status: Text;
  industry?: Text;
};

export type Insight = { finding: Text; decision: Text };

export type Card = { title: string; body: Text };
export type JourneyStep = { step: string; note: string };

export type Persona = {
  name: string;
  age: number;
  occupation: string;
  city: string;
  context: Text;
  goals?: string[];
  frustrations?: string[];
  behaviour?: string[];
  /** Illustrative quote for a proto-persona (not a real person). */
  quote?: string;
};

export type RejectedOption = {
  option: Text;
  why: Text;
  /** Optional screenshot of the rejected option. Path under /public. */
  image?: string;
  alt?: string;
};

export type Decision = {
  title: Text;
  /** Optional screen this decision belongs to. */
  screen?: string;
  problem?: Text;
  detail?: Text;
  why?: Text;
  rejected: RejectedOption[];
};

export type ScreenSlot = {
  label: string;
  /** Path under /public. Leave undefined until the real screen exists. */
  image?: string;
  alt: string;
  caption: Text;
};

/** Every outcome number must say where it came from. */
export type OutcomeCard = { value: string; label: string; source: string };

/** Quotes render only with a real name and recorded consent. */
export type Quote = { text: string; name: string; consent: true };

export type Outcome =
  | {
      kind: "results";
      cards: [OutcomeCard] | [OutcomeCard, OutcomeCard] | [OutcomeCard, OutcomeCard, OutcomeCard];
      quotes?: Quote[];
    }
  | {
      /** Used when there is no real test data yet. Heading becomes "What I validated". */
      kind: "validated";
      items: Text[];
    };

export type CaseStudy = {
  slug: string;
  title: string;
  /** Set to true when the page is good enough to publish. Drafts only appear in `npm run dev`. */
  ready?: boolean;
  /** Short project overview shown at the top of the page. */
  summary?: Text;
  outcomeLine: Text;
  meta: Meta;
  flow?: string[];
  problem: Text[];
  goals: Text[];
  constraints: Text;
  research: {
    method: Text;
    insights: Insight[];
    stats?: Text;
    persona?: Persona;
  };
  principle: Text;
  decisions: Decision[];
  screens: ScreenSlot[];
  outcome: Outcome;
  whatIdChange: Text[];
  /** Optional richer sections (render only when present). */
  painPoints?: Card[];
  objectives?: Card[];
  journey?: { asIs: JourneyStep[]; toBe: JourneyStep[] };
  strategy?: Card[];
  wireframes?: { image: string; alt: string; label: string }[];
  wireframeNote?: Text;
  designSystem?: { colors: { name: string; hex: string }[]; font?: string; typeScale: string[]; spacing?: number[] };
  audience?: { value: string; label: string }[];
  learnings?: Card[];
  challenges?: string[];
  next?: { slug: string; title: string };
  /** One-line description shown on project cards. */
  cardLine: Text;
  /** Cover image (card + case-study hero). Path under /public. */
  cover?: string;
  /** Pencil sketch revealed on card hover (signature detail). Path under /public. */
  sketch?: string;
};
