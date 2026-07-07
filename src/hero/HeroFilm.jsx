import { useEffect, useRef, useState, useCallback } from 'react'
import { useMediaCapability } from '../hooks/useMediaCapability.js'

/**
 * HeroFilm — scroll-scrubbed cinematic video hero.
 *
 * Specification: `_document/requirement2.md` (Landing Hero v2).
 *
 * Responsibilities:
 *   1. Render a full-bleed poster instantly so the viewport never flashes black.
 *   2. Mount a <video>, preload, and drive `currentTime = progress * duration`
 *      inside a single rAF per progress change. Delta-gated so idle frames
 *      never touch the decoder.
 *   3. Gracefully collapse to poster-only when the user prefers reduced motion
 *      or when the video source fails to load / decode.
 *
 * Not this component's job (kept in Home.jsx):
 *   - Scroll tracking (Lenis binding).
 *   - Beat / segment overlay text.
 *   - Dispatching `ok-segment-change` custom events.
 *   - Silhouette + cursor axis overlays.
 *
 * Asset contract (`/public/videos/`):
 *   • hero-main.webm    OPTIONAL VP9 alt (preferred if browser supports).
 *   • hero-main.mp4     REQUIRED H.264 baseline, ≤ 8 MB, 24 fps, keyframe every ≤ 12 frames.
 *   • hero-poster.jpg   REQUIRED first-frame still (SVG fallback ships with the repo).
 *
 * @param {{ progress?: number }} props
 * @param {number} [props.progress=0] Scroll progress into the parent's sticky track, 0..1.
 */
export default function HeroFilm({ progress = 0 }) {
    const { prefersReducedMotion } = useMediaCapability()
    const videoRef = useRef(null)
    const rafRef = useRef(0)
    const lastAppliedTimeRef = useRef(-1)
    const [videoState, setVideoState] = useState('loading') // 'loading' | 'ready' | 'error'

    // ─── Wire load / error listeners ─────────────────────────────────────
    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        const onReady = () => setVideoState('ready')
        const onError = () => setVideoState('error')

        video.addEventListener('loadedmetadata', onReady)
        video.addEventListener('canplay', onReady)
        video.addEventListener('error', onError)

        // If the source list has no supported type, `<video>` fires error on the
        // inner <source>s but not always on the parent. Poll once next tick.
        const t = setTimeout(() => {
            if (video.readyState === 0 && video.networkState === 3 /* NO_SOURCE */) {
                setVideoState('error')
            }
        }, 500)

        return () => {
            video.removeEventListener('loadedmetadata', onReady)
            video.removeEventListener('canplay', onReady)
            video.removeEventListener('error', onError)
            clearTimeout(t)
        }
    }, [])

    // ─── Drive currentTime from progress (rAF-throttled) ─────────────────
    const scheduleScrub = useCallback((pct) => {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = requestAnimationFrame(() => {
            const video = videoRef.current
            if (!video || !isFinite(video.duration) || video.duration <= 0) return
            const target = Math.max(0, Math.min(video.duration - 0.01, pct * video.duration))
            // Skip micro-adjustments — saves the decoder a lot of pointless work.
            if (Math.abs(lastAppliedTimeRef.current - target) < 0.02) return
            try {
                video.currentTime = target
                lastAppliedTimeRef.current = target
            } catch {
                // Some browsers throw INDEX_SIZE_ERR if metadata isn't loaded yet.
                // Swallow — next tick will retry.
            }
        })
    }, [])

    useEffect(() => {
        if (videoState !== 'ready') return
        scheduleScrub(progress)
        return () => cancelAnimationFrame(rafRef.current)
    }, [progress, videoState, scheduleScrub])

    // ─── Pause + release on unmount ──────────────────────────────────────
    useEffect(() => {
        // Capture ref at effect run-time; cleanup must not read a stale ref.
        const video = videoRef.current
        return () => {
            cancelAnimationFrame(rafRef.current)
            if (video) {
                try {
                    video.pause()
                    video.removeAttribute('src')
                    video.load()
                } catch {
                    /* ignore */
                }
            }
        }
    }, [])

    // Reduced-motion OR decode failure → poster-only. Video element is never mounted.
    const posterOnly = prefersReducedMotion || videoState === 'error'

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-ok-void">
            {/* Poster — always mounted; first paint is never black. */}
            <img
                src="/videos/hero-poster.jpg"
                alt=""
                aria-hidden="true"
                draggable="false"
                fetchpriority="high"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-900 ease-out ${videoState === 'ready' && !posterOnly ? 'opacity-0' : 'opacity-100'
                    }`}
                style={{ objectPosition: 'center 40%' }}
            />

            {/* Scroll-scrubbed film. Skipped entirely in poster-only mode. */}
            {!posterOnly && (
                <video
                    ref={videoRef}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-900 ease-out ${videoState === 'ready' ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{ objectPosition: 'center 40%' }}
                    poster="/videos/hero-poster.jpg"
                    preload="auto"
                    muted
                    playsInline
                    disablePictureInPicture
                    disableRemotePlayback
                    crossOrigin="anonymous"
                    aria-hidden="true"
                >
                    <source src="/videos/hero-main.webm" type="video/webm" />
                    <source src="/videos/hero-main.mp4" type="video/mp4" />
                </video>
            )}

            {/* Cinematic vignette. Un-tinted, unchanging. */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.7) 100%)',
                }}
            />

            {/* Subtle top-to-bottom fade so header nav stays legible over any frame. */}
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-40"
                style={{
                    background:
                        'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)',
                }}
            />

            {/* Quiet loading marker — only during first decode. */}
            {!posterOnly && videoState === 'loading' && (
                <div className="absolute bottom-6 left-6 md:left-12 font-mono text-[10px] tracking-[0.3em] text-ok-axis/50 uppercase select-none">
                    Loading film…
                </div>
            )}
        </div>
    )
}
