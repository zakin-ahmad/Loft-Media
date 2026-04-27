import { useEffect, useState } from 'react'
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi'
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";

import HomeNavBar from '../HomeNavBar'   // import HomeNavBar

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const location = useLocation()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const getLinks = () => {
        switch (location.pathname) {
            case '/ai-house':
                return ['Services', 'Studio', 'Work', 'Contact']

            case '/tools':
                return ['Toolkit', 'Pricing', 'Client Results', 'FAQ']

            case '/products':
                return ['Product Library', 'Pricing', 'Reviews', 'FAQ']

            case '/production':
                return ['Produce', 'Work', 'Packages', 'Results', 'FAQ']

            default:
                return []
        }
    }

    const links = getLinks()

     // HOME ROUTE: render HomeNavBar instead of this navbar
    if (location.pathname === '/') {
        return <HomeNavBar />
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] h-[72px] flex items-center justify-between
        px-6 md:px-12 glass rounded-full transition-all duration-300
        border-b ${scrolled ? 'border-primary/20 bg-bg/90' : 'border-soft bg-bg/80'}`}
        >
            {/* Logo */}
            <Link to="/">
                <span className="font-syne font-extrabold text-lg tracking-widest text-primary">
                    LF LOFT
                </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-9">
                {links.map(l => (
                    <a
                        key={l}
                        href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-[11px] tracking-[0.15em] uppercase text-muted
              hover:text-primary transition-colors duration-300 relative group"
                    >
                        {l}
                        <span
                            className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary
                transition-all duration-300 group-hover:w-full"
                        />
                    </a>
                ))}
            </div>

            {/* Desktop Button */}
            <button className="hidden md:block text-[11px] tracking-[0.15em] uppercase border border-primary/50
          text-white/80 px-5 py-2.5 hover:bg-primary hover:text-white transition-all duration-300">
                Start Project
            </button>

            {/* Mobile Hamburger */}
            <button
                className="md:hidden text-primary text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
            </button>

            {/* Mobile Menu */}
            <div
                className={`absolute top-[72px] left-0 w-full bg-bg/95 backdrop-blur-xl
        transition-all duration-300 overflow-hidden
        ${menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="flex flex-col items-center gap-6 py-6">
                    {links.map(l => (
                        <a
                            key={l}
                            href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={() => setMenuOpen(false)}
                            className="text-sm uppercase tracking-widest text-muted
                hover:text-primary transition-colors duration-300"
                        >
                            {l}
                        </a>
                    ))}

                    <button className="mt-4 text-[11px] tracking-[0.15em] uppercase border border-primary/30
              text-primary px-5 py-2.5 hover:bg-primary hover:text-bg transition-all duration-300">
                        Start Project
                    </button>
                </div>
            </div>
        </nav>
    )
}