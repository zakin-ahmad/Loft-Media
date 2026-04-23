const ITEMS = [
    'AI Production', 'Cinematic Content', 'Digital Products',
    'Studio Production', 'Brand Systems', 'Prompt Engineering',
    'Veo 3 Video', 'AI Influencers', 'Series Development',
]

export default function Ticker() {
    const doubled = [...ITEMS, ...ITEMS]

    return (
        <div className="bg-bg border-y border-white/10 py-3 overflow-hidden whitespace-nowrap relative">

            {/* subtle glow line */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-blue/10 to-primary/10 opacity-40 pointer-events-none" />

            <div className="inline-flex animate-ticker relative z-10">
                {doubled.map((item, i) => (
                    <span key={i} className="inline-flex items-center">
                        
                        <span className="font-syne font-bold text-[11px] tracking-[0.18em] uppercase text-text px-10">
                            {item}
                        </span>

                        <span className="text-primary/60 text-xs">✦</span>
                    </span>
                ))}
            </div>
        </div>
    )
}