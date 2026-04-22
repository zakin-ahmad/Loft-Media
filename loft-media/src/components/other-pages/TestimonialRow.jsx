const TESTIMONIALS = [
  {
    name: 'Arjun Mehta',
    role: 'Founder, ScaleUp Digital',
    text: 'LF Loft built us a full AI content engine in 2 weeks. Our output went from 4 posts a month to 40. The system runs itself.',
    rating: 5,
  },
  {
    name: 'Sara Williams',
    role: 'CMO, NovaBrand Agency',
    text: 'The production quality is insane for the price point. We\'ve worked with agencies charging 10x more for half the result.',
    rating: 5,
  },
  {
    name: 'Khalid Al-Rashid',
    role: 'CEO, Gulf Ventures',
    text: 'They delivered our full brand film, social content, and prompt system in one package. Genuinely world-class work.',
    rating: 5,
  },
]

export default function TestimonialRow() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {TESTIMONIALS.map((t) => (
        <div key={t.name} className="bg-loft-surface p-6 md:p-10 flex flex-col gap-5">
          <div className="flex gap-1">
            {Array(t.rating).fill(0).map((_, i) => (
              <span key={i} className="text-gold text-sm">★</span>
            ))}
          </div>
          <p className="text-white/50 text-[14px] font-light leading-[1.85] italic">"{t.text}"</p>
          <div className="mt-auto pt-5 border-t border-gold/[0.07]">
            <p className="font-syne font-bold text-sm">{t.name}</p>
            <p className="text-white/30 text-[11px] tracking-wide mt-0.5">{t.role}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
