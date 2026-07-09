import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ProductCard from '../components/product/ProductCard.jsx'
import { getAll } from '../services/productsAdapter.js'
import { cn } from '../lib/cn.js'

const CATEGORIES = ['hoodies', 'tees']

/** Category — Filtered shop (§6.2). */
export default function Category() {
  const { t } = useTranslation()
  const { category } = useParams()
  // Combined state so React 19 compiler-lint stays happy: no sync setState in effect body.
  const [state, setState] = useState({ category: null, products: [] })
  const loading = state.category !== category

  useEffect(() => {
    let cancelled = false
    getAll(category).then((data) => {
      if (!cancelled) setState({ category, products: data })
    })
    return () => {
      cancelled = true
    }
  }, [category])

  return (
    <div className="min-h-[80vh] px-6 md:px-12 pt-24 pb-24">
      <h1 className="font-mono text-xs tracking-[0.3em] text-ok-axis mb-8 uppercase">
        <Link to="/shop" className="text-ok-dust hover:text-ok-bone transition-colors">
          {t('nav.shop')}
        </Link>
        <span className="text-ok-dust mx-2">/</span>
        <span>{t(`footer.${category}`, { defaultValue: category?.toUpperCase() })}</span>
      </h1>

      <nav className="flex gap-6 mb-12 text-sm overflow-x-auto pb-2">
        <Link
          to="/shop"
          className="text-ok-dust hover:text-ok-bone font-mono text-xs tracking-wider uppercase whitespace-nowrap"
        >
          {t('footer.all_products')}
        </Link>
        {CATEGORIES.map((cat) => (
          <Link
            key={cat}
            to={`/shop/${cat}`}
            className={cn(
              'font-mono text-xs tracking-wider uppercase transition-colors whitespace-nowrap',
              cat === category ? 'text-ok-bone' : 'text-ok-dust hover:text-ok-bone',
            )}
          >
            {t(`footer.${cat}`)}
          </Link>
        ))}
      </nav>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="aspect-[4/5] bg-ok-obsidian/60 animate-pulse" />
          ))}
        </div>
      ) : state.products.length === 0 ? (
        <div className="text-center py-24">
          <p className="text-ok-dust text-sm mb-4">Nothing in this collapse yet.</p>
          <Link to="/shop" className="text-ok-axis text-xs font-mono tracking-wider">
            ← ALL PRODUCTS
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
          {state.products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  )
}
