/**
 * Waitlist adapter — §19.
 * v1: writes to localStorage.
 * v2: swap to Klaviyo / Mailchimp / custom backend.
 */

const STORAGE_KEY = 'ok:waitlist'

/** Simulated network delay */
const delay = () => new Promise((r) => setTimeout(r, 200 + Math.random() * 600))

/**
 * Subscribe an email to a drop's waitlist.
 * @param {string} email
 * @param {string} dropSlug
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export async function subscribe(email, dropSlug) {
  await delay()

  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
    const alreadySubscribed = existing.some(
      (entry) => entry.email === email && entry.dropSlug === dropSlug,
    )

    if (alreadySubscribed) {
      return { success: true, message: 'Already on the list.' }
    }

    existing.push({ email, dropSlug, subscribedAt: new Date().toISOString() })
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing))

    return { success: true, message: "You're on the list." }
  } catch {
    return { success: false, message: 'Something went wrong. Try again.' }
  }
}

/**
 * Get all waitlist entries (dev utility).
 * @returns {Promise<Array<{ email: string, dropSlug: string, subscribedAt: string }>>}
 */
export async function getAll() {
  await delay()
  return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
}
