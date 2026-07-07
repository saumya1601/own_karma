import { useState } from 'react'
import SafeImage from '../ui/SafeImage.jsx'
import { cn } from '../../lib/cn.js'

/**
 * Vertical 5-shot gallery on desktop (all shots stacked), horizontal snap-scroll on mobile.
 *
 * @param {Object} props
 * @param {import('../../schemas/product.js').ProductImages} props.images
 * @param {string} props.productName
 * @param {string} [props.className]
 */
export default function ProductGallery({ images, productName, className }) {
    const shots = [
        { key: 'front', src: images.front, alt: `${productName} — front view` },
        { key: 'back', src: images.back, alt: `${productName} — back view` },
        { key: 'detail', src: images.detail, alt: `${productName} — detail` },
        {
            key: 'hiddenText',
            src: images.hiddenText,
            alt: `Close-up of the OWN KARMA serial etched into the neck tape of ${productName}`,
        },
        { key: 'lifestyle', src: images.lifestyle, alt: `${productName} — worn` },
    ]

    const [activeIdx, setActiveIdx] = useState(0)

    return (
        <div className={cn('w-full', className)}>
            {/* Desktop: vertical stack */}
            <div className="hidden md:flex flex-col gap-4">
                {shots.map((s, i) => (
                    <div key={s.key} className="aspect-[4/5] bg-ok-obsidian overflow-hidden">
                        <SafeImage
                            src={s.src}
                            alt={s.alt}
                            className="h-full w-full"
                            loading={i === 0 ? 'eager' : 'lazy'}
                        />
                    </div>
                ))}
            </div>

            {/* Mobile: horizontal snap-scroll + dots */}
            <div className="md:hidden">
                <div
                    className="flex snap-x snap-mandatory overflow-x-auto"
                    onScroll={(e) => {
                        const w = e.currentTarget.clientWidth
                        if (w > 0) setActiveIdx(Math.round(e.currentTarget.scrollLeft / w))
                    }}
                >
                    {shots.map((s, i) => (
                        <div
                            key={s.key}
                            className="w-full flex-shrink-0 snap-center aspect-[4/5] bg-ok-obsidian"
                        >
                            <SafeImage
                                src={s.src}
                                alt={s.alt}
                                className="h-full w-full"
                                loading={i === 0 ? 'eager' : 'lazy'}
                            />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center gap-2 py-3">
                    {shots.map((s, i) => (
                        <span
                            key={s.key}
                            className={cn(
                                'w-1.5 h-1.5 rounded-full transition-colors',
                                i === activeIdx ? 'bg-ok-axis' : 'bg-ok-stone',
                            )}
                            aria-hidden="true"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
