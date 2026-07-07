import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'

let lenisInstance = null
let scrollCallbacks = new Set()

export function useLenis(callback) {
  useEffect(() => {
    // Initialize Lenis singleton
    if (!lenisInstance) {
      lenisInstance = new Lenis({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth exponential ease
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
      })

      // Sync Lenis with GSAP Ticker
      gsap.ticker.add((time) => {
        lenisInstance.raf(time * 1000)
      })
      gsap.ticker.lagSmoothing(0)

      // Handle Scroll updates
      lenisInstance.on('scroll', (e) => {
        scrollCallbacks.forEach((cb) => cb(e))
      })
    }

    if (callback) {
      scrollCallbacks.add(callback)
    }

    return () => {
      if (callback) {
        scrollCallbacks.delete(callback)
      }
    }
  }, [callback])

  return lenisInstance
}

export function getLenis() {
  return lenisInstance
}
