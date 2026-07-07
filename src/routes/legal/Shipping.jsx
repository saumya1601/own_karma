import { useTranslation } from 'react-i18next'

export default function Shipping() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-ok-void text-ok-bone px-6 md:px-12 pt-24 pb-32">
      <article className="max-w-2xl mx-auto space-y-8">
        <header className="border-b border-ok-stone/30 pb-6 mb-8">
          <p className="font-mono text-[10px] tracking-[0.4em] text-ok-axis uppercase mb-2">Legal</p>
          <h1 className="font-display text-ok-lg md:text-ok-xl text-ok-bone leading-tight">
            {t('footer.shipping_policy')}
          </h1>
        </header>

        <section className="space-y-3">
          <h2 className="font-mono text-xs tracking-[0.2em] text-ok-axis uppercase">1. Timelines & Speeds</h2>
          <p className="text-ok-dust text-sm leading-relaxed">
            All orders dispatch from our Mumbai central unit within 36 hours.
            <br />
            - **Standard Shipping**: Free, delivers in 4–7 business days.
            <br />
            - **Express Shipping**: ₹149, delivers in 2–3 business days.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-mono text-xs tracking-[0.2em] text-ok-axis uppercase">2. Tracking Alignment</h2>
          <p className="text-ok-dust text-sm leading-relaxed">
            As soon as the courier scans your package, an SMS with a tracking coordinate link will target your phone number.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-mono text-xs tracking-[0.2em] text-ok-axis uppercase">3. Geographic Bounds</h2>
          <p className="text-ok-dust text-sm leading-relaxed">
            In v1, we ship exclusively inside the sovereign boundaries of India. International shipping will activate in v2.
          </p>
        </section>

        <footer className="border-t border-ok-stone/30 pt-8 text-[10px] font-mono text-ok-dust">
          LAST MODIFIED: JULY 2026
        </footer>
      </article>
    </div>
  )
}
