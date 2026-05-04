import { SectionHeader } from "./Experiences";

const hours = [
  ["Monday", "Closed"],
  ["Tue – Fri", "9:30 AM – 11:00 PM"],
  ["Sat – Sun", "9:30 AM – 11:30 PM"],
];

export default function Visit() {
  return (
    <section id="visit" className="relative py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 yellow-divider" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Visit Us"
          title="Manda Hill, upstairs."
          subtitle="On the upper level, directly opposite the escalators. Free mall parking."
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden yellow-border bg-ink-900/60">
            <div className="aspect-[4/3] bg-gradient-to-br from-ink-800 to-ink-700 grid place-items-center text-white/40 text-sm">
              [Map embed placeholder — Manda Hill Shopping Centre, Lusaka]
            </div>
            <div className="p-5 space-y-2 text-sm">
              <p className="font-semibold text-white">REV VR Xperience</p>
              <p className="text-white/70">
                Manda Hill Shopping Centre, Upper Level<br />
                Opposite the escalators, Lusaka, Zambia
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Manda+Hill+Shopping+Centre+Lusaka"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-brand-yellow hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl yellow-border bg-ink-900/60 p-6">
              <h3 className="font-display font-semibold text-lg text-brand-yellow">Hours</h3>
              <dl className="mt-4 divide-y divide-white/5">
                {hours.map(([day, h]) => (
                  <div key={day} className="flex justify-between py-2.5 text-sm">
                    <dt className="text-white/70">{day}</dt>
                    <dd className="font-medium">{h}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-2xl yellow-border bg-ink-900/60 p-6">
              <h3 className="font-display font-semibold text-lg text-brand-yellow">Contact</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <span className="block text-white/50 text-xs uppercase tracking-wider">Phone</span>
                  <a href="tel:+260952866700" className="text-white hover:text-brand-yellow">+260 95 2866700</a>
                </li>
                <li>
                  <span className="block text-white/50 text-xs uppercase tracking-wider">WhatsApp</span>
                  <a
                    href="https://wa.me/260952866700"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-brand-yellow"
                  >
                    Chat on WhatsApp →
                  </a>
                </li>
                <li>
                  <span className="block text-white/50 text-xs uppercase tracking-wider">Email</span>
                  <a href="mailto:revvrxperience@gmail.com" className="text-white hover:text-brand-yellow break-all">
                    revvrxperience@gmail.com
                  </a>
                </li>
                <li>
                  <span className="block text-white/50 text-xs uppercase tracking-wider">Instagram</span>
                  <a
                    href="https://www.instagram.com/rev_vr_xperience/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-brand-yellow"
                  >
                    @rev_vr_xperience
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl yellow-border bg-ink-900/60 p-6">
              <h3 className="font-display font-semibold text-lg text-brand-yellow">Parking & navigation</h3>
              <p className="mt-3 text-sm text-white/75">
                Use any of the Manda Hill entrances and head upstairs. We're on the same level as the food court,
                straight off the escalators. If you hit a clothing shop, you've gone past us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
