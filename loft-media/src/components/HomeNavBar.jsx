import "../styles/home.css";

export default function HomeNavBar() {
  return (
    <nav className="glass fixed top-0 left-0 right-0 max-w-screen rounded-full mx-auto px-2 sm:px-6 py-3 sm:py-4 flex justify-between items-center z-10">
      
      <a href="/" className="flex items-center gap-3">
        <div className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-lg bg-gradient-to-br btn-primary text-white font-syne font-bold text-[11px] sm:text-sm">
          LF
        </div>
        <span className="font-syne font-bold text-[11px] sm:text-sm text-white">
          Loft Media <span className="text-gray-400">Studio</span>
        </span>
      </a>

      <div className="text-[8px] sm:text-xs px-2 md:px-4 py-1 sm:py-2 rounded-full text-gray-300 uppercase tracking-wider">
        Islamabad · Pakistan
      </div>

    </nav>
  );
}