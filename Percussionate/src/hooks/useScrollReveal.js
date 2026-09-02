import { useEffect, useRef, useState } from 'react'

/**
 * Reveals an element with a fade/slide-up transition the first time
 * it scrolls into view. Respects prefers-reduced-motion via CSS
 * (see .reveal rules in index.css).
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}
