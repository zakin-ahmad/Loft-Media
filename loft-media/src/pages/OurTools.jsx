import { useEffect, useRef } from 'react'
import PricingCard from '../components/other-pages/PricingCard'
import TestimonialRow from '../components/other-pages/TestimonialRow'
import FaqAccordion from '../components/other-pages/FaqAccordion'
import CtaBanner from '../components/other-pages/CtaBanner'
import { useLocation } from 'react-router-dom'

const TOOLS = [
    { icon: '⚡', name: 'AI Content Generator', desc: 'Scripts, captions, blogs, and long-form — generated at scale with brand voice locked in.' },
    { icon: '📱', name: 'Social Media Automation', desc: 'Schedule, publish, and optimize across 8 platforms from a single AI-driven dashboard.' },
    { icon: '🔍', name: 'SEO Intelligence', desc: 'Keyword research, content gaps, and competitor analysis powered by real-time AI.' },
    { icon: '📊', name: 'Analytics Dashboard', desc: 'Unified performance metrics across all channels, visualized in real time.' },
    { icon: '🔗', name: 'CRM Integration', desc: 'Connect your pipeline to your content — automated follow-ups and lead scoring.' },
    { icon: '🎬', name: 'Video Automation', desc: 'AI-cut, captioned, and formatted video clips ready for every platform.' },
    { icon: '🖼️', name: 'Image Generation', desc: 'Midjourney v7 and Flux pipelines integrated into your brand asset system.' },
    { icon: '⚙️', name: 'Workflow Systems', desc: 'Notion OS, Zapier chains, and Make automations custom-built for your operation.' },
]

const PRICING = [
    {
        tier: 'Starter',
        price: '$49',
        unit: '/mo',
        features: [
            'Access to 3 core AI tools',
            'Up to 50 content generations/mo',
            'Basic analytics dashboard',
            'Email support',
            '1 platform integration',
        ],
        cta: 'Get Started',
        highlight: false,
    },
    {
        tier: 'Professional',
        price: '$149',
        unit: '/mo',
        features: [
            'Full tools suite — all 8 modules',
            'Unlimited content generations',
            'Advanced automation workflows',
            'Priority support + onboarding call',
            'Up to 5 platform integrations',
            'Monthly strategy review',
        ],
        cta: 'Start Pro Trial',
        highlight: true,
        badge: 'Most Popular',
    },
    {
        tier: 'Enterprise',
        price: 'Custom',
        features: [
            'Unlimited everything',
            'Custom AI model fine-tuning',
            'Dedicated account manager',
            'Team onboarding + training',
            'White-label option available',
            'SLA & priority infrastructure',
        ],
        cta: 'Request Custom Quote',
        highlight: false,
    },
]

