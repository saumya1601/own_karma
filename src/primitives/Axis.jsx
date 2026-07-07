/**
 * Axis primitive — §3 / §20.
 * The golden vertical line — the single constant across all realms.
 * Used as a decorative/structural element throughout the site.
 *
 * TODO(Phase 2): Implement as a Three.js line in HeroCanvas,
 * and as a CSS/SVG element in 2D contexts.
 */

/**
 * @param {Object} props
 * @param {string} [props.className]
 */
export default function Axis({ className = '' }) {
  return (
    <div
      className={`pointer-events-none w-px bg-ok-axis ${className}`}
      aria-hidden="true"
      role="presentation"
    />
  )
}
