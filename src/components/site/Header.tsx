"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/content/site";
import { DotsIcon } from "./bits";
import { NavList } from "./NavList";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const path = usePathname();

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return setOpen(false);
      if (e.key !== "Tab") return;
      const menu = document.getElementById("site-menu");
      const items = menu ? Array.from(menu.querySelectorAll<HTMLElement>("a[href], button")) : [];
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      triggerRef.current?.focus();
    };
  }, [open]);

  const links = nav.filter((l) => l.href !== "/");

  return (
    <header className="header2">
      <div className="header2__bar">
        <Link href="/" className="header2__cell header2__logo" aria-label={`${site.name}, home`}>
          {site.name}
        </Link>
        <nav aria-label="Primary" className="header2__nav">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                {l.download ? (
                  <a href={l.href} download className="header2__cell header2__link">
                    {l.label}
                  </a>
                ) : (
                  <Link href={l.href} className="header2__cell header2__link" aria-current={path === l.href ? "page" : undefined}>
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <span className="header2__spacer" />
        {site.available && (
          <Link href="/contact" className="header2__cell header2__status">
            <span className="status-dot" aria-hidden />
            Available for work
          </Link>
        )}
        <span className="header2__cell header2__themecell">
          <ThemeToggle />
        </span>
        <button
          ref={triggerRef}
          className="header2__cell header2__menu"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen(true)}
        >
          <DotsIcon />
        </button>
      </div>

      <div id="site-menu" className="menu" role="dialog" aria-modal="true" aria-label="Menu" hidden={!open}>
        <div className="wrap">
          <div className="menu__bar">
            <span className="t-logo">{site.logo}</span>
            <button ref={closeRef} className="t-button" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
          <NavList onNavigate={() => setOpen(false)} />
        </div>
      </div>
    </header>
  );
}
