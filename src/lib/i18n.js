import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import enCommon from '../locales/en/common.json'
import hiCommon from '../locales/hi/common.json'

/**
 * i18n initialization — §12.
 * Loads EN + HI from bundled JSON (no lazy HTTP fetch needed for 2 languages).
 * Default language reads from localStorage 'ok:lang' or falls back to 'en'.
 */

const savedLang = (() => {
  try {
    const stored = JSON.parse(localStorage.getItem('ok:lang') ?? '{}')
    return stored?.state?.lang ?? 'en'
  } catch {
    return 'en'
  }
})()

i18next.use(initReactI18next).init({
  resources: {
    en: { common: enCommon },
    hi: { common: hiCommon },
  },
  lng: savedLang,
  fallbackLng: 'en',
  defaultNS: 'common',
  ns: ['common'],
  interpolation: {
    escapeValue: false, // React already escapes
  },
  react: {
    useSuspense: false,
  },
})

export default i18next
