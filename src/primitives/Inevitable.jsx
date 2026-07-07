/**
 * Inevitable primitive — §3 / §20.
 * Scroll-triggered reveal — content that appears as an inevitability, not a surprise.
 * Enforces the "product is inevitable, not introduced" rule.
 *
 * TODO(Phase 2): Implement with GSAP ScrollTrigger for controlled opacity + transform
 * reveal that respects prefers-reduced-motion.
 */

/**
 * @param {Object} props
 * @param {import('react').ReactNode} [props.children]
 * @param {string} [props.className]
 */
export default function Inevitable({ children, className = '' }) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
