import { work } from "@/content/cv";
import { getProject, liveProject } from "@/content/projects";
import { site } from "@/content/site";
import { WorkScrollClient, type WorkItem } from "./WorkScrollClient";

/**
 * "Selected work" as a horizontal scroll: the section pins while you scroll down and the
 * project cards slide sideways (layout modelled on vandanar.design). Server part: builds the data.
 */
export function WorkScroll() {
  const items: WorkItem[] = work.map((w) => {
    const study = w.slug ? getProject(w.slug) : undefined;
    const live = !!(w.slug && liveProject(w.slug));
    const href = live ? `/work/${w.slug}` : w.href;
    return {
      title: w.title,
      cover: w.cover ?? study?.cover,
      meta: (w.tags ?? []).slice(0, 2).join(" · "),
      status: w.live ? "Live" : live ? undefined : "Case study soon",
      desc: w.points[0],
      href,
      external: !live && !!w.href,
      areas: w.areas ?? [],
    };
  });
  return <WorkScrollClient items={items} intro={String(site.featuredIntro)} />;
}
