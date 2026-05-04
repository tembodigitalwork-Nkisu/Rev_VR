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
              <ul className="mt-4 space-y-4 text-sm">
                <ContactRow icon={<PhoneIcon />} label="Phone">
                  <a href="tel:+260952866700" className="text-white hover:text-brand-yellow">+260 95 2866700</a>
                </ContactRow>
                <ContactRow icon={<WhatsAppIcon />} label="WhatsApp">
                  <a
                    href="https://wa.me/260952866700"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-brand-yellow"
                  >
                    Chat on WhatsApp →
                  </a>
                </ContactRow>
                <ContactRow icon={<MailIcon />} label="Email">
                  <a href="mailto:revvrxperience@gmail.com" className="text-white hover:text-brand-yellow break-all">
                    revvrxperience@gmail.com
                  </a>
                </ContactRow>
                <ContactRow icon={<InstagramIcon />} label="Instagram">
                  <a
                    href="https://www.instagram.com/rev_vr_xperience/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-brand-yellow"
                  >
                    @rev_vr_xperience
                  </a>
                </ContactRow>
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

function ContactRow({ icon, label, children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="shrink-0 grid place-items-center h-9 w-9 rounded-full bg-brand-yellow/10 text-brand-yellow">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <span className="block text-white/50 text-xs uppercase tracking-wider">{label}</span>
        {children}
      </div>
    </li>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.13 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M19.11 17.43c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.65 1.12 2.83.14.18 1.93 2.95 4.69 4.13.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.16.16-1.28-.07-.11-.25-.18-.52-.32zM16 4C9.37 4 4 9.37 4 16c0 2.13.56 4.13 1.54 5.86L4 28l6.32-1.53A11.93 11.93 0 0 0 16 28c6.63 0 12-5.37 12-12S22.63 4 16 4zm0 21.82a9.78 9.78 0 0 1-4.99-1.36l-.36-.21-3.75.91 1-3.65-.23-.37A9.79 9.79 0 0 1 6.18 16C6.18 10.59 10.59 6.18 16 6.18S25.82 10.59 25.82 16 21.41 25.82 16 25.82z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
