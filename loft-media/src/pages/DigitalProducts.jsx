import { useEffect, useRef } from 'react'
import PricingCard from '../components/other-pages/PricingCard'
import TestimonialRow from '../components/other-pages/TestimonialRow'
import FaqAccordion from '../components/other-pages/FaqAccordion'
import CtaBanner from '../components/other-pages/CtaBanner'
import { useLocation } from 'react-router-dom'

const PRODUCTS = [
    { icon: '🌐', name: 'Website Templates', desc: 'Dark luxury, SaaS, portfolio, and agency templates — built in React + Tailwind, ready to deploy.' },
    { icon: '🎨', name: 'Branding Kits', desc: 'Logo systems, color palettes, typography guides, and brand usage documents.' },
    { icon: '🤖', name: 'Prompt Packs', desc: 'Curated Midjourney, Veo 3, and ChatGPT prompt libraries for specific industries and use cases.' },
    { icon: '📲', name: 'Social Media Packs', desc: 'Canva and Figma template systems for Instagram, YouTube, LinkedIn, and TikTok.' },
    { icon: '🧩', name: 'UI Kits', desc: 'Dark theme component libraries and design systems for web and mobile.' },
    { icon: '🎞️', name: 'Motion Assets', desc: 'After Effects and Lottie animation packs for premium brand motion design.' },
    { icon: '📦', name: 'Marketing Bundles', desc: 'Landing page + email sequence + ad creative — packaged for immediate launch.' },
    { icon: '📋', name: 'Content Systems', desc: 'Pre-built Notion OS templates for YouTube channels, agencies, and creators.' },
]

const PRICING = [
    {
        tier: 'Single Product',
        price: 'From $19',
        unit: '',
        features: [
            'Access to one selected product',
            'Lifetime license',
            'Free updates for 6 months',
            'Basic documentation',
            'Community support',
        ],
        cta: 'Browse Products',
        highlight: false,
    },
    {
        tier: 'Pro Bundle',
        price: '$99',
        unit: ' one-time',
        features: [
            '15 premium products included',
            'Full commercial license',
            'Lifetime updates on all included items',
            'Priority email support',
            'Bonus: 2 prompt packs',
            'Slack community access',
        ],
        cta: 'Get Pro Bundle',
        highlight: true,
        badge: 'Best Value',
    },
    {
        tier: 'Agency Vault',
        price: '$299',
        unit: ' one-time',
        features: [
            'Full library — 50+ products',
            'White-label commercial license',
            'All future releases included',
            'Dedicated support channel',
            'Custom asset requests (2/mo)',
            'Early access to new drops',
        ],
        cta: 'Unlock Agency Vault',
        highlight: false,
    },
]

