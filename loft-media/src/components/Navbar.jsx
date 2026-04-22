import { useEffect, useState } from 'react'
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

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
            {/* Logo */}
            <a href="/"><span className="font-syne font-extrabold text-lg tracking-widest text-gold">
                LF LOFT
            </span></a>
            

            {/* Desktop Menu */}
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

            {/* Desktop Button */}
            <button
                className="hidden md:block text-[11px] tracking-[0.15em] uppercase border border-gold/25
          text-gold px-5 py-2.5 hover:bg-gold hover:text-loft-bg transition-all duration-300"
            >
                Start Project
            </button>

            {/* Mobile Hamburger */}
            <button
                className="md:hidden text-gold text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
            </button>

            {/* Mobile Menu */}
            <div
                className={`absolute top-[72px] left-0 w-full bg-loft-bg/95 backdrop-blur-xl
        transition-all duration-300 overflow-hidden
        ${menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="flex flex-col items-center gap-6 py-6">
                    {links.map(l => (
                        <a
                            key={l}
                            href={`#${l.toLowerCase()}`}
                            onClick={() => setMenuOpen(false)}
                            className="text-sm uppercase tracking-widest text-white/70
                hover:text-gold transition-colors duration-300"
                        >
                            {l}
                        </a>
                    ))}

                    <button
                        className="mt-4 text-[11px] tracking-[0.15em] uppercase border border-gold/25
              text-gold px-5 py-2.5 hover:bg-gold hover:text-loft-bg transition-all duration-300"
                    >
                        Start Project
                    </button>
                </div>
            </div>
        </nav>
    )
}