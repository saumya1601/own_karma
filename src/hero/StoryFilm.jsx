import { useEffect, useRef, useState, useCallback } from 'react'
import { useMediaCapability } from '../hooks/useMediaCapability.js'

/**
 * StoryFilm — autoplay-loop cinematic video for `/story/[slug]` pages.
 *
 * Specification: `_document/requirement2.md` §3 (Story Concept Films).
 *
 * Differences from HeroFilm (the scroll-scrubbed home hero):
 *   - No scroll-scrubbing. Video autoplays muted in loop.
 *   - Single landscape 16:9 source (story pages are desktop-consumed).
 *   - Includes the same Sound On toggle so a user can unmute.
 *   - Contained aspect-ratio box (not full viewport), sits in the article flow.
 *
 * Fallback ladder (identical to HeroFilm):
 *   1. prefers-reduced-motion → poster only, no <video> mounted.
 *   2. Video decode error / no <video> support → poster only.
 *   3. Otherwise → autoplay-loop muted, with user-toggle for audio.
 *
 * Asset contract (`/public/videos/`):
 *   • story-{slug}.mp4         REQUIRED — H.264 main profile, tune fastdecode, ≤ 12 MB.
 *   • story-{slug}-poster.jpg  REQUIRED — first-frame still, ≤ 250 KB.
 *
 * @param {Object} props
 * @param {string} props.src               Absolute path to the .mp4, e.g. '/videos/story-divine.mp4'.
 * @param {string} props.poster            Absolute path to the poster jpg.
 * @param {string} [props.aspectRatio='16 / 9'] CSS `aspect-ratio` value.
 * @param {string} [props.label]           aria-label for the film region (screen readers).
 */
export default function StoryFilm({ src, poster, aspectRatio = '16 / 9', label }) {
    const { prefersReducedMotion } = useMediaCapability()
    const videoRef = useRef(null)
    const [videoState, setVideoState] = useState('loading') // 'loading' | 'ready' | 'error'
    const [audioMode, setAudioMode] = useState('muted') // 'muted' | 'audible'

    // ─── Sound toggle: mute ↔ audible (video keeps looping either way) ─────
    // Called only on user click, so browser autoplay policy allows unmuted play().
    const toggleAudio = useCallback(() => {
        const video = videoRef.current
        if (!video) return

        if (audioMode === 'muted') {
            // Unmute + kick playback to ensure audio starts (some browsers gate audio
            // until an explicit play() call, even on already-playing video).
            video.muted = false
            video.play().catch(() => {
                // Browser blocked unmuted playback — revert.
                video.muted = true
                setAudioMode('muted')
            })
            setAudioMode('audible')
        } else {
            video.muted = true
            setAudioMode('muted')
        }
    }, [audioMode])

    // ─── Load listeners + release on source-change / unmount ───────────────
    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        // Reset per-source state.
        setVideoState('loading')
        setAudioMode('muted')

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
            try {
                video.pause()
                video.removeAttribute('src')
                video.load()
            } catch {
                /* ignore */
            }
        }
    }, [src])

    // Reduced-motion OR decode failure → poster-only. Video element is never mounted.
    const posterOnly = prefersReducedMotion || videoState === 'error'

    return (
        <figure
            className="relative w-full overflow-hidden bg-ok-void border border-ok-stone/30"
            style={{ aspectRatio }}
            aria-label={label || 'Concept film'}
        >
            {/* Poster — always mounted; first paint is never black. */}
            <img
                key={poster}
                src={poster}
                alt=""
                aria-hidden="true"
                draggable="false"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-900 ease-out ${videoState === 'ready' && !posterOnly ? 'opacity-0' : 'opacity-100'
                    }`}
            />

            {/* Autoplay-loop film. Skipped entirely in poster-only mode. */}
            {!posterOnly && (
                <video
                    key={src}
                    ref={videoRef}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-900 ease-out ${videoState === 'ready' ? 'opacity-100' : 'opacity-0'
                        }`}
                    poster={poster}
                    preload="metadata"
                    autoPlay
                    loop
                    muted={audioMode === 'muted'}
                    playsInline
                    disablePictureInPicture
                    disableRemotePlayback
                    crossOrigin="anonymous"
                    aria-hidden="true"
                >
                    <source src={src} type="video/mp4" />
                </video>
            )}

            {/* Cinematic vignette. */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.7) 100%)',
                }}
            />

            {/* Sound toggle — only shown once video is playing. */}
            {!posterOnly && videoState === 'ready' && (
                <button
                    type="button"
                    onClick={toggleAudio}
                    className="absolute bottom-4 right-4 z-30 flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase select-none transition-colors text-ok-axis/60 hover:text-ok-axis focus-visible:outline focus-visible:outline-ok-axis focus-visible:outline-offset-4"
                    aria-label={audioMode === 'muted' ? 'Turn sound on' : 'Turn sound off'}
                >
                    <span aria-hidden="true" className="text-base leading-none">
                        {audioMode === 'muted' ? '◇' : '◆'}
                    </span>
                    <span>Sound {audioMode === 'muted' ? 'On' : 'Off'}</span>
                </button>
            )}

            {/* Loading marker — only during first decode. */}
            {!posterOnly && videoState === 'loading' && (
                <div className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.3em] text-ok-axis/50 uppercase select-none">
                    Loading…
                </div>
            )}
        </figure>
    )
}
