import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../ui/Button.jsx'
import { cn } from '../../lib/cn.js'

export default function StepShipping({ initialData, onBack, onNext }) {
  const { t } = useTranslation()
  const [method, setMethod] = useState(initialData?.method || 'standard')

  const handleSubmit = (e) => {
    e.preventDefault()
    onNext({
      method,
      price: method === 'express' ? 149 : 0,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-3">
        {/* Standard Method */}
        <label
          onClick={() => setMethod('standard')}
          className={cn(
            'flex items-center justify-between p-4 bg-ok-stone/20 border cursor-pointer transition-colors',
            method === 'standard' ? 'border-ok-axis' : 'border-ok-stone/40 hover:border-ok-dust/40'
          )}
        >
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="shipping_method"
              checked={method === 'standard'}
              onChange={() => setMethod('standard')}
              className="accent-ok-axis"
            />
            <div className="text-left">
              <span className="block text-sm text-ok-bone font-medium">Standard</span>
              <span className="block text-xs text-ok-dust">{t('checkout.shipping_standard')}</span>
            </div>
          </div>
          <span className="font-mono text-sm text-ok-bone">₹0</span>
        </label>

        {/* Express Method */}
        <label
          onClick={() => setMethod('express')}
          className={cn(
            'flex items-center justify-between p-4 bg-ok-stone/20 border cursor-pointer transition-colors',
            method === 'express' ? 'border-ok-axis' : 'border-ok-stone/40 hover:border-ok-dust/40'
          )}
        >
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="shipping_method"
              checked={method === 'express'}
              onChange={() => setMethod('express')}
              className="accent-ok-axis"
            />
            <div className="text-left">
              <span className="block text-sm text-ok-bone font-medium">Express</span>
              <span className="block text-xs text-ok-dust">{t('checkout.shipping_express')}</span>
            </div>
          </div>
          <span className="font-mono text-sm text-ok-bone">₹149</span>
        </label>
      </div>

      <div className="flex gap-4 pt-4">
        <Button type="button" variant="secondary" onClick={onBack} className="w-1/2">
          Back
        </Button>
        <Button type="submit" variant="primary" className="w-1/2">
          Continue
        </Button>
      </div>
    </form>
  )
}
