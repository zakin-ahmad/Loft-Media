import { useEffect, useRef, useState } from "react"

const STATS = [
  { value: 50, label: "Projects Delivered", suffix: "+" },
  { value: 12, label: "Active Channels", suffix: "+" },
  { value: 8, label: "AI Systems Built", suffix: "+" },
  { value: 4, label: "Core Team Members", suffix: "+" },
]

function useCountUp(target, started) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return

    let current = 0
    const increment = target / 60

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 30)

    return () => clearInterval(timer)
  }, [started, target])

  return count
}

function StatItem({ value, label, suffix, started, isLast }) {
  const count = useCountUp(value, started)

  return (
    <div
      className={`flex flex-col items-center justify-center px-6 py-4
      ${!isLast ? "md:border-r border-white/10" : ""}`}
    >
      <h2 className="text-3xl md:text-4xl font-extrabold font-syne bg-gradient-to-r from-primary via-blue to-primary bg-clip-text text-transparent">
        {count}
        {suffix}
      </h2>

      <p className="mt-2 text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted text-center font-syne">
        {label}
      </p>
    </div>
  )
}

export default function StatsBar() {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="
      w-full relative
      bg-bg
      border-y border-white/10
    "
    >
      {/* glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-blue/10 to-primary/10 opacity-40 pointer-events-none" />

      <div className="max-w-7xl py-8 mx-auto grid grid-cols-2 md:grid-cols-4 relative z-10">
        {STATS.map((stat, index) => (
          <StatItem
            key={index}
            {...stat}
            started={started}
            isLast={index === STATS.length - 1}
          />
        ))}
      </div>
    </section>
  )
}