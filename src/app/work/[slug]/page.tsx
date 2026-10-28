import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProject } from "@/content/projects";
import { CaseStudyPage } from "@/components/case-study/CaseStudyPage";

export const dynamicParams = false;
export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProject(params.slug);
  return p ? { title: p.title } : {};
}

export default function Page({ params }: { params: { slug: string } }) {
  const study = getProject(params.slug);
  if (!study) notFound();
  return <CaseStudyPage study={study} />;
}
