import { useTranslation } from 'react-i18next'
import { cn } from '../../lib/cn.js'

/**
 * Size selector — 6-col grid of size chips. Sold-out sizes are shown but disabled with strike-through.
 *
 * @param {Object} props
 * @param {import('../../schemas/product.js').Size[]} props.sizes
 * @param {Object<string, import('../../schemas/product.js').StockState>} props.stock
 * @param {import('../../schemas/product.js').Size | null} props.selected
 * @param {(size: import('../../schemas/product.js').Size) => void} props.onSelect
 * @param {string} [props.className]
 */
export default function SizeSelector({ sizes, stock, selected, onSelect, className }) {
    const { t } = useTranslation()

    return (
        <div className={className}>
            <div className="flex items-center justify-between mb-3">
                <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-ok-dust">
                    {t('product.size')}
                </label>
                {selected && (
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ok-bone">
                        {selected}
                    </span>
                )}
            </div>
            <div
                className={cn(
                    'grid gap-2',
                    sizes.length <= 2 ? 'grid-cols-2' : sizes.length <= 4 ? 'grid-cols-4' : 'grid-cols-6',
                )}
                role="radiogroup"
                aria-label={t('product.size')}
            >
                {sizes.map((size) => {
                    const state = stock[size] ?? 'sold-out'
                    const disabled = state === 'sold-out' || state === 'coming-soon'
                    const isSelected = selected === size

                    return (
                        <button
                            key={size}
                            type="button"
                            role="radio"
                            aria-checked={isSelected}
                            disabled={disabled}
                            onClick={() => onSelect(size)}
                            className={cn(
                                'relative h-10 flex items-center justify-center',
                                'font-mono text-[11px] tracking-wider',
                                'border transition-colors duration-300 ease-ok',
                                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ok-axis focus-visible:ring-offset-2 focus-visible:ring-offset-ok-void',
                                isSelected
                                    ? 'border-ok-axis bg-ok-axis text-ok-void'
                                    : disabled
                                        ? 'border-ok-stone/40 text-ok-dust/40 cursor-not-allowed line-through'
                                        : 'border-ok-stone/60 text-ok-bone hover:border-ok-axis/60',
                            )}
                            title={disabled ? t('product.sold_out') : size}
                        >
                            {size}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
