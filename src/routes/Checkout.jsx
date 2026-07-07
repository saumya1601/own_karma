import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useCartStore } from '../stores/cartStore.js'
import StepAddress from '../components/checkout/StepAddress.jsx'
import StepShipping from '../components/checkout/StepShipping.jsx'
import StepPayment from '../components/checkout/StepPayment.jsx'
import { createOrder } from '../services/checkoutAdapter.js'
import { track } from '../lib/track.js'
import { cn } from '../lib/cn.js'

export default function Checkout() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const items = useCartStore((s) => s.items)
  const clearCart = useCartStore((s) => s.clearCart)

  const [step, setStep] = useState(1) // 1 = Address, 2 = Shipping, 3 = Payment
  const [addressData, setAddressData] = useState(null)
  const [shippingData, setShippingData] = useState(null)

  const subtotalINR = items.reduce((sum, i) => sum + i.priceINR * i.qty, 0)

  if (items.length === 0) {
    return (
      <div className="min-h-[80vh] px-6 md:px-12 pt-24 flex flex-col items-center justify-center text-center">
        <p className="font-display text-ok-lg text-ok-bone mb-2">Empty Axis.</p>
        <p className="text-ok-dust text-sm mb-8">{t('cart.empty')}</p>
        <Link
          to="/shop"
          className="px-8 py-3 font-mono text-xs tracking-[0.2em] border border-ok-axis text-ok-axis hover:bg-ok-axis hover:text-ok-void transition-colors"
        >
          BACK TO SHOP
        </Link>
      </div>
    )
  }

  const handleAddressSubmit = (data) => {
    setAddressData(data)
    track('checkout_step_completed', { step: 1 })
    setStep(2)
  }

  const handleShippingSubmit = (data) => {
    setShippingData(data)
    track('checkout_step_completed', { step: 2 })
    setStep(3)
  }

  const handlePaymentSubmit = async (paymentMethod) => {
    track('checkout_step_completed', { step: 3 })
    
    // Normalize phone formatting (+91XXXXXXXXXX) to pass strict Zod validation
    let normalizedPhone = addressData.phone.replace(/\s+/g, '')
    if (!normalizedPhone.startsWith('+91')) {
      normalizedPhone = `+91${normalizedPhone}`
    }

    const payload = {
      address: {
        name: addressData.name,
        phone: normalizedPhone,
        pincode: addressData.pincode,
        city: addressData.city,
        state: addressData.state,
        addressLine1: addressData.address1,
        addressLine2: addressData.address2 || undefined,
      },
      shippingMethod: shippingData.method,
      paymentMethod: paymentMethod.method,
      items,
      subtotalINR: subtotalINR,
      shippingINR: shippingData.price,
      totalINR: subtotalINR + shippingData.price,
    }
    
    try {
      const response = await createOrder(payload)
      if (response.success) {
        track('mock_order_placed', { mockOrderId: response.orderId, totalINR: subtotalINR + shippingData.price })
        clearCart()
        navigate('/checkout/success', {
          state: {
            orderId: response.orderId,
            serialAllocations: response.serialAllocations,
          },
          replace: true
        })
      }
    } catch (err) {
      console.error('Order creation failed:', err)
    }
  }

  return (
    <div className="min-h-[80vh] px-6 md:px-12 pt-24 pb-24 max-w-2xl mx-auto">
      <h1 className="font-mono text-xs tracking-[0.3em] text-ok-axis mb-8">{t('checkout.title')}</h1>

      {/* Step indicators */}
      <div className="flex justify-between items-center gap-4 mb-12 border-b border-ok-stone/20 pb-6 overflow-x-auto">
        {[
          { label: 'step_address', num: 1 },
          { label: 'step_shipping', num: 2 },
          { label: 'step_payment', num: 3 },
        ].map((s) => (
          <div key={s.label} className="flex items-center gap-2 shrink-0">
            <span
              className={cn(
                'w-6 h-6 rounded-full border flex items-center justify-center text-xs font-mono transition-colors',
                step === s.num
                  ? 'border-ok-axis text-ok-axis bg-ok-axis/5'
                  : step > s.num
                  ? 'border-ok-dust text-ok-dust bg-ok-stone/10'
                  : 'border-ok-stone text-ok-dust'
              )}
            >
              {s.num}
            </span>
            <span
              className={cn(
                'text-xs tracking-wider font-mono uppercase',
                step === s.num ? 'text-ok-axis font-semibold' : 'text-ok-dust'
              )}
            >
              {t(`checkout.${s.label}`)}
            </span>
          </div>
        ))}
      </div>

      {/* Step Render */}
      <div className="bg-ok-obsidian p-6 md:p-8 border border-ok-stone/30">
        {step === 1 && <StepAddress initialData={addressData} onNext={handleAddressSubmit} />}
        {step === 2 && (
          <StepShipping
            initialData={shippingData}
            onBack={() => setStep(1)}
            onNext={handleShippingSubmit}
          />
        )}
        {step === 3 && (
          <StepPayment
            subtotal={subtotalINR}
            shippingPrice={shippingData?.price || 0}
            onBack={() => setStep(2)}
            onSubmit={handlePaymentSubmit}
          />
        )}
      </div>
    </div>
  )
}
