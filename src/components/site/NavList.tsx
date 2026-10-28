import Link from "next/link";
import { nav } from "@/content/site";
import { PixelArrow } from "./bits";

export function NavList({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <ul className="navlist">
      {nav.map((l) => (
        <li key={l.href} className="navlist__item">
          <Link href={l.href} className="navlist__link" onClick={onNavigate}>
            {l.label}
            <PixelArrow size={24} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
