export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-yellow/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-amber/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full yellow-border px-3 py-1 text-xs uppercase tracking-widest text-white/85">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulseGlow" />
            Now open · Manda Hill, upstairs
          </div>

          <h1 className="mt-6 font-display font-bold text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            Step inside.
            <br />
            <span className="text-glow-yellow text-brand-yellow">Reality distortion</span>
            <br />
            <span className="text-white">guaranteed.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/75">
            Lusaka's first walk-in VR arcade. Fly, fall, float through space, race a car, ride a bike,
            paraglide — eleven different rides, all on the upper level of Manda Hill.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#book"
              className="rounded-full px-6 py-3 font-bold pill-yellow shadow-glow hover:scale-[1.03] transition"
            >
              Book your session
            </a>
            <a
              href="#rides"
              className="rounded-full px-6 py-3 font-semibold yellow-border hover:bg-white/5 transition"
            >
              See the rides
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            {[
              ["5.0★", "Google rating"],
              ["11", "VR rides"],
              ["From K50", "Per ride"],
              ["Tue–Sun", "Open late"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="text-2xl font-display font-bold text-brand-yellow">{k}</dt>
                <dd className="text-xs uppercase tracking-wider text-white/60 mt-1">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
