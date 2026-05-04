export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <p className="text-xs uppercase tracking-[0.3em] text-brand-yellow">{eyebrow}</p>
      <h2 className="mt-3 font-display font-bold text-3xl sm:text-5xl tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-white/70">{subtitle}</p>}
    </div>
  );
}
