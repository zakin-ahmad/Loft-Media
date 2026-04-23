export default function PricingCard({ tier, price, unit, features, cta, highlight, badge }) {
    return (
        <div
            data-hover
            className={`relative flex flex-col p-3 sm:p-8 md:p-10 border transition-all duration-500
        hover:-translate-y-2 group overflow-hidden
        ${highlight
                    ? 'border-primary/40 bg-gradient-to-b from-primaryDim to-surface'
                    : 'border-soft bg-surface hover:border-primary/30'
                }`}
        >
            {/* Top glow on highlight */}
            {highlight && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            )}

            {/* Badge */}
            {badge && (
                <div className="absolute top-1 right-1 sm:top-4 sm:right-4 bg-primary text-bg text-[6px] sm:text-[9px] font-syne font-bold
          tracking-[0.15em] uppercase px-3 py-1">
                    {badge}
                </div>
            )}

            <div className="mb-6">
                <p className="text-[10px] tracking-[0.22em] uppercase text-dim mt-4 sm:mt-0 mb-3">{tier}</p>

                <div className="flex items-end gap-1">
                    {price === 'Custom' ? (
                        <span className="font-syne font-extrabold text-xl sm:text-2xl md:text-4xl text-primary">
                            Custom
                        </span>
                    ) : (
                        <>
                            <span className="font-syne font-extrabold text-2xl md:text-4xl text-primary">
                                {price}
                            </span>
                            {unit && (
                                <span className="text-dim text-sm mb-2 font-light">
                                    {unit}
                                </span>
                            )}
                        </>
                    )}
                </div>
            </div>

            <ul className="flex flex-col gap-3 mb-6 md:mb-10 flex-1">
                {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted text-[13px] font-light leading-relaxed">
                            {f}
                        </span>
                    </li>
                ))}
            </ul>

            <button
                className={`w-full py-4 font-syne font-bold text-[10px] sm:text-[12px] tracking-[0.12em] uppercase
          transition-all duration-300
          ${highlight
                        ? 'bg-primary text-bg hover:bg-primaryLight'
                        : 'border border-primary/30 text-primary hover:bg-primary hover:text-bg'
                    }`}
            >
                {cta}
            </button>

            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primaryDim to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
    )
}