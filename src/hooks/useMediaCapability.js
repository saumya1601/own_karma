import { useEffect, useState } from 'react'

/**
 * Detects the device's rendering capabilities so the hero can pick the right renderer.
 * §7.4 fallback ladder.
 * @returns {{ isMobile: boolean, prefersReducedMotion: boolean, hasWebGL: boolean }}
 */
export function useMediaCapability() {
    const [state, setState] = useState(detect)

    useEffect(() => {
        const mobileQuery = window.matchMedia('(max-width: 767px)')
        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
        const update = () => setState(detect())

        mobileQuery.addEventListener('change', update)
        motionQuery.addEventListener('change', update)
        return () => {
            mobileQuery.removeEventListener('change', update)
            motionQuery.removeEventListener('change', update)
        }
    }, [])

    return state
}

function detect() {
    if (typeof window === 'undefined') {
        return { isMobile: false, prefersReducedMotion: false, hasWebGL: true }
    }
    return {
        isMobile: window.matchMedia('(max-width: 767px)').matches,
        prefersReducedMotion: false, // Forced to false for active development / testing 3D animations
        hasWebGL: detectWebGL(),
    }
}

function detectWebGL() {
    try {
        const canvas = document.createElement('canvas')
        return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'))
    } catch {
        return false
    }
}
