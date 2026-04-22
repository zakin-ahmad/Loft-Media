export default function PricingCard({ tier, price, unit, features, cta, highlight, badge }) {
    return (
        <div
            data-hover
            className={`relative flex flex-col p-8 md:p-10 border transition-all duration-500
        hover:-translate-y-2 group overflow-hidden
        ${highlight
                    ? 'border-gold/40 bg-gradient-to-b from-gold/[0.08] to-loft-surface'
                    : 'border-gold/[0.08] bg-loft-surface hover:border-gold/25'
                }`}
        >
            {/* Top glow on highlight */}
            {highlight && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            )}

            {/* Badge */}
            {badge && (
                <div className="absolute top-4 right-4 bg-gold text-loft-bg text-[9px] font-syne font-bold
          tracking-[0.15em] uppercase px-3 py-1">
                    {badge}
                </div>
            )}

            <div className="mb-6">
                <p className="text-[10px] tracking-[0.22em] uppercase text-white/30 mb-3">{tier}</p>
                <div className="flex items-end gap-1">
                    {price === 'Custom' ? (
                        <span className="font-syne font-extrabold text-2xl md:text-4xl text-gold">Custom</span>
                    ) : (
                        <>
                            <span className="font-syne font-extrabold text-2xl md:text-4xl text-gold">{price}</span>
                            {unit && <span className="text-white/30 text-sm mb-2 font-light">{unit}</span>}
                        </>
                    )}
                </div>
            </div>

            <ul className="flex flex-col gap-3 mb-10 flex-1">
                {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                        <span className="text-white/50 text-[13px] font-light leading-relaxed">{f}</span>
                    </li>
                ))}
            </ul>

            <button
                className={`w-full py-4 font-syne font-bold text-[12px] tracking-[0.12em] uppercase
          transition-all duration-300
          ${highlight
                        ? 'bg-gold text-loft-bg hover:bg-gold-light'
                        : 'border border-gold/25 text-gold hover:bg-gold hover:text-loft-bg'
                    }`}
            >
                {cta}
            </button>

            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.04] to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
    )
}
