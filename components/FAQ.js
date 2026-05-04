"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

const faqs = [
  {
    q: "How much does each ride cost?",
    a: "All rides are charged per person. Most are K50 (Racecar, Bike, The Egg, Three Seater, VR Express, Arcade, Self Service); Super 360 and VR 720 are K100; Space Ride and VR Paraglider are K120.",
  },
  {
    q: "Is there an age or height minimum?",
    a: "Most rides are 8+, with the more intense motion rides (Super 360, VR 720, Space Ride) recommended for 12+ for height and motion-sickness reasons. Our staff will guide families to the right rides on arrival.",
  },
  {
    q: "Can I just walk in, or do I need to book?",
    a: "Walk-ins are always welcome. For peak times (Friday evenings, weekends, school holidays) and for groups of 4 or more, booking ahead is strongly recommended.",
  },
  {
    q: "How long does a ride last?",
    a: "Most rides run a few minutes per session. Many guests do two or three different rides on the same visit — pair a chill one (Paraglider, Bike) with a thrill one (Super 360, The Egg).",
  },
  {
    q: "Do the headsets work over glasses?",
    a: "Our headsets don't accommodate glasses. If you wear them, switch to contact lenses for the visit, or play without — the in-headset focus is forgiving for mild prescriptions.",
  },
  {
    q: "What about hygiene?",
    a: "Headsets and controllers are wiped between every guest, and disposable face liners are available on request.",
  },
  {
    q: "Will I get motion-sick?",
    a: "Some rides are intense; many are completely calm. Our staff will steer you toward the chill ones if it's your first time.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Mobile money (Airtel Money & MTN MoMo), card and cash.",
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
      <div className="absolute inset-x-0 top-0 yellow-divider" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeader eyebrow="FAQ" title="Common questions." />
        <div className="mt-10 divide-y divide-white/10 rounded-2xl yellow-border bg-ink-900/50">
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
                    className={`shrink-0 inline-block h-6 w-6 rounded-full border border-brand-yellow/50 grid place-items-center text-brand-yellow transition ${
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
