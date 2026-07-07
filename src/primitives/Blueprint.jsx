/**
 * Blueprint primitive — §3 / §20.
 * Structural overlay / grid system — the hidden structure behind all design.
 *
 * TODO(Phase 2): Implement as a subtle grid overlay visible on specific pages.
 */

/**
 * @param {Object} props
 * @param {import('react').ReactNode} [props.children]
 * @param {string} [props.className]
 */
export default function Blueprint({ children, className = '' }) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
