import { create } from 'zustand'

/**
 * Cursor store — §18.
 * No persistence needed — resets on refresh.
 *
 * @typedef {'default' | 'interactive' | 'crosshair'} CursorVariant
 */

export const useCursorStore = create((set) => ({
  /** @type {CursorVariant} */
  variant: 'default',
  isVisible: true,

  /** @param {CursorVariant} variant */
  setVariant: (variant) => set({ variant }),
  show: () => set({ isVisible: true }),
  hide: () => set({ isVisible: false }),
  reset: () => set({ variant: 'default', isVisible: true }),
}))
