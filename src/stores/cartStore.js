import { create } from 'zustand'
import { persist } from 'zustand/middleware'

/**
 * Cart store — §6.4 / §19.
 * Persists to localStorage under 'ok:cart'.
 *
 * @typedef {import('../schemas/cart.js').CartItem} CartItem
 */

/** @param {CartItem} a @param {CartItem} b */
const isSameLineItem = (a, b) =>
  a.productId === b.productId && a.size === b.size && (a.colorName ?? '') === (b.colorName ?? '')

export const useCartStore = create(
  persist(
    (set, get) => ({
      /** @type {CartItem[]} */
      items: [],
      isOpen: false,

      /** @param {CartItem} newItem */
      addItem: (newItem) =>
        set((state) => {
          const existing = state.items.find((i) => isSameLineItem(i, newItem))
          if (existing) {
            return {
              items: state.items.map((i) =>
                isSameLineItem(i, newItem) ? { ...i, qty: i.qty + newItem.qty } : i,
              ),
            }
          }
          return { items: [...state.items, newItem] }
        }),

      /** @param {string} productId @param {string} size @param {string} [colorName] */
      removeItem: (productId, size, colorName) =>
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.productId === productId && i.size === size && (i.colorName ?? '') === (colorName ?? '')),
          ),
        })),

      /** @param {string} productId @param {string} size @param {number} qty @param {string} [colorName] */
      updateQuantity: (productId, size, qty, colorName) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.productId === productId && i.size === size && (i.colorName ?? '') === (colorName ?? '')
              ? { ...i, qty: Math.max(1, qty) }
              : i,
          ),
        })),

      clearCart: () => set({ items: [] }),
      toggleDrawer: () => set((state) => ({ isOpen: !state.isOpen })),
      openDrawer: () => set({ isOpen: true }),
      closeDrawer: () => set({ isOpen: false }),

      /** @returns {number} */
      get itemCount() {
        return get().items.reduce((sum, i) => sum + i.qty, 0)
      },

      /** @returns {number} */
      get subtotalINR() {
        return get().items.reduce((sum, i) => sum + i.priceINR * i.qty, 0)
      },
    }),
    {
      name: 'ok:cart',
      // Only persist items, not drawer state
      partialize: (state) => ({ items: state.items }),
    },
  ),
)
