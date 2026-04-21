const ITEMS = [
    'AI Production', 'Cinematic Content', 'Digital Products',
    'Studio Production', 'Brand Systems', 'Prompt Engineering',
    'Veo 3 Video', 'AI Influencers', 'Series Development',
]

export default function Ticker() {
    const doubled = [...ITEMS, ...ITEMS]
    return (
        <div className="bg-gold py-3 overflow-hidden whitespace-nowrap">
            <div className="inline-flex animate-ticker">
                {doubled.map((item, i) => (
                    <span key={i} className="inline-flex items-center">
                        <span className="font-syne font-bold text-[11px] tracking-[0.18em] uppercase text-loft-bg px-10">
                            {item}
                        </span>
                        <span className="text-loft-bg/40 text-xs">✦</span>
                    </span>
                ))}
            </div>
        </div>
    )
}