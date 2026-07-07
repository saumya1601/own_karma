import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

/** 404 Not Found. */
export default function NotFound() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
      <h1 className="font-display text-ok-2xl text-ok-axis">{t('page.not_found_title')}</h1>
      <p className="text-ok-dust text-sm mt-4 mb-8">{t('page.not_found_text')}</p>
      <Link
        to="/"
        className="px-8 py-3 font-mono text-xs tracking-[0.2em] border border-ok-axis text-ok-axis hover:bg-ok-axis hover:text-ok-void transition-colors duration-300"
      >
        {t('page.back_home')}
      </Link>
    </div>
  )
}
