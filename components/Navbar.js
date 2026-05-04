"use client";

import { useState } from "react";

const links = [
  { href: "#experiences", label: "Experiences" },
  { href: "#pricing", label: "Pricing" },
  { href: "#parties", label: "Parties" },
  { href: "#visit", label: "Visit" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-ink-950/70 border-b border-white/5">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="inline-block h-8 w-8 rounded-md bg-gradient-to-br from-neon-purple to-neon-cyan shadow-glow group-hover:scale-105 transition" />
          <span className="font-display font-bold tracking-wide text-lg">
            REV <span className="text-glow-cyan text-neon-cyan">VR</span> Xperience
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/75 hover:text-white transition relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-neon-cyan after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            className="rounded-full px-4 py-2 text-sm font-semibold bg-gradient-to-r from-neon-purple to-neon-cyan text-ink-950 shadow-glow hover:scale-[1.03] transition"
          >
            Book a session
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md neon-border"
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
                className="py-2 text-white/85 hover:text-neon-cyan"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="mt-2 text-center rounded-full px-4 py-2.5 font-semibold bg-gradient-to-r from-neon-purple to-neon-cyan text-ink-950"
            >
              Book a session
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
