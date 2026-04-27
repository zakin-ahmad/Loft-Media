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
        <section id="contact" ref={ref} className="relative bg-bg py-16 md:py-20 px-6 md:px-12 text-center overflow-hidden">
            
            {/* Radial glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(124,88,255,0.08), transparent)'
                }}
            />

            <div className="relative z-10 max-w-3xl mx-auto">
                
                <span className="text-[10px] tracking-[0.25em] uppercase text-primary border border-primary/30 px-4 py-1.5 inline-block mb-6 reveal">
                    Let's Build
                </span>

                <h2
                    className="font-syne font-extrabold leading-tight tracking-tight mb-6 reveal reveal-d1 text-text"
                    style={{ fontSize: 'clamp(17px, 6vw, 70px)' }}
                >
                    Ready to Build Something<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradientStart via-gradientMid to-gradientEnd">
                        Extraordinary?
                    </span>
                </h2>

                <p className="text-muted text-sm md:text-lg font-light leading-relaxed mb-14 reveal reveal-d2 max-w-xl mx-auto">
                    Whether you need a content system, a digital product, or a full inhouse production — we engineer it to perform at the highest level.
                </p>

                <a
                    href="mailto:admin@loftmediastudio.com?subject=Project Inquiry&body=Hi, I want to discuss a project with you."
                    className="reveal reveal-d3 inline-flex text-[9px] sm:text-sm md:text-lg items-center gap-2 md:gap-4 px-2 md:px-12 py-5 border border-primary/40 font-syne font-semibold tracking-wide text-primary hover:bg-primaryDim hover:-translate-y-1 hover:shadow-glowPurple transition-all duration-200"
                >
                    admin@loftmediastudio.com
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                </a>

                <div className="flex gap-4 justify-center mt-14 reveal reveal-d4">
                    {SOCIALS.map((s, i) => (
                        <a
                            key={i}
                            href="#"
                            className="w-10 h-10 border border-soft flex items-center justify-center text-dim text-[20px] hover:border-primary hover:text-primary transition-all duration-300"
                        >
                            {s.icon}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}