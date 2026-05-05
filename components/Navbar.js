"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoMark from "./LogoMark";

const links = [
  { href: "/rides", label: "Rides" },
  { href: "/parties", label: "Parties" },
  { href: "/visit", label: "Visit" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Auto-close the mobile menu when the viewport crosses into desktop layout.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(min-width: 768px)");
    const handler = (e) => { if (e.matches) setOpen(false); };
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-ink-950/80 border-b border-white/5">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center group" aria-label="REV VR Xperience — home">
          <LogoMark className="h-10 w-auto" priority />
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm transition relative after:absolute after:left-0 after:-bottom-1 after:h-px after:transition-all ${
                  active
                    ? "text-white after:w-full after:bg-brand-yellow"
                    : "text-white/75 hover:text-white after:w-0 after:bg-brand-yellow hover:after:w-full"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/book"
            className="rounded-full px-4 py-2 text-sm font-bold pill-yellow shadow-glow hover:scale-[1.03] transition"
          >
            Book a session
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
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
        <div id="mobile-menu" className="md:hidden border-t border-white/5 bg-ink-950/95">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`py-2 ${active ? "text-brand-yellow font-medium" : "text-white/85 hover:text-brand-yellow"}`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/book"
              className="mt-2 text-center rounded-full px-4 py-2.5 font-bold pill-yellow"
            >
              Book a session
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
