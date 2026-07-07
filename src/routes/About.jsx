import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-ok-void text-ok-bone px-6 md:px-12 pt-24 pb-32">
      <article className="max-w-2xl mx-auto space-y-16">
        <header className="border-b border-ok-stone/30 pb-8">
          <p className="font-mono text-[10px] tracking-[0.4em] text-ok-axis uppercase mb-2">The Label</p>
          <h1 className="font-display text-ok-lg md:text-ok-xl text-ok-bone leading-tight">
            {t('about.title')}
          </h1>
        </header>

        <section className="space-y-4">
          <h2 className="font-mono text-xs tracking-[0.3em] text-ok-axis uppercase">Core Pillar</h2>
          <p className="font-display text-lg md:text-xl text-ok-axis italic leading-relaxed">
            "Not worn to be seen. Worn to stand correctly."
          </p>
          <p className="text-ok-dust text-sm md:text-base leading-relaxed">
            OWN KARMA is a cinematic 3D brand-commerce experience and streetwear label built on a single creative pillar: alignment as clothing. We reject fast pacing, perpetual motion, and screen clutter in favor of structured precision, stillness, and inevitability.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-mono text-xs tracking-[0.3em] text-ok-axis uppercase">Vedic Structure x Modern Couture</h2>
          <p className="text-ok-dust text-sm md:text-base leading-relaxed">
            Our blueprints merge Vedic cosmology geometries and mathematical precision with extreme oversized shapes. Every garment is crafted to hold its posture. Every thread shimmers like constellations when aligned with light.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-mono text-xs tracking-[0.3em] text-ok-axis uppercase">Laser-Etched Serials</h2>
          <p className="text-ok-dust text-sm md:text-base leading-relaxed">
            We produce in highly limited editions. Every hoodie, tee, and cargo pant ships with a unique serial number laser-printed inside the neck tape (e.g. OK-AXIS-0428/1000). Your number is yours alone—proof of your place along the Axis.
          </p>
        </section>

        <footer className="border-t border-ok-stone/30 pt-8 text-center font-mono text-[10px] text-ok-dust tracking-widest">
          ESTABLISHED 2026 · INDIA FORST
        </footer>
      </article>
    </div>
  )
}
