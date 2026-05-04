import SectionHeader from "./SectionHeader";

export default function Social() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 yellow-divider" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Follow along"
          title="Real reactions, real reality distortion."
          subtitle="Daily clips on Instagram and TikTok — the videos do most of the talking."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="https://www.instagram.com/rev_vr_xperience/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-5 py-2.5 font-semibold yellow-border hover:bg-white/5 transition"
          >
            Follow on Instagram
          </a>
          <a
            href="https://www.tiktok.com/@rev.vr.xperience"
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-5 py-2.5 font-semibold yellow-border hover:bg-white/5 transition"
          >
            Watch on TikTok
          </a>
        </div>
      </div>
    </section>
  );
}
