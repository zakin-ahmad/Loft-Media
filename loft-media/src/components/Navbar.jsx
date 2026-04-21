import { useEffect, useState } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const links = ['Services', 'Studio', 'Work', 'Contact']

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] h-[72px] flex items-center justify-between
        px-6 md:px-12 backdrop-blur-xl transition-all duration-300
        border-b ${scrolled ? 'border-gold/10 bg-loft-bg/90' : 'border-white/[0.04] bg-loft-bg/80'}`}
        >
            <span className="font-syne font-extrabold text-lg tracking-widest text-gold">LF LOFT</span>

            <div className="hidden md:flex gap-9">
                {links.map(l => (
                    <a
                        key={l}
                        href={`#${l.toLowerCase()}`}
                        className="text-[11px] tracking-[0.15em] uppercase text-white/50
              hover:text-gold transition-colors duration-300 relative group"
                    >
                        {l}
                        <span
                            className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold
                transition-all duration-300 group-hover:w-full"
                        />
                    </a>
                ))}
            </div>

            <button
                className="text-[11px] tracking-[0.15em] uppercase border border-gold/25
          text-gold px-5 py-2.5 hover:bg-gold hover:text-loft-bg transition-all duration-300"
            >
                Start Project
            </button>
        </nav>
    )
}