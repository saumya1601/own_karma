import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind classes with clsx + tailwind-merge.
 * Usage: cn('bg-ok-void', conditional && 'text-ok-axis', className)
 * @param  {...(string | undefined | null | false)} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
