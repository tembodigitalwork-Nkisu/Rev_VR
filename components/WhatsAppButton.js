"use client";

import { usePathname } from "next/navigation";
import WhatsAppGlyph from "./WhatsAppGlyph";

// Hide the floating button on /book — the form already has its own
// "Send via WhatsApp" CTA there.
export default function WhatsAppButton() {
  const pathname = usePathname();
  const hidden = pathname === "/book";

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
