import { useEffect, useState } from 'react'

export default function Preloader() {
    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        const t = setTimeout(() => setHidden(true), 2400)
        return () => clearTimeout(t)
    }, [])

    return (
        <div
            className={`fixed inset-0 bg-[#06060f] z-[10000] flex flex-col items-center justify-center gap-5
        transition-all duration-700 ${hidden ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >

            {/* Glow background accents */}
            <div className="absolute w-[500px] h-[500px] bg-[#7c58ff]/15 blur-[120px] top-[-120px] left-[-120px]" />
            <div className="absolute w-[500px] h-[500px] bg-[#60a5fa]/10 blur-[140px] bottom-[-150px] right-[-150px]" />

            {/* Brand */}
            <p
                className="font-syne text-center font-extrabold text-2xl md:text-3xl tracking-widest text-[#e8e8ff] animate-fadeUp"
                style={{ animationDelay: '0.3s' }}
            >
                LF LOFT MEDIA
            </p>

            {/* Loading line */}
            <div
                className="w-48 h-px bg-white/10 relative overflow-hidden animate-fadeUp"
                style={{ animationDelay: '0.5s' }}
            >
                <span
                    className="absolute top-0 h-full w-full bg-gradient-to-r from-[#7c58ff] via-[#60a5fa] to-[#a884ff]"
                    style={{ left: '-100%', animation: 'scanLine 1.2s 0.6s ease-in-out forwards' }}
                />
            </div>

            {/* Subtitle */}
            <p
                className="text-[10px] tracking-[0.25em] uppercase text-[#aab0d6]/60 animate-fadeUp"
                style={{ animationDelay: '0.7s' }}
            >
                Initializing Studio Systems
            </p>

        </div>
    )
}