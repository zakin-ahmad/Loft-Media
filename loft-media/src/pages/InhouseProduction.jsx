import { useEffect, useRef } from 'react'
import PricingCard from '../components/other-pages/PricingCard'
import TestimonialRow from '../components/other-pages/TestimonialRow'
import FaqAccordion from '../components/other-pages/FaqAccordion'
import CtaBanner from '../components/other-pages/CtaBanner'
import PageHero from '../components/other-pages/PageHero'
import { useLocation } from 'react-router-dom'
import { FaVideo, FaCamera, FaBox, FaMobileAlt, FaMicrophone, FaMagic, FaBullhorn, FaFilm, } from "react-icons/fa";

const SERVICES = [
    { icon: <FaVideo />, name: 'AI Video Production', desc: 'Cinematic AI-generated videos using Veo 3, Runway, and Kling — scripted, voiced, and edited in-house.' },
    { icon: <FaCamera />, name: 'Photography & Shoots', desc: 'Product photography, brand portraits, and commercial shoots executed by our Islamabad studio team.' },
    { icon: <FaBox />, name: 'Product Shoot Packages', desc: 'E-commerce and lifestyle product shoots with AI-enhanced post-production and retouching.' },
    { icon: <FaMobileAlt />, name: 'Reels & Short-Form', desc: 'High-retention vertical content engineered for Instagram, TikTok, and YouTube Shorts algorithms.' },
    { icon: <FaMicrophone />, name: 'Podcast Production', desc: 'Full podcast setup, recording, editing, and distribution — audio and video format.' },
    { icon: <FaMagic />, name: 'Motion Graphics', desc: 'Brand animations, lower thirds, intros/outros, and full explainer motion packages.' },
    { icon: <FaBullhorn />, name: 'Commercial Campaigns', desc: 'End-to-end ad creative — concept, script, production, and platform-ready delivery.' },
    { icon: <FaFilm />, name: 'Documentary Series', desc: 'Multi-episode documentary production from research to final cut — Territory Tales standard.' },
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
                tag="Inhouse Production"
                titleLine1="World-Class Content"
                highlightText="Produced In-House"
                description="From a single product shoot to a full documentary series — our studio team executes every frame to cinematic standard."
                primaryBtn="Book Production Call"
                secondaryBtn="View Portfolio"
                badges={[
                    ['48h', 'Avg Delivery'],
                    ['HD+', 'Output Quality'],
                    ['100%', 'In-House Team']
                ]}
            />

            {/* SERVICES */}
            <section id="produce" className="px-6 md:px-12 py-12 md:py-16 bg-bg2 border-t border-default">
                <div className="text-center mb-10 md:mb-14 reveal">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-primary border border-primary/20 px-4 py-1.5 inline-block mb-5">
                        What We Produce
                    </span>
                    <h2 className="font-syne font-extrabold text-xl sm:text-2xl md:text-4xl tracking-tight text-text">
                        8 Production Formats
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {SERVICES.map((s) => (
                        <div
                            key={s.name}
                            className="bg-surface p-8 group hover:bg-surface2 transition-all duration-300 border border-transparent hover:border-primary/20"
                        >
                            <div className="text-3xl mb-5 group-hover:text-primary transition-colors">{s.icon}</div>
                            <h3 className="font-syne font-bold text-base mb-3 group-hover:text-primary transition-colors text-text">
                                {s.name}
                            </h3>
                            <p className="text-muted text-[13px] font-light leading-[1.75]">
                                {s.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* PROCESS */}
            <section id="work" className="px-6 md:px-12 py-16 bg-bg border-t border-default">
                <div className="text-center mb-16 reveal">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-primary border border-primary/20 px-4 py-1.5 inline-block mb-5">
                        How It Works
                    </span>
                    <h2 className="font-syne font-extrabold text-2xl md:text-5xl tracking-tight text-text">
                        From Brief to Delivered
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {PROCESS.map((p) => (
                        <div key={p.step} className="bg-surface p-8 md:p-10 hover:bg-surface2 transition">
                            <span className="text-primary text-xs">{p.step}</span>
                            <h3 className="font-syne font-bold text-lg mb-3 text-text">{p.title}</h3>
                            <p className="text-muted text-[13px] leading-[1.75]">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* PRICING */}
            <section id="packages" className="px-6 md:px-12 py-16 bg-bg border-t border-default">
                <div className="text-center mb-16 reveal">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-primary border border-primary/20 px-4 py-1.5 inline-block mb-5">
                        Production Packages
                    </span>
                    <h2 className="font-syne font-extrabold text-2xl md:text-4xl text-text">
                        Invest in Content That Converts
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {PRICING.map(p => <PricingCard key={p.tier} {...p} />)}
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="px-6 md:px-12 py-16 bg-bg2 border-t border-default">
                <div className="max-w-3xl mx-auto">
                    <FaqAccordion items={FAQ} />
                </div>
            </section>

            {/* CTA */}
            <CtaBanner
                headline="Turn Attention Into Revenue"
                sub="Premium content produced by LF Loft's in-house team. Book your call and we'll scope the project same day."
                btnLabel="Book Production Call"
            />
        </div>
    )
}