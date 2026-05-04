import Image from "next/image";

const rides = [
  { name: "Space Ride",    price: 120, tag: "Exploration",  intensity: "Thrilling", image: null,                       blurb: "Strap in for the trip nobody else is doing in Lusaka — orbit, drift, and dodge through deep space." },
  { name: "VR Paraglider", price: 120, tag: "Simulation",   intensity: "Chill",     image: null,                       blurb: "Soar over canyons and coastlines. Wind in your face, ground far below." },
  { name: "Super 360",     price: 100, tag: "Motion ride",  intensity: "Thrilling", image: null,                       blurb: "Full 360° rotation rig. Flip, spin, and lose your bearings — in the best possible way." },
  { name: "VR 720",        price: 100, tag: "Motion ride",  intensity: "Thrilling", image: "/rides/vr-720.jpg",        blurb: "Twin-axis ride that throws you through coasters, drops, and loops you didn't see coming." },
  { name: "VR Racecar",    price: 50,  tag: "Racing",       intensity: "Chill",     image: "/rides/vr-racecar.jpg",    blurb: "Wheel, pedals, racing seat. Pick a track and chase the leaderboard." },
  { name: "The Egg",       price: 50,  tag: "Pod ride",     intensity: "Thrilling", image: null,                       blurb: "Single-pod cocoon ride. Short, intense, deeply weird." },
  { name: "Three Seater",  price: 50,  tag: "Group ride",   intensity: "Chill",     image: "/rides/three-seater.jpg",  blurb: "Multi-player rig — friends or family ride together. Coasters, simulators, scenic flights." },
  { name: "VR Express",    price: 50,  tag: "Quick ride",   intensity: "Chill",     image: null,                       blurb: "The fast-track option — pick a clip, headset on, go. Great if you only have a few minutes." },
  { name: "VR Bike",       price: 50,  tag: "Simulation",   intensity: "Chill",     image: "/rides/vr-bike.jpg",       blurb: "Pedal through cities, mountain trails, and downhill runs. A workout dressed as a game." },
  { name: "Arcade",        price: 50,  tag: "Arcade",       intensity: "Chill",     image: "/rides/arcade.jpg",        blurb: "Classic VR arcade titles — hit, shoot, dodge, score. Re-playable forever." },
  { name: "Self Service",  price: 50,  tag: "Free choice",  intensity: "Chill",     image: "/rides/self-service.jpg",  blurb: "Pick your own game from our library and play at your own pace." },
];

const intensityStyles = {
  Chill: "bg-white/5 text-white/80 border-white/15",
  Thrilling: "bg-brand-yellow/15 text-brand-yellow border-brand-yellow/40",
  "Not for the faint-hearted": "bg-brand-amber/15 text-brand-amber border-brand-amber/50",
};

export default function Experiences() {
  return (
    <section id="rides" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Rides & Pricing"
          title="Pick your reality."
          subtitle="Eleven rides on rotation, all charged per person. Walk in or book ahead — we'll pair you with whatever fits your group."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rides.map((r) => (
            <article
              key={r.name}
              className="group relative rounded-2xl p-px bg-gradient-to-br from-brand-yellow/30 via-white/5 to-brand-amber/20 hover:from-brand-yellow hover:to-brand-gold transition"
            >
              <div className="rounded-2xl bg-ink-900/95 h-full p-5 flex flex-col">
                <div className="relative aspect-[4/5] rounded-lg bg-gradient-to-br from-ink-800 to-ink-700 mb-4 overflow-hidden grid place-items-center">
                  {r.image ? (
                    <Image
                      src={r.image}
                      alt={r.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <span className="text-white/30 text-xs uppercase tracking-widest">Photo coming soon</span>
                  )}
                </div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display font-semibold text-lg leading-tight">{r.name}</h3>
                  <span className="shrink-0 inline-flex items-center rounded-full pill-yellow text-sm font-bold px-3 py-1">
                    K{r.price}
                  </span>
                </div>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-white/50">{r.tag}</p>
                <p className="mt-3 text-sm text-white/70 flex-1">{r.blurb}</p>
                <div className="mt-4 flex items-center gap-2 flex-wrap">
                  <span
                    className={`text-[10px] px-2 py-1 rounded-full border ${intensityStyles[r.intensity]}`}
                  >
                    {r.intensity}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/50">
          All VR rides are charged per person. Pay by mobile money, card or cash.
        </p>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <p className="text-xs uppercase tracking-[0.3em] text-brand-yellow">{eyebrow}</p>
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
