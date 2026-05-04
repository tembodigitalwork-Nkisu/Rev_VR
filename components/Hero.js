import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Venue photo background */}
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark gradient overlay — keeps the left/top dark for text legibility,
          lets the venue glow through on the right/bottom */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/65 to-black/25" />

      {/* Soft fade into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      {/* Subtle yellow accent glows (kept light so they don't fight the photo) */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-yellow/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-amber/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full yellow-border bg-black/40 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-widest text-white/85">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulseGlow" />
            Now open · Manda Hill, upstairs
          </div>

          <h1 className="mt-6 font-display font-bold text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight drop-shadow-[0_2px_24px_rgba(0,0,0,0.6)]">
            Step inside.
            <br />
            <span className="text-glow-yellow text-brand-yellow">Reality distortion</span>
            <br />
            <span className="text-white">guaranteed.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/85 drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]">
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
              className="rounded-full px-6 py-3 font-semibold yellow-border bg-black/40 backdrop-blur-sm hover:bg-black/60 transition"
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
                <dt className="text-2xl font-display font-bold text-brand-yellow drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]">{k}</dt>
                <dd className="text-xs uppercase tracking-wider text-white/70 mt-1">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
