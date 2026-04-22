import { useEffect, useRef } from 'react'

const PROJECTS = [
    {
        id: 1, wide: true,
        visual: 'THE RED DIVIDE',
        sub: 'Sci-Fi Series · 2150',
        category: 'Original Series',
        title: 'The Red Divide — S01',
        year: 'Kael Draven × Lucian Voss × Null · Earth / Mars / The Corridor',
    },
    {
        id: 2, wide: false,
        visual: 'FRANKLY SIMPLE',
        sub: 'Finance',
        category: 'YouTube Channel',
        title: 'Frankly Simple — LLC Education',
        year: '80-Scene Production Pipeline · 2026',
    },
    {
        id: 3, wide: false, half: true,
        visual: 'ZAYN BYTE',
        sub: 'AI Influencer',
        category: 'AI Character',
        title: 'Zayn Byte — Tech Influencer',
        year: 'Full Character Bible · 2026',
    },
    {
        id: 4, wide: false, half: true,
        visual: 'TERRITORY TALES',
        sub: 'Documentary',
        category: 'Documentary Series',
        title: 'Territory Tales — Season 3',
        year: 'Yakuza Arc · 8-Episode Series',
    },
]

export default function Portfolio() {
    const ref = useRef(null)

    useEffect(() => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
        }, { threshold: 0.08 })
        ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
        return () => obs.disconnect()
    }, [])

    return (
        <section id="work" ref={ref} className="bg-loft-bg2 py-16 md:py-20 px-6 md:px-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 reveal">
                <div>
                    <span className="text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/20 px-4 py-1.5 inline-block mb-5">
                        Selected Work
                    </span>
                    <h2 className="font-syne font-extrabold text-3xl md:text-5xl tracking-tight">Production Portfolio</h2>
                </div>
                <p className="text-white/30 text-[13px] max-w-xs leading-relaxed font-light mt-6 md:mt-0 md:text-right">
                    Systems, series, and digital properties built by LF Loft Media.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0.5 reveal">
                {/* Large card */}
                <div className="md:col-span-8 group bg-loft-surface overflow-hidden" data-hover>
                    <div className="relative overflow-hidden bg-loft-surface2 flex items-center justify-center"
                        style={{ aspectRatio: '21/9' }}>
                        <div className="text-center transition-all duration-500 group-hover:scale-105">
                            <p className="font-syne font-extrabold text-xl md:text-4xl text-white/20 group-hover:text-gold/60 transition-colors duration-500 tracking-widest">
                                THE RED DIVIDE
                            </p>
                            <p className="text-white/15 text-[10px] tracking-[0.3em] uppercase mt-2 font-light">Sci-Fi Series · 2150</p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-loft-surface to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    </div>
                    <div className="p-7 border-t border-gold/[0.06]">
                        <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-1">Original Series</p>
                        <p className="font-syne font-bold text-sm md:text-xl mb-1">The Red Divide — S01</p>
                        <p className="text-white/30 text-xs">Kael Draven × Lucian Voss × Null · Earth / Mars / The Corridor</p>
                    </div>
                </div>

                {/* Small card */}
                <div className="md:col-span-4 group bg-loft-surface overflow-hidden" data-hover>
                    <div className="relative overflow-hidden bg-loft-surface2 flex items-center justify-center transition-all duration-500 group-hover:scale-105"
                        style={{ aspectRatio: '4/3' }}>
                        <p className="font-syne font-extrabold text-xl md:text-2xl text-white/20 group-hover:text-gold/60 transition-colors duration-500 tracking-widest text-center px-4">
                            FRANKLY<br />SIMPLE
                        </p>
                        <div className="absolute inset-0 bg-gradient-to-t from-loft-surface to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    </div>
                    <div className="p-7 border-t border-gold/[0.06]">
                        <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-1">YouTube Channel</p>
                        <p className="font-syne font-bold text-sm md:text-lg mb-1">Frankly Simple — LLC Education</p>
                        <p className="text-white/30 text-xs">80-Scene Production Pipeline · 2026</p>
                    </div>
                </div>

                {/* Half cards */}
                {[
                    { label: 'ZAYN BYTE', cat: 'AI Character', title: 'Zayn Byte — Tech Influencer', year: 'Full Character Bible · 2026' },
                    { label: 'TERRITORY TALES', cat: 'Documentary', title: 'Territory Tales — Season 3', year: 'Yakuza Arc · 8-Episode Series' },
                ].map((p) => (
                    <div key={p.label} className="md:col-span-6 group bg-loft-surface overflow-hidden" data-hover>
                        <div className="relative overflow-hidden bg-loft-surface2 flex items-center justify-center transition-all duration-500 group-hover:scale-105"
                            style={{ aspectRatio: '16/9' }}>
                            <p className="font-syne font-extrabold text-xl md:text-2xl text-white/20 group-hover:text-gold/60 transition-colors duration-500 tracking-widest text-center px-4">
                                {p.label}
                            </p>
                            <div className="absolute inset-0 bg-gradient-to-t from-loft-surface to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                        </div>
                        <div className="p-6 border-t border-gold/[0.06]">
                            <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-1">{p.cat}</p>
                            <p className="font-syne font-bold text-sm md:text-base mb-1">{p.title}</p>
                            <p className="text-white/30 text-xs">{p.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}