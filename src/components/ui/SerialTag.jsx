import { useTranslation } from 'react-i18next'
import { cn } from '../../lib/cn.js'

/**
 * Serial-number tag. Renders `OK-AXIS · 428/1000` with a golden dot marker.
 *
 * @param {Object} props
 * @param {import('../../schemas/product.js').ProductSerial} props.serial
 * @param {string} [props.className]
 */
export default function SerialTag({ serial, className }) {
    const { t } = useTranslation()
    const title = t('product.serial_line', {
        prefix: serial.prefix,
        total: serial.total,
        defaultValue: `Yours will be etched with a unique number: ${serial.prefix}-####/${serial.total}`,
    })

    return (
        <span
            className={cn(
                'inline-flex items-center gap-2',
                'font-mono text-[10px] tracking-[0.15em] uppercase text-ok-dust',
                className,
            )}
            title={title}
        >
            <span className="w-1 h-1 rounded-full bg-ok-axis" aria-hidden="true" />
            <span>
                {serial.prefix} · {serial.remaining}/{serial.total}
            </span>
        </span>
    )
}
