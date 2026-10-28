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

export type Meta = {
  role: Text;
  team: Text;
  timeline: Text;
  year: Text;
  platform: Text;
  tools: Text;
  status: Text;
};

export type Insight = { finding: Text; decision: Text };

export type Persona = {
  name: string;
  age: number;
  occupation: string;
  city: string;
  context: Text;
};

export type RejectedOption = { option: Text; why: Text };

export type Decision = {
  title: Text;
  detail?: Text;
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
  outcomeLine: Text;
  meta: Meta;
  flow?: string[];
  problem: Text[];
  goals: Text[];
  constraints: Text;
  research: {
    method: Text;
    insights: Insight[];
    stats: Text;
    persona?: Persona;
  };
  principle: Text;
  decisions: Decision[];
  screens: ScreenSlot[];
  outcome: Outcome;
  whatIdChange: Text[];
  next?: { slug: string; title: string };
  /** One-line description shown on project cards. */
  cardLine: Text;
  /** Cover image (card + case-study hero). Path under /public. */
  cover?: string;
  /** Pencil sketch revealed on card hover (signature detail). Path under /public. */
  sketch?: string;
};
