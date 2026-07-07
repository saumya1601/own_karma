/**
 * Realm primitive — §3 / §20.
 * Environmental scene wrapper — represents one of the 8 realms in the hero cinematic.
 *
 * TODO(Phase 2): Implement as an R3F scene container with scroll-range visibility,
 * environment assets, and transition effects.
 */

/**
 * @param {Object} props
 * @param {string} props.name — realm identifier (e.g. 'desert', 'galaxy')
 * @param {import('react').ReactNode} [props.children]
 * @param {string} [props.className]
 */
export default function Realm({ name, children, className = '' }) {
  return (
    <div className={className} data-realm={name}>
      {children}
    </div>
  )
}
