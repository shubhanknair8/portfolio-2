import type { CaseStudy } from "../types";
import { yatrasure } from "./yatrasure";
import { myHaven } from "./my-haven";

export const projects: CaseStudy[] = [yatrasure, myHaven];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
