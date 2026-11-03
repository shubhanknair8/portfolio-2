import type { CaseStudy } from "../types";
import { yatrasure } from "./yatrasure";
import { myHaven } from "./my-haven";
import { theFWord } from "./the-f-word-ai";
import { anuvadini } from "./anuvadini-ai";
import { playzone } from "./playzone";
import { purepick } from "./purepick";

export const projects: CaseStudy[] = [yatrasure, purepick, playzone, myHaven, theFWord, anuvadini];

/** In `npm run dev` every page is visible so you can fill it in; on the live site only `ready: true` pages exist. */
export const showDrafts = process.env.NODE_ENV !== "production";

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

/** A case study page that exists right now (ready, or any page while developing). */
export const liveProject = (slug: string) => {
  const p = getProject(slug);
  return p && (p.ready || showDrafts) ? p : undefined;
};

export const liveProjects = () => projects.filter((p) => p.ready || showDrafts);
