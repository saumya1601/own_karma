/**
 * Stillness primitive — §3 / §20.
 * Motion pause/hold wrapper — enforces the "alignment > motion" rule.
 * Wraps content that should hold still while surrounding elements animate.
 *
 * TODO(Phase 2): Implement scroll-aware hold zones where animation pauses
 * for a specified duration before releasing.
 */

/**
 * @param {Object} props
 * @param {number} [props.holdMs] — how long to hold stillness (default: 600)
 * @param {import('react').ReactNode} [props.children]
 * @param {string} [props.className]
 */
export default function Stillness({ children, className = '' }) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
