/**
 * Products adapter — §19.
 * v1: reads from local data with simulated latency.
 * v2: swap to Shopify Storefront API.
 */
import { products } from '../data/products.js'

/** Simulated network delay (200–800ms) */
const delay = () => new Promise((r) => setTimeout(r, 200 + Math.random() * 600))

/**
 * Get all products, optionally filtered by category.
 * @param {import('../schemas/product.js').Category} [category]
 * @returns {Promise<import('../schemas/product.js').Product[]>}
 */
export async function getAll(category) {
  await delay()
  if (category) {
    return products.filter((p) => p.category === category)
  }
  return [...products]
}

/**
 * Get a single product by slug.
 * @param {string} slug
 * @returns {Promise<import('../schemas/product.js').Product | null>}
 */
export async function getBySlug(slug) {
  await delay()
  return products.find((p) => p.slug === slug) ?? null
}

/**
 * Get related products (same category, excluding self).
 * @param {string} productId
 * @param {number} [limit=3]
 * @returns {Promise<import('../schemas/product.js').Product[]>}
 */
export async function getRelated(productId, limit = 3) {
  await delay()
  const product = products.find((p) => p.id === productId)
  if (!product) return []
  return products
    .filter((p) => p.category === product.category && p.id !== productId)
    .slice(0, limit)
}
