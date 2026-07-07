import { useState } from 'react'
import { cn } from '../../lib/cn.js'

const DEFAULT_PLACEHOLDER = '/images/placeholder.svg'

/**
 * <img> wrapper that swaps to a placeholder on load error.
 * Drop real photos into `public/images/products/[slug]/*.avif` and they render automatically.
 *
 * @param {Object} props
 * @param {string} props.src
 * @param {string} props.alt
 * @param {string} [props.className]
 * @param {string} [props.fallback]
 * @param {'lazy' | 'eager'} [props.loading]
 */
export default function SafeImage({
    src,
    alt,
    className,
    fallback = DEFAULT_PLACEHOLDER,
    loading = 'lazy',
    ...rest
}) {
    const [failed, setFailed] = useState(false)

    return (
        <img
            src={failed ? fallback : src}
            alt={alt}
            loading={loading}
            decoding="async"
            onError={() => {
                if (!failed) setFailed(true)
            }}
            className={cn('block object-cover', className)}
            {...rest}
        />
    )
}
