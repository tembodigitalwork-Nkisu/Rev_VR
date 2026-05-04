import { SectionHeader } from "./Experiences";

const tiers = [
  {
    name: "Single Session",
    price: "K—",
    duration: "≈ 15 min",
    perks: [
      "One game of your choice",
      "Briefing + headset hygiene",
      "Walk-in welcome",
    ],
    cta: "Walk in",
    accent: "from-white/10 to-white/0",
  },
  {
    name: "Triple Pack",
    price: "K—",
    duration: "≈ 45 min",
    perks: [
      "Three games — mix and match",
      "Best for first-timers",
      "Save vs single sessions",
    ],
    cta: "Book ahead",
    featured: true,
    accent: "from-neon-purple/30 to-neon-cyan/30",
  },
  {
    name: "Group Rate",
    price: "K—",
    duration: "Up to 8 players",
    perks: [
      "Co-op + competitive titles",
      "Great for friends or family",
      "Snacks add-on available",
    ],
    cta: "Enquire",
    accent: "from-white/10 to-white/0",
  },
];

const partyPackages = [
  {
    name: "Birthday Bash",
    desc: "Up to 10 guests, 1 hour of VR rotations, dedicated host, decoration zone.",
    note: "Pricing TBC — request a quote",
  },
  {
    name: "Squad Night",
    desc: "Up to 15 guests, 1.5 hours, mixed games, optional cake station.",
    note: "Pricing TBC — request a quote",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 neon-divider" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Pricing"
          title="Clear, public pricing."
          subtitle="No 'call us for pricing.' Final amounts confirmed at the venue. Pay by mobile money, card, or cash."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl p-px bg-gradient-to-br ${t.accent} ${
                t.featured ? "shadow-glow" : ""
              }`}
            >
              <div className="rounded-2xl bg-ink-900/90 p-6 h-full flex flex-col">
                {t.featured && (
                  <span className="absolute -top-3 left-6 text-[10px] uppercase tracking-widest bg-neon-cyan text-ink-950 px-2 py-1 rounded-full">
                    Most popular
                  </span>
                )}
                <h3 className="font-display font-semibold text-xl">{t.name}</h3>
                <p className="text-xs text-white/50 mt-1">{t.duration}</p>
                <p className="mt-4 font-display text-4xl font-bold">
                  {t.price}
                  <span className="text-sm font-normal text-white/50 ml-1">/ player</span>
                </p>
                <ul className="mt-5 space-y-2 text-sm text-white/75 flex-1">
                  {t.perks.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-neon-cyan">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#book"
                  className={`mt-6 text-center rounded-full py-2.5 font-semibold transition ${
                    t.featured
                      ? "bg-gradient-to-r from-neon-purple to-neon-cyan text-ink-950 hover:scale-[1.02]"
                      : "neon-border hover:bg-white/5"
                  }`}
                >
                  {t.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-white/40">
          [Placeholder prices — replace K— with confirmed figures]
        </p>

        <div id="parties" className="mt-20">
          <SectionHeader
            eyebrow="Parties & Groups"
            title="Throw a party they'll talk about."
            subtitle="Birthdays, end-of-term outings, team-building. We'll handle the games — you bring the people."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {partyPackages.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl p-px bg-gradient-to-br from-neon-purple/40 to-neon-pink/30"
              >
                <div className="rounded-2xl bg-ink-900/90 p-6 h-full">
                  <h3 className="font-display font-semibold text-xl">{p.name}</h3>
                  <p className="mt-3 text-white/75">{p.desc}</p>
                  <p className="mt-4 text-xs text-white/40">{p.note}</p>
                  <a
                    href="#book"
                    className="mt-5 inline-flex rounded-full px-4 py-2 text-sm font-semibold neon-border hover:bg-white/5"
                  >
                    Get a quote →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
