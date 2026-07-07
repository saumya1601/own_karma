import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { track } from '../lib/track.js'

/**
 * Sound store — §17.
 * Default = muted (browser autoplay + a11y).
 * Persists to localStorage under 'ok:sound'.
 */

export const useSoundStore = create(
  persist(
    (set, get) => ({
      isMuted: true,

      toggleMute: () => {
        const next = !get().isMuted
        set({ isMuted: next })
        track('sound_toggled', { enabled: !next })
      },

      /** @param {boolean} muted */
      setMuted: (muted) => set({ isMuted: muted }),
    }),
    {
      name: 'ok:sound',
    },
  ),
)
