/**
 * Checkout adapter — §19.
 * v1: returns a mock order ID.
 * v2: swap to Razorpay + real order creation.
 */
import { CheckoutPayloadSchema } from '../schemas/checkout.js'

/** Simulated network delay */
const delay = () => new Promise((r) => setTimeout(r, 400 + Math.random() * 400))

/** Generate a mock order ID like OK-MOCK-A3F7 */
function mockOrderId() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let id = 'OK-MOCK-'
  for (let i = 0; i < 4; i++) {
    id += chars[Math.floor(Math.random() * chars.length)]
  }
  return id
}

/**
 * Create a mock order.
 * @param {import('../schemas/checkout.js').CheckoutPayload} payload
 * @returns {Promise<{ success: boolean, orderId: string, serialAllocations: string[] }>}
 */
export async function createOrder(payload) {
  await delay()

  // Validate request schema at boundary
  try {
    CheckoutPayloadSchema.parse(payload)
  } catch (err) {
    console.error('CheckoutPayload Zod validation failed:', err)
    throw new Error('Invalid checkout payload', { cause: err })
  }

  // Generate mock serial allocations for each line item
  const serialAllocations = payload.items.map((item) => {
    const num = String(Math.floor(Math.random() * 9000) + 1000)
    return `${item.name}-${num}`
  })

  return {
    success: true,
    orderId: mockOrderId(),
    serialAllocations,
  }
}
