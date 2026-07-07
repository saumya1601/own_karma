import { forwardRef } from 'react'
import { cn } from '../../lib/cn.js'

const variants = {
    primary: 'bg-ok-axis text-ok-void border border-ok-axis hover:bg-ok-axis/90',
    secondary: 'bg-transparent text-ok-axis border border-ok-axis hover:bg-ok-axis hover:text-ok-void',
    ghost: 'bg-transparent text-ok-dust border border-transparent hover:text-ok-bone',
    danger: 'bg-transparent text-ok-alert border border-ok-alert/50 hover:bg-ok-alert hover:text-ok-void',
}

const sizes = {
    sm: 'h-8 px-3 text-[10px]',
    md: 'h-10 px-6 text-xs',
    lg: 'h-12 px-8 text-sm',
}

/**
 * Button — brand-standard button. Supports `as` prop for router `<Link>` usage.
 *
 * @param {Object} props
 * @param {'primary'|'secondary'|'ghost'|'danger'} [props.variant]
 * @param {'sm'|'md'|'lg'} [props.size]
 * @param {import('react').ElementType} [props.as]
 * @param {string} [props.className]
 * @param {import('react').ReactNode} props.children
 */
const Button = forwardRef(function Button(
    { variant = 'primary', size = 'md', as: Component = 'button', className, children, ...rest },
    ref,
) {
    return (
        <Component
            ref={ref}
            className={cn(
                'inline-flex items-center justify-center',
                'font-mono tracking-[0.15em] uppercase',
                'transition-colors duration-300 ease-ok',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ok-axis focus-visible:ring-offset-2 focus-visible:ring-offset-ok-void',
                'disabled:opacity-40 disabled:cursor-not-allowed',
                variants[variant],
                sizes[size],
                className,
            )}
            {...rest}
        >
            {children}
        </Component>
    )
})

export default Button
