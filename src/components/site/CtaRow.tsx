import Link from "next/link";
import type { ReactNode } from "react";
import { PixelArrow } from "./bits";

/** Dashed full-width row: optional note in the left half, link in the right half. */
export function CtaRow({ href, label, note, className = "" }: { href: string; label: string; note?: ReactNode; className?: string }) {
  return (
    <div className={`cta-row ${className}`}>
      {note ? <p className="cta-row__note t-body">{note}</p> : <span aria-hidden />}
      <Link href={href} className="cta-row__link t-button">
        {label}
        <PixelArrow />
      </Link>
    </div>
  );
}
