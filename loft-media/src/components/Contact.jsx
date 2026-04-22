import { useEffect, useRef } from 'react'
import { FaYoutube, FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6'
const SOCIALS = [
    { icon: <FaYoutube />, link: '#' },
    { icon: <FaLinkedin />, link: '#' },
    { icon: <FaInstagram />, link: '#' },
    { icon: <FaXTwitter />, link: '#' },
]

export default function Contact() {
    const ref = useRef(null)

    useEffect(() => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
        }, { threshold: 0.1 })
        ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
        return () => obs.disconnect()
    }, [])

    return (
        <section id="contact" ref={ref} className="relative bg-loft-bg py-16 md:py-20 px-6 md:px-12 text-center overflow-hidden">
            {/* Radial glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(201,168,76,0.07), transparent)' }}
            />

            <div className="relative z-10 max-w-3xl mx-auto">
                <span className="text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/20 px-4 py-1.5 inline-block mb-6 reveal">
                    Let's Build
                </span>

                <h2
                    className="font-syne font-extrabold leading-tight tracking-tight mb-6 reveal reveal-d1"
                    style={{ fontSize: 'clamp(22px, 6vw, 72px)' }}
                >
                    Ready to Build Something<br />
                    <span className="shimmer-text">Extraordinary?</span>
                </h2>

                <p className="text-white/40 text-sm md:text-lg font-light leading-relaxed mb-14 reveal reveal-d2 max-w-xl mx-auto">
                    Whether you need a content system, a digital product, or a full inhouse production — we engineer it to perform at the highest level.
                </p>

                <a
                    href="mailto:studio@lfloftmedia.com"
                    className="reveal reveal-d3 inline-flex text-sm md:text-lg items-center gap-2 md:gap-4 px-5 md:px-12 py-5 border border-gold/25
            font-syne font-semibold tracking-wide text-gold
            hover:bg-gold/[0.06] hover:-translate-y-1
            hover:shadow-[0_16px_40px_rgba(201,168,76,0.12)]
            transition-all duration-300"
                >
                    studio@lfloftmedia.com
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                </a>

                <div className="flex gap-4 justify-center mt-14 reveal reveal-d4">
                    {SOCIALS.map(s => (
                        <a
                            key={s}
                            href="#"
                            className="w-10 h-10 border border-white/[0.07] flex items-center justify-center
                text-white/25 text-[20px] font-bold tracking-wide
                hover:border-gold/40 hover:text-gold transition-all duration-300"
                        >
                            {s.icon}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}