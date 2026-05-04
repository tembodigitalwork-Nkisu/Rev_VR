import { SectionHeader } from "./Experiences";

const partyPackages = [
  {
    name: "Birthday Bash",
    desc: "Up to 10 guests, mixed VR rides on rotation, dedicated host, decoration zone.",
    note: "Pricing TBC — request a quote",
  },
  {
    name: "Squad Night",
    desc: "Up to 15 guests, ~1.5 hours, race the leaderboard or co-op against the room.",
    note: "Pricing TBC — request a quote",
  },
];

export default function Pricing() {
  return (
    <section id="parties" className="relative py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 yellow-divider" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Parties & Groups"
          title="Throw a party they'll talk about."
          subtitle="Birthdays, end-of-term outings, team-building. We'll handle the rides — you bring the people."
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {partyPackages.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl p-px bg-gradient-to-br from-brand-yellow/40 to-brand-amber/30"
            >
              <div className="rounded-2xl bg-ink-900/95 p-6 h-full">
                <h3 className="font-display font-semibold text-xl text-brand-yellow">{p.name}</h3>
                <p className="mt-3 text-white/75">{p.desc}</p>
                <p className="mt-4 text-xs text-white/40">{p.note}</p>
                <a
                  href="#book"
                  className="mt-5 inline-flex rounded-full px-4 py-2 text-sm font-semibold yellow-border hover:bg-white/5"
                >
                  Get a quote →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
