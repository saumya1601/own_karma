import { useEffect, useRef, useState, useCallback } from 'react'
import { useMediaCapability } from '../hooks/useMediaCapability.js'
import { useSoundStore } from '../stores/soundStore.js'

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
 *   • hero-main.mp4           REQUIRED — landscape H.264, ≤ 8 MB, 24 fps, keyframe every ≤ 12 frames.
 *   • hero-main-mobile.mp4    REQUIRED — portrait H.264, ≤ 6 MB, 24 fps, keyframe every ≤ 12 frames.
 *   • hero-poster.jpg         REQUIRED — landscape first-frame still.
 *   • hero-poster-mobile.jpg  REQUIRED — portrait first-frame still.
 *   Source switching by viewport width (< 768 px → mobile pair). See requirement2 §2c.
 *
 * @param {{ progress?: number }} props
 * @param {number} [props.progress=0] Scroll progress into the parent's sticky track, 0..1.
 */
export default function HeroFilm({ progress = 0 }) {
    const { prefersReducedMotion, isMobile } = useMediaCapability()
    const videoRef = useRef(null)
    const rafRef = useRef(0)
    const lastAppliedTimeRef = useRef(-1)
    const [videoState, setVideoState] = useState('loading') // 'loading' | 'ready' | 'error'
    const [audioMode, setAudioMode] = useState('scrub') // 'scrub' | 'autoplay'
    const isMuted = useSoundStore((s) => s.isMuted)
    const toggleMute = useSoundStore((s) => s.toggleMute)

    // Derived audio mode: a global site mute (from useSoundStore) forces us out of
    // autoplay-with-sound regardless of the user's local click on the film's Sound
    // On button. Derived at render time — no state-mirror effect required.
    const effectiveAudioMode = isMuted ? 'scrub' : audioMode

    // Viewport-tailored asset pair. `useMediaCapability` already tracks the
    // 767 px breakpoint and re-renders on viewport change, so switching between
    // portrait and landscape rotations "just works" via key= on the elements below.
    const sources = isMobile
        ? { video: '/videos/hero-main-mobile.mp4', poster: '/videos/hero-poster-mobile.jpg' }
        : { video: '/videos/hero-main.mp4', poster: '/videos/hero-poster.jpg' }

    // ─── Sound On toggle: scroll-scrub silent mode ↔ autoplay-loop with sound ─
    // Called only on user click, so browser autoplay policy allows unmuted play().
    const toggleAudio = useCallback(() => {
        const video = videoRef.current
        if (!video) return

        if (audioMode === 'scrub') {
            video.currentTime = 0
            video.play().catch(() => {
                // Browser blocked unmuted playback — silently revert.
                setAudioMode('scrub')
            })
            setAudioMode('autoplay')
            // Unmute the site globally so they can hear the film
            if (isMuted) {
                toggleMute()
            }
        } else {
            video.pause()
            lastAppliedTimeRef.current = -1 // force next scrub to reapply progress
            setAudioMode('scrub')
        }
    }, [audioMode, isMuted, toggleMute])

    // ─── Load listeners + release on source-change / unmount ────────────
    // Dep is `sources.video` so listeners re-attach when the viewport crosses
    // the mobile breakpoint and React remounts the <video> via its key= prop.
    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        // Reset per-source state.
        setVideoState('loading')
        setAudioMode('scrub')
        lastAppliedTimeRef.current = -1

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
            cancelAnimationFrame(rafRef.current)
            try {
                video.pause()
                video.removeAttribute('src')
                video.load()
            } catch {
                /* ignore */
            }
        }
    }, [sources.video])

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

    // Sync video play/pause with effectiveAudioMode (local intent gated by global mute).
    useEffect(() => {
        const video = videoRef.current
        if (!video || videoState !== 'ready') return

        if (effectiveAudioMode === 'autoplay') {
            if (video.paused) {
                video.play().catch(() => {
                    // Browser blocked unmuted playback — revert local intent.
                    setAudioMode('scrub')
                })
            }
        } else {
            if (!video.paused) {
                video.pause()
                lastAppliedTimeRef.current = -1
            }
        }
    }, [effectiveAudioMode, videoState])

    useEffect(() => {
        // Only drive currentTime from scroll when we're in scrub mode.
        if (videoState !== 'ready' || effectiveAudioMode !== 'scrub') return
        scheduleScrub(progress)
        return () => cancelAnimationFrame(rafRef.current)
    }, [progress, videoState, scheduleScrub, effectiveAudioMode])

    // Reduced-motion OR decode failure → poster-only. Video element is never mounted.
    const posterOnly = prefersReducedMotion || videoState === 'error'

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-ok-void">
            {/* Poster — always mounted; first paint is never black. */}
            <img
                key={sources.poster}
                src={sources.poster}
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
                    key={sources.video}
                    ref={videoRef}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-900 ease-out ${videoState === 'ready' ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{ objectPosition: 'center 40%' }}
                    poster={sources.poster}
                    preload="auto"
                    muted={effectiveAudioMode === 'scrub'}
                    loop={effectiveAudioMode === 'autoplay'}
                    playsInline
                    disablePictureInPicture
                    disableRemotePlayback
                    crossOrigin="anonymous"
                    aria-hidden="true"
                >
                    <source src={sources.video} type="video/mp4" />
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

            {/* Sound On toggle — flips silent scroll-scrub ↔ autoplay-loop with sound. */}
            {!posterOnly && videoState === 'ready' && (
                <button
                    type="button"
                    onClick={toggleAudio}
                    className="absolute bottom-6 left-6 md:left-12 z-30 flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase select-none transition-colors text-ok-axis/60 hover:text-ok-axis focus-visible:outline focus-visible:outline-ok-axis focus-visible:outline-offset-4"
                    aria-label={effectiveAudioMode === 'scrub' ? 'Turn sound on and play the film' : 'Turn sound off and return to scroll-scrub'}
                >
                    <span aria-hidden="true" className="text-base leading-none">{effectiveAudioMode === 'scrub' ? '◇' : '◆'}</span>
                    <span>Sound {effectiveAudioMode === 'scrub' ? 'On' : 'Off'}</span>
                </button>
            )}
        </div>
    )
}
