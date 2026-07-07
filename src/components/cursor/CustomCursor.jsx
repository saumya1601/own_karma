import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useCursorStore } from '../../stores/cursorStore.js'

// Compute at module load so useState initializer stays pure at render.
function detectEnabled() {
  if (typeof window === 'undefined') return false
  const hasFinePointer = window.matchMedia('(pointer: fine)').matches
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  return hasFinePointer && !prefersReduced
}

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const dotRef = useRef(null)

  const variant = useCursorStore((s) => s.variant)
  const isVisible = useCursorStore((s) => s.isVisible)
  // Initialize enabled state ONCE via lazy useState initializer (no setState in effect).
  const [enabled] = useState(detectEnabled)

  useEffect(() => {
    if (!enabled) return
    // Hide native cursor while the custom one is active; restore on unmount.
    document.body.style.cursor = 'none'
    return () => {
      document.body.style.cursor = 'auto'
    }
  }, [enabled])

  useEffect(() => {
    if (!enabled) return

    const ring = ringRef.current
    const dot = dotRef.current

    // Position setup
    gsap.set([ring, dot], { xPercent: -50, yPercent: -50 })

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e

      let targetX = x
      let targetY = y

      // Horizontal magnetism over vertical Axis elements:
      // If we are close (within 12px) to the center-line on the Home page, snap cursor horizontally.
      const isHomePage = window.location.pathname === '/'
      const hasAxis = document.querySelector('[data-cursor-axis]') || isHomePage

      if (hasAxis) {
        const axisX = window.innerWidth / 2
        if (Math.abs(x - axisX) < 12) {
          targetX = axisX
        }
      }

      // Check for elements with magnetic snap attribute
      const magnetTarget = e.target.closest('[data-cursor-magnet]')
      if (magnetTarget) {
        const rect = magnetTarget.getBoundingClientRect()
        targetX = rect.left + rect.width / 2
        targetY = rect.top + rect.height / 2
      }

      // Smooth lag animation
      gsap.to(dot, { x: targetX, y: targetY, duration: 0.05, ease: 'power2.out' })
      gsap.to(ring, { x: targetX, y: targetY, duration: 0.2, ease: 'power2.out' })
    }

    // Hover state mapping
    const onMouseOver = (e) => {
      const target = e.target
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"]')
      const isHiddenTextZone = target.closest('[data-cursor-hidden-text]')

      if (isHiddenTextZone) {
        useCursorStore.getState().setVariant('crosshair')
      } else if (isInteractive) {
        useCursorStore.getState().setVariant('interactive')
      } else {
        useCursorStore.getState().setVariant('default')
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseover', onMouseOver)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
    }
  }, [enabled])

  // Scale ring/dot depending on the variant
  useEffect(() => {
    if (!enabled) return
    const ring = ringRef.current
    const dot = dotRef.current

    if (variant === 'interactive') {
      gsap.to(ring, { scale: 3.0, borderColor: '#D4A855', duration: 0.35, ease: 'power3.out' })
      gsap.to(dot, { scale: 0, opacity: 0, duration: 0.2, ease: 'power2.out' })
    } else if (variant === 'crosshair') {
      gsap.to(ring, { scale: 1.5, borderColor: '#D4A855', duration: 0.35, ease: 'power3.out' })
      gsap.to(dot, { scale: 1, opacity: 1, duration: 0.2, ease: 'power2.out' })
    } else {
      gsap.to(ring, { scale: 1, borderColor: '#F3EFE7', duration: 0.35, ease: 'power3.out' })
      gsap.to(dot, { scale: 1, opacity: 1, duration: 0.2, ease: 'power2.out' })
    }
  }, [variant, enabled])

  if (!enabled || !isVisible) return null

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed inset-0 z-[9999] mix-blend-difference hidden md:block"
      style={{ cursor: 'none' }}
    >
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-ok-bone transition-transform duration-75"
        style={{ borderWidth: '1px' }}
      />
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-ok-bone"
      />

      {/* Crosshair indicator */}
      {variant === 'crosshair' && (
        <div className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 font-mono text-ok-axis text-xs font-light select-none">
          +
        </div>
      )}
    </div>
  )
}
