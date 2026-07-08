import { useState, useEffect, useRef } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { storyConcepts } from '../data/storyConcepts.js'
import StoryFilm from '../hero/StoryFilm.jsx'
import HeroFilm from '../hero/HeroFilm.jsx'
import { gsap } from 'gsap'
import { getLenis } from '../hooks/useLenis.js'

const REALMS = [
  { title: 'The False Scale', subtitle: 'Concept 02 · Segment 01', desc: "Black void. A massive hyper-realistic galaxy slowly rotates. Camera pulls back. Text: 'Infinite.'" },
  { title: 'Human Scale Shift', subtitle: 'Concept 02 · Segment 02', desc: "A tiny human silhouette appears in the foreground. The galaxy is rotating inside the outline of the human chest. Text: 'Or so you thought.'" },
  { title: 'The Blueprint Reveals', subtitle: 'Concept 02 · Segment 03', desc: "Golden geometric lines form over the human. Spine becomes the axis. Arms extend into cosmic vectors. Stars align to the blueprint grid. Text: 'Before stars, there was structure.'" },
  { title: 'Reversal', subtitle: 'Concept 02 · Segment 04', desc: "Stars collapse inward into points of light that become neural networks inside the human head. Galaxy becomes synaptic energy. Text: 'Existence precedes expansion.'" },
  { title: 'Infinite Galaxy Cloth', subtitle: 'Concept 02 · Segment 05', desc: 'Blueprint lines dissolve into fabric threads shimmering like constellations. Hoodie forms organically — not stitched, not placed.' },
  { title: 'Scale Destroyed', subtitle: 'Concept 02 · Segment 06', desc: 'Camera pulls back. Human is now larger than the galaxy. Galaxies orbit them — not in ego, in inevitability. Spine glows faintly.' },
  { title: 'Absolute Stillness', subtitle: 'Concept 02 · Segment 07', desc: "Everything stops. Galaxy fades. No face. No flex. Just presence. Text: 'You are not inside the universe. The universe is inside your alignment.'" },
  { title: 'The Law', subtitle: 'Concept 02 · Resolution', desc: "OWN KARMA appears. Very small. Centered. Final line: 'Worn to remember what came first.'" }
]

const RANGES = [
  [0.00, 0.083],
  [0.083, 0.167],
  [0.167, 0.300],
  [0.300, 0.417],
  [0.417, 0.583],
  [0.583, 0.750],
  [0.750, 0.917],
  [0.917, 1.000]
]

