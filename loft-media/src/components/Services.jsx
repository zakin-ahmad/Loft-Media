import { useEffect, useRef } from 'react'

const CARDS = [
    {
        num: '01',
        title: 'AI Tools & Automation',
        desc: 'Purpose-built AI workflows, prompt engineering frameworks, and automation pipelines that replace manual production with scalable machine intelligence.',
        tags: ['Midjourney v7', 'Veo 3', 'Claude AI', 'Runway ML', 'Kling', 'Notion OS'],
        cta: 'Explore Tools',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" className="w-6 h-6">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        ),
    },
    {
        num: '02',
        title: 'Digital Products & Assets',
        desc: 'Premium templates, brand kits, production systems, and digital properties engineered for reusability and maximum commercial leverage.',
        tags: ['Brand Kits', 'Templates', 'Web Design', 'Prompt Packs', 'Content Engines'],
        cta: 'View Products',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" className="w-6 h-6">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
            </svg>
        ),
    },
    {
        num: '03',
        title: 'Inhouse Studio Production',
        desc: 'Full-cycle cinematic content production. AI video series, documentary, brand films, and premium media — all executed by our core team.',
        tags: ['AI Video', 'Series Production', 'Documentary', 'Brand Films', 'Social Content'],
        cta: 'View Productions',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" className="w-6 h-6">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
            </svg>
        ),
    },
]

export default function Services() {
    const ref = useRef(null)

    useEffect(() => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
        }, { threshold: 0.12 })
        ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
        return () => obs.disconnect()
    }, [])

    return (
        <section id="services" ref={ref} className="bg-loft-bg py-20 px-6 md:px-12">
            {/* Header */}
            <div className="text-center mb-20 reveal">
                <span className="text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/20 px-4 py-1.5 inline-block mb-5">
                    Core Services
                </span>
                <h2 className="font-syne font-extrabold text-5xl md:text-6xl tracking-tight mb-5">What We Build</h2>
                <p className="text-white/50 font-light text-lg max-w-lg mx-auto leading-relaxed">
                    Three verticals. One integrated system. Engineered for scale, designed for impact.
                </p>
            </div>

            {/* Grid */}
            <div className="grid bg-loft-bg grid-cols-1 md:grid-cols-3 gap-6 bg-gold/[0.06]">
                {CARDS.map((card, i) => (
                    <div
                        key={card.num}
                        data-hover
                        className={`reveal reveal-d${i + 1} card-scan hover-glow
              relative bg-loft-surface border border-gold/[0.06] p-10 md:p-8
              group transition-all duration-500 hover:-translate-y-2 hover:border-gold/20
              hover:bg-loft-surface2 overflow-hidden`}
                    >
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <span className="text-[10px] tracking-[0.22em] uppercase text-white/25 mb-8 block relative">
                            {card.num} / Our Tools
                        </span>

                        <div className="w-14 h-14 border border-gold/20 flex items-center justify-center mb-7 relative
              group-hover:border-gold/50 group-hover:bg-gold/[0.06] transition-all duration-300">
                            {card.icon}
                        </div>

                        <h3 className="font-syne font-bold text-2xl mb-4 relative leading-snug">{card.title}</h3>
                        <p className="text-white/45 text-[14px] leading-[1.8] font-light mb-8 relative">{card.desc}</p>

                        <div className="flex flex-wrap gap-2 mb-10 relative">
                            {card.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="text-[9px] tracking-[0.12em] uppercase px-3 py-1.5
                    border border-white/[0.06] text-white/30
                    group-hover:border-gold/20 group-hover:text-white/50 transition-all duration-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-gold relative">
                            <div className="w-8 h-px bg-gold group-hover:w-12 transition-all duration-300" />
                            {card.cta}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}