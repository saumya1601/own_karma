/**
 * Analytics event dispatcher — §16.
 * v1: logs to console.
 * v2: plug into GA4 / Plausible / Mixpanel.
 *
 * @param {string} event — one of the §16 event names
 * @param {Record<string, unknown>} [props] — event properties
 */
export function track(event, props = {}) {
  if (import.meta.env.DEV) {
    console.log(`[OK:track] ${event}`, props)
  }
}