const FAQ = [
    { q: 'Do I need technical skills to use your tools?', a: 'No. Every tool is designed for non-technical users. We handle setup, onboarding, and provide video walkthroughs for each module.' },
    { q: 'Can I cancel anytime?', a: 'Yes. All monthly plans are cancel-anytime with no long-term contracts. Enterprise agreements are governed by a custom SLA.' },
    { q: 'How quickly can I get started?', a: 'Starter and Pro accounts are activated instantly. Enterprise onboarding typically takes 3–5 business days depending on custom requirements.' },
    { q: 'Do you offer a free trial?', a: 'We offer a 7-day free demo on the Pro plan. Book a call with our team to get access.' },
    { q: 'Can the tools be customized for my brand?', a: 'Absolutely. All AI content tools are brand-voice trained during onboarding. Enterprise clients get fully custom model fine-tuning.' },
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

export default function OurTools() {
    const ref = useRef(null)
    useReveal(ref)

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, [])



    return (
        <div ref={ref} className="bg-loft-bg pt-4">

            {/* ── HERO ── */}
            <section className="relative min-h-[70vh] flex items-center px-6 md:px-12 py-20 overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.07), transparent 65%)', filter: 'blur(80px)' }}
                />
                {/* Neon accent line */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-gold to-transparent" />

                <div className="relative z-10 max-w-4xl">
                    <div className="flex items-center gap-3 mb-6 reveal">
                        <div className="w-8 h-px bg-gold" />
                        <span className="text-[10px] tracking-[0.25em] uppercase text-gold">Our Tools</span>
                    </div>
                    <h1
                        className="font-syne font-extrabold leading-none tracking-tight mb-6 reveal reveal-d1"
                        style={{ fontSize: 'clamp(32px, 7vw, 80px)' }}
                    >
                        Smart Tools That<br />
                        <span className="shimmer-text">Multiply Your Output</span>
                    </h1>
                    <p className="text-white/45 font-light text-sm md:text-xl leading-relaxed max-w-xl mb-12 reveal reveal-d2">
                        AI systems, automation tools, and growth engines built for modern businesses that refuse to stay small.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4 flex-wrap reveal reveal-d3">
                        <button className="bg-gold text-loft-bg font-syne font-bold text-[10px] md:text-[12px] tracking-[0.12em]
              uppercase px-8 md:px-10 py-4 hover:bg-gold-light hover:-translate-y-1
              hover:shadow-[0_12px_32px_rgba(201,168,76,0.3)] transition-all duration-300">
                            Start Free Demo
                        </button>
                        <button className="border border-gold/25 text-gold font-syne font-semibold text-[10px] md:text-[12px]
              tracking-[0.12em] uppercase px-8 md:px-10 py-4 hover:bg-gold/[0.06]
              hover:-translate-y-1 transition-all duration-300">
                            View Pricing
                        </button>
                    </div>
                </div>

                {/* Floating metrics */}
                <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
                    {[['10x', 'Output Speed'], ['98%', 'Automation Rate'], ['< 2h', 'Setup Time']].map(([val, label]) => (
                        <div key={label} className="bg-loft-surface border border-gold/[0.1] px-6 py-4 text-center reveal">
                            <span className="font-syne font-extrabold text-2xl text-gold block">{val}</span>
                            <span className="text-[9px] tracking-[0.15em] uppercase text-white/25 mt-1 block">{label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── TOOLS GRID ── */}
            <section id="toolkit" className="px-6 md:px-12 py-16 bg-loft-bg2 border-t border-gold/[0.06]">
                <div className="text-center mb-16 reveal">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/20 px-4 py-1.5 inline-block mb-5">
                        Full Toolkit
                    </span>
                    <h2 className="font-syne font-extrabold text-4xl md:text-5xl tracking-tight">8 Modules. One System.</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-loft-bg2 ">
                    {TOOLS.map((tool, i) => (
                        <div
                            key={tool.name}
                            data-hover
                            className={`reveal reveal-d${(i % 4) + 1} bg-loft-surface p-8 group
                hover:bg-loft-surface2 transition-all duration-400 border border-transparent
                hover:border-gold/15 relative overflow-hidden`}
                        >
                            <div className="text-3xl mb-5">{tool.icon}</div>
                            <h3 className="font-syne font-bold text-base mb-3 group-hover:text-gold transition-colors duration-300">
                                {tool.name}
                            </h3>
                            <p className="text-white/35 text-[13px] font-light leading-[1.75]">{tool.desc}</p>
                            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent
                transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </div>
                    ))}
                </div>
            </section>

            {/* ── TRUST METRICS ── */}
            <section className="px-6 md:px-12 py-16 bg-loft-bg border-t border-gold/[0.06]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
                    {[
                        ['500+', 'Automations Built'],
                        ['3.2M', 'Content Pieces Generated'],
                        ['99.7%', 'System Uptime'],
                        ['48h', 'Avg Onboarding Time'],
                    ].map(([val, label]) => (
                        <div key={label} className="bg-loft-surface py-10 text-center">
                            <span className="font-syne font-extrabold text-1xl md:text-4xl text-gold block">{val}</span>
                            <span className="text-[10px] tracking-[0.15em] uppercase text-white/25 mt-2 block">{label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── PRICING ── */}
            <section id="pricing" className="px-6 md:px-12 py-16 md:py-20 bg-loft-bg2 border-t border-gold/[0.06]">
                <div className="text-center mb-16 reveal">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/20 px-4 py-1.5 inline-block mb-5">
                        Pricing
                    </span>
                    <h2 className="font-syne font-extrabold text-2xl md:text-4xl tracking-tight mb-4">Simple. Transparent.</h2>
                    <p className="text-white/35 font-light max-w-md mx-auto">No hidden fees. Cancel anytime. Start scaling from day one.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/[0.05] reveal">
                    {PRICING.map(p => <PricingCard key={p.tier} {...p} />)}
                </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section id="client-results" className="px-6 md:px-12 py-16 md:py-20 bg-loft-bg border-t border-gold/[0.06]">
                <div className="text-center mb-14 reveal">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/20 px-4 py-1.5 inline-block mb-5">
                        Client Results
                    </span>
                    <h2 className="font-syne font-extrabold text-2xl md:text-4xl tracking-tight">What Our Clients Say</h2>
                </div>
                <div className="reveal"><TestimonialRow /></div>
            </section>

            {/* ── FAQ ── */}
            <section id="faq" className="px-6 md:px-12 py-16 md:py-20 bg-loft-bg2 border-t border-gold/[0.06]">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10 md:mb-14 reveal">
                        <span className="text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/20 px-4 py-1.5 inline-block mb-5">
                            FAQ
                        </span>
                        <h2 className="font-syne font-extrabold text-2xl md:text-4xl tracking-tight">Common Questions</h2>
                    </div>
                    <div className="reveal"><FaqAccordion items={FAQ} /></div>
                </div>
            </section>

            {/* ── CTA BANNER ── */}
            <CtaBanner
                headline="Automate Your Growth Today"
                sub="Join businesses already scaling with LF Loft AI systems. Setup takes less than 48 hours."
                btnLabel="Start Free Demo"
            />
        </div>
    )
}
