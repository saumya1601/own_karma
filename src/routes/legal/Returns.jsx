import { useTranslation } from 'react-i18next'

export default function Returns() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-ok-void text-ok-bone px-6 md:px-12 pt-24 pb-32">
      <article className="max-w-2xl mx-auto space-y-8">
        <header className="border-b border-ok-stone/30 pb-6 mb-8">
          <p className="font-mono text-[10px] tracking-[0.4em] text-ok-axis uppercase mb-2">Legal</p>
          <h1 className="font-display text-ok-lg md:text-ok-xl text-ok-bone leading-tight">
            {t('footer.returns')}
          </h1>
        </header>

        <section className="space-y-3">
          <h2 className="font-mono text-xs tracking-[0.2em] text-ok-axis uppercase">1. Exchange Protocol</h2>
          <p className="text-ok-dust text-sm leading-relaxed">
            Every garment has a custom size chart. If your alignment is incorrect, we offer free exchanges within 14 days of delivery, provided tags remain unremoved.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-mono text-xs tracking-[0.2em] text-ok-axis uppercase">2. Serial Authenticity</h2>
          <p className="text-ok-dust text-sm leading-relaxed">
            Returns are rejected if the laser-printed serial number inside the neck tape does not match the original allocation recorded in your order payload.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-mono text-xs tracking-[0.2em] text-ok-axis uppercase">3. Refunds</h2>
          <p className="text-ok-dust text-sm leading-relaxed">
            Refunds process back to the original online source node (Razorpay) within 5–7 business days after inspection of the returned piece.
          </p>
        </section>

        <footer className="border-t border-ok-stone/30 pt-8 text-[10px] font-mono text-ok-dust">
          LAST MODIFIED: JULY 2026
        </footer>
      </article>
    </div>
  )
}
