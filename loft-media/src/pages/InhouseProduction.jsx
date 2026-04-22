import { useEffect, useRef } from 'react'
import PricingCard from '../components/other-pages/PricingCard'
import TestimonialRow from '../components/other-pages/TestimonialRow'
import FaqAccordion from '../components/other-pages/FaqAccordion'
import CtaBanner from '../components/other-pages/CtaBanner'
import { useLocation } from 'react-router-dom'

const SERVICES = [
    { icon: '🎬', name: 'AI Video Production', desc: 'Cinematic AI-generated videos using Veo 3, Runway, and Kling — scripted, voiced, and edited in-house.' },
    { icon: '📸', name: 'Photography & Shoots', desc: 'Product photography, brand portraits, and commercial shoots executed by our Islamabad studio team.' },
    { icon: '📦', name: 'Product Shoot Packages', desc: 'E-commerce and lifestyle product shoots with AI-enhanced post-production and retouching.' },
    { icon: '📱', name: 'Reels & Short-Form', desc: 'High-retention vertical content engineered for Instagram, TikTok, and YouTube Shorts algorithms.' },
    { icon: '🎙️', name: 'Podcast Production', desc: 'Full podcast setup, recording, editing, and distribution — audio and video format.' },
    { icon: '✨', name: 'Motion Graphics', desc: 'Brand animations, lower thirds, intros/outros, and full explainer motion packages.' },
    { icon: '📺', name: 'Commercial Campaigns', desc: 'End-to-end ad creative — concept, script, production, and platform-ready delivery.' },
    { icon: '🎞️', name: 'Documentary Series', desc: 'Multi-episode documentary production from research to final cut — Territory Tales standard.' },
]

const PRICING = [
    {
        tier: 'Starter Shoot',
        price: '$199',
        unit: '/project',
        features: [
            'Up to 2-hour session',
            '20 edited photos or 1 short video',
            'Basic color grading',
            '48-hour delivery',
            '2 revision rounds',
        ],
        cta: 'Book Starter Shoot',
        highlight: false,
    },
    {
        tier: 'Brand Growth Package',
        price: '$599',
        unit: '/mo',
        features: [
            '4 production sessions/month',
            '8 Reels + 2 long-form videos',
            '40 edited photos',
            'Script + caption writing included',
            'Full color grade + sound design',
            'Priority 24h delivery',
            'Monthly content strategy call',
        ],
        cta: 'Start Brand Package',
        highlight: true,
        badge: 'Most Popular',
    },
    {
        tier: 'Full Campaign',
        price: 'Custom',
        features: [
            'Custom scope — no limits',
            'Multi-day production schedule',
            'Dedicated production team',
            'Commercial & broadcast rights',
            'AI video + live shoot hybrid',
            'Full campaign strategy included',
            'Dedicated account manager',
        ],
        cta: 'Request Custom Quote',
        highlight: false,
    },
]

const PROCESS = [
    { step: '01', title: 'Brief & Strategy', desc: 'We align on goals, audience, and visual direction in a 30-minute onboarding call.' },
    { step: '02', title: 'Script & Pre-Prod', desc: 'Our team writes, storyboards, and prepares every asset before a single frame is shot.' },
    { step: '03', title: 'Production Day', desc: 'In-house shoot or AI generation — executed against a locked production schedule.' },
    { step: '04', title: 'Edit & Delivery', desc: 'Color grade, sound design, captions, and platform-optimized exports. On time, every time.' },
]

const FAQ = [
    { q: 'Do you work with clients outside of Pakistan?', a: 'Yes. AI video production and all digital services are delivered globally. For physical shoots, we operate from Islamabad with the option of travel for large campaigns.' },
    { q: 'How fast is your turnaround?', a: 'Starter shoots deliver in 48 hours. Brand packages follow a monthly content calendar. Campaign timelines are agreed during brief.' },
    { q: 'Can you handle both AI and live production?', a: 'Absolutely. Our hybrid model combines live studio shoots with AI generation for maximum quality and speed. Most Brand Package clients use both.' },
    { q: 'Do you provide the script and strategy?', a: 'Yes. Every package above Starter includes scripting, concept development, and platform strategy. You approve before production begins.' },
    { q: 'What if I need something not listed?', a: 'Request a Custom Quote. We scope custom campaigns for any size — from a single commercial to a full 12-episode series.' },
]

