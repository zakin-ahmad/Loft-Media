import { useState } from 'react'

export default function FaqAccordion({ items }) {
  const [open, setOpen] = useState(null)

  return (
    <div className="flex flex-col divide-y divide-soft">
      {items.map((item, i) => (
        <div key={i}>
          <button
            data-hover
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-6 text-left group"
          >
            <span
              className="font-syne font-semibold text-base md:text-lg text-text
              group-hover:text-primary transition-colors duration-300"
            >
              {item.q}
            </span>

            <span
              className={`text-primary text-xl font-light transition-transform duration-300 flex-shrink-0 ml-4
              ${open === i ? 'rotate-45' : 'rotate-0'}`}
            >
              +
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ${
              open === i ? 'max-h-48 pb-6' : 'max-h-0'
            }`}
          >
            <p className="text-muted text-[14px] font-light leading-[1.85]">
              {item.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}