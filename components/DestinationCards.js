import Link from "next/link";
import SectionHeader from "./SectionHeader";

const destinations = [
  {
    href: "/rides",
    title: "Rides & Pricing",
    blurb: "Eleven rides on rotation. From K50 per person.",
    icon: <RideIcon />,
  },
  {
    href: "/parties",
    title: "Parties & Groups",
    blurb: "Birthdays, school outings, corporate off-sites.",
    icon: <PartyIcon />,
  },
  {
    href: "/visit",
    title: "Visit Us",
    blurb: "Manda Hill, upstairs. Hours, map, contact.",
    icon: <PinIcon />,
  },
  {
    href: "/faq",
    title: "Common Questions",
    blurb: "Pricing, age limits, walk-ins, payment methods.",
    icon: <QuestionIcon />,
  },
];

export default function DestinationCards() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 yellow-divider" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Find what you need"
          title="Skip the scroll."
          subtitle="Jump straight to what you came for."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {destinations.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className="group relative rounded-2xl p-px bg-gradient-to-br from-brand-yellow/30 via-white/5 to-brand-amber/20 hover:from-brand-yellow hover:to-brand-gold transition"
            >
              <div className="rounded-2xl bg-ink-900/95 h-full p-6 flex flex-col">
                <span className="grid place-items-center h-12 w-12 rounded-xl bg-brand-yellow/15 text-brand-yellow group-hover:bg-brand-yellow/30 transition">
                  {d.icon}
                </span>
                <h3 className="mt-4 font-display font-semibold text-lg">{d.title}</h3>
                <p className="mt-2 text-sm text-white/70 flex-1">{d.blurb}</p>
                <span className="mt-4 inline-flex items-center text-sm text-brand-yellow font-medium">
                  Open <span className="ml-1 transition group-hover:translate-x-0.5">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold pill-yellow shadow-glow hover:scale-[1.03] transition"
          >
            Book a session →
          </Link>
        </div>
      </div>
    </section>
  );
}

function RideIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 12h2l3-3h10l3 3h2" />
      <path d="M5 12v6h14v-6" />
      <circle cx="8" cy="18" r="2" />
      <circle cx="16" cy="18" r="2" />
    </svg>
  );
}

function PartyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5.8 11.3 2 22l10.7-3.79" />
      <path d="M4 3h.01" />
      <path d="M22 8h.01" />
      <path d="M15 2h.01" />
      <path d="M22 20h.01" />
      <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
      <path d="m22 13-1.4-.467a2.1 2.1 0 0 0-2.6 1.4c-.21.99-1.18 1.66-2.16 1.34l-.43-.13c-.99-.32-2.04.21-2.4 1.18L13 18" />
      <path d="m11 13 1.46 1.71" />
      <path d="m13.5 9.5 2 2" />
      <path d="m17 6 1 1" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function QuestionIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}
