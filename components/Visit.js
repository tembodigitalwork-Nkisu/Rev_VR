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
            <div className="aspect-[4/3] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.9520107890885!2d28.304069238171277!3d-15.400305243477828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408b51c9e6ef8d%3A0x568164ac93a6406e!2sREV%20VIRTUAL%20REALITY%20XPERIENCE!5e0!3m2!1sen!2szm!4v1777899359101!5m2!1sen!2szm"
                title="REV VR Xperience — Manda Hill, Lusaka"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-5 space-y-2 text-sm">
              <p className="font-semibold text-white">REV VR Xperience</p>
              <p className="text-white/70">
                Manda Hill Shopping Centre, Upper Level<br />
                Opposite the escalators, Lusaka, Zambia
              </p>
              <a
                href="https://www.google.com/maps/place/?q=place_id:ChIJjW7m6VGLQBkRbkCmk6xkgVY"
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
