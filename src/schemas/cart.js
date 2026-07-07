/**
 * Cart data schema.
 * JSDoc typedefs + zod runtime validation.
 */

/**
 * @typedef {Object} CartItem
 * @property {string} productId    - references Product.id
 * @property {string} slug         - for linking to PDP
 * @property {string} name         - display name
 * @property {import('./product.js').Size} size
 * @property {string} [colorName]  - optional color choice
 * @property {number} qty          - quantity, ≥ 1
 * @property {number} priceINR     - unit price at time of add
 * @property {string} image        - thumbnail URL (front image)
 */

/**
 * @typedef {Object} Cart
 * @property {CartItem[]} items
 * @property {number} subtotalINR  - computed: sum of (item.priceINR × item.qty)
 */

import { z } from 'zod'
import { SizeEnum } from './product.js'

export const CartItemSchema = z.object({
  productId: z.string(),
  slug: z.string(),
  name: z.string(),
  size: SizeEnum,
  colorName: z.string().optional(),
  qty: z.number().int().min(1),
  priceINR: z.number().int().positive(),
  image: z.string(),
})

export const CartSchema = z.object({
  items: z.array(CartItemSchema),
  subtotalINR: z.number().int().nonnegative(),
})
