"use client";

import { useState } from "react";
import { SectionHeader } from "./Experiences";

const faqs = [
  {
    q: "Is there an age or height minimum?",
    a: "Most experiences are 8+, with some thrill rides set at 12+ for height and motion-sickness reasons. Our staff will guide families to the right titles on arrival.",
  },
  {
    q: "Can I just walk in, or do I need to book?",
    a: "Walk-ins are always welcome. For peak times (Friday evenings, weekends, school holidays) and for groups of 4 or more, booking ahead is strongly recommended.",
  },
  {
    q: "How long does a session last?",
    a: "A single session runs about 15 minutes per game. Most guests opt for the Triple Pack so they can try a few different worlds in one visit.",
  },
  {
    q: "Do the headsets work over glasses?",
    a: "Yes. Our headsets accommodate most glasses. If yours are unusually large, contact lenses are the safer bet.",
  },
  {
    q: "What about hygiene?",
    a: "Headsets and controllers are wiped between every guest, and disposable face liners are available on request.",
  },
  {
    q: "Will I get motion-sick?",
    a: "Some experiences are intense; many are completely calm. Our staff will steer you toward the chill titles if it's your first time.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Mobile money (Airtel Money & MTN MoMo), card and cash. [To be confirmed with the venue.]",
  },
  {
    q: "Do you do birthday parties?",
    a: "Yes — see the Parties & Groups section above. Send us the date and group size and we'll come back with a tailored package.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 neon-divider" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeader eyebrow="FAQ" title="Common questions." />
        <div className="mt-10 divide-y divide-white/10 rounded-2xl neon-border bg-ink-900/50">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full text-left flex items-center justify-between gap-4 px-5 py-4 hover:bg-white/[0.03] transition"
                >
                  <span className="font-medium">{f.q}</span>
                  <span
                    className={`shrink-0 inline-block h-6 w-6 rounded-full border border-neon-cyan/50 grid place-items-center text-neon-cyan transition ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-white/75 text-sm leading-relaxed">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
