/**
 * HeroStaticFallback — §7.4 no-WebGL / prefers-reduced-motion fallback.
 * Zero motion. Just the axis. Screen readers get the segment transcript.
 */
export default function HeroStaticFallback() {
    return (
        <div className="absolute inset-0 bg-ok-void" role="img" aria-label="A single vertical golden axis on a black field.">
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-ok-axis/50" />
        </div>
    )
}