function useReveal(ref) {
    useEffect(() => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
        }, { threshold: 0.08 })
        ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
        return () => obs.disconnect()
    }, [])
}

export default function InhouseProduction() {
    const ref = useRef(null)
    useReveal(ref)

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, [])

     const location = useLocation()

    useEffect(() => {
        if (location.state?.scrollTo) {
            const el = document.getElementById(location.state.scrollTo)
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth' })
                }, 100)
            }
        }
    }, [])

    return (
        <div ref={ref} className="bg-loft-bg pt-4">

            {/* ── HERO ── */}
            <section className="relative min-h-[70vh] flex items-center px-6 md:px-12 py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                />
                <div className="absolute top-1/2 -translate-y-1/2 right-[-200px] w-[700px] h-[700px] rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.05), transparent 65%)', filter: 'blur(80px)' }}
                />
                {/* Vertical accent lines */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/15 to-transparent" />

                <div className="relative z-10 max-w-4xl">
                    <div className="flex items-center gap-3 mb-6 reveal">
                        <div className="w-8 h-px bg-gold" />
                        <span className="text-[10px] tracking-[0.25em] uppercase text-gold">Inhouse Production</span>
                    </div>
                    <h1
                        className="font-syne font-extrabold leading-none tracking-tight mb-6 reveal reveal-d1"
                        style={{ fontSize: 'clamp(30px, 7vw, 80px)' }}
                    >
                        World-Class Content<br />
                        <span className="shimmer-text">Produced In-House</span>
                    </h1>
                    <p className="text-white/45 font-light text-sm md:text-xl leading-relaxed max-w-xl mb-12 reveal reveal-d2">
                        From a single product shoot to a full documentary series — our studio team executes every frame to cinematic standard.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4 flex-wrap reveal reveal-d3">
                        <button className="bg-gold text-loft-bg font-syne font-bold text-[12px] tracking-[0.12em]
              uppercase px-5 md:px-10 py-4 hover:bg-gold-light hover:-translate-y-1
              hover:shadow-[0_12px_32px_rgba(201,168,76,0.3)] transition-all duration-300">
                            Book Production Call
                        </button>
                        <button className="border border-gold/25 text-gold font-syne font-semibold text-[12px]
              tracking-[0.12em] uppercase px-6 md:px-10 py-4 hover:bg-gold/[0.06]
              hover:-translate-y-1 transition-all duration-300">
                            View Portfolio
                        </button>
                    </div>
                </div>

                {/* Floating delivery badges */}
                <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 reveal">
                    {[['48h', 'Avg Delivery'], ['HD+', 'Output Quality'], ['100%', 'In-House Team']].map(([val, label]) => (
                        <div key={label} className="bg-loft-surface border border-gold/[0.1] px-6 py-4 text-center">
                            <span className="font-syne font-extrabold text-2xl text-gold block">{val}</span>
                            <span className="text-[9px] tracking-[0.15em] uppercase text-white/25 mt-1 block">{label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── SERVICES GRID ── */}
            <section id="produce" className="px-6 md:px-12 py-12 md:py-16 bg-loft-bg2 border-t border-gold/[0.06]">
                <div className="text-center mb-10 md:mb-14 reveal">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/20 px-4 py-1.5 inline-block mb-5">
                        What We Produce
                    </span>
                    <h2 className="font-syne font-extrabold text-2xl md:text-5xl tracking-tight">8 Production Formats</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {SERVICES.map((s, i) => (
                        <div
                            key={s.name}
                            data-hover
                            className={`reveal reveal-d${(i % 4) + 1} bg-loft-surface p-6 md:p-8 group
                hover:bg-loft-surface2 transition-all duration-400 border border-transparent
                hover:border-gold/15 relative overflow-hidden`}
                        >
                            <div className="text-3xl mb-5">{s.icon}</div>
                            <h3 className="font-syne font-bold text-base mb-3 group-hover:text-gold transition-colors duration-300">
                                {s.name}
                            </h3>
                            <p className="text-white/35 text-[13px] font-light leading-[1.75]">{s.desc}</p>
                            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent
                transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </div>
                    ))}
                </div>
            </section>

            {/* ── PROCESS ── */}
            <section id="work" className="px-6 md:px-12 py-16 bg-loft-bg border-t border-gold/[0.06]">
                <div className="text-center mb-16 reveal">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/20 px-4 py-1.5 inline-block mb-5">
                        How It Works
                    </span>
                    <h2 className="font-syne font-extrabold text-2xl md:text-5xl tracking-tight">From Brief to Delivered</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {PROCESS.map((p) => (
                        <div key={p.step} className="bg-loft-surface p-8 md:p-10 relative group hover:bg-loft-surface2 transition-colors duration-400">
                            <span className="font-syne font-extrabold text-5xl text-gold/10 absolute top-6 right-6 leading-none
                group-hover:text-gold/20 transition-colors duration-400">{p.step}</span>
                            <p className="text-[9px] tracking-[0.22em] uppercase text-gold mb-4 relative">{p.step}</p>
                            <h3 className="font-syne font-bold text-lg mb-3 relative">{p.title}</h3>
                            <p className="text-white/35 text-[13px] font-light leading-[1.75] relative">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── RESULTS METRICS ── */}
            <section className="px-6 md:px-12 py-12 md:py-16 bg-loft-bg2 border-t border-gold/[0.06]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
                    {[
                        ['200+', 'Productions Completed'],
                        ['48h', 'Average Turnaround'],
                        ['12+', 'Content Formats'],
                        ['100%', 'In-House Execution'],
                    ].map(([val, label]) => (
                        <div key={label} className="bg-loft-surface py-10 text-center">
                            <span className="font-syne font-extrabold text-2xl md:text-4xl text-gold block">{val}</span>
                            <span className="text-[10px] tracking-[0.15em] uppercase text-white/25 mt-2 block">{label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── PRICING ── */}
            <section id="packages" className="px-6 md:px-12 py-16 bg-loft-bg border-t border-gold/[0.06]">
                <div className="text-center mb-16 reveal">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/20 px-4 py-1.5 inline-block mb-5">
                        Production Packages
                    </span>
                    <h2 className="font-syne font-extrabold text-2xl md:text-4xl tracking-tight mb-4">Invest in Content That Converts</h2>
                    <p className="text-white/35 font-light max-w-md mx-auto">Every package includes strategy, script, production, and delivery. No surprises.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
                    {PRICING.map(p => <PricingCard key={p.tier} {...p} />)}
                </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section id="results" className="px-6 md:px-12 py-12 md:py-16 bg-loft-bg2 border-t border-gold/[0.06]">
                <div className="text-center mb-14 reveal">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/20 px-4 py-1.5 inline-block mb-5">
                        Client Results
                    </span>
                    <h2 className="font-syne font-extrabold text-2xl md:text-4xl tracking-tight">Content That Performs</h2>
                </div>
                <div className="reveal"><TestimonialRow /></div>
            </section>

            {/* ── FAQ ── */}
            <section id="faq" className="px-6 md:px-12 py-12 md:py-16 bg-loft-bg border-t border-gold/[0.06]">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10 md:mb-14 reveal">
                        <span className="text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/20 px-4 py-1.5 inline-block mb-5">
                            FAQ
                        </span>
                        <h2 className="font-syne font-extrabold text-2xl md:text-4xl tracking-tight">Production Questions</h2>
                    </div>
                    <div className="reveal"><FaqAccordion items={FAQ} /></div>
                </div>
            </section>

            {/* ── CTA ── */}
            <CtaBanner
                headline="Turn Attention Into Revenue"
                sub="Premium content produced by LF Loft's in-house team. Book your call and we'll scope the project same day."
                btnLabel="Book Production Call"
            />
        </div>
    )
}
