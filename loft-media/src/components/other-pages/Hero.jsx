import { useEffect, useRef } from 'react'

export default function Hero() {
    const titleRef = useRef(null)

    useEffect(() => {
        const handle = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20
            const y = (e.clientY / window.innerHeight - 0.5) * 20
            if (titleRef.current) {
                titleRef.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`
            }
        }
        window.addEventListener('mousemove', handle)
        return () => window.removeEventListener('mousemove', handle)
    }, [])

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 pt-28 pb-20"
        >
            {/* Grid background */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(rgba(124,88,255,0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(124,88,255,0.15) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Orbs */}
            <div
                className="absolute top-[-100px] right-[-100px] w-[520px] h-[520px] rounded-full animate-float pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(124,88,255,0.15), transparent 70%)',
                    filter: 'blur(80px)'
                }}
            />

            <div
                className="absolute bottom-20 left-[-60px] w-72 h-72 rounded-full animate-float2 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(56,130,255,0.12), transparent 70%)',
                    filter: 'blur(60px)'
                }}
            />

            {/* Rotating rings */}
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full animate-rotate pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] border border-primary/5 rounded-full animate-rotate2 pointer-events-none" />

            {/* Content */}
            <div ref={titleRef} className="relative z-10 text-center max-w-5xl transition-transform duration-75">

                {/* Badge */}
                <div
                    className="inline-flex items-center gap-2 px-3 md:px-5 py-2 border border-primary/30 bg-primary/10
            text-[10px] tracking-[0.22em] uppercase text-primary mb-8 animate-slideUp"
                    style={{ animationDelay: '0s' }}
                >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-dot" />
                    AI-Powered Creative Studio — Islamabad
                </div>

                {/* Headline */}
                <h1
                    className="font-syne font-extrabold leading-none tracking-tight mb-7 animate-slideUp text-text"
                    style={{
                        fontSize: 'clamp(28px, 6vw, 100px)',
                        letterSpacing: '-0.02em',
                        animationDelay: '1s',
                    }}
                >
                    We Build<br />
                    <span className="text-primary">Premium</span><br />
                    Media Systems
                </h1>

                {/* Sub */}
                <p
                    className="text-sm md:text-xl text-muted font-light leading-relaxed max-w-xl mx-auto mb-12 animate-slideUp"
                    style={{ animationDelay: '1.2s' }}
                >
                    LF Loft Media engineers cinematic content, AI-driven production pipelines, and scalable digital ecosystems for brands that demand excellence.
                </p>

                {/* CTAs */}
                <div
                    className="flex justify-center gap-4 flex-wrap animate-slideUp"
                    style={{ animationDelay: '1.4s' }}
                >
                    <button
                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                        className="font-syne font-bold text-[10px] md:text-[13px] tracking-[0.1em] uppercase px-5 md:px-10 py-4
              bg-primary text-white hover:bg-primaryLight transition-all duration-300
              hover:-translate-y-1 shadow-glowPurple"
                    >
                        Explore Services
                    </button>

                    <button
                        onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                        className="font-syne font-semibold text-[10px] md:text-[13px] tracking-[0.1em] uppercase px-5 md:px-10 py-4
              border border-primary/30 text-text hover:border-primary hover:text-primary
              transition-all duration-300 hover:-translate-y-1"
                    >
                        View Work
                    </button>
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                className="absolute bottom-10 -translate-x-1/2 flex flex-col items-center gap-2
          text-[9px] tracking-[0.22em] uppercase text-muted animate-slideUp"
                style={{ animationDelay: '2.8s' }}
            >
                <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-pulse-dot" />
                Scroll
            </div>
        </section>
    )
}