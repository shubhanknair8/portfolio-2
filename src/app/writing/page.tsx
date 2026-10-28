import { TodoMark } from "@/components/Rich";
import { Band, Eyebrow } from "@/components/site/bits";

export const metadata = { title: "Writing" };

export default function Page() {
  return (
    <Band tone="hero" className="cs-hero">
      <Eyebrow>Writing</Eyebrow>
      <div className="halves">
        <div className="cs-hero__title">
          <h1 className="t-h1 reveal">Writing</h1>
        </div>
        <div className="cs-hero__intro t-subtitle">
          <TodoMark hint="Writing page content" />
        </div>
      </div>
      <div style={{ height: 96 }} />
    </Band>
  );
}
