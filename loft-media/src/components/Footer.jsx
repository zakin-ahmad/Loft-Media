import { FaYoutube, FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6'
const NAV_SERVICES = ['AI Tools & Automation', 'Digital Products', 'Inhouse Production', 'Brand Systems', 'Prompt Engineering']
const NAV_STUDIO = ['About LF Loft', 'Our Channels', 'Original Series', 'AI Influencers', 'Start a Project']
const NAV_CONTACT = ['admin@loftmediastudio.com', '+1 (307) 424-2225', 'Loft Media, 4th floor, Saidpur rd, Opp Faysal bank, Block E1/3, Satellite Town, RWP, 46030.']
const SOCIALS = [
    { icon: <FaYoutube />, link: '#' },
    { icon: <FaLinkedin />, link: '#' },
    { icon: <FaInstagram />, link: '#' },
    { icon: <FaXTwitter />, link: '#' },
]

export default function Footer() {
    return (
        <footer className="bg-loft-surface border-t border-gold/[0.06] px-6 md:px-12 pt-16 pb-10">
            <div className="justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-x-20 mb-14">
                {/* Brand */}
                <div>
                    <div className="font-syne font-extrabold text-2xl tracking-widest text-gold mb-4">LF LOFT MEDIA</div>
                    <p className="text-white/25 text-[13px] leading-relaxed max-w-[220px] font-light">
                        AI-powered creative studio. Building premium content systems, digital products, and cinematic productions.
                    </p>
                    <div className="flex gap-3 mt-6">
                        {SOCIALS.map((s, i) => (
                            <a
                                key={i}
                                href={s.link}
                                className="w-9 h-9 border border-gold/[0.08] flex items-center justify-center
            text-white/25 text-[18px] hover:border-gold/40 hover:text-gold transition-all duration-300"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Services */}
                <div>
                    <p className="text-[9px] tracking-[0.22em] uppercase text-white/25 mb-5">Services</p>
                    <div className="flex flex-col gap-3">
                        {NAV_SERVICES.map(l => (
                            <a key={l} href="#" className="text-[13px] text-white/40 hover:text-gold transition-colors duration-300 font-light">
                                {l}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Contact */}
                <div>
                    <p className="text-[9px] tracking-[0.22em] uppercase text-white/25 mb-5">Contact Us</p>
                    <div className="flex flex-col gap-3">
                        {NAV_CONTACT.map(l => (
                            <a key={l} href="#" className="text-[13px] text-white/40 hover:text-gold transition-colors duration-300 font-light">
                                {l}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Studio */}
                <div>
                    <p className="text-[9px] tracking-[0.22em] uppercase text-white/25 mb-5">Studio</p>
                    <div className="flex flex-col gap-3">
                        {NAV_STUDIO.map(l => (
                            <a key={l} href="#" className="text-[13px] text-white/40 hover:text-gold transition-colors duration-300 font-light">
                                {l}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="border-t border-gold/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
                <span className="text-[11px] text-white/20">© 2026 LF Loft Media. All rights reserved.</span>
                <span className="text-[11px] text-white/20">
                    Built with <span className="text-gold">AI × Craft</span> in Islamabad, Pakistan.
                </span>
            </div>
        </footer >
    )
}