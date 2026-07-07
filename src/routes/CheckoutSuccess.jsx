import { Link, useLocation, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function CheckoutSuccess() {
  const { t } = useTranslation()
  const location = useLocation()

  // Guard against direct page hits without location state
  if (!location.state || !location.state.orderId) {
    return <Navigate to="/shop" replace />
  }

  const { orderId, serialAllocations } = location.state

  return (
    <div className="min-h-[80vh] px-6 md:px-12 pt-24 pb-24 text-center max-w-lg mx-auto flex flex-col justify-center items-center">
      <div className="w-px h-16 bg-ok-axis mb-8 animate-pulse" />
      
      <h1 className="font-display text-ok-lg md:text-ok-xl text-ok-axis mb-4">
        {t('checkout.success_title')}
      </h1>
      
      <p className="text-ok-bone font-mono text-sm tracking-wider mb-2">
        {t('checkout.success_order_id', { orderId })}
      </p>
      
      <p className="text-ok-dust text-xs tracking-wide mb-8">
        Your alignment with the axis is locked.
      </p>

      {serialAllocations && serialAllocations.length > 0 && (
        <div className="w-full bg-ok-obsidian border border-ok-stone/40 p-6 mb-12">
          <p className="font-mono text-[10px] tracking-[0.25em] text-ok-axis uppercase mb-4">
            {t('checkout.success_serial')}
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {serialAllocations.map((serial) => (
              <span
                key={serial}
                className="px-3 py-1.5 bg-ok-stone/60 border border-ok-axis/30 rounded font-mono text-xs text-ok-bone tracking-wide"
              >
                {serial}
              </span>
            ))}
          </div>
        </div>
      )}

      <Link
        to="/shop"
        className="px-10 py-4 font-mono text-xs tracking-[0.2em] border border-ok-axis text-ok-axis hover:bg-ok-axis hover:text-ok-void transition-colors duration-300"
      >
        {t('checkout.continue_shopping')}
      </Link>
    </div>
  )
}
