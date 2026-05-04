import SectionHeader from "./SectionHeader";

const benefits = [
  { title: "Team-building that isn't trust falls", desc: "Co-op missions force communication; competitive rides surface leadership." },
  { title: "Nothing to organise", desc: "Walk in, headset on, debrief over coffee at Manda Hill." },
  { title: "Memorable for clients & staff", desc: "Year-end functions, staff incentives, school outings — same venue, same wow." },
];

export default function Corporate() {
  return (
    <section id="corporate" className="relative py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 yellow-divider" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Corporate · Schools</p>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-5xl tracking-tight">
              Better than another conference room.
            </h2>
            <p className="mt-5 text-white/75">
              We host HR teams, school groups, and company off-sites with rotations built around your headcount and time slot.
              Tell us the group size and the date — we'll send a tailored package.
            </p>
            <div className="mt-7">
              <a
                href="#book"
                className="rounded-full px-5 py-2.5 font-bold pill-yellow shadow-glow hover:scale-[1.03] transition inline-block"
              >
                Request a package
              </a>
            </div>
          </div>

          <ul className="space-y-4">
            {benefits.map((b) => (
              <li key={b.title} className="rounded-xl yellow-border p-5 bg-ink-900/60">
                <h3 className="font-display font-semibold text-lg text-brand-yellow">{b.title}</h3>
                <p className="mt-2 text-white/75 text-sm">{b.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
