import { useNavigate } from "react-router-dom";
import "../styles/home.css";

export default function HomeCard({
    title,
    tag,
    features,
    icon,
    route,
    description
}) {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(route)}
            className="relative cursor-pointer group rounded-2xl p-3 md:p-8 glass border border-white/10  overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/40" >

            {/* Glow Background */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/5`} />

            {/* ICON */}
            <div className={`w-11 h-11 md:w-14 md:h-14 flex items-center justify-center rounded-xl mb-6 relative z-10 border transition-all duration-300 border-purple-400/30 bg-purple-500/10 group-hover:border-purple-400/60`}>
                {icon}
            </div>

            {/* TAG */}
            <span className={`text-[9px] md:text-[10px] tracking-[0.22em] uppercase px-3 py-1 rounded-full border mb-5 inline-block relative z-10 border-purple-400/30 text-purple-300`}>
                {tag}
            </span>

            {/* TITLE */}
            <h2 className="font-syne text-xl md:text-3xl font-extrabold text-white leading-tight relative z-10">
                {title}
            </h2>

            {/* DESCRIPTION (NOW DYNAMIC) */}
            <p className="text-gray-400 text-[12px] sm:text-sm mt-4 mb-4 sm:mb-6 leading-relaxed relative z-10">
                {description}
            </p>

            {/* FEATURES */}
            <ul className="space-y-3 relative z-10">
                {features.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 md:gap-3 text-[11px] md:text-sm text-gray-300">
                        <span className="w-2 h-2 rounded-full bg-purple-400" />
                        {item}
                    </li>
                ))}
            </ul>

            {/* CTA */}
            <div className="mt-8 flex items-center gap-3 text-[10px] md:text-xs tracking-[0.2em] uppercase relative z-10 text-purple-300">
                <div className="w-10 h-px bg-purple-400 group-hover:w-14 transition-all" />
                Enter {title}
                <span className="ml-auto opacity-70 group-hover:translate-x-1 transition">→</span>
            </div>

        </div>
    );
}