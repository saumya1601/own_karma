import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../ui/Button.jsx'

export default function StepAddress({ initialData, onNext }) {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    phone: initialData?.phone || '',
    pincode: initialData?.pincode || '',
    city: initialData?.city || '',
    state: initialData?.state || '',
    address1: initialData?.address1 || '',
    address2: initialData?.address2 || '',
  })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onNext(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-mono tracking-wider text-ok-dust uppercase mb-1" htmlFor="name">
          {t('checkout.name')}
        </label>
        <input
          required
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-ok-stone/40 border border-ok-stone text-ok-bone text-sm focus:border-ok-axis focus:outline-none transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono tracking-wider text-ok-dust uppercase mb-1" htmlFor="phone">
            {t('checkout.phone')}
          </label>
          <input
            required
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 9876543210"
            className="w-full px-4 py-3 bg-ok-stone/40 border border-ok-stone text-ok-bone text-sm focus:border-ok-axis focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-mono tracking-wider text-ok-dust uppercase mb-1" htmlFor="pincode">
            {t('checkout.pincode')}
          </label>
          <input
            required
            type="text"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-ok-stone/40 border border-ok-stone text-ok-bone text-sm focus:border-ok-axis focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono tracking-wider text-ok-dust uppercase mb-1" htmlFor="city">
            {t('checkout.city')}
          </label>
          <input
            required
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-ok-stone/40 border border-ok-stone text-ok-bone text-sm focus:border-ok-axis focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-mono tracking-wider text-ok-dust uppercase mb-1" htmlFor="state">
            {t('checkout.state')}
          </label>
          <input
            required
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-ok-stone/40 border border-ok-stone text-ok-bone text-sm focus:border-ok-axis focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono tracking-wider text-ok-dust uppercase mb-1" htmlFor="address1">
          {t('checkout.address_line1')}
        </label>
        <input
          required
          type="text"
          id="address1"
          name="address1"
          value={formData.address1}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-ok-stone/40 border border-ok-stone text-ok-bone text-sm focus:border-ok-axis focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-mono tracking-wider text-ok-dust uppercase mb-1" htmlFor="address2">
          {t('checkout.address_line2')}
        </label>
        <input
          type="text"
          id="address2"
          name="address2"
          value={formData.address2}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-ok-stone/40 border border-ok-stone text-ok-bone text-sm focus:border-ok-axis focus:outline-none transition-colors"
        />
      </div>

      <div className="pt-4">
        <Button type="submit" variant="primary" className="w-full py-3">
          Continue
        </Button>
      </div>
    </form>
  )
}
