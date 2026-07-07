/**
 * Instagram adapter — §19.
 * v1: reads from instagramStub.json.
 * v2: swap to Instagram Graph API.
 */
import stubData from '../data/instagramStub.json'

/** Simulated network delay */
const delay = () => new Promise((r) => setTimeout(r, 200 + Math.random() * 600))

/**
 * Get the most recent Instagram posts.
 * @param {number} [count=6]
 * @returns {Promise<Array<{ id: string, image: string, caption: string, permalink: string, timestamp: string, handle: string }>>}
 */
export async function getRecent(count = 6) {
  await delay()
  return stubData.slice(0, count)
}
