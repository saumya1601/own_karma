/**
 * HeroVideoFallback — §7.4 mobile fallback.
 * Renders a scroll-scrubbed .webm background when a mobile user hits Home.
 * Phase 0: static placeholder pulse. Phase 2: swap `src` to the real cinematic .webm.
 *
 * Expected asset (produce during Phase 2):
 *   /video/hero-fallback.webm  (Opus/VP9, 60fps preferred, ≤ 3 MB)
 *   /video/hero-fallback.mp4   (H.265 fallback, ≤ 4 MB)
 */
export default function HeroVideoFallback() {
    return (
        <div className="absolute inset-0 bg-ok-void" aria-hidden="true">
            {/* Axis placeholder — subtle vertical line + pulse */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-ok-axis/50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-px bg-ok-axis animate-pulse" />
        </div>
    )
}
