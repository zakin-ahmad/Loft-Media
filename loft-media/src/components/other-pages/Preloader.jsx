export default function Preloader() {
    return (
        <div className="fixed inset-0 bg-[#06060f] z-[10000] flex flex-col items-center justify-center gap-5">

            {/* Glow background */}
            <div className="absolute w-[500px] h-[500px] bg-[#7c58ff]/15 blur-[120px] top-[-120px] left-[-120px]" />
            <div className="absolute w-[500px] h-[500px] bg-[#60a5fa]/10 blur-[140px] bottom-[-150px] right-[-150px]" />

            {/* Brand */}
            <p className="font-syne font-extrabold text-2xl md:text-3xl tracking-widest text-[#e8e8ff] animate-pulse">
                LF LOFT MEDIA
            </p>

            {/* Loading line */}
            <div className="w-48 h-px bg-white/10 relative overflow-hidden">
                <span className="absolute top-0 h-full w-full bg-gradient-to-r from-[#7c58ff] via-[#60a5fa] to-[#a884ff] animate-[scanLine_1.2s_ease-in-out_infinite]" />
            </div>

            {/* Subtitle */}
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#aab0d6]/60">
                Initializing Studio Systems
            </p>

        </div>
    )
}