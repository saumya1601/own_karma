import { useTranslation } from 'react-i18next'

export default function Privacy() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-ok-void text-ok-bone px-6 md:px-12 pt-24 pb-32">
      <article className="max-w-2xl mx-auto space-y-8">
        <header className="border-b border-ok-stone/30 pb-6 mb-8">
          <p className="font-mono text-[10px] tracking-[0.4em] text-ok-axis uppercase mb-2">Legal</p>
          <h1 className="font-display text-ok-lg md:text-ok-xl text-ok-bone leading-tight">
            {t('footer.privacy')}
          </h1>
        </header>

        <section className="space-y-3">
          <h2 className="font-mono text-xs tracking-[0.2em] text-ok-axis uppercase">1. Alignment of Data</h2>
          <p className="text-ok-dust text-sm leading-relaxed">
            We respect your space. We only collect the minimal email addresses, phone contacts, and physical routing coordinates necessary to lock your drop orders.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-mono text-xs tracking-[0.2em] text-ok-axis uppercase">2. Local Storage</h2>
          <p className="text-ok-dust text-sm leading-relaxed">
            Your cart, mute settings, and translation options are stored locally inside your browser's LocalStorage. We do not use third-party behavioral cookies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-mono text-xs tracking-[0.2em] text-ok-axis uppercase">3. Disclosures</h2>
          <p className="text-ok-dust text-sm leading-relaxed">
            We never sell your data to market brokers. Information is only shared with dispatch courier teams to complete the shipment.
          </p>
        </section>

        <footer className="border-t border-ok-stone/30 pt-8 text-[10px] font-mono text-ok-dust">
          LAST MODIFIED: JULY 2026
        </footer>
      </article>
    </div>
  )
}
