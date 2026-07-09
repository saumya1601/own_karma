import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLangStore } from '../stores/langStore.js'
import ProductGallery from '../components/product/ProductGallery.jsx'
import SizeSelector from '../components/product/SizeSelector.jsx'
import ProductCard from '../components/product/ProductCard.jsx'
import Badge from '../components/ui/Badge.jsx'
import Button from '../components/ui/Button.jsx'
import PriceINR from '../components/ui/PriceINR.jsx'
import SerialTag from '../components/ui/SerialTag.jsx'
import Accordion from '../components/ui/Accordion.jsx'
import { getBySlug, getRelated } from '../services/productsAdapter.js'
import { addToCart } from '../services/cartAdapter.js'
import { useCartStore } from '../stores/cartStore.js'
import { track } from '../lib/track.js'

/** Product Detail Page (§6.3). */
export default function Product() {
  const { slug } = useParams()
  const { t } = useTranslation()
  const lang = useLangStore((s) => s.lang)
  const openDrawer = useCartStore((s) => s.openDrawer)

  // Combined state so React 19 compiler-lint stays happy: no sync setState in effect body.
  const [state, setState] = useState({
    slug: null,
    product: null,
    related: [],
    selectedSize: null,
  })
  const [adding, setAdding] = useState(false)

  useEffect(() => {
    let cancelled = false
    getBySlug(slug).then((p) => {
      if (cancelled) return
      setState({ slug, product: p, related: [], selectedSize: null })
      if (p) {
        track('product_viewed', { productId: p.id, category: p.category, priceINR: p.priceINR })
        getRelated(p.id, 3).then((r) => {
          if (!cancelled) setState((prev) => ({ ...prev, related: r }))
        })
      }
    })
    return () => {
      cancelled = true
    }
  }, [slug])

  const loading = state.slug !== slug
  const { product, related, selectedSize } = state
  const setSelectedSize = (size) => setState((prev) => ({ ...prev, selectedSize: size }))

  if (loading) return <ProductSkeleton />
  if (!product) return <ProductNotFound />

  const sizeStock = selectedSize ? product.stock[selectedSize] : null
  const isSelectedOut = sizeStock === 'sold-out' || sizeStock === 'coming-soon'
  const canAdd = selectedSize && !isSelectedOut

  const onAddToCart = async () => {
    if (!canAdd) return
    setAdding(true)
    await addToCart({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      size: selectedSize,
      qty: 1,
      priceINR: product.priceINR,
      image: product.images.front,
    })
    track('product_added_to_cart', { productId: product.id, size: selectedSize, qty: 1 })
    setAdding(false)
    openDrawer()
  }

  return (
    <article className="min-h-[80vh] px-6 md:px-12 pt-24 pb-24">
      <Link
        to="/shop"
        className="text-ok-dust text-xs font-mono tracking-wider hover:text-ok-bone transition-colors inline-block mb-8"
      >
        ← {t('nav.shop').toUpperCase()}
      </Link>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16">
        <ProductGallery images={product.images} productName={product.name} />

        <div className="md:sticky md:top-24 md:self-start space-y-8">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-ok-axis mb-2">
              {product.subtitle}
            </p>
            <h1 className="font-display text-ok-lg text-ok-bone">{product.name}</h1>
            <PriceINR amount={product.priceINR} className="mt-4 text-lg text-ok-bone" />
          </div>

          <SerialTag serial={product.serial} />

          <p className="text-ok-dust text-sm leading-relaxed">
            {product.description[lang] ?? product.description.en}
          </p>

          <SizeSelector
            sizes={product.sizes}
            stock={product.stock}
            selected={selectedSize}
            onSelect={setSelectedSize}
          />

          {selectedSize && isSelectedOut && (
            <div className="flex items-center gap-3">
              <Badge variant="sold-out" />
            </div>
          )}

          <Button
            variant="primary"
            size="lg"
            onClick={onAddToCart}
            disabled={!canAdd || adding}
            className="w-full"
          >
            {adding ? '...' : isSelectedOut ? t('product.sold_out') : t('product.add_to_cart')}
          </Button>

          <div>
            <Accordion
              title={t('product.materials_care', { defaultValue: 'Materials & Care' })}
              defaultOpen
            >
              <ul className="space-y-1 pl-4 list-disc list-outside marker:text-ok-axis/60">
                {product.materials.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
              <ul className="space-y-1 pl-4 list-disc list-outside marker:text-ok-axis/60 pt-4 border-t border-ok-stone/20 mt-4">
                {product.care.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Accordion>

            <Accordion title="Authenticity">
              <p>
                {t('product.serial_explainer', {
                  defaultValue:
                    'Every OWN KARMA piece is laser-serialized inside the neck tape. Your number is yours alone.',
                })}
              </p>
            </Accordion>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="max-w-6xl mx-auto mt-32">
          <h2 className="font-mono text-xs tracking-[0.3em] text-ok-axis mb-8">
            {t('product.related')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
            {related.map((r) => (
              <ProductCard key={r.id} product={r} />
            ))}
          </div>
        </section>
      )}
    </article>
  )
}

function ProductSkeleton() {
  return (
    <div className="min-h-[80vh] px-6 md:px-12 pt-24 pb-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="aspect-[4/5] bg-ok-obsidian/60 animate-pulse" />
        <div className="space-y-4">
          <div className="h-3 w-32 bg-ok-obsidian/60 animate-pulse" />
          <div className="h-8 w-48 bg-ok-obsidian/60 animate-pulse" />
          <div className="h-4 w-24 bg-ok-obsidian/60 animate-pulse" />
          <div className="h-2 w-full bg-ok-obsidian/60 animate-pulse mt-8" />
          <div className="h-2 w-3/4 bg-ok-obsidian/60 animate-pulse" />
        </div>
      </div>
    </div>
  )
}

function ProductNotFound() {
  return (
    <div className="min-h-[80vh] px-6 md:px-12 pt-24 flex flex-col items-center justify-center text-center">
      <p className="font-display text-ok-lg text-ok-bone mb-2">Not found.</p>
      <p className="text-ok-dust text-sm mb-8">The axis holds nothing here yet.</p>
      <Link
        to="/shop"
        className="px-8 py-3 font-mono text-xs tracking-[0.2em] border border-ok-axis text-ok-axis hover:bg-ok-axis hover:text-ok-void transition-colors"
      >
        BACK TO SHOP
      </Link>
    </div>
  )
}
