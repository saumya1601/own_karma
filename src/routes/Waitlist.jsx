import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { subscribe } from '../services/waitlistAdapter.js'
import { track } from '../lib/track.js'
import { cn } from '../lib/cn.js'

/** Waitlist (§6.6). Wired to waitlistAdapter. */
export default function Waitlist() {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [message, setMessage] = useState('')

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!isValid) {
      setStatus('error')
      setMessage(t('waitlist.error_email', { defaultValue: 'Enter a valid email.' }))
      return
    }
    setStatus('loading')
    try {
      const result = await subscribe(email, 'genesis')
      if (result.success) {
        setStatus('success')
        setMessage(result.message)
        setEmail('')
        track('waitlist_joined', { dropSlug: 'genesis', source: 'waitlist-page' })
      } else {
        setStatus('error')
        setMessage(result.message)
      }
    } catch {
      setStatus('error')
      setMessage(t('waitlist.error_general', { defaultValue: 'Something went wrong. Try again.' }))
    }
  }

  return (
    <div className="min-h-[80vh] px-6 md:px-12 pt-24 max-w-lg mx-auto text-center">
      <h1 className="font-display text-ok-lg text-ok-axis mb-6">{t('waitlist.title')}</h1>
      <p className="text-ok-dust text-sm mb-8">
        Upcoming drops timeline and email capture.
      </p>

      <form onSubmit={onSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status !== 'loading') setStatus('idle')
          }}
          placeholder={t('waitlist.email_placeholder')}
          className="flex-1 px-4 py-3 bg-ok-stone/40 border border-ok-stone text-ok-bone text-sm placeholder:text-ok-dust/50 focus:border-ok-axis focus:outline-none transition-colors"
          aria-label="Email address"
          disabled={status === 'loading'}
          required
        />
        <button
          type="submit"
          disabled={status === 'loading' || !email}
          className="px-6 py-3 font-mono text-xs tracking-[0.15em] bg-ok-axis text-ok-void hover:bg-ok-axis/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          {status === 'loading' ? '...' : t('waitlist.submit')}
        </button>
      </form>

      {status !== 'idle' && status !== 'loading' && message && (
        <p
          className={cn(
            'text-xs mt-4',
            status === 'success' && 'text-ok-axis',
            status === 'error' && 'text-ok-alert',
          )}
          role={status === 'error' ? 'alert' : 'status'}
        >
          {message}
        </p>
      )}
    </div>
  )
}
