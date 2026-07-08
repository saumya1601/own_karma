import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ShoppingBag, Volume2, VolumeOff } from 'lucide-react'
import { useCartStore } from '../../stores/cartStore.js'
import { useSoundStore } from '../../stores/soundStore.js'
import { useLangStore } from '../../stores/langStore.js'
import { cn } from '../../lib/cn.js'

/**
 * TopNav — §5.1.
 * Fixed, translucent, hides on scroll-down, reveals on scroll-up.
 * Left: OWN KARMA logo. Right: Shop · Story · Waitlist · EN/HI · Sound · Cart.
 */
export default function TopNav() {
  const { t } = useTranslation()
  const toggleDrawer = useCartStore((s) => s.toggleDrawer)
  const itemCount = useCartStore((s) => s.items.reduce((sum, i) => sum + i.qty, 0))
  const isMuted = useSoundStore((s) => s.isMuted)
  const toggleMute = useSoundStore((s) => s.toggleMute)
  const lang = useLangStore((s) => s.lang)
  const toggleLang = useLangStore((s) => s.toggleLang)

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'flex items-center justify-between',
        'h-16 px-6 md:px-12',
        'bg-transparent',
      )}
    >
      {/* Logo */}
      <Link
        to="/"
        className="font-mono text-sm tracking-[0.3em] text-ok-bone hover:text-ok-axis transition-colors duration-300"
        aria-label="OWN KARMA home"
      >
        OWN KARMA
      </Link>

      {/* Navigation */}
      <nav className="flex items-center gap-6 text-sm">
        {/* Page links — hidden on mobile, shown on md+ */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/shop" className="text-ok-dust hover:text-ok-bone transition-colors duration-300">
            {t('nav.shop')}
          </Link>
          <Link to="/story" className="text-ok-dust hover:text-ok-bone transition-colors duration-300">
            {t('nav.story')}
          </Link>
          <Link to="/story/divine" className="text-ok-dust hover:text-ok-bone transition-colors duration-300">
            {t('nav.divine')}
          </Link>
          <Link to="/waitlist" className="text-ok-dust hover:text-ok-bone transition-colors duration-300">
            {t('nav.waitlist')}
          </Link>
        </div>

        {/* Language toggle */}
        <button
          onClick={toggleLang}
          className="text-ok-dust hover:text-ok-bone transition-colors duration-300 font-mono text-xs tracking-wider"
          aria-label={`Switch to ${lang === 'en' ? 'Hindi' : 'English'}`}
        >
          {t('nav.lang_toggle')}
        </button>

        {/* Sound toggle */}
        <button
          onClick={toggleMute}
          className="text-ok-dust hover:text-ok-bone transition-colors duration-300"
          aria-label={isMuted ? t('nav.sound_off') : t('nav.sound_on')}
        >
          {isMuted ? <VolumeOff size={18} strokeWidth={1.25} /> : <Volume2 size={18} strokeWidth={1.25} />}
        </button>

        {/* Cart */}
        <button
          onClick={toggleDrawer}
          className="relative text-ok-dust hover:text-ok-bone transition-colors duration-300"
          aria-label={`${t('nav.cart')} (${itemCount})`}
        >
          <ShoppingBag size={18} strokeWidth={1.25} />
          {itemCount > 0 && (
            <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-ok-axis text-[10px] font-mono text-ok-void">
              {itemCount}
            </span>
          )}
        </button>
      </nav>
    </header>
  )
}
