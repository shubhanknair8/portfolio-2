"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/content/site";
import { DotsIcon } from "./bits";
import { NavList } from "./NavList";

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

  const main = links.filter((l) => l.href !== "/contact");
  const contact = links.find((l) => l.href === "/contact");

  return (
    <header className="header3">
      <div className="header3__pill">
        <Link href="/" className="header3__brand" aria-label={`${site.name}, home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/avatar-v2.jpg" alt="" className="header3__avatar" />
          <span>{site.name}</span>
        </Link>
        <nav aria-label="Primary" className="header3__nav">
          <ul>
            {main.map((l) => (
              <li key={l.href}>
                {l.download ? (
                  <a href={l.href} download className="header3__link">
                    {l.label}
                  </a>
                ) : (
                  <Link href={l.href} className="header3__link" aria-current={path === l.href ? "page" : undefined}>
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {contact && (
          <Link href={contact.href} className="header3__contact" aria-current={path === contact.href ? "page" : undefined}>
            {contact.label}
          </Link>
        )}
        <button
          ref={triggerRef}
          className="header3__menu"
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
