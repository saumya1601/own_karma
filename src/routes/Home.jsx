import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProductCard from '../components/product/ProductCard.jsx'
import HeroFilm from '../hero/HeroFilm.jsx'
import InstagramGrid from '../components/social/InstagramGrid.jsx'
import { getAll } from '../services/productsAdapter.js'
import { subscribe } from '../services/waitlistAdapter.js'
import { useLenis } from '../hooks/useLenis.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { track } from '../lib/track.js'

gsap.registerPlugin(ScrollTrigger)

const REALMS = [
  { title: 'Void Birth', subtitle: 'Concept 01 · Segment 01', desc: 'A faint golden vertical line appears. Tiny human silhouette aligns with axis. Low sub-bass vibration.' },
  { title: 'Netherworld', subtitle: 'Concept 01 · Segment 02', desc: 'Ground cracks beneath the axis. Dark mist rises. Obsidian terrain grows outward.' },
  { title: 'Desert', subtitle: 'Concept 01 · Segment 03', desc: 'Obsidian dissolves into sand. Heat waves distort air. Sand storms curve like magnetic fields.' },
  { title: 'Water', subtitle: 'Concept 01 · Segment 04', desc: 'Desert liquefies into water. Gravity flips. Water rotates 360° around the axis.' },
  { title: 'Forest', subtitle: 'Concept 01 · Segment 05', desc: 'Water evaporates upward. Trees grow rapidly. Roots never touch the human. Leaves freeze.' },
  { title: 'Lava', subtitle: 'Concept 01 · Segment 06', desc: 'Forest chars instantly. Lava erupts but arcs away. Nothing touches the aligned human.' },
  { title: 'Ice Shatter', subtitle: 'Concept 01 · Segment 07', desc: 'Lava flash-freezes mid-air. Crystals expand. Sound drops to silence. World paused.' },
  { title: 'Galaxy Reveal', subtitle: 'Concept 01 · Segment 08', desc: 'Ice shatters into stars. Camera pulls back. All realms inside a rotating cosmic structure.' },
  { title: 'Sun Ignition', subtitle: 'Concept 01 · Segment 09', desc: 'A small golden sun ignites above. Sudarshan-like circular geometry forms.' },
  { title: 'Lock', subtitle: 'Concept 01 · Resolution', desc: 'Everything stops. Absolute silence. Axis, eye geometry, and circular law align. The first hoodie exists.' }
]

const RANGES = [
  [0.00, 0.10],
  [0.10, 0.19],
  [0.19, 0.29],
  [0.29, 0.38],
  [0.38, 0.48],
  [0.48, 0.57],
  [0.57, 0.67],
  [0.67, 0.79],
  [0.79, 0.90],
  [0.90, 1.00]
]

