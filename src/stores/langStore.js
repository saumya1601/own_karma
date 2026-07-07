import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import i18next from 'i18next'
import { track } from '../lib/track.js'

/**
 * Language store — §12.
 * Persists to localStorage under 'ok:lang'.
 * Syncs with i18next and document.documentElement.lang.
 */

export const useLangStore = create(
  persist(
    (set, get) => ({
      /** @type {'en' | 'hi'} */
      lang: 'en',

      /** @param {'en' | 'hi'} lang */
      setLang: (lang) => {
        const prev = get().lang
        set({ lang })
        i18next.changeLanguage(lang)
        document.documentElement.lang = lang
        if (prev !== lang) {
          track('language_switched', { from: prev, to: lang })
        }
      },

      toggleLang: () => {
        const next = get().lang === 'en' ? 'hi' : 'en'
        get().setLang(next)
      },
    }),
    {
      name: 'ok:lang',
      onRehydrateStorage: () => (state) => {
        // After rehydration, sync i18next and DOM with persisted value
        if (state?.lang) {
          i18next.changeLanguage(state.lang)
          document.documentElement.lang = state.lang
        }
      },
    },
  ),
)
