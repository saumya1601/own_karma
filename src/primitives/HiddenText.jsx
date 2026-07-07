/**
 * HiddenText primitive — §3 / §20.
 * Shader-driven text reveal — the word "OWN KARMA" etched into realm textures.
 *
 * TODO(Phase 2): Implement as a custom ShaderMaterial with fragment shader
 * that reveals text based on cursor proximity and scroll position.
 * Fires track('hidden_text_discovered') when cursor lingers ≥ 3s.
 */

/**
 * @param {Object} props
 * @param {string} [props.text] — text to reveal (default: 'OWN KARMA')
 * @param {string} [props.className]
 */
export default function HiddenText({ text = 'OWN KARMA', className = '' }) {
  return (
    <span className={`sr-only ${className}`} aria-label={text}>
      {text}
    </span>
  )
}
