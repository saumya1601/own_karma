/**
 * Cart adapter — §19.
 * v1: re-exports cart store actions as an async interface.
 * v2: swap to Shopify cart API.
 *
 * Note: In v1 the real state lives in zustand (cartStore.js).
 * This adapter exists purely so components never call the store directly —
 * making the v2 swap a one-file change.
 */
import { useCartStore } from '../stores/cartStore.js'
import { CartItemSchema } from '../schemas/cart.js'

/** Simulated network delay */
const delay = () => new Promise((r) => setTimeout(r, 200 + Math.random() * 600))

/**
 * @param {import('../schemas/cart.js').CartItem} item
 * @returns {Promise<{ success: boolean }>}
 */
export async function addToCart(item) {
  await delay()

  // Validate schema inputs at boundary
  try {
    CartItemSchema.parse(item)
  } catch (err) {
    console.error('CartItem Zod validation failed:', err)
    throw new Error('Invalid cart item', { cause: err })
  }

  useCartStore.getState().addItem(item)
  return { success: true }
}

/**
 * @param {string} productId
 * @param {string} size
 * @param {string} [colorName]
 * @returns {Promise<{ success: boolean }>}
 */
export async function removeFromCart(productId, size, colorName) {
  await delay()
  useCartStore.getState().removeItem(productId, size, colorName)
  return { success: true }
}

/**
 * @param {string} productId
 * @param {string} size
 * @param {number} qty
 * @param {string} [colorName]
 * @returns {Promise<{ success: boolean }>}
 */
export async function updateCartQuantity(productId, size, qty, colorName) {
  await delay()
  useCartStore.getState().updateQuantity(productId, size, qty, colorName)
  return { success: true }
}

/**
 * @returns {Promise<{ items: import('../schemas/cart.js').CartItem[], subtotalINR: number }>}
 */
export async function getCart() {
  await delay()
  const state = useCartStore.getState()
  const subtotalINR = state.items.reduce((sum, i) => sum + i.priceINR * i.qty, 0)
  return { items: [...state.items], subtotalINR }
}
