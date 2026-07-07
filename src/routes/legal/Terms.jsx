import { useTranslation } from 'react-i18next'

export default function Terms() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-ok-void text-ok-bone px-6 md:px-12 pt-24 pb-32">
      <article className="max-w-2xl mx-auto space-y-8">
        <header className="border-b border-ok-stone/30 pb-6 mb-8">
          <p className="font-mono text-[10px] tracking-[0.4em] text-ok-axis uppercase mb-2">Legal</p>
          <h1 className="font-display text-ok-lg md:text-ok-xl text-ok-bone leading-tight">
            {t('footer.terms')}
          </h1>
        </header>

        <section className="space-y-3">
          <h2 className="font-mono text-xs tracking-[0.2em] text-ok-axis uppercase">1. Agreement to Terms</h2>
          <p className="text-ok-dust text-sm leading-relaxed">
            By entering the Axis (world.ownkarma.in), you agree to stand bound by these Terms of Service. If you do not agree to stand aligned, you may close the viewport.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-mono text-xs tracking-[0.2em] text-ok-axis uppercase">2. Limited Releases & Serials</h2>
          <p className="text-ok-dust text-sm leading-relaxed">
            Our drops are limited. Every product carries a laser-etched serial. Purchase limits are restricted to 2 SKUs per customer to prevent aftermarket speculation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-mono text-xs tracking-[0.2em] text-ok-axis uppercase">3. Intellectual Property</h2>
          <p className="text-ok-dust text-sm leading-relaxed">
            The visual blueprints, custom fragment shaders, Sudarshan geometries, and textual content are properties of OWN KARMA. Unauthorised replication will trigger legal action.
          </p>
        </section>

        <footer className="border-t border-ok-stone/30 pt-8 text-[10px] font-mono text-ok-dust">
          LAST MODIFIED: JULY 2026
        </footer>
      </article>
    </div>
  )
}
