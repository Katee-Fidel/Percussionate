import { useScrollReveal } from '../hooks/useScrollReveal'

/**
 * Wraps any block of markup so it fades/slides in on scroll.
 * Usage: <Reveal><h2>Heading</h2></Reveal>
 * Usage with a custom tag: <Reveal as="article" className="show-card">...</Reveal>
 */
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, visible] = useScrollReveal()
  return (
    <Tag ref={ref} className={`reveal ${visible ? 'in' : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
