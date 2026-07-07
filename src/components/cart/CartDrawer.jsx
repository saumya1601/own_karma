import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { X, Minus, Plus, Trash2 } from 'lucide-react'
import { useCartStore } from '../../stores/cartStore.js'
import { formatINR } from '../../lib/format.js'
import { cn } from '../../lib/cn.js'
import SafeImage from '../ui/SafeImage.jsx'

/**
 * CartDrawer — §6.4.
 * Slides from right, ~420px desktop, full-width mobile.
 */
export default function CartDrawer() {
  const { t } = useTranslation()
  const isOpen = useCartStore((s) => s.isOpen)
  const items = useCartStore((s) => s.items)
  const closeDrawer = useCartStore((s) => s.closeDrawer)
  const removeItem = useCartStore((s) => s.removeItem)
  const updateQuantity = useCartStore((s) => s.updateQuantity)

  const subtotalINR = items.reduce((sum, i) => sum + i.priceINR * i.qty, 0)

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-ok-void/60 backdrop-blur-sm"
          onClick={closeDrawer}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <aside
        className={cn(
          'fixed top-0 right-0 z-50 h-full w-full md:w-[420px]',
          'bg-ok-obsidian border-l border-ok-stone/30',
          'flex flex-col',
          'transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
        role="dialog"
        aria-modal="true"
        aria-label={t('cart.title')}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-ok-stone/30">
          <h2 className="font-mono text-sm tracking-[0.2em] text-ok-bone">{t('cart.title')}</h2>
          <button
            onClick={closeDrawer}
            className="text-ok-dust hover:text-ok-bone transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.25} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="text-ok-dust text-sm italic mt-8 text-center">{t('cart.empty')}</p>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li
                  key={`${item.productId}-${item.size}-${item.colorName ?? ''}`}
                  className="flex gap-4"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 flex-shrink-0 overflow-hidden bg-ok-stone/40 border border-ok-stone/30 rounded">
                    <SafeImage
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.slug}`}
                      onClick={closeDrawer}
                      className="text-sm text-ok-bone hover:text-ok-axis transition-colors block truncate"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-ok-dust mt-0.5">
                      {item.size}
                      {item.colorName ? ` · ${item.colorName}` : ''}
                    </p>
                    <p className="text-sm text-ok-bone mt-1 font-mono">{formatINR(item.priceINR)}</p>

                    {/* Qty stepper + remove */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.productId, item.size, item.qty - 1, item.colorName)}
                        disabled={item.qty <= 1}
                        className="text-ok-dust hover:text-ok-bone disabled:opacity-30 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} strokeWidth={1.25} />
                      </button>
                      <span className="font-mono text-xs text-ok-bone w-6 text-center">{item.qty}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.size, item.qty + 1, item.colorName)}
                        className="text-ok-dust hover:text-ok-bone transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} strokeWidth={1.25} />
                      </button>
                      <button
                        onClick={() => removeItem(item.productId, item.size, item.colorName)}
                        className="ml-auto text-ok-dust hover:text-ok-alert transition-colors"
                        aria-label={`${t('cart.remove')} ${item.name}`}
                      >
                        <Trash2 size={14} strokeWidth={1.25} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-ok-stone/30 px-6 py-5">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-ok-dust">{t('cart.subtotal')}</span>
              <span className="text-ok-bone font-mono">{formatINR(subtotalINR)}</span>
            </div>
            <p className="text-xs text-ok-dust/60 mb-4">{t('cart.shipping_note')}</p>
            <Link
              to="/checkout"
              onClick={closeDrawer}
              className="block w-full py-3 text-center text-sm font-mono tracking-[0.15em] bg-ok-axis text-ok-void hover:bg-ok-axis/90 transition-colors"
            >
              {t('cart.checkout')}
            </Link>
          </div>
        )}
      </aside>
    </>
  )
}
