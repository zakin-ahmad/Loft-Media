export default function CtaBanner({ headline, sub, btnLabel, btnHref = '#' }) {
  return (
    <div className="relative overflow-hidden bg-surface border-t border-b border-soft py-8 sm:py-14 md:py-18 px-6 md:px-12 text-center">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(124,88,255,0.12), transparent)',
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(#7c58ff 1px,transparent 1px),
            linear-gradient(90deg,#60a5fa 1px,transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        <h3
          className="font-syne font-extrabold leading-tight tracking-tight mb-4 text-text"
          style={{ fontSize: 'clamp(22px, 4vw, 50px)' }}
        >
          {headline}
        </h3>

        {sub && (
          <p className="text-dim font-light text-sm md:text-base leading-relaxed mb-10">
            {sub}
          </p>
        )}

        <a
          href={btnHref}
          data-hover
          className="inline-block bg-primary text-white font-syne font-bold text-[10px] md:text-[13px]
            tracking-[0.12em] uppercase px-8 md:px-12 py-4
            hover:bg-primaryLight hover:-translate-y-1
            hover:shadow-glowPurple
            transition-all duration-300"
        >
          {btnLabel}
        </a>
      </div>
    </div>
  )
}