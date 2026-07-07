/**
 * Format a number as Indian Rupees (₹4,999).
 * Uses Intl.NumberFormat per §12 spec.
 * @param {number} amount — integer rupees, no decimals
 * @returns {string}
 */
const inrFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

export function formatINR(amount) {
  return inrFormatter.format(amount)
}
