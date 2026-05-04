"use client";

import { useState } from "react";
import LogoMark from "./LogoMark";

const links = [
  { href: "#rides", label: "Rides" },
  { href: "#parties", label: "Parties" },
  { href: "#visit", label: "Visit" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-ink-950/80 border-b border-white/5">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <LogoMark className="h-8 w-auto" />
          <span className="font-display font-bold tracking-wide text-lg">
            REV <span className="text-brand-yellow">VR</span> Xperience
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/75 hover:text-white transition relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-brand-yellow after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            className="rounded-full px-4 py-2 text-sm font-bold pill-yellow shadow-glow hover:scale-[1.03] transition"
          >
            Book a session
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md yellow-border"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-ink-950/95">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-white/85 hover:text-brand-yellow"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="mt-2 text-center rounded-full px-4 py-2.5 font-bold pill-yellow"
            >
              Book a session
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
