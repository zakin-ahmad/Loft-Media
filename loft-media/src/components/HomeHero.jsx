import "../styles/home.css";
import { useEffect, useRef } from "react";

export default function HomeHero() {

  const titleRef = useRef(null)

    useEffect(() => {
        const handle = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20
            const y = (e.clientY / window.innerHeight - 0.5) * 20
            if (titleRef.current) {
                titleRef.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`
            }
        }
        window.addEventListener('mousemove', handle)
        return () => window.removeEventListener('mousemove', handle)
    }, [])

  return (
    <section
      className="min-h-screen flex justify-center items-center mx-auto relative text-center py-16 md:py-24 px-4 md:px-6 overflow-hidden"
    >

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(124,88,255,0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(124,88,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Orbs */}
      <div
        className="absolute top-[-100px] right-[-100px] w-[520px] h-[520px] rounded-full animate-float pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,88,255,0.15), transparent 70%)',
          filter: 'blur(80px)'
        }}
      />

      <div
        className="absolute bottom-20 left-[-60px] w-72 h-72 rounded-full animate-float2 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56,130,255,0.12), transparent 70%)',
          filter: 'blur(60px)'
        }}
      />

      {/* Rotating rings */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full animate-rotate pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] border border-primary/5 rounded-full animate-rotate2 pointer-events-none" />



      {/* GRID BACKGROUND (same as Hero) */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124,88,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,88,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ORB 1 (purple glow) */}
      <div
        className="absolute top-[-120px] right-[-120px] w-[420px] md:w-[520px] h-[420px] md:h-[520px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,88,255,0.15), transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* ORB 2 (blue glow) */}
      <div
        className="absolute bottom-[-80px] left-[-60px] w-64 md:w-72 h-64 md:h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(56,130,255,0.12), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* CONTENT */}
      <div ref={titleRef} className="mt-[40px] flex flex-col justify-center items-center gap-4 md:gap-6 relative z-8">

        <div className="w-fit flex justify-center items-center gap-2 px-4 py-2 rounded-full border border-purple-400/30 bg-purple-500/10 text-purple-300 text-[10px] md:text-[12px] uppercase tracking-wider mb-6 animate-slideUp"
          style={{ animationDelay: '0s' }}
        >
          <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
          AI & 3D Creative Ecosystem
        </div>

        <h1 className="font-syne font-extrabold text-4xl md:text-6xl leading-none tracking-tight animate-slideUp"
          style={{
            fontSize: 'clamp(22px, 6vw, 100px)',
            letterSpacing: '-0.02em',
            animationDelay: '1s',
          }}
        >
          Where Creativity <br />
          Meets <span className="gradient-text">Intelligence</span>
        </h1>

        <p className="text-sm md:text-xl text-muted font-light animate-slideUp leading-relaxed max-w-xl mx-auto mb-8 md:mb-12 animate-slideUp"
          style={{ animationDelay: '1.2s' }}>
          LF Loft Media Studio combines cutting-edge AI innovation and world-class 3D production.
        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-slideUp"
          style={{ animationDelay: '1.4s' }}
        >
          <button className="btn-primary transition-all duration-300 hover:-translate-y-1 text-white px-4 md:px-6 py-3 rounded-full text-sm">
            Explore AI Houses
          </button> 

          <button className="border border-gray-500 transition-all duration-300 hover:-translate-y-1 text-gray-300 px-4 md:px-6 py-3 rounded-full text-sm hover:border-purple-400 hover:text-purple-300">
            Discover 3D House
          </button>
        </div>

      </div>
    </section>
  );
}