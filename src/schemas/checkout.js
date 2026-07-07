/**
 * Checkout data schema.
 * JSDoc typedefs + zod runtime validation.
 */

/**
 * @typedef {Object} Address
 * @property {string} name
 * @property {string} phone         - Indian mobile (+91...)
 * @property {string} pincode       - 6-digit Indian pincode
 * @property {string} city
 * @property {string} state
 * @property {string} addressLine1
 * @property {string} [addressLine2]
 */

/**
 * @typedef {'standard' | 'express'} ShippingMethod
 */

/**
 * @typedef {'razorpay' | 'cod'} PaymentMethod
 */

/**
 * @typedef {Object} CheckoutPayload
 * @property {Address} address
 * @property {ShippingMethod} shippingMethod
 * @property {PaymentMethod} paymentMethod
 * @property {import('./cart.js').CartItem[]} items
 * @property {number} subtotalINR
 * @property {number} shippingINR
 * @property {number} totalINR
 */

import { z } from 'zod'
import { CartItemSchema } from './cart.js'

export const AddressSchema = z.object({
  name: z.string().min(1),
  phone: z.string().regex(/^\+91\d{10}$/, 'Must be +91 followed by 10 digits'),
  pincode: z.string().regex(/^\d{6}$/, 'Must be 6-digit Indian pincode'),
  city: z.string().min(1),
  state: z.string().min(1),
  addressLine1: z.string().min(1),
  addressLine2: z.string().optional(),
})

export const ShippingMethodEnum = z.enum(['standard', 'express'])
export const PaymentMethodEnum = z.enum(['razorpay', 'cod'])

export const CheckoutPayloadSchema = z.object({
  address: AddressSchema,
  shippingMethod: ShippingMethodEnum,
  paymentMethod: PaymentMethodEnum,
  items: z.array(CartItemSchema),
  subtotalINR: z.number().int().nonnegative(),
  shippingINR: z.number().int().nonnegative(),
  totalINR: z.number().int().nonnegative(),
})
