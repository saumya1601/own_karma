import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ProductCard from '../components/product/ProductCard.jsx'
import { getAll } from '../services/productsAdapter.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'

const CATEGORIES = ['hoodies', 'tees', 'pants', 'caps', 'accessories']

/** Shop — Product grid (§6.2). Wired to productsAdapter.getAll(). */
export default function Shop() {
  const { t } = useTranslation()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useDocumentTitle('Shop')

  useEffect(() => {
    let cancelled = false
    getAll().then((data) => {
      if (!cancelled) {
        setProducts(data)
        setLoading(false)
      }
    })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="min-h-[80vh] px-6 md:px-12 pt-24 pb-24">
      <h1 className="font-mono text-xs tracking-[0.3em] text-ok-axis mb-8">{t('nav.shop')}</h1>

      {/* Category rail */}
      <nav className="flex gap-6 mb-12 text-sm overflow-x-auto pb-2">
        <Link
          to="/shop"
          className="text-ok-bone font-mono text-xs tracking-wider whitespace-nowrap uppercase"
        >
          {t('footer.all_products')}
        </Link>
        {CATEGORIES.map((cat) => (
          <Link
            key={cat}
            to={`/shop/${cat}`}
            className="text-ok-dust hover:text-ok-bone font-mono text-xs tracking-wider uppercase transition-colors whitespace-nowrap"
          >
            {t(`footer.${cat}`)}
          </Link>
        ))}
      </nav>

      {loading ? (
        <SkeletonGrid count={6} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  )
}

function SkeletonGrid({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="space-y-4">
          <div className="aspect-[4/5] bg-ok-obsidian/60 animate-pulse" />
          <div className="h-3 w-24 bg-ok-obsidian/60 animate-pulse" />
          <div className="h-3 w-16 bg-ok-obsidian/60 animate-pulse" />
        </div>
      ))}
    </div>
  )
}