const FAQ = [
    { q: 'Are the products ready to use immediately?', a: 'Yes. All digital products are delivered instantly via download link after purchase. No waiting, no processing delays.' },
    { q: 'What license do I get?', a: 'Single products come with a personal license. Pro Bundle and Agency Vault include full commercial licensing — use in client projects without restrictions.' },
    { q: 'Do you offer refunds?', a: 'Due to the digital nature of our products, we do not offer refunds. However, if a product has a technical issue, we will resolve it or replace it immediately.' },
    { q: 'Can I use these in client projects?', a: 'Pro Bundle and Agency Vault holders can use all products in unlimited client projects. Single product purchases are for personal/single-client use only.' },
    { q: 'How often are new products added?', a: 'We release new products weekly. Agency Vault holders get automatic access to all new releases at no additional cost.' },
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

export default function DigitalProducts() {
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
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.06), transparent 65%)', filter: 'blur(80px)' }}
                />
                <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

                <div className="relative z-10 max-w-4xl">
                    <div className="flex items-center gap-3 mb-6 reveal">
                        <div className="w-8 h-px bg-gold" />
                        <span className="text-[10px] tracking-[0.25em] uppercase text-gold">Digital Products</span>
                    </div>
                    <h1
                        className="font-syne font-extrabold leading-none tracking-tight mb-6 reveal reveal-d1"
                        style={{ fontSize: 'clamp(33px, 7vw, 80px)' }}
                    >
                        Premium Assets Ready<br />
                        to <span className="shimmer-text">Scale Your Brand</span>
                    </h1>
                    <p className="text-white/45 font-light text-sm md:text-xl leading-relaxed max-w-xl mb-12 reveal reveal-d2">
                        Templates, prompt packs, brand kits, and digital systems — all built to the same standard we use for our own productions.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4 flex-wrap reveal reveal-d3">
                        <button className="bg-gold text-loft-bg font-syne font-bold text-[12px] tracking-[0.12em]
              uppercase px-5 md:px-10 py-4 hover:bg-gold-light hover:-translate-y-1
              hover:shadow-[0_12px_32px_rgba(201,168,76,0.3)] transition-all duration-300">
                            Browse Products
                        </button>
                        <button className="border border-gold/25 text-gold font-syne font-semibold text-[12px]
              tracking-[0.12em] uppercase px-5 md:px-10 py-4 hover:bg-gold/[0.06]
              hover:-translate-y-1 transition-all duration-300">
                            View Bundles
                        </button>
                    </div>
                </div>

                {/* Product count badges */}
                <div className="absolute right-12 bottom-12 hidden lg:flex gap-3 reveal">
                    {[['50+', 'Products'], ['New', 'Weekly Drops'], ['Instant', 'Delivery']].map(([val, label]) => (
                        <div key={label} className="bg-loft-surface border border-gold/[0.1] px-5 py-3 text-center">
                            <span className="font-syne font-extrabold text-lg text-gold block">{val}</span>
                            <span className="text-[8px] tracking-[0.15em] uppercase text-white/25 mt-0.5 block">{label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── PRODUCT GRID ── */}
            <section id='product-library' className="px-6 md:px-12 py-12 md:py-16 bg-loft-bg2 border-t border-gold/[0.06]">
                <div className="text-center mb-16 reveal">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/20 px-4 py-1.5 inline-block mb-5">
                        Product Library
                    </span>
                    <h2 className="font-syne font-extrabold text-2xl md:text-5xl tracking-tight">Everything You Need to Ship Faster</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {PRODUCTS.map((p, i) => (
                        <div
                            key={p.name}
                            data-hover
                            className={`reveal reveal-d${(i % 4) + 1} bg-loft-surface p-6 md:p-8 group
                hover:bg-loft-surface2 transition-all duration-400 border border-transparent
                hover:border-gold/15 relative overflow-hidden cursor-pointer`}
                        >
                            <div className="text-3xl mb-5">{p.icon}</div>
                            <h3 className="font-syne font-bold text-base mb-3 group-hover:text-gold transition-colors duration-300">
                                {p.name}
                            </h3>
                            <p className="text-white/35 text-[13px] font-light leading-[1.75]">{p.desc}</p>
                            {/* Preview hover label */}
                            <div className="absolute inset-0 bg-loft-surface2/80 flex items-center justify-center
                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="font-syne font-bold text-[11px] tracking-[0.2em] uppercase text-gold
                  border border-gold/30 px-4 py-2">
                                    View Details →
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── TRUST STRIP ── */}
            <section className="px-6 md:px-12 py-12 md:py-16 bg-loft-bg border-t border-gold/[0.06]">
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 reveal">
                    {[
                        ['🔒', 'Secure Checkout'],
                        ['⚡', 'Instant Download'],
                        ['♻️', 'Lifetime Updates'],
                        ['🏆', 'Commercial License'],
                        ['💬', 'Priority Support'],
                    ].map(([icon, label]) => (
                        <div key={label} className="flex items-center gap-3 text-white/35">
                            <span className="text-xl">{icon}</span>
                            <span className="text-[11px] tracking-[0.15em] uppercase font-light">{label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── PRICING ── */}
            <section id='pricing' className="px-6 md:px-12 py-16 bg-loft-bg2 border-t border-gold/[0.06]">
                <div className="text-center mb-16 reveal">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/20 px-4 py-1.5 inline-block mb-5">
                        Pricing
                    </span>
                    <h2 className="font-syne font-extrabold text-2xl md:text-5xl tracking-tight mb-4">
                        One Purchase. Infinite Use.
                    </h2>
                    <p className="text-white/35 font-light max-w-md mx-auto">No subscriptions required. One-time payment, lifetime access.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
                    {PRICING.map(p => <PricingCard key={p.tier} {...p} />)}
                </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section id="reviews" className="px-6 md:px-12 py-16 bg-loft-bg border-t border-gold/[0.06]">
                <div className="text-center mb-14 reveal">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/20 px-4 py-1.5 inline-block mb-5">
                        Buyer Reviews
                    </span>
                    <h2 className="font-syne font-extrabold text-2xl md:text-5xl tracking-tight">Trusted by Creators & Agencies</h2>
                </div>
                <div className="reveal"><TestimonialRow /></div>
            </section>

            {/* ── FAQ ── */}
            <section id="faq" className="px-6 md:px-12 py-12 md:py-16 bg-loft-bg2 border-t border-gold/[0.06]">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-6 md:mb-8 reveal">
                        <span className="text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/20 px-4 py-1.5 inline-block mb-5">
                            FAQ
                        </span>
                        <h2 className="font-syne font-extrabold text-2xl md:text-4xl tracking-tight">Before You Buy</h2>
                    </div>
                    <div className="reveal"><FaqAccordion items={FAQ} /></div>
                </div>
            </section>

            {/* ── CTA ── */}
            <CtaBanner
                headline="Download Premium Assets Instantly"
                sub="50+ products built to production standard. Your next project ships faster with LF Loft."
                btnLabel="Browse All Products"
            />
        </div>
    )
}
