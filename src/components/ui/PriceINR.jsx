import { formatINR } from '../../lib/format.js'
import { cn } from '../../lib/cn.js'

/**
 * Renders an INR price. Optionally shows a strike-through compare-at price.
 *
 * @param {Object} props
 * @param {number} props.amount — integer rupees
 * @param {number} [props.compareAt] — optional original price for strike-through
 * @param {string} [props.className]
 */
export default function PriceINR({ amount, compareAt, className }) {
    return (
        <span className={cn('inline-flex items-baseline gap-2 font-mono tracking-wider', className)}>
            <span>{formatINR(amount)}</span>
            {compareAt && compareAt > amount && (
                <span className="text-ok-dust/60 line-through text-xs">{formatINR(compareAt)}</span>
            )}
        </span>
    )
}
