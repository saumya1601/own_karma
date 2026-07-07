import { useTranslation } from 'react-i18next'
import { cn } from '../../lib/cn.js'

/** @typedef {'new' | 'in-stock' | 'last-few-left' | 'sold-out' | 'coming-soon'} BadgeVariant */

const styles = {
    'new': 'bg-ok-axis/10 text-ok-axis border-ok-axis/50',
    'in-stock': 'bg-transparent text-ok-dust border-ok-stone/40',
    'last-few-left': 'bg-ok-axis/10 text-ok-axis border-ok-axis/60',
    'sold-out': 'bg-ok-alert/10 text-ok-alert border-ok-alert/40',
    'coming-soon': 'bg-ok-stone/40 text-ok-dust border-ok-stone/60',
}

const i18nKey = {
    'new': 'product.new',
    'in-stock': 'product.in_stock',
    'last-few-left': 'product.last_few_left',
    'sold-out': 'product.sold_out',
    'coming-soon': 'product.coming_soon',
}

/**
 * Small status badge for product state.
 * @param {Object} props
 * @param {BadgeVariant} props.variant
 * @param {string} [props.className]
 * @param {import('react').ReactNode} [props.children]
 */
export default function Badge({ variant, className, children }) {
    const { t } = useTranslation()
    const label = children ?? t(i18nKey[variant] ?? 'product.in_stock')

    return (
        <span
            className={cn(
                'inline-flex items-center justify-center',
                'font-mono text-[10px] tracking-[0.2em] uppercase',
                'px-2 py-1 border',
                styles[variant] ?? styles['in-stock'],
                className,
            )}
        >
            {label}
        </span>
    )
}
