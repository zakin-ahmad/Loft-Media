import { useEffect, useRef } from 'react'
import PricingCard from '../components/other-pages/PricingCard'
import TestimonialRow from '../components/other-pages/TestimonialRow'
import FaqAccordion from '../components/other-pages/FaqAccordion'
import CtaBanner from '../components/other-pages/CtaBanner'
import { useLocation } from 'react-router-dom'
import PageHero from '../components/other-pages/PageHero'
import { FaGlobe, FaPaintBrush, FaRobot, FaInstagram, FaCube, FaFilm, FaBoxOpen, FaClipboardList, } from "react-icons/fa";
import { FaLock, FaBolt, FaSyncAlt, FaTrophy, FaComments } from "react-icons/fa";

const PRODUCTS = [
    { icon: <FaGlobe />, name: 'Website Templates', desc: 'Dark luxury, SaaS, portfolio, and agency templates — built in React + Tailwind, ready to deploy.' },
    { icon: <FaPaintBrush />, name: 'Branding Kits', desc: 'Logo systems, color palettes, typography guides, and brand usage documents.' },
    { icon: <FaRobot />, name: 'Prompt Packs', desc: 'Curated Midjourney, Veo 3, and ChatGPT prompt libraries for specific industries and use cases.' },
    { icon: <FaInstagram />, name: 'Social Media Packs', desc: 'Canva and Figma template systems for Instagram, YouTube, LinkedIn, and TikTok.' },
    { icon: <FaCube />, name: 'UI Kits', desc: 'Dark theme component libraries and design systems for web and mobile.' },
    { icon: <FaFilm />, name: 'Motion Assets', desc: 'After Effects and Lottie animation packs for premium brand motion design.' },
    { icon: <FaBoxOpen />, name: 'Marketing Bundles', desc: 'Landing page + email sequence + ad creative — packaged for immediate launch.' },
    { icon: <FaClipboardList />, name: 'Content Systems', desc: 'Pre-built Notion OS templates for YouTube channels, agencies, and creators.' },
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

    const location = useLocation()

    useEffect(() => {
        // Disable browser scroll restoration (important for refresh)
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual'
        }

        if (location.hash) {
            // remove hash from URL on refresh/load
            window.history.replaceState({}, '', location.pathname)
        }

        if (location.state?.scrollTo) {
            const el = document.getElementById(location.state.scrollTo)

            if (el) {
                setTimeout(() => {
                    const yOffset = -80 // adjust for navbar height
                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset

                    window.scrollTo({ top: y, behavior: 'smooth' })
                }, 100)
            }
        } else {
            // Default → always go to top (including refresh)
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
        }
    }, [location])

    return (
        <div ref={ref} className="bg-bg pt-4">

            {/* ── HERO ── */}
            <PageHero
                tag="Digital Products"
                titleLine1="Premium Assets Ready"
                highlightText="to Scale Your Brand"
                description="Templates, prompt packs, brand kits, and digital systems — all built to the same standard we use for our own productions."
                primaryBtn="Browse Products"
                secondaryBtn="View Bundles"
                badges={[
                    ['50+', 'Products'],
                    ['New', 'Weekly Drops'],
                    ['Instant', 'Delivery']
                ]}
            />

            {/* ── PRODUCT GRID ── */}
            <section id='product-library' className="px-6 md:px-12 py-10 sm:py-12 md:py-16 bg-bg2 border-t border-soft">
                <div className="text-center mb-16 reveal">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-primary border border-primary/30 px-4 py-1.5 inline-block mb-5">
                        Product Library
                    </span>
                    <h2 className="font-syne font-extrabold text-xl sm:text-2xl md:text-4xl tracking-tight text-text">
                        Everything You Need to Ship Faster
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {PRODUCTS.map((p) => (
                        <div
                            key={p.name}
                            className="bg-surface p-8 group hover:bg-surface2 transition-all duration-300 border border-transparent hover:border-primary/20"
                        >
                            <div className="text-3xl mb-5 group-hover:text-primary transition-colors">{p.icon}</div>
                            <h3 className="font-syne font-bold text-base mb-3 group-hover:text-primary transition-colors text-text">
                                {p.name}
                            </h3>
                            <p className="text-muted text-[13px] font-light leading-[1.75]">
                                {p.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── TRUST STRIP ── */}
            <section className="px-6 md:px-12 py-12 md:py-16 bg-bg border-t border-soft">
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 reveal">
                    {[
                        [<FaLock />, "Secure Checkout"],
                        [<FaBolt />, "Instant Download"],
                        [<FaSyncAlt />, "Lifetime Updates"],
                        [<FaTrophy />, "Commercial License"],
                        [<FaComments />, "Priority Support"],
                    ].map(([icon, label]) => (
                        <div key={label} className="flex items-center gap-3 text-dim">
                            <span className="text-xl">{icon}</span>
                            <span className="text-[11px] tracking-[0.15em] uppercase font-light">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── PRICING ── */}
            <section id='pricing' className="px-6 md:px-12 py-16 bg-bg2 border-t border-soft">
                <div className="text-center mb-16 reveal">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-primary border border-primary/30 px-4 py-1.5 inline-block mb-5">
                        Pricing
                    </span>
                    <h2 className="font-syne font-extrabold text-2xl md:text-5xl tracking-tight mb-4 text-text">
                        One Purchase. Infinite Use.
                    </h2>
                    <p className="text-dim font-light max-w-md mx-auto">
                        No subscriptions required. One-time payment, lifetime access.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
                    {PRICING.map(p => <PricingCard key={p.tier} {...p} />)}
                </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section id="reviews" className="px-6 md:px-12 py-16 bg-bg border-t border-soft">
                <div className="text-center mb-14 reveal">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-primary border border-primary/30 px-4 py-1.5 inline-block mb-5">
                        Buyer Reviews
                    </span>
                    <h2 className="font-syne font-extrabold text-2xl md:text-5xl tracking-tight text-text">
                        Trusted by Creators & Agencies
                    </h2>
                </div>

                <div className="reveal">
                    <TestimonialRow />
                </div>
            </section>

            {/* ── FAQ ── */}
            <section id="faq" className="px-6 md:px-12 py-12 md:py-16 bg-bg2 border-t border-soft">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-6 md:mb-8 reveal">
                        <span className="text-[10px] tracking-[0.25em] uppercase text-primary border border-primary/30 px-4 py-1.5 inline-block mb-5">
                            FAQ
                        </span>
                        <h2 className="font-syne font-extrabold text-2xl md:text-4xl tracking-tight text-text">
                            Before You Buy
                        </h2>
                    </div>

                    <div className="reveal">
                        <FaqAccordion items={FAQ} />
                    </div>
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
