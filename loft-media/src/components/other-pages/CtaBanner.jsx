export default function CtaBanner({ headline, sub, btnLabel, btnHref = '#' }) {
  return (
    <div className="relative overflow-hidden bg-loft-surface border-t border-b border-gold/[0.08] py-16 md:py-20 px-6 md:px-12 text-center">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.07), transparent)' }}
      />
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
      <div className="relative z-10 max-w-2xl mx-auto">
        <h3 className="font-syne font-extrabold leading-tight tracking-tight mb-4"
          style={{ fontSize: 'clamp(26px, 4vw, 52px)' }}>
          {headline}
        </h3>
        {sub && <p className="text-white/40 font-light text-sm md:text-base leading-relaxed mb-10">{sub}</p>}
        <a
          href={btnHref}
          data-hover
          className="inline-block bg-gold text-loft-bg font-syne font-bold text-[13px]
            tracking-[0.12em] uppercase px-12 py-4
            hover:bg-gold-light hover:-translate-y-1
            hover:shadow-[0_16px_40px_rgba(201,168,76,0.35)]
            transition-all duration-300"
        >
          {btnLabel}
        </a>
      </div>
    </div>
  )
}
