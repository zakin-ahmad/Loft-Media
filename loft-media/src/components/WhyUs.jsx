import { useEffect, useRef } from 'react'

const ITEMS = [
    { n: '01', title: 'AI-Native from Day One', text: 'Every system, pipeline, and output is architected around AI from the ground up — not bolted on.' },
    { n: '02', title: 'Systems Over Projects', text: 'We build reusable engines, not one-off deliverables. Every project creates infrastructure that compounds in value.' },
    { n: '03', title: 'Cinematic Standard', text: 'Every frame, every word, every visual is held to a cinematic benchmark. Premium quality is the non-negotiable baseline.' },
    { n: '04', title: 'Speed at Scale', text: 'AI-assisted pipelines allow us to deliver what agencies take months to produce — in days. Without sacrificing quality.' },
    { n: '05', title: 'Owned IP Library', text: 'We operate our own channels, series, and digital properties. We understand content monetization from the inside out.' },
    { n: '06', title: 'Transparent Process', text: 'Every project runs through a documented OS — visible milestones, clear handoffs, zero ambiguity at any stage.' },
]

export default function WhyUs() {
    const ref = useRef(null)

    useEffect(() => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
        }, { threshold: 0.1 })
        ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
        return () => obs.disconnect()
    }, [])

    return (
        <section id="why" ref={ref} className="bg-loft-bg py-16 md:py-20 px-6 md:px-12">
            <div className="mb-16 reveal">
                <span className="text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/20 px-4 py-1.5 inline-block mb-5">
                    Why LF Loft
                </span>
                <h2 className="font-syne font-extrabold text-3xl md:text-5xl tracking-tight">The Loft Difference</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/[0.04] reveal">
                {ITEMS.map((item) => (
                    <div
                        key={item.n}
                        data-hover
                        className="relative bg-loft-bg p-10 md:p-12 group hover:bg-loft-surface transition-colors duration-400 overflow-hidden"
                    >
                        <span className="absolute top-6 right-6 font-syne font-extrabold text-6xl text-white/[0.03]
              group-hover:text-gold/[0.06] transition-colors duration-400 leading-none select-none">
                            {item.n}
                        </span>
                        <h3 className="font-syne font-bold text-lg mb-3 relative">{item.title}</h3>
                        <p className="text-white/40 text-[13px] leading-[1.8] font-light relative">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}