"use client";

import { useState } from "react";
import { SectionHeader } from "./Experiences";

const types = ["Single ride / walk-in", "Group booking", "Birthday party", "Corporate / school", "General enquiry"];

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    type: types[0],
    date: "",
    party: "",
    message: "",
  });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const mailto = () => {
    const subject = `Booking enquiry — ${form.type}`;
    const body = [
      `Name: ${form.name}`,
      `Phone / WhatsApp: ${form.phone}`,
      `Type: ${form.type}`,
      `Preferred date / time: ${form.date}`,
      `Party size: ${form.party}`,
      "",
      "Message:",
      form.message,
    ].join("\n");
    return `mailto:bookings@revvrxperience.zm?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const whatsapp = () => {
    const text = [
      `Hi REV VR Xperience! I'd like to book.`,
      `Name: ${form.name}`,
      `Type: ${form.type}`,
      `Date / time: ${form.date}`,
      `Party size: ${form.party}`,
      form.message ? `Notes: ${form.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    return `https://wa.me/260952866700?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="book" className="relative py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 yellow-divider" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Book a session"
          title="Send us your details — we'll lock it in."
          subtitle="Fastest reply via WhatsApp. Email works too. We confirm every booking before charging anything."
        />

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 rounded-2xl p-px bg-gradient-to-br from-brand-yellow/30 to-brand-amber/30"
        >
          <div className="rounded-2xl bg-ink-900/95 p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Your name">
              <input
                type="text"
                value={form.name}
                onChange={update("name")}
                placeholder="Full name"
                className={inputClass}
                required
              />
            </Field>
            <Field label="Phone / WhatsApp">
              <input
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                placeholder="+260 ..."
                className={inputClass}
                required
              />
            </Field>
            <Field label="Booking type">
              <select value={form.type} onChange={update("type")} className={inputClass}>
                {types.map((t) => (
                  <option key={t} value={t} className="bg-ink-900">
                    {t}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Preferred date / time">
              <input
                type="text"
                value={form.date}
                onChange={update("date")}
                placeholder="Sat afternoon, 14 June..."
                className={inputClass}
              />
            </Field>
            <Field label="Party size" full>
              <input
                type="text"
                value={form.party}
                onChange={update("party")}
                placeholder="e.g. 4 players, or 12 kids"
                className={inputClass}
              />
            </Field>
            <Field label="Anything else?" full>
              <textarea
                rows={4}
                value={form.message}
                onChange={update("message")}
                placeholder="Birthday cake station? First-timers? Special requests?"
                className={`${inputClass} resize-y`}
              />
            </Field>

            <div className="sm:col-span-2 mt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsapp()}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center rounded-full px-5 py-3 font-bold pill-yellow hover:scale-[1.01] transition shadow-glowYellow"
              >
                Send via WhatsApp
              </a>
              <a
                href={mailto()}
                className="flex-1 text-center rounded-full px-5 py-3 font-semibold yellow-border hover:bg-white/5"
              >
                Send via Email
              </a>
            </div>

            <p className="sm:col-span-2 text-xs text-white/40">
              [Wire to a real backend (Resend / Formspree / Supabase) before launch — currently
              opens the user's WhatsApp or email client.]
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-lg bg-ink-800/80 border border-white/10 px-3 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/40 transition";

function Field({ label, full, children }) {
  return (
    <label className={`flex flex-col gap-1.5 ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-xs uppercase tracking-wider text-white/60">{label}</span>
      {children}
    </label>
  );
}
