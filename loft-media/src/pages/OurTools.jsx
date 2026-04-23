import { useEffect, useRef } from 'react'
import PricingCard from '../components/other-pages/PricingCard'
import TestimonialRow from '../components/other-pages/TestimonialRow'
import FaqAccordion from '../components/other-pages/FaqAccordion'
import CtaBanner from '../components/other-pages/CtaBanner'
import PageHero from '../components/other-pages/PageHero'
import { useLocation } from 'react-router-dom'
import { FaBolt, FaShareAlt, FaSearch, FaChartBar, FaLink, FaVideo, FaImage, FaCogs, } from "react-icons/fa";

const TOOLS = [
    { icon: <FaBolt />, name: 'AI Content Generator', desc: 'Scripts, captions, blogs, and long-form — generated at scale with brand voice locked in.' },
    { icon: <FaShareAlt />, name: 'Social Media Automation', desc: 'Schedule, publish, and optimize across 8 platforms from a single AI-driven dashboard.' },
    { icon: <FaSearch />, name: 'SEO Intelligence', desc: 'Keyword research, content gaps, and competitor analysis powered by real-time AI.' },
    { icon: <FaChartBar />, name: 'Analytics Dashboard', desc: 'Unified performance metrics across all channels, visualized in real time.' },
    { icon: <FaLink />, name: 'CRM Integration', desc: 'Connect your pipeline to your content — automated follow-ups and lead scoring.' },
    { icon: <FaVideo />, name: 'Video Automation', desc: 'AI-cut, captioned, and formatted video clips ready for every platform.' },
    { icon: <FaImage />, name: 'Image Generation', desc: 'Midjourney v7 and Flux pipelines integrated into your brand asset system.' },
    { icon: <FaCogs />, name: 'Workflow Systems', desc: 'Notion OS, Zapier chains, and Make automations custom-built for your operation.' },
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

    const location = useLocation()

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual'
        }

        if (location.hash) {
            window.history.replaceState({}, '', location.pathname)
        }

        if (location.state?.scrollTo) {
            const el = document.getElementById(location.state.scrollTo)

            if (el) {
                setTimeout(() => {
                    const yOffset = -80
                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
                    window.scrollTo({ top: y, behavior: 'smooth' })
                }, 100)
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
        }
    }, [location])

    return (
        <div ref={ref} className="bg-bg pt-4">

            {/* HERO */}
            <PageHero
                tag="Our Tools"
                titleLine1="Smart Tools That"
                highlightText="Multiply Your Output"
                description="AI systems, automation tools, and growth engines built for modern businesses that refuse to stay small."
                primaryBtn="Start Free Demo"
                secondaryBtn="View Pricing"
                badges={[
                    ['10x', 'Output Speed'],
                    ['98%', 'Automation Rate'],
                    ['< 2h', 'Setup Time']
                ]}
            />

            {/* TOOLS GRID */}
            <section id="toolkit" className="px-6 md:px-12 py-16 bg-bg2 border-t border-default">
                <div className="text-center mb-16 reveal">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-primary border border-primary/20 px-4 py-1.5 inline-block mb-5">
                        Full Toolkit
                    </span>
                    <h2 className="font-syne font-extrabold text-2xl md:text-4xl tracking-tight text-text">
                        8 Modules. One System.
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {TOOLS.map((tool) => (
                        <div
                            key={tool.name}
                            className="bg-surface p-8 group hover:bg-surface2 transition-all duration-300 border border-transparent hover:border-primary/20"
                        >
                            <div className="text-3xl mb-5 group-hover:text-primary transition-colors">{tool.icon}</div>
                            <h3 className="font-syne font-bold text-base mb-3 group-hover:text-primary transition-colors text-text">
                                {tool.name}
                            </h3>
                            <p className="text-muted text-[13px] font-light leading-[1.75]">
                                {tool.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* TRUST METRICS */}
            <section className="px-6 md:px-12 py-16 bg-bg border-t border-default">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
                    {[
                        ['500+', 'Automations Built'],
                        ['3.2M', 'Content Pieces Generated'],
                        ['99.7%', 'System Uptime'],
                        ['48h', 'Avg Onboarding Time'],
                    ].map(([val, label]) => (
                        <div key={label} className="bg-surface py-6 md:py-10 text-center">
                            <span className="font-syne font-extrabold text-base sm:text-xl md:text-4xl text-primary block">
                                {val}
                            </span>
                            <span className="text-[9px] md:text-[10px] tracking-[0.15em] uppercase text-dim mt-2 block">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* PRICING */}
            <section id="pricing" className="px-6 md:px-12 py-16 md:py-20 bg-bg2 border-t border-default">
                <div className="text-center mb-16 reveal">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-primary border border-primary/20 px-4 py-1.5 inline-block mb-5">
                        Pricing
                    </span>
                    <h2 className="font-syne font-extrabold text-xl sm:text-2xl md:text-4xl text-text tracking-tight mb-4">
                        Simple. Transparent.
                    </h2>
                    <p className="text-muted font-light max-w-md mx-auto">
                        No hidden fees. Cancel anytime. Start scaling from day one.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {PRICING.map(p => <PricingCard key={p.tier} {...p} />)}
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section id="client-results" className="px-6 md:px-12 py-16 md:py-20 bg-bg border-t border-default">
                <div className="text-center mb-14 reveal">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-primary border border-primary/20 px-4 py-1.5 inline-block mb-5">
                        Client Results
                    </span>
                    <h2 className="font-syne font-extrabold text-2xl md:text-4xl text-text tracking-tight">
                        What Our Clients Say
                    </h2>
                </div>

                <TestimonialRow />
            </section>

            {/* FAQ */}
            <section id="faq" className="px-5 md:px-12 py-5 sm:py-10 md:py-18 bg-bg2 border-t border-default">
                <div className="max-w-3xl mx-auto">
                    <FaqAccordion items={FAQ} />
                </div>
            </section>

            {/* CTA */}
            <CtaBanner
                headline="Automate Your Growth Today"
                sub="Join businesses already scaling with LF Loft AI systems. Setup takes less than 48 hours."
                btnLabel="Start Free Demo"
            />
        </div>
    )
}