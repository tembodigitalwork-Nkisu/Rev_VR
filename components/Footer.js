import LogoMark from "./LogoMark";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid sm:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2">
            <LogoMark className="h-7 w-auto" />
            <span className="font-display font-bold tracking-wide">
              REV <span className="text-brand-yellow">VR</span> Xperience
            </span>
          </div>
          <p className="mt-3 text-white/60">
            Lusaka's first walk-in VR arcade. Manda Hill, upstairs.
          </p>
        </div>

        <div>
          <h4 className="text-white/80 font-semibold">Visit</h4>
          <ul className="mt-3 space-y-1.5 text-white/60">
            <li>Manda Hill Shopping Centre</li>
            <li>Upstairs · opposite the escalators</li>
            <li>Lusaka, Zambia</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white/80 font-semibold">Reach us</h4>
          <ul className="mt-3 space-y-1.5 text-white/60">
            <li><a href="tel:+260952866700" className="hover:text-brand-yellow">+260 95 2866700</a></li>
            <li><a href="https://wa.me/260952866700" target="_blank" rel="noreferrer" className="hover:text-brand-yellow">WhatsApp</a></li>
            <li><a href="https://www.instagram.com/rev_vr_xperience/" target="_blank" rel="noreferrer" className="hover:text-brand-yellow">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <p className="mx-auto max-w-6xl px-4 sm:px-6 py-4 text-xs text-white/40">
          © {new Date().getFullYear()} REV VR Xperience · All trademarks belong to their owners.
        </p>
      </div>
    </footer>
  );
}
