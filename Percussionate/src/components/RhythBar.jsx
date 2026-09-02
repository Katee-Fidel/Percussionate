import { useMemo } from 'react'

/**
 * Signature element: a striped, pulsing equalizer bar.
 * Doubles as a Kente-stripe motif (grey/black bands with a gold pinstripe)
 * and a percussion/rhythm visualizer between sections.
 */
export default function RhythmBar() {
  // NOTE: keep the component pure for eslint/react-hooks/purity.
  // Generate a deterministic pseudo-random sequence from the index.
  const bars = useMemo(() => {
    const pseudoRand = (n) => {
      // deterministic "random" 0..1 (no Math.random)
      const x = Math.sin(n * 999) * 10000
      return x - Math.floor(x)
    }

    return Array.from({ length: 60 }, (_, i) => {
      const r1 = pseudoRand(i + 1)
      const r2 = pseudoRand(i + 101)
      const r3 = pseudoRand(i + 201)
      return {
        height: 8 + r1 * 26,
        delay: r2 * 1.6,
        duration: 1.1 + r3 * 1.2,
      }
    })
  }, [])

  return (
    <div className="rhythm-bar" aria-hidden="true">
      {bars.map((bar, i) => (
        <span
          key={i}
          style={{
            height: `${bar.height}px`,
            animationDelay: `${bar.delay}s`,
            animationDuration: `${bar.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

