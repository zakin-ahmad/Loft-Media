import { useEffect, useRef } from 'react'

const POINTS = [
    'Built as an operational system — every output runs through a defined pipeline: research, script, AI generation, edit, QC.',
    'Producing across 12+ content verticals simultaneously — finance documentaries to sci-fi series to AI influencer ecosystems.',
    'Powered by frontier AI tools in a single Notion-based OS — Saifullah, Talha, Faizan, and Amna execute at machine speed.',
    'Headquarters: Islamabad, Pakistan. Clients: Global. Standard: Premium.',
]

export default function About() {
    const ref = useRef(null)

    useEffect(() => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
        }, { threshold: 0.1 })
        ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
        return () => obs.disconnect()
    }, [])

    return (
        <section
            id="studio"
            ref={ref}
            className="border-t border-b border-soft py-16 md:py-20 px-6 md:px-12"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center max-w-7xl mx-auto">

                {/* Visual */}
                <div className="reveal relative">
                    <div className="relative aspect-[4/5] bg-surface border border-soft overflow-hidden">
                        
                        {/* Inner frame */}
                        <div className="absolute inset-5 border border-soft" />

                        {/* Center logo */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                            <span className="font-syne font-extrabold text-[72px] text-primary/10 leading-none">LF</span>
                            <span className="text-[10px] tracking-[0.3em] uppercase text-dim">Loft Media Studio</span>
                        </div>

                        {/* Corner decoration */}
                        <div className="absolute top-5 left-5 w-6 h-6 border-t border-l border-primary/40" />
                        <div className="absolute top-5 right-5 w-6 h-6 border-t border-r border-primary/40" />
                        <div className="absolute bottom-5 left-5 w-6 h-6 border-b border-l border-primary/40" />
                        <div className="absolute bottom-5 right-5 w-6 h-6 border-b border-r border-primary/40" />
                    </div>

                    {/* Floating badge */}
                    <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-bg border border-primary/30 flex flex-col items-center justify-center gap-1">
                        <span className="font-syne font-extrabold text-2xl text-primary">AI</span>
                        <span className="text-[8px] tracking-[0.18em] uppercase text-dim">Powered</span>
                    </div>
                </div>

                {/* Content */}
                <div className="reveal reveal-d2">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-primary border border-primary/30 px-4 py-1.5 inline-block mb-5">
                        About the Studio
                    </span>

                    <h2
                        className="font-syne font-extrabold leading-tight tracking-tight mb-6 text-text"
                        style={{ fontSize: 'clamp(30px, 4vw, 52px)' }}
                    >
                        We Are Not An Agency.<br />We Are a System.
                    </h2>

                    <p className="text-muted font-light leading-relaxed text-[15px] mb-10">
                        LF Loft Media is an AI-powered production house operating at the intersection of cinematic storytelling and machine-scale automation.
                    </p>

                    <div className="flex flex-col gap-5">
                        {POINTS.map((p, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <p className="text-muted font-light text-[14px] leading-[1.75]">
                                    {p}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}