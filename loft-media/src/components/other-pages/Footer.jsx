import { FaYoutube, FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6'

const NAV_SERVICES = ['AI Tools & Automation', 'Digital Products', 'Inhouse Production', 'Brand Systems', 'Prompt Engineering']
const NAV_STUDIO = ['About LF Loft', 'Our Channels', 'Original Series', 'AI Influencers', 'Start a Project']
const NAV_CONTACT = [
    'admin@loftmediastudio.com',
    '+1 (307) 424-2225',
    'Loft Media, 4th floor, Saidpur rd, Opp Faysal bank, Block E1/3, Satellite Town, RWP, 46030.'
]

const SOCIALS = [
    { icon: <FaYoutube />, link: '#' },
    { icon: <FaLinkedin />, link: '#' },
    { icon: <FaInstagram />, link: '#' },
    { icon: <FaXTwitter />, link: '#' },
]

export default function Footer() {
    return (
        <footer className="bg-surface border-t border-soft px-2 sm:px-6 md:px-12 pt-16 pb-10">

            {/* Top Section */}
            <div className="flex px-8 flex-wrap justify-center md:justify-between gap-y-10 mb-14 text-center md:text-left">

                {/* Brand */}
                <div className="max-w-max w-full md:w-[48%] lg:w-[22%] flex flex-col items-center md:items-start">
                    <div className="font-syne font-extrabold text-2xl tracking-widest text-primary mb-4">
                        LF LOFT MEDIA
                    </div>

                    <p className="text-muted text-[13px] leading-relaxed max-w-[220px] font-light">
                        AI-powered creative studio. Building premium content systems, digital products, and cinematic productions.
                    </p>

                    <div className="flex gap-3 mt-6">
                        {SOCIALS.map((s, i) => (
                            <a
                                key={i}
                                href={s.link}
                                className="w-9 h-9 border border-soft flex items-center justify-center
                                text-dim text-[18px] hover:border-primary/50 hover:text-primary transition-all duration-300"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Services */}
                <div className="max-w-max w-full md:w-[48%] lg:w-[22%]">
                    <p className="text-[9px] tracking-[0.22em] uppercase text-dim mb-5">
                        Services
                    </p>
                    <div className="flex flex-col gap-3">
                        {NAV_SERVICES.map(l => (
                            <a key={l} href="#" className="text-[13px] text-muted hover:text-primary transition-colors duration-300 font-light">
                                {l}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Contact */}
                <div className="max-w-max w-full md:w-[48%] lg:w-[22%]">
                    <p className="text-[9px] tracking-[0.22em] uppercase text-dim mb-5">
                        Contact Us
                    </p>
                    <div className="flex flex-col gap-3">
                        {NAV_CONTACT.map(l => (
                            <a key={l} href="#" className="text-[12px] md:text-[13px] text-muted hover:text-primary transition-colors duration-300 font-light">
                                {l}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Studio */}
                <div className="max-w-max w-full md:w-[48%] lg:w-[22%]">
                    <p className="text-[9px] tracking-[0.22em] uppercase text-dim mb-5">
                        Studio
                    </p>
                    <div className="flex flex-col gap-3">
                        {NAV_STUDIO.map(l => (
                            <a key={l} href="#" className="text-[13px] text-muted hover:text-primary transition-colors duration-300 font-light">
                                {l}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-soft pt-8 flex flex-col md:flex-row items-center justify-center md:justify-between gap-3 text-center md:text-left">
                <span className="text-[11px] text-dim">
                    © 2026 LF Loft Media. All rights reserved.
                </span>

                <span className="text-[11px] text-dim">
                    Built with <span className="text-primary">AI × Craft</span> in Islamabad, Pakistan.
                </span>
            </div>

        </footer>
    )
}