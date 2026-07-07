/**
 * AxisBar — §5.1.
 * Desktop-only thin 1px golden line fixed at viewport bottom.
 * The visible manifestation of the Axis rule. Never disappears.
 */
export default function AxisBar() {
  return (
    <div
      className="pointer-events-none fixed bottom-0 left-0 right-0 z-40 hidden md:block"
      aria-hidden="true"
    >
      <div className="h-px w-full bg-ok-axis/60" />
    </div>
  )
}