export default function StoryConcept() {
  const { concept } = useParams()
  const data = storyConcepts[concept]

  if (!data) {
    return <Navigate to="/story" replace />
  }

  // Render full viewport layout for Divine, exactly matching the home hero experience.
  if (concept === 'divine') {
    return (
      <div className="bg-ok-void text-ok-bone min-h-screen">
        <DivineHero />
        <div id="concept-article" className="px-6 md:px-12 py-32 max-w-3xl mx-auto space-y-16">
          {/* Navigation / Header */}
          <header className="space-y-6">
            <Link
              to="/story"
              className="text-ok-dust hover:text-ok-bone text-xs font-mono tracking-wider transition-colors inline-block"
            >
              ← ALL STORIES
            </Link>
            <div className="border-t border-ok-stone/30 pt-6">
              <p className="font-mono text-[10px] tracking-[0.4em] text-ok-axis uppercase mb-2">
                {data.subtitle}
              </p>
              <h1 className="font-display text-ok-lg md:text-ok-xl text-ok-bone leading-tight">
                {data.title}
              </h1>
            </div>
          </header>

          {/* Brand Quote */}
          <blockquote className="border-l border-ok-axis pl-6 py-2 italic text-ok-axis bg-ok-obsidian/30">
            <p className="font-display text-lg md:text-xl leading-relaxed">
              "{data.quote}"
            </p>
          </blockquote>

          {/* Philosophy section */}
          <section className="space-y-4">
            <h2 className="font-mono text-xs tracking-[0.3em] text-ok-axis uppercase">The Pillar</h2>
            <p className="text-ok-dust text-sm md:text-base leading-relaxed font-sans">
              {data.philosophy}
            </p>
          </section>

          {/* Timeline breakdown */}
          <section className="space-y-6">
            <h2 className="font-mono text-xs tracking-[0.3em] text-ok-axis uppercase mb-4">VFX Segment Timeline</h2>
            <div className="border-t border-ok-stone/30 divide-y divide-ok-stone/20">
              {data.timeline.map((item) => (
                <div key={item.name} className="py-6 flex flex-col md:flex-row gap-4 md:gap-8 items-start">
                  <span className="font-mono text-xs text-ok-axis shrink-0 md:w-20 tracking-wider">
                    {item.time}
                  </span>
                  <div className="space-y-1">
                    <h3 className="font-mono text-xs tracking-[0.15em] text-ok-bone uppercase">
                      {item.name}
                    </h3>
                    <p className="text-ok-dust text-xs md:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Hidden detail */}
          <div className="p-6 bg-ok-obsidian/60 border-l border-ok-axis border border-ok-stone/40 space-y-2">
            <h3 className="font-mono text-[10px] tracking-[0.3em] text-ok-axis uppercase">Hidden Detail</h3>
            <p className="text-ok-dust text-xs leading-relaxed">
              {data.hiddenDetail}
            </p>
          </div>

          {/* Bottom CTA */}
          <div className="border-t border-ok-stone/30 pt-8 flex justify-center">
            <Link
              to="/story"
              className="px-8 py-3 font-mono text-xs tracking-[0.15em] border border-ok-stone text-ok-dust hover:border-ok-axis hover:text-ok-axis transition-colors duration-300"
            >
              RETURN TO ALL STORIES
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Standard editorial route for other concepts
  return (
    <div className="min-h-screen px-6 md:px-12 pt-24 pb-32 bg-ok-void text-ok-bone">
      <article className="max-w-3xl mx-auto space-y-16">
        {/* Navigation / Header */}
        <header className="space-y-6">
          <Link
            to="/story"
            className="text-ok-dust hover:text-ok-bone text-xs font-mono tracking-wider transition-colors inline-block"
          >
            ← ALL STORIES
          </Link>
          <div className="border-t border-ok-stone/30 pt-6">
            <p className="font-mono text-[10px] tracking-[0.4em] text-ok-axis uppercase mb-2">
              {data.subtitle}
            </p>
            <h1 className="font-display text-ok-lg md:text-ok-xl text-ok-bone leading-tight">
              {data.title}
            </h1>
          </div>
        </header>

        {/* Concept film */}
        {data.video && (
          <StoryFilm
            src={data.video.src}
            poster={data.video.poster}
            label={data.video.label}
          />
        )}

        {/* Brand Quote */}
        <blockquote className="border-l border-ok-axis pl-6 py-2 italic text-ok-axis bg-ok-obsidian/30">
          <p className="font-display text-lg md:text-xl leading-relaxed">
            "{data.quote}"
          </p>
        </blockquote>

        {/* Philosophy section */}
        <section className="space-y-4">
          <h2 className="font-mono text-xs tracking-[0.3em] text-ok-axis uppercase">The Pillar</h2>
          <p className="text-ok-dust text-sm md:text-base leading-relaxed font-sans">
            {data.philosophy}
          </p>
        </section>

        {/* Timeline breakdown */}
        <section className="space-y-6">
          <h2 className="font-mono text-xs tracking-[0.3em] text-ok-axis uppercase mb-4">VFX Segment Timeline</h2>
          <div className="border-t border-ok-stone/30 divide-y divide-ok-stone/20">
            {data.timeline.map((item) => (
              <div key={item.name} className="py-6 flex flex-col md:flex-row gap-4 md:gap-8 items-start">
                <span className="font-mono text-xs text-ok-axis shrink-0 md:w-20 tracking-wider">
                  {item.time}
                </span>
                <div className="space-y-1">
                  <h3 className="font-mono text-xs tracking-[0.15em] text-ok-bone uppercase">
                    {item.name}
                  </h3>
                  <p className="text-ok-dust text-xs md:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Design details (if applicable) */}
        {data.designDetails && (
          <section className="space-y-4">
            <h2 className="font-mono text-xs tracking-[0.3em] text-ok-axis uppercase">Garment Texture Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.designDetails.map((detail) => (
                <div key={detail.name} className="p-4 bg-ok-obsidian border border-ok-stone/45">
                  <h4 className="font-mono text-xs text-ok-bone uppercase mb-1 tracking-wider">{detail.name}</h4>
                  <p className="text-ok-dust text-xs leading-relaxed">{detail.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Hidden detail */}
        <div className="p-6 bg-ok-obsidian/60 border-l border-ok-axis border border-ok-stone/40 space-y-2">
          <h3 className="font-mono text-[10px] tracking-[0.3em] text-ok-axis uppercase">Hidden Detail</h3>
          <p className="text-ok-dust text-xs leading-relaxed">
            {data.hiddenDetail}
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="border-t border-ok-stone/30 pt-8 flex justify-center">
          <Link
            to="/story"
            className="px-8 py-3 font-mono text-xs tracking-[0.15em] border border-ok-stone text-ok-dust hover:border-ok-axis hover:text-ok-axis transition-colors duration-300"
          >
            RETURN TO ALL STORIES
          </Link>
        </div>
      </article>
    </div>
  )
}

function DivineHero() {
  const [progress, setProgress] = useState(0)
  const cuesContainerRef = useRef(null)
  const ownRef = useRef(null)
  const karmaRef = useRef(null)
  const topThingsRef = useRef(null)
  const bottomThingsRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const overlayRef = useRef(null)
  const hasStartedRef = useRef(false)

  const handleExplore = () => {
    const lenis = getLenis()
    if (lenis) {
      lenis.scrollTo('#concept-article', {
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })
    }
  }

  const getSegmentIndex = (p) => {
    for (let i = 0; i < RANGES.length; i++) {
      const [start, end] = RANGES[i]
      if (p >= start && p <= end) return i
    }
    return RANGES.length - 1
  }

  const segmentIndex = getSegmentIndex(progress)

  // Cues fading with GSAP
  useEffect(() => {
    if (!cuesContainerRef.current) return
    const children = cuesContainerRef.current.children
    if (!children || children.length === 0) return

    Array.from(children).forEach((child, i) => {
      const isActive = i === segmentIndex
      if (isActive) {
        gsap.to(child, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          overwrite: 'auto'
        })
      } else {
        gsap.to(child, {
          opacity: 0,
          y: 8,
          duration: 0.8,
          ease: 'power2.inOut',
          overwrite: 'auto'
        })
      }
    })
  }, [segmentIndex])

  // Splitting Title Card Animation on Playback Start
  useEffect(() => {
    if (progress > 0 && !hasStartedRef.current) {
      hasStartedRef.current = true

      const tl = gsap.timeline({ delay: 1.5 })

      tl.to(ownRef.current, {
        x: -200,
        opacity: 0,
        duration: 3.0,
        ease: 'power4.inOut'
      }, 0)

      tl.to(karmaRef.current, {
        x: 200,
        opacity: 0,
        duration: 3.0,
        ease: 'power4.inOut'
      }, 0)

      tl.to(topThingsRef.current, {
        y: -100,
        opacity: 0,
        duration: 2.5,
        ease: 'power4.inOut'
      }, 0.2)

      tl.to(bottomThingsRef.current, {
        y: 100,
        opacity: 0,
        duration: 2.5,
        ease: 'power4.inOut'
      }, 0.2)

      tl.to(scrollIndicatorRef.current, {
        y: 80,
        opacity: 0,
        duration: 2.0,
        ease: 'power4.inOut'
      }, 0.2)

      tl.to(overlayRef.current, {
        display: 'none',
        duration: 0.1
      })
    }
  }, [progress])

  return (
    <div
      className="relative w-full bg-ok-void overflow-hidden flex items-center justify-center -mt-16 pt-16"
      style={{ height: 'calc(100vh + 4rem)' }}
    >
      {/* Full-viewport cinematic video hero */}
      <div className="absolute inset-0 w-full h-full z-0">
        <HeroFilm
          onProgress={setProgress}
          src="/videos/story-divine.mp4"
          poster="/videos/story-divine-poster.jpg"
        />
      </div>

      {/* Snap axis */}
      <div data-cursor-axis className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 pointer-events-none z-10" />

      {/* Title Overlay */}
      <div ref={overlayRef} className="relative z-30 max-w-2xl w-full text-center px-6 select-none">
        <div ref={topThingsRef} className="flex items-center justify-center gap-3 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-ok-axis animate-pulse" />
          <span className="font-mono text-[10px] tracking-[0.5em] text-ok-axis uppercase">
            SYS.EXEC // CONCEPT_02
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-ok-bone tracking-[0.18em] font-light uppercase leading-none mb-6 whitespace-nowrap">
          <span ref={ownRef} className="inline-block mr-4 md:mr-8">OWN</span>
          <span ref={karmaRef} className="inline-block">KARMA</span>
        </h1>

        <div ref={bottomThingsRef} className="flex flex-col items-center">
          <div className="w-20 h-px bg-ok-axis/30 mx-auto mb-6" />

          <p className="font-sans text-xs md:text-sm text-ok-dust leading-relaxed tracking-wider max-w-lg mx-auto mb-1">
            "The universe exists because you observe it."
          </p>
          <p className="font-mono text-[10px] text-ok-axis/70 tracking-[0.2em] max-w-lg mx-auto mb-10">
            Observe the blueprint.
          </p>

          <div className="flex items-center justify-center w-full max-w-sm mx-auto pointer-events-auto">
            <button
              onClick={handleExplore}
              className="group relative px-8 py-3.5 text-[10px] font-mono tracking-[0.25em] bg-ok-axis text-ok-void hover:bg-ok-bone hover:text-ok-void active:scale-[0.98] transition-all duration-300 uppercase cursor-pointer font-bold shadow-lg shadow-ok-axis/10"
            >
              Explore Blueprint
            </button>
          </div>
        </div>
      </div>

      {/* Cues */}
      <div ref={cuesContainerRef} className="absolute bottom-24 left-6 md:left-12 right-6 pointer-events-none z-20 select-none">
        {REALMS.map((realm, i) => (
          <div
            key={realm.title}
            className="absolute bottom-0 left-0 w-full md:max-w-md opacity-0"
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

      {/* Progress */}
      <div className="absolute bottom-6 md:bottom-24 right-6 md:right-12 pointer-events-none z-20 font-mono text-[10px] text-ok-axis/60 tracking-[0.2em]">
        {Math.round(progress * 100)}% ALIGNED
      </div>

      {/* Scroll Indicator */}
      <div ref={scrollIndicatorRef} className="absolute bottom-10 flex flex-col items-center gap-2 z-30 pointer-events-none">
        <span className="font-mono text-[8px] tracking-[0.4em] text-ok-dust/40 uppercase">
          Scroll to explore
        </span>
        <div className="w-4 h-6 border border-ok-dust/20 rounded-full flex justify-center p-1">
          <div className="w-0.5 h-1.5 bg-ok-axis/50 rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  )
}
