import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../lib/cn.js'

/**
 * Single-item accordion. Uncontrolled by default; can be forced open via `defaultOpen`.
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {import('react').ReactNode} props.children
 * @param {boolean} [props.defaultOpen]
 * @param {string} [props.className]
 */
export default function Accordion({ title, children, defaultOpen = false, className }) {
    const [open, setOpen] = useState(defaultOpen)

    return (
        <div className={cn('border-t border-ok-stone/30', className)}>
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="flex w-full items-center justify-between py-4 text-left transition-colors duration-300 hover:text-ok-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ok-axis"
                aria-expanded={open}
            >
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-ok-bone">{title}</span>
                <ChevronDown
                    size={16}
                    strokeWidth={1.25}
                    className={cn('text-ok-dust transition-transform duration-300', open && 'rotate-180')}
                />
            </button>
            {open && <div className="pb-6 text-sm text-ok-dust space-y-2 leading-relaxed">{children}</div>}
        </div>
    )
}
