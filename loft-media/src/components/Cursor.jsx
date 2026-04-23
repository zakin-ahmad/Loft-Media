import { useEffect, useRef } from 'react'

export default function Cursor() {
    const dot = useRef(null)
    const ring = useRef(null)
    const pos = useRef({ x: 0, y: 0 })
    const ring_pos = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const move = (e) => {
            pos.current = { x: e.clientX, y: e.clientY }
            if (dot.current) {
                dot.current.style.left = e.clientX - 4 + 'px'
                dot.current.style.top = e.clientY - 4 + 'px'
            }
        }
        window.addEventListener('mousemove', move)

        let raf
        const animate = () => {
            ring_pos.current.x += (pos.current.x - ring_pos.current.x - 16) * 0.12
            ring_pos.current.y += (pos.current.y - ring_pos.current.y - 16) * 0.12
            if (ring.current) {
                ring.current.style.left = ring_pos.current.x + 'px'
                ring.current.style.top = ring_pos.current.y + 'px'
            }
            raf = requestAnimationFrame(animate)
        }
        animate()

        const hoverEls = document.querySelectorAll('button, a, [data-hover]')
        hoverEls.forEach(el => {
            el.addEventListener('mouseenter', () => {
                dot.current && (dot.current.style.transform = 'scale(2.5)')
                ring.current && (ring.current.style.transform = 'scale(1.6)')
                ring.current && (ring.current.style.opacity = '0.3')
            })
            el.addEventListener('mouseleave', () => {
                dot.current && (dot.current.style.transform = 'scale(1)')
                ring.current && (ring.current.style.transform = 'scale(1)')
                ring.current && (ring.current.style.opacity = '1')
            })
        })

        return () => {
            window.removeEventListener('mousemove', move)
            cancelAnimationFrame(raf)
        }
    }, [])

    return (
        <>
            <div
                ref={dot}
                className="fixed w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] transition-transform duration-100"
                style={{ top: 0, left: 0 }}
            />
            <div
                ref={ring}
                className="fixed w-8 h-8 border border-primary/50 rounded-full pointer-events-none z-[9998] transition-[transform,opacity] duration-150"
                style={{ top: 0, left: 0 }}
            />
        </>
    )
}