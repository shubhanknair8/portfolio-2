"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { DotsIcon } from "./bits";
import { NavList } from "./NavList";

function Clock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);
  if (!now) return <span className="header__clock" aria-hidden />;
  const long = now.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  const short = now.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  const time = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  return (
    <span className="header__clock">
      <span className="clock__long">{long}</span>
      <span className="clock__short">{short}</span>
      <span>{time}</span>
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <header className="header">
      <div className="wrap">
        <div className="header__bar">
          <Link href="/" className="header__logo t-logo" aria-label={`${site.name} — home`}>
            {site.logo}
          </Link>
          <Clock />
          <button
            ref={triggerRef}
            className="header__menu"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen(true)}
          >
            <DotsIcon />
          </button>
        </div>
      </div>

      <div id="site-menu" className="menu" role="dialog" aria-modal="true" aria-label="Menu" hidden={!open}>
        <div className="wrap">
          <div className="menu__bar">
            <span className="t-logo">{site.logo}</span>
            <button ref={closeRef} className="t-button" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
          <nav aria-label="Primary">
            <NavList onNavigate={() => setOpen(false)} />
          </nav>
        </div>
      </div>
    </header>
  );
}
