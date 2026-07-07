import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../components/ui/Button.jsx'
import { track } from '../lib/track.js'

export default function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success'

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      track('contact_form_submitted', { email: formData.email })
    }, 800)
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="min-h-screen bg-ok-void text-ok-bone px-6 md:px-12 pt-24 pb-32">
      <div className="max-w-lg mx-auto space-y-12">
        <header className="border-b border-ok-stone/30 pb-6">
          <p className="font-mono text-[10px] tracking-[0.4em] text-ok-axis uppercase mb-2">Connect</p>
          <h1 className="font-display text-ok-lg md:text-ok-xl text-ok-bone leading-tight">
            {t('contact.title')}
          </h1>
        </header>

        {status === 'success' ? (
          <div className="bg-ok-obsidian p-8 border border-ok-axis/40 text-center space-y-4">
            <p className="font-mono text-xs text-ok-axis uppercase tracking-widest">Message Received</p>
            <p className="text-ok-dust text-sm">We have received your alignment request. Expect a reply soon.</p>
            <button
              onClick={() => setStatus('idle')}
              className="text-xs font-mono text-ok-bone underline hover:text-ok-axis transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-mono tracking-wider text-ok-dust uppercase mb-1" htmlFor="name">
                {t('contact.form_name')}
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-ok-stone/40 border border-ok-stone text-ok-bone text-sm focus:border-ok-axis focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono tracking-wider text-ok-dust uppercase mb-1" htmlFor="email">
                {t('contact.form_email')}
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-ok-stone/40 border border-ok-stone text-ok-bone text-sm focus:border-ok-axis focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono tracking-wider text-ok-dust uppercase mb-1" htmlFor="message">
                {t('contact.form_message')}
              </label>
              <textarea
                required
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-ok-stone/40 border border-ok-stone text-ok-bone text-sm focus:border-ok-axis focus:outline-none transition-colors resize-none"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              disabled={status === 'submitting'}
              className="w-full py-3"
            >
              {status === 'submitting' ? '...' : t('contact.form_submit')}
            </Button>
          </form>
        )}

        <div className="border-t border-ok-stone/30 pt-8 text-center space-y-4">
          <p className="text-xs text-ok-dust">Need immediate support?</p>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 font-mono text-xs tracking-wider border border-ok-axis text-ok-axis hover:bg-ok-axis hover:text-ok-void transition-all duration-300"
          >
            {t('contact.whatsapp_cta')} →
          </a>
        </div>
      </div>
    </div>
  )
}
