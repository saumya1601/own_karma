import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../ui/Button.jsx'
import { formatINR } from '../../lib/format.js'
import { cn } from '../../lib/cn.js'

export default function StepPayment({ subtotal, shippingPrice, onBack, onSubmit }) {
  const { t } = useTranslation()
  const [method, setMethod] = useState('razorpay')
  const [processing, setProcessing] = useState(false)

  const total = subtotal + shippingPrice

  const handleSubmit = async (e) => {
    e.preventDefault()
    setProcessing(true)
    await onSubmit({ method })
    setProcessing(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-3">
        {/* Razorpay (Online) Tab */}
        <label
          onClick={() => setMethod('razorpay')}
          className={cn(
            'flex items-center justify-between p-4 bg-ok-stone/20 border cursor-pointer transition-colors',
            method === 'razorpay' ? 'border-ok-axis' : 'border-ok-stone/40 hover:border-ok-dust/40'
          )}
        >
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="payment_method"
              checked={method === 'razorpay'}
              onChange={() => setMethod('razorpay')}
              className="accent-ok-axis"
            />
            <div className="text-left">
              <span className="block text-sm text-ok-bone font-medium">{t('checkout.payment_razorpay')}</span>
              <span className="block text-xs text-ok-dust">Instant verification, card/UPI/netbanking stubs</span>
            </div>
          </div>
        </label>

        {/* COD Tab */}
        <label
          onClick={() => setMethod('cod')}
          className={cn(
            'flex items-center justify-between p-4 bg-ok-stone/20 border cursor-pointer transition-colors',
            method === 'cod' ? 'border-ok-axis' : 'border-ok-stone/40 hover:border-ok-dust/40'
          )}
        >
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="payment_method"
              checked={method === 'cod'}
              onChange={() => setMethod('cod')}
              className="accent-ok-axis"
            />
            <div className="text-left">
              <span className="block text-sm text-ok-bone font-medium">{t('checkout.payment_cod')}</span>
              <span className="block text-xs text-ok-dust">Pay with cash upon package alignment at your door</span>
            </div>
          </div>
        </label>
      </div>

      {/* Summary */}
      <div className="border-t border-ok-stone/30 pt-4 space-y-2">
        <div className="flex justify-between text-xs text-ok-dust">
          <span>{t('cart.subtotal')}</span>
          <span className="font-mono">{formatINR(subtotal)}</span>
        </div>
        <div className="flex justify-between text-xs text-ok-dust">
          <span>{t('checkout.step_shipping')}</span>
          <span className="font-mono">{formatINR(shippingPrice)}</span>
        </div>
        <div className="flex justify-between text-sm text-ok-bone font-semibold border-t border-ok-stone/20 pt-2">
          <span>Total</span>
          <span className="font-mono text-ok-axis">{formatINR(total)}</span>
        </div>
      </div>

      <div className="flex gap-4 pt-2">
        <Button type="button" variant="secondary" onClick={onBack} disabled={processing} className="w-1/2">
          Back
        </Button>
        <Button type="submit" variant="primary" disabled={processing} className="w-1/2">
          {processing ? '...' : t('checkout.place_order')}
        </Button>
      </div>
    </form>
  )
}
