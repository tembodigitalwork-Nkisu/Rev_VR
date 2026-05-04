const experiences = [
  {
    title: "Space Walker",
    blurb: "Float through zero-gravity, dodge debris, dock with the station.",
    intensity: "Chill",
    age: "8+",
    tag: "Exploration",
  },
  {
    title: "Creature Encounter",
    blurb: "Come face-to-face with prehistoric and mythical beasts. Don't blink.",
    intensity: "Thrilling",
    age: "10+",
    tag: "Adventure",
  },
  {
    title: "Sky Dive",
    blurb: "10,000 feet up. The wind, the drop, the parachute — your body believes it.",
    intensity: "Not for the faint-hearted",
    age: "12+",
    tag: "Simulation",
  },
  {
    title: "Zombie Defense",
    blurb: "Co-op shooter. Hold the line with up to 4 friends.",
    intensity: "Thrilling",
    age: "13+",
    tag: "Action",
  },
  {
    title: "Mountain Coaster",
    blurb: "Rollercoaster physics, alpine setting, no queue, no rain.",
    intensity: "Chill",
    age: "8+",
    tag: "Ride",
  },
  {
    title: "Underwater World",
    blurb: "Swim with whales, dolphins and reef life. A favourite for first-timers.",
    intensity: "Chill",
    age: "All ages",
    tag: "Exploration",
  },
];

const intensityStyles = {
  Chill: "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30",
  Thrilling: "bg-neon-purple/10 text-neon-purple border-neon-purple/30",
  "Not for the faint-hearted": "bg-neon-pink/10 text-neon-pink border-neon-pink/40",
};

export default function Experiences() {
  return (
    <section id="experiences" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Experiences"
          title="Pick your reality."
          subtitle="A rotating catalog of single-player and co-op titles. Final list confirmed at the door — ask for the day's lineup."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {experiences.map((e) => (
            <article
              key={e.title}
              className="group relative rounded-2xl p-px bg-gradient-to-br from-neon-purple/30 via-white/5 to-neon-cyan/30 hover:from-neon-purple hover:to-neon-cyan transition"
            >
              <div className="rounded-2xl bg-ink-900/90 h-full p-5 flex flex-col">
                <div className="aspect-video rounded-lg bg-gradient-to-br from-ink-800 to-ink-700 mb-4 grid place-items-center text-white/30 text-xs uppercase tracking-widest">
                  {/* Placeholder for game artwork */}
                  Image / clip
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-semibold text-lg">{e.title}</h3>
                  <span className="text-[10px] uppercase tracking-widest text-white/50">
                    {e.tag}
                  </span>
                </div>
                <p className="mt-2 text-sm text-white/70 flex-1">{e.blurb}</p>
                <div className="mt-4 flex items-center gap-2 flex-wrap">
                  <span
                    className={`text-[10px] px-2 py-1 rounded-full border ${intensityStyles[e.intensity]}`}
                  >
                    {e.intensity}
                  </span>
                  <span className="text-[10px] px-2 py-1 rounded-full border border-white/15 text-white/70">
                    Age {e.age}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/40">
          [Placeholder catalog — confirm full game list with the venue]
        </p>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <p className="text-xs uppercase tracking-[0.3em] text-neon-cyan">{eyebrow}</p>
      <h2 className="mt-3 font-display font-bold text-3xl sm:text-5xl tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-white/70">{subtitle}</p>
      )}
    </div>
  );
}

export { SectionHeader };
