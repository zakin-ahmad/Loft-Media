import { useEffect, useState } from 'react'

export default function Preloader() {
    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        const t = setTimeout(() => setHidden(true), 2400)
        return () => clearTimeout(t)
    }, [])

    return (
        <div
            className={`fixed inset-0 bg-loft-bg z-[10000] flex flex-col items-center justify-center gap-5
        transition-all duration-700 ${hidden ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
            <p
                className="font-syne text-center font-extrabold text-2xl md:text-3xl tracking-widest text-gold animate-fadeUp"
                style={{ animationDelay: '0.3s' }}
            >
                LF LOFT MEDIA
            </p>

            <div
                className="w-48 h-px bg-white/5 relative overflow-hidden animate-fadeUp"
                style={{ animationDelay: '0.5s' }}
            >
                <span
                    className="absolute top-0 h-full w-full bg-gold"
                    style={{ left: '-100%', animation: 'scanLine 1.2s 0.6s ease-in-out forwards' }}
                />
            </div>

            <p
                className="text-[10px] tracking-[0.25em] uppercase text-white/25 animate-fadeUp"
                style={{ animationDelay: '0.7s' }}
            >
                Initializing Studio Systems
            </p>
        </div>
    )
}