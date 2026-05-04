import { SectionHeader } from "./Experiences";

export default function Social() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 yellow-divider" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="From our feed"
          title="Real reactions, real reality distortion."
          subtitle="Follow along on Instagram and TikTok — the videos do most of the talking."
        />

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <a
              key={i}
              href="https://www.instagram.com/rev_vr_xperience/"
              target="_blank"
              rel="noreferrer"
              className="aspect-square rounded-xl bg-gradient-to-br from-ink-800 to-ink-700 yellow-border grid place-items-center text-white/30 text-[10px] uppercase tracking-widest hover:scale-[1.02] transition"
            >
              Reel {i + 1}
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="https://www.instagram.com/rev_vr_xperience/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-5 py-2.5 font-semibold yellow-border hover:bg-white/5"
          >
            Follow on Instagram
          </a>
          <a
            href="https://www.tiktok.com/@rev.vr.xperience"
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-5 py-2.5 font-semibold yellow-border hover:bg-white/5"
          >
            Watch on TikTok
          </a>
        </div>
        <p className="mt-3 text-center text-xs text-white/40">
          [Replace placeholders with embedded Instagram/TikTok feeds at launch]
        </p>
      </div>
    </section>
  );
}
