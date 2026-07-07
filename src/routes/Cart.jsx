import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

/** Cart — Full-page fallback (§6.4). Phase 0 placeholder. */
export default function Cart() {
  const { t } = useTranslation()

  return (
    <div className="min-h-[80vh] px-6 md:px-12 pt-24">
      <h1 className="font-mono text-xs tracking-[0.3em] text-ok-axis mb-8">{t('cart.title')}</h1>
      <p className="text-ok-dust text-sm italic">{t('cart.empty')}</p>
      <Link to="/shop" className="text-ok-dust text-xs hover:text-ok-bone transition-colors mt-4 inline-block">← Continue Shopping</Link>
    </div>
  )
}
