import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

/**
 * Footer — §5.1.
 * Two-column: COOL STUFF (shop links) + BORING STUFF (legal, contact, WhatsApp).
 */
export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ok-stone/30 bg-ok-void px-6 py-16 md:px-12">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 lg:grid-cols-3">
        {/* Cool Stuff */}
        <div>
          <h3 className="font-mono text-xs tracking-[0.2em] text-ok-axis mb-6">
            {t('footer.cool_stuff')}
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/shop" className="text-ok-dust hover:text-ok-bone transition-colors duration-300">
                {t('footer.all_products')}
              </Link>
            </li>
            <li>
              <Link to="/shop/hoodies" className="text-ok-dust hover:text-ok-bone transition-colors duration-300">
                {t('footer.hoodies')}
              </Link>
            </li>
            <li>
              <Link to="/shop/tees" className="text-ok-dust hover:text-ok-bone transition-colors duration-300">
                {t('footer.tees')}
              </Link>
            </li>
            <li>
              <Link to="/story" className="text-ok-dust hover:text-ok-bone transition-colors duration-300">
                {t('nav.story')}
              </Link>
            </li>
            <li>
              <Link to="/waitlist" className="text-ok-dust hover:text-ok-bone transition-colors duration-300">
                {t('nav.waitlist')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Boring Stuff */}
        <div>
          <h3 className="font-mono text-xs tracking-[0.2em] text-ok-axis mb-6">
            {t('footer.boring_stuff')}
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/about" className="text-ok-dust hover:text-ok-bone transition-colors duration-300">
                {t('nav.about')}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-ok-dust hover:text-ok-bone transition-colors duration-300">
                {t('nav.contact')}
              </Link>
            </li>
            <li>
              <Link to="/legal/terms" className="text-ok-dust hover:text-ok-bone transition-colors duration-300">
                {t('footer.terms')}
              </Link>
            </li>
            <li>
              <Link to="/legal/privacy" className="text-ok-dust hover:text-ok-bone transition-colors duration-300">
                {t('footer.privacy')}
              </Link>
            </li>
            <li>
              <Link to="/legal/shipping" className="text-ok-dust hover:text-ok-bone transition-colors duration-300">
                {t('footer.shipping_policy')}
              </Link>
            </li>
            <li>
              <Link to="/legal/returns" className="text-ok-dust hover:text-ok-bone transition-colors duration-300">
                {t('footer.returns')}
              </Link>
            </li>
            <li>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ok-dust hover:text-ok-bone transition-colors duration-300"
              >
                {t('footer.whatsapp')}
              </a>
            </li>
          </ul>
        </div>

        {/* Brand closer */}
        <div className="md:col-span-2 lg:col-span-1 flex flex-col justify-between">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-ok-bone mb-2">OWN KARMA</p>
            <p className="text-sm text-ok-dust italic">{t('footer.tagline_footer')}</p>
          </div>
          <p className="text-xs text-ok-dust/60 mt-8">
            {t('footer.copyright', { year })}
          </p>
        </div>
      </div>
    </footer>
  )
}
