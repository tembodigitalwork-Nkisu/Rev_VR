"use client";

import { useEffect, useState } from "react";
import WhatsAppGlyph from "./WhatsAppGlyph";

// Hide the floating button when the user has the in-page booking form open,
// since the form has its own "Send via WhatsApp" CTA right there.
export default function WhatsAppButton() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById("book");
    if (!target || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.25 }
    );
    obs.observe(target);
    return () => obs.disconnect();
  }, []);

  return (
    <a
      href="https://wa.me/260952866700?text=Hi%20REV%20VR%20Xperience%20%E2%80%94%20I'd%20like%20to%20book%20a%20session."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : 0}
      className={`fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-[#25D366] grid place-items-center shadow-glow transition-all duration-300 ${
        hidden ? "opacity-0 scale-75 pointer-events-none" : "opacity-100 hover:scale-110"
      }`}
    >
      <WhatsAppGlyph className="h-7 w-7 text-white" />
    </a>
  );
}