export default function Home() {
  const trackRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useDocumentTitle('Home')

  // Track scroll progress along the 1000vh track
  useLenis(() => {
    if (!trackRef.current) return
    const rect = trackRef.current.getBoundingClientRect()
    const scrollY = window.scrollY
    const start = scrollY + rect.top
    const height = rect.height - window.innerHeight
    const current = scrollY - start
    const pct = Math.max(0, Math.min(1, current / height))
    setProgress(pct)
  })

  // Determine active segment index
  const getSegmentIndex = (p) => {
    for (let i = 0; i < RANGES.length; i++) {
      const [start, end] = RANGES[i]
      if (p >= start && p <= end) return i
    }
    return RANGES.length - 1
  }

  const segmentIndex = getSegmentIndex(progress)

  // Dispatch custom segment change event to trigger AmbientMixer sounds
  useEffect(() => {
    const isReady = progress > 0
    if (isReady) {
      window.dispatchEvent(
        new CustomEvent('ok-segment-change', {
          detail: { segmentIndex }
        })
      )
      track('hero_scene_reached', { segment: REALMS[segmentIndex].title, scrollPct: Math.round(progress * 100) })
      if (segmentIndex === 9) {
        track('hero_completed', { elapsedMs: performance.now() })
      }
    }
  }, [segmentIndex, progress])

  // Get opacity for individual realm overlay details
  const getRealmOpacity = (i) => {
    const [start, end] = RANGES[i]
    if (progress < start || progress > end) return 0
    const buffer = 0.015
    if (progress < start + buffer) {
      return (progress - start) / buffer
    }
    if (progress > end - buffer) {
      return (end - progress) / buffer
    }
    return 1
  }

  return (
    <>
      {/* Skip Link for Accessibility */}
      <a href="#shop-anchor" className="sr-only focus:not-sr-only focus:fixed focus:top-20 focus:left-6 focus:z-50 bg-ok-axis text-ok-void px-4 py-2 font-mono text-xs">
        Skip to Shop
      </a>

      {/* Screen reader description transcript */}
      <div className="sr-only">
        This page begins with a cinematic alignment film. As you scroll, a human silhouette passes through 10 collapsing realms: Void Birth, Netherworld, Desert, Water, Forest, Lava, Ice Shatter, Galaxy, Sun, and Lock. Only after this cinematic resolves does the first hoodie display.
      </div>

      {/* Cinematic Sticky Track — mobile 30 s film uses 1200vh, desktop 30 s film uses 2400vh
          at natural scroll pace. Adjust proportionally if the merged film runtime changes. */}
      <div ref={trackRef} className="relative w-full h-[1200vh] md:h-[2400vh] bg-ok-void">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

          {/* Cinematic scroll-scrubbed film — see _document/requirement2.md */}
          <div className="absolute inset-0 w-full h-full z-0">
            <HeroFilm progress={progress} />
          </div>

          {/* Centered Golden Axis snappable cursor strip (Invisible DOM element for snapping) */}
          <div data-cursor-axis className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 pointer-events-none z-10" />



          {/* Realm Cues typography */}
          <div className="absolute bottom-24 left-6 md:left-12 right-6 pointer-events-none z-20 select-none">
            {REALMS.map((realm, i) => (
              <div
                key={realm.title}
                className="absolute bottom-0 left-0 transition-opacity duration-300 ease-ok w-full md:max-w-md"
                style={{ opacity: getRealmOpacity(i) }}
              >
                <p className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] text-ok-axis uppercase mb-2">
                  {realm.subtitle}
                </p>
                <h3 className="font-display text-ok-md md:text-ok-lg text-ok-bone leading-tight">
                  {realm.title}
                </h3>
                <p className="font-mono text-[10px] md:text-xs text-ok-dust leading-relaxed mt-2 tracking-wide">
                  {realm.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Progress Percent Overlay */}
          <div className="absolute bottom-24 right-6 md:right-12 pointer-events-none z-20 font-mono text-[10px] text-ok-axis/60 tracking-[0.2em]">
            {Math.round(progress * 100)}% ALIGNED
          </div>
        </div>
      </div>

      {/* Shop Anchor */}
      <div id="shop-anchor" />

      {/* Featured Hoodie Section */}
      <FeaturedDrop />

      {/* Manifesto Slab */}
      <ManifestoSlab />

      {/* Concept Trail Horizontal Pinning */}
      <ConceptTrail />

      {/* Instagram Grid */}
      <InstagramGrid />

      {/* Waitlist CTA */}
      <WaitlistCTA />
    </>
  )
}

function FeaturedDrop() {
  const [state, setState] = useState({ loaded: false, products: [] })

  useEffect(() => {
    let cancelled = false
    getAll('hoodies').then((data) => {
      if (!cancelled) setState({ loaded: true, products: data.slice(0, 3) })
    })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section className="px-6 md:px-12 py-24 bg-ok-void">
      <div className="flex items-center justify-between mb-16 max-w-6xl mx-auto border-b border-ok-stone/20 pb-4">
        <div className="flex items-center gap-4">
          <div className="h-px w-12 md:w-20 bg-ok-axis" />
          <p className="font-mono text-[10px] md:text-xs tracking-[0.4em] text-ok-axis uppercase">
            Genesis Drop · 1 of 1000
          </p>
        </div>
        <Link
          to="/shop"
          className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-ok-dust hover:text-ok-bone transition-colors uppercase"
        >
          View All →
        </Link>
      </div>

      <div className="max-w-6xl mx-auto">
        {!state.loaded ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-16">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="aspect-[4/5] bg-ok-obsidian/60 animate-pulse" />
                <div className="h-3 w-24 bg-ok-obsidian/60 animate-pulse" />
                <div className="h-3 w-16 bg-ok-obsidian/60 animate-pulse" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-16">
            {state.products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function ManifestoSlab() {
  const { t } = useTranslation()
  return (
    <section className="relative h-screen w-full bg-ok-void flex flex-col justify-center items-center px-6 text-center select-none border-t border-ok-stone/30">
      <p className="font-mono text-[10px] tracking-[0.4em] text-ok-axis uppercase mb-6">OWN KARMA</p>
      <h2 className="font-display text-ok-xl md:text-ok-2xl lg:text-ok-3xl text-ok-bone max-w-4xl leading-tight">
        {t('tagline')}
      </h2>
      <div className="h-16 w-px bg-ok-axis/30 mt-12 animate-pulse" />
    </section>
  )
}

function ConceptTrail() {
  const containerRef = useRef(null)
  const listRef = useRef(null)

  const cards = [
    { slug: 'axis', num: '01', title: 'What is Own Karma?' },
    { slug: 'divine', num: '02', title: 'The Divine Blueprint' },
    { slug: 'karmas-eye', num: '03', title: "Karma's Eye" },
    { slug: 'destiny', num: '04', title: 'The Destiny Thread' },
    { slug: 'broken-hourglass', num: '05', title: 'The Broken Hourglass' },
  ]

  useEffect(() => {
    const list = listRef.current
    const container = containerRef.current
    if (!list || !container) return

    const scrollWidth = list.scrollWidth
    const viewportWidth = window.innerWidth
    const amountToScroll = scrollWidth - viewportWidth

    const pin = gsap.to(list, {
      x: -amountToScroll,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1.2,
        start: 'top top',
        end: () => `+=${amountToScroll}`,
        invalidateOnRefresh: true,
      }
    })

    return () => {
      pin.scrollTrigger?.kill()
    }
  }, [])

  return (
    <div ref={containerRef} className="relative bg-ok-obsidian h-screen overflow-hidden border-t border-b border-ok-stone/30">
      <div className="absolute top-16 left-6 md:left-12 flex items-baseline gap-4">
        <h2 className="font-mono text-xs tracking-[0.3em] text-ok-axis uppercase">Concept Trail</h2>
        <span className="text-[10px] font-mono text-ok-dust">HORIZONTAL NAVIGATION</span>
      </div>
      <div ref={listRef} className="flex h-full items-center pl-6 pr-24 gap-8 md:gap-12 w-max">
        {cards.map((card) => (
          <Link
            key={card.slug}
            to={`/story/${card.slug}`}
            className="group relative w-[75vw] md:w-[380px] h-[55vh] bg-ok-void border border-ok-stone/40 p-8 flex flex-col justify-between hover:border-ok-axis/50 transition-colors duration-500 shrink-0"
          >
            <span className="font-display text-[72px] text-ok-stone group-hover:text-ok-axis/10 transition-colors duration-500 select-none">
              {card.num}
            </span>
            <div className="space-y-3">
              <p className="font-mono text-[9px] tracking-wider text-ok-axis uppercase">CONCEPT {card.num}</p>
              <h3 className="font-display text-xl text-ok-bone group-hover:text-ok-axis transition-colors duration-500">
                {card.title}
              </h3>
              <p className="font-mono text-[10px] text-ok-dust group-hover:text-ok-bone transition-colors duration-500">
                Enter story →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

function WaitlistCTA() {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    const result = await subscribe(email, 'genesis-drop')
    if (result.success) {
      setStatus('success')
      setEmail('')
      track('waitlist_joined', { dropSlug: 'genesis-drop', source: 'home-waitlist-cta' })
    } else {
      setStatus('error')
    }
  }

  return (
    <section className="px-6 py-32 bg-ok-void text-center border-t border-ok-stone/30">
      <div className="max-w-md mx-auto space-y-6">
        <h2 className="font-display text-ok-lg text-ok-axis">{t('waitlist.title')}</h2>
        <p className="text-ok-dust text-xs tracking-wider">
          Receive notification tags when the realms collapse into the next drop.
        </p>

        <form onSubmit={onSubmit} className="flex gap-2">
          <input
            required
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setStatus('idle')
            }}
            placeholder={t('waitlist.email_placeholder')}
            className="flex-1 px-4 py-3 bg-ok-stone/40 border border-ok-stone text-ok-bone text-sm placeholder:text-ok-dust/50 focus:border-ok-axis focus:outline-none transition-colors"
          />
          <button
            type="submit"
            className="px-6 py-3 font-mono text-xs tracking-[0.15em] bg-ok-axis text-ok-void hover:bg-ok-axis/90 transition-colors uppercase"
          >
            {status === 'loading' ? '...' : t('waitlist.submit')}
          </button>
        </form>

        {status === 'success' && <p className="text-xs text-ok-axis font-mono">{t('waitlist.success')}</p>}
      </div>
    </section>
  )
}
