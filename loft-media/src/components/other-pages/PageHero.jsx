const PageHero = ({
    tag,
    titleLine1,
    highlightText,
    description,
    primaryBtn,
    secondaryBtn,
    badges = []
}) => {
    return (
        <section className="relative min-h-screen flex items-center px-6 md:px-12 py-20 overflow-hidden">
            
            {/* Grid background */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#7c58ff 1px,transparent 1px),linear-gradient(90deg,#7c58ff 1px,transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Glow */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(124,88,255,0.08), transparent 65%)',
                    filter: 'blur(80px)'
                }}
            />

            {/* Side line */}
            <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

            <div className="relative z-10 max-w-4xl">

                {/* Tag */}
                <div className="flex items-center gap-3 mb-6 reveal">
                    <div className="w-8 h-px bg-primary" />
                    <span className="text-[10px] tracking-[0.25em] uppercase text-primary">
                        {tag}
                    </span>
                </div>

                {/* Title */}
                <h1
                    className="font-syne font-extrabold leading-none tracking-tight mb-6 reveal reveal-d1 text-text"
                    style={{ fontSize: 'clamp(25px, 7vw, 80px)' }}
                >
                    {titleLine1}<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradientStart via-gradientMid to-gradientEnd">
                        {highlightText}
                    </span>
                </h1>

                {/* Description */}
                <p className="text-muted font-light text-[13px] sm:text-sm md:text-xl leading-relaxed max-w-xl mb-12 reveal reveal-d2">
                    {description}
                </p>

                {/* Buttons */}
                <div className="flex justify-center md:justify-start gap-4 flex-wrap reveal reveal-d3">
                    
                    <button
                        className="bg-primary text-white font-syne font-bold text-[10px] md:text-[12px] tracking-[0.12em]
                        uppercase px-4 md:px-10 py-4 hover:bg-primaryLight hover:-translate-y-1
                        hover:shadow-glowPurple transition-all duration-300"
                    >
                        {primaryBtn}
                    </button>

                    <button
                        className="border border-primary/30 text-primary font-syne font-semibold text-[10px] md:text-[12px]
                        tracking-[0.12em] uppercase px-5 md:px-10 py-4 hover:bg-primaryDim
                        hover:-translate-y-1 transition-all duration-300"
                    >
                        {secondaryBtn}
                    </button>
                </div>
            </div>

            {/* Badges */}
            {badges.length > 0 && (
                <div className="absolute right-12 bottom-12 hidden lg:flex gap-3 reveal">
                    {badges.map(([val, label]) => (
                        <div
                            key={label}
                            className="bg-surface border border-soft px-5 py-3 text-center"
                        >
                            <span className="font-syne font-extrabold text-lg text-primary block">
                                {val}
                            </span>
                            <span className="text-[8px] tracking-[0.15em] uppercase text-dim mt-0.5 block">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}

export default PageHero