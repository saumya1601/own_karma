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
 * @param {{ onProgress?: (progress: number) => void }} props
 */
export default function HeroFilm({ onProgress, src, poster }) {
    const { prefersReducedMotion, isMobile } = useMediaCapability()
    const videoRef = useRef(null)
    const [videoState, setVideoState] = useState('loading') // 'loading' | 'ready' | 'error'
    const isMuted = useSoundStore((s) => s.isMuted)

    // Viewport-tailored asset pair
    const sources = src && poster
        ? { video: src, poster }
        : (isMobile
            ? { video: '/videos/hero-main-mobile.mp4', poster: '/videos/hero-poster-mobile.jpg' }
            : { video: '/videos/hero-main.mp4', poster: '/videos/hero-poster.jpg' })

    const handleTimeUpdate = useCallback((e) => {
        const video = e.currentTarget
        if (video && video.duration && onProgress) {
            onProgress(video.currentTime / video.duration)
        }
    }, [onProgress])

    // Load listeners + release on source-change / unmount
    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        setVideoState('loading')

        const onReady = () => setVideoState('ready')
        const onError = () => setVideoState('error')

        video.addEventListener('loadedmetadata', onReady)
        video.addEventListener('canplay', onReady)
        video.addEventListener('error', onError)

        const t = setTimeout(() => {
            if (video.readyState === 0 && video.networkState === 3) {
                setVideoState('error')
            }
        }, 500)

        return () => {
            video.removeEventListener('loadedmetadata', onReady)
            video.removeEventListener('canplay', onReady)
            video.removeEventListener('error', onError)
            clearTimeout(t)
            try {
                video.pause()
                video.removeAttribute('src')
                video.load()
            } catch {
                /* ignore */
            }
        }
    }, [sources.video])

    // Ensure playback resumes when global mute state changes
    useEffect(() => {
        const video = videoRef.current
        if (!video || videoState !== 'ready') return
        if (!isMuted) {
            video.play().catch(() => {
                /* ignore autoplay blocks */
            })
        }
    }, [isMuted, videoState])

    const posterOnly = prefersReducedMotion || videoState === 'error'

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-ok-void">
            {/* Poster — always mounted */}
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

            {/* Autoplay-loop video */}
            {!posterOnly && (
                <video
                    key={sources.video}
                    ref={videoRef}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-900 ease-out ${videoState === 'ready' ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{ objectPosition: 'center 40%' }}
                    poster={sources.poster}
                    preload="auto"
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    disablePictureInPicture
                    disableRemotePlayback
                    crossOrigin="anonymous"
                    aria-hidden="true"
                    onTimeUpdate={onProgress ? handleTimeUpdate : undefined}
                >
                    <source src={sources.video} type="video/mp4" />
                </video>
            )}

            {/* Vignette */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.7) 100%)',
                }}
            />

            {/* Subtle top fade */}
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-40"
                style={{
                    background:
                        'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)',
                }}
            />

            {/* Loading status */}
            {!posterOnly && videoState === 'loading' && (
                <div className="absolute bottom-6 left-6 md:left-12 font-mono text-[10px] tracking-[0.3em] text-ok-axis/50 uppercase select-none">
                    Loading film…
                </div>
            )}

        </div>
    )
}
