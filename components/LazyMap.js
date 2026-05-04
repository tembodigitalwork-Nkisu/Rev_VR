"use client";

import { useState } from "react";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.9520107890885!2d28.304069238171277!3d-15.400305243477828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408b51c9e6ef8d%3A0x568164ac93a6406e!2sREV%20VIRTUAL%20REALITY%20XPERIENCE!5e0!3m2!1sen!2szm!4v1777899359101!5m2!1sen!2szm";

// Lazy-load the Google Maps iframe behind a click. Saves ~500 KB on first
// page-load — most visitors don't scroll the embedded map (the "Open in
// Google Maps" link below the map is the primary CTA for directions).
export default function LazyMap() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={MAP_SRC}
        title="REV VR Xperience — Manda Hill, Lusaka"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label="Load interactive map of REV VR Xperience"
      className="absolute inset-0 w-full h-full grid place-items-center grid-bg bg-gradient-to-br from-ink-800 to-ink-700 hover:from-ink-700 hover:to-ink-700 transition group"
    >
      <div className="flex flex-col items-center gap-3 text-center px-4">
        <span className="grid place-items-center h-14 w-14 rounded-full bg-brand-yellow/15 group-hover:bg-brand-yellow/30 transition">
          <svg viewBox="0 0 24 24" className="h-7 w-7 text-brand-yellow" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </span>
        <div>
          <p className="font-display font-semibold text-white">View on map</p>
          <p className="text-xs text-white/60 mt-1">Tap to load Google Maps</p>
        </div>
      </div>
    </button>
  );
}
