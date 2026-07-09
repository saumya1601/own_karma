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

// Karma's Eye canon timeline (own_karma.md §Concept 03, 40 s total):
//   0–5 s   THE DESERT               → [0.000, 0.125]  (5/40)
//   5–12 s  THE MAZE REVEALS         → [0.125, 0.300]  (7/40)
//   12–20 s THE INFINITE ASCENT      → [0.300, 0.500]  (8/40)
//   20–30 s SCALE BREAK              → [0.500, 0.750]  (10/40)
//   30–40 s TRANSFORMATION           → [0.750, 1.000]  (10/40)
const KARMA_REALMS = [
  { title: 'The Desert', subtitle: 'Concept 03 · Segment 01', desc: "Wide cinematic shot. Endless desert. Heat distortion. Fractured pyramids. Single human silhouette. Text: 'Every journey begins in illusion.'" },
  { title: 'The Maze Reveals', subtitle: 'Concept 03 · Segment 02', desc: 'Sand shifts. Geometric lines emerge from beneath. Ground morphs into impossible staircase maze. Sand cascades down stair edges. Pyramids connected by staircase bridges.' },
  { title: 'The Infinite Ascent', subtitle: 'Concept 03 · Segment 03', desc: 'Camera rotates. Staircase forms a spiral with a faint glowing Eye at its centre. The Eye does not move — the maze rotates around it.' },
  { title: 'Scale Break', subtitle: 'Concept 03 · Segment 04', desc: 'Human becomes smaller. Maze grows enormous. Camera pulls back to reveal the entire desert maze exists inside the outline of an Eye.' },
  { title: 'Transformation', subtitle: 'Concept 03 · Resolution', desc: 'Maze dissolves into blueprint lines. Sand turns into threads. Staircase pattern forms on fabric. Eye locks into hoodie design.' }
]

const KARMA_RANGES = [
  [0.000, 0.200],
  [0.200, 0.400],
  [0.400, 0.600],
  [0.600, 0.800],
  [0.800, 1.000]
]

// Destiny canon timeline (updated to match actual generated 60 s total video loop with 10 s clips):
//   0–10 s  WALL 1: OPINION       → [0.000, 0.1667]
//   10–20 s THE PRESSURE          → [0.1667, 0.3333]
//   20–30 s WALL 2: COMFORT       → [0.3333, 0.5000]
//   30–40 s WALL 3: TIME          → [0.5000, 0.6667]
//   40–50 s WALL 4: SELF          → [0.6667, 0.8333]
//   50–60 s DESTINY REVEALED      → [0.8333, 1.0000]
const DESTINY_REALMS = [
  { title: 'Wall 1: Opinion', subtitle: 'Concept 04 · Segment 01', desc: "A massive wall made of faint human faces and whispers. 'What will they think?' / 'Be realistic.' Human does not move." },
  { title: 'The Pressure', subtitle: 'Concept 04 · Segment 02', desc: "Human touches wall with one hand. Silent cracks form. Whispers stop. Text: 'Every destiny begins with disagreement.'" },
  { title: 'Wall 2: Comfort', subtitle: 'Concept 04 · Segment 03', desc: "A warmer, glowing wall. 'Later.' / 'You deserve rest.' Human hesitates — then steps forward. Wall shatters into dust." },
  { title: 'Wall 3: Time', subtitle: 'Concept 04 · Segment 04', desc: "A cracked hourglass wall. Sand flows upward. 'Not now.' / 'Someday.' Human walks through. Text: 'Time is not your enemy. Delay is.'" },
  { title: 'Wall 4: Self', subtitle: 'Concept 04 · Segment 05', desc: 'A distorted mirror shows a smaller, doubtful self. Silence. Human steps through, shattering the mirror into geometric blueprint lines.' },
  { title: 'Destiny Revealed', subtitle: 'Concept 04 · Resolution', desc: 'Walls are gone. Space is open. The human is the same size, but nothing blocks them anymore.' }
]

const DESTINY_RANGES = [
  [0.0000, 0.1667],
  [0.1667, 0.3333],
  [0.3333, 0.5000],
  [0.5000, 0.6667],
  [0.6667, 0.8333],
  [0.8333, 1.0000]
]

// Broken Hourglass canon timeline (own_karma.md §Concept 05, delivered as a
// 70 s film split into 7 equal 10 s beats — one per canonical clip):
//   0–10 s  THE RELIC          → [0.0000, 0.1429]
//   10–20 s THE CONTAINMENT    → [0.1429, 0.2857]
//   20–30 s THE REALIZATION    → [0.2857, 0.4286]
//   30–40 s THE BREAK          → [0.4286, 0.5714]
//   40–50 s EXPANSION          → [0.5714, 0.7143]
//   50–60 s REORGANIZATION     → [0.7143, 0.8571]
//   60–70 s THE STILLNESS      → [0.8571, 1.0000]
const HOURGLASS_REALMS = [
  { title: 'The Relic', subtitle: 'Concept 05 · Segment 01', desc: 'A large antique hourglass floats in void. Inside the lower bulb, a tiny backlit silhouette stands still. Sand is suspended. Time is paused.' },
  { title: 'The Containment', subtitle: 'Concept 05 · Segment 02', desc: 'First grain breaks loose. Sand begins to fall past the silhouette. The brass frame reveals its cage-like inward curve.' },
  { title: 'The Realization', subtitle: 'Concept 05 · Segment 03', desc: 'The silhouette tilts up. Reaches out. Palm touches glass. Blueprint cracks radiate outward from the point of contact.' },
  { title: 'The Break', subtitle: 'Concept 05 · Segment 04', desc: 'Palm pushes forward. Glass shatters like blueprint geometry. Sand transforms into planets, birds, stars, staircases, waves.' },
  { title: 'Expansion', subtitle: 'Concept 05 · Segment 05', desc: "Fragments orbit slowly around the silhouette. Golden blueprint lines connect everything. Text: 'When you break time... you experience life.'" },
  { title: 'Reorganization', subtitle: 'Concept 05 · Segment 06', desc: 'Shards align into hoodie seams. Brass reassembles behind the silhouette as an empty hollow frame.' },
  { title: 'The Stillness', subtitle: 'Concept 05 · Resolution', desc: "Human wears the hoodie made from what shattered. Hollow brass frame floats behind. Text: 'Time was never infinite. You are.'" }
]

const HOURGLASS_RANGES = [
  [0.0000, 0.1429],
  [0.1429, 0.2857],
  [0.2857, 0.4286],
  [0.4286, 0.5714],
  [0.5714, 0.7143],
  [0.7143, 0.8571],
  [0.8571, 1.0000]
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
      <div key={concept} className="bg-ok-void text-ok-bone min-h-screen">
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

  // Render full viewport layout for Karma's Eye, mirroring the Divine treatment.
  if (concept === 'karmas-eye') {
    return (
      <div key={concept} className="bg-ok-void text-ok-bone min-h-screen">
        <KarmaEyeHero />
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

          {/* Design details (garment textures) */}
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
          <div className="p-6 bg-ok-obsidian/60 border-l border-ok-axis space-y-2">
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

  // Render full viewport layout for Destiny, mirroring Divine / Karma's Eye.
  if (concept === 'destiny') {
    return (
      <div key={concept} className="bg-ok-void text-ok-bone min-h-screen">
        <DestinyHero />
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
          <div className="p-6 bg-ok-obsidian/60 border-l border-ok-axis space-y-2">
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

  // Render full viewport layout for Broken Hourglass, mirroring Divine / Karma's Eye / Destiny.
  if (concept === 'broken-hourglass') {
    return (
      <div key={concept} className="bg-ok-void text-ok-bone min-h-screen">
        <HourglassHero />
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
          <div className="p-6 bg-ok-obsidian/60 border-l border-ok-axis space-y-2">
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
    <div key={concept} className="min-h-screen px-6 md:px-12 pt-24 pb-32 bg-ok-void text-ok-bone">
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

  // Route-scoped preload: kick off the poster fetch during hydration so it
  // overlaps with React mount instead of waiting until <HeroFilm> commits.
  // On Vercel this saves ~300–600 ms on cold cache. Removed on unmount so
  // navigating away doesn't leave stale hints in the document head.
  //
  // NOTE: we do NOT use <link rel="preload" as="video"> — `video` is not a
  // valid `as` value per the Fetch spec (browsers reject it). The correct
  // way to hint video priority is the <video preload> attribute itself, so
  // we pass preload="auto" through to HeroFilm below.


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

  // Cues fading with GSAP. `overwrite: 'auto'` handles the previous-tween
  // conflict on each cue — no gsap.context() cleanup so React 19 StrictMode
  // doesn't revert cues mid-fade.
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

  // Splitting Title Card Animation on Playback Start.
  // No gsap.context() on purpose — StrictMode's synthetic cleanup would call
  // ctx.revert() between the double-invoked effects and kill the timeline
  // before it plays. `hasStartedRef` guarantees single-fire; `autoAlpha: 0`
  // (instead of the earlier `display: 'none'`) avoids the removeChild race.
  useEffect(() => {
    if (!(progress > 0 && !hasStartedRef.current)) return
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
      autoAlpha: 0,
      duration: 0.1
    })
  }, [progress])

  return (
    <div
      className="relative w-full bg-ok-void overflow-hidden flex items-center justify-center -mt-16 pt-16"
      style={{ height: 'calc(100vh + 4rem)' }}
    >
      {/* Full-viewport cinematic video hero.
          preload="metadata" (HeroFilm default) rather than "auto" — the browser
          fetches just the moov atom + first keyframe (~500 KB), starts playback,
          and progressively buffers ahead. preload="auto" on an 18 MB file over
          4G forces the browser to try to download the whole thing before
          smoothing playback, which causes visible stalls on Vercel cold cache. */}
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
        {REALMS.map((realm) => (
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

function KarmaEyeHero() {
  const [progress, setProgress] = useState(0)
  const cuesContainerRef = useRef(null)
  const ownRef = useRef(null)
  const karmaRef = useRef(null)
  const topThingsRef = useRef(null)
  const bottomThingsRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const overlayRef = useRef(null)
  const hasStartedRef = useRef(false)

  // Route-scoped preload: kick off the poster fetch during hydration so it
  // overlaps with React mount instead of waiting until <HeroFilm> commits.
  // See DivineHero for the note on why we don't use <link rel="preload" as="video">.


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
    for (let i = 0; i < KARMA_RANGES.length; i++) {
      const [start, end] = KARMA_RANGES[i]
      if (p >= start && p <= end) return i
    }
    return KARMA_RANGES.length - 1
  }

  const segmentIndex = getSegmentIndex(progress)

  // Cues fading with GSAP. `overwrite: 'auto'` handles conflicts — no
  // gsap.context() cleanup so StrictMode doesn't revert cues mid-fade.
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

  // Splitting Title Card Animation on Playback Start.
  // No gsap.context() — StrictMode's synthetic cleanup would ctx.revert() the
  // timeline before it plays. hasStartedRef guarantees single-fire; autoAlpha
  // instead of display:'none' avoids the removeChild race on route change.
  useEffect(() => {
    if (!(progress > 0 && !hasStartedRef.current)) return
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
      autoAlpha: 0,
      duration: 0.1
    })
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
          src="/videos/story-karmas-eye.mp4"
          poster="/videos/story-karmas-eye-poster.jpg"
        />
      </div>

      {/* Snap axis */}
      <div data-cursor-axis className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 pointer-events-none z-10" />

      {/* Title Overlay */}
      <div ref={overlayRef} className="relative z-30 max-w-2xl w-full text-center px-6 select-none">
        <div ref={topThingsRef} className="flex items-center justify-center gap-3 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-ok-axis animate-pulse" />
          <span className="font-mono text-[10px] tracking-[0.5em] text-ok-axis uppercase">
            SYS.EXEC // CONCEPT_03
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-ok-bone tracking-[0.18em] font-light uppercase leading-none mb-6 whitespace-nowrap">
          <span ref={ownRef} className="inline-block mr-4 md:mr-8">OWN</span>
          <span ref={karmaRef} className="inline-block">KARMA</span>
        </h1>

        <div ref={bottomThingsRef} className="flex flex-col items-center">
          <div className="w-20 h-px bg-ok-axis/30 mx-auto mb-6" />

          <p className="font-sans text-xs md:text-sm text-ok-dust leading-relaxed tracking-wider max-w-lg mx-auto mb-1">
            "The staircase is not leading upward. It is folding inward."
          </p>
          <p className="font-mono text-[10px] text-ok-axis/70 tracking-[0.2em] max-w-lg mx-auto mb-10">
            Descend inward.
          </p>

          <div className="flex items-center justify-center w-full max-w-sm mx-auto pointer-events-auto">
            <button
              onClick={handleExplore}
              className="group relative px-8 py-3.5 text-[10px] font-mono tracking-[0.25em] bg-ok-axis text-ok-void hover:bg-ok-bone hover:text-ok-void active:scale-[0.98] transition-all duration-300 uppercase cursor-pointer font-bold shadow-lg shadow-ok-axis/10"
            >
              Descend Inward
            </button>
          </div>
        </div>
      </div>

      {/* Cues */}
      <div ref={cuesContainerRef} className="absolute bottom-24 left-6 md:left-12 right-6 pointer-events-none z-20 select-none">
        {KARMA_REALMS.map((realm) => (
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

function DestinyHero() {
  const [progress, setProgress] = useState(0)
  const cuesContainerRef = useRef(null)
  const ownRef = useRef(null)
  const karmaRef = useRef(null)
  const topThingsRef = useRef(null)
  const bottomThingsRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const overlayRef = useRef(null)
  const hasStartedRef = useRef(false)

  // Route-scoped preload: hint the browser to fetch the destiny poster during
  // hydration so it overlaps with React mount. See DivineHero note on why we
  // don't use <link rel="preload" as="video">.


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
    for (let i = 0; i < DESTINY_RANGES.length; i++) {
      const [start, end] = DESTINY_RANGES[i]
      if (p >= start && p <= end) return i
    }
    return DESTINY_RANGES.length - 1
  }

  const segmentIndex = getSegmentIndex(progress)

  // Cues fading with GSAP. `overwrite: 'auto'` handles conflicts — no
  // gsap.context() cleanup so StrictMode doesn't revert cues mid-fade.
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

  // Splitting Title Card Animation on Playback Start.
  // No gsap.context() — StrictMode's synthetic cleanup would ctx.revert() the
  // timeline before it plays. hasStartedRef guarantees single-fire; autoAlpha
  // instead of display:'none' avoids the removeChild race on route change.
  useEffect(() => {
    if (!(progress > 0 && !hasStartedRef.current)) return
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
      autoAlpha: 0,
      duration: 0.1
    })
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
          src="/videos/story-destiny.mp4"
          poster="/videos/story-destiny-poster.jpg"
        />
      </div>

      {/* Snap axis */}
      <div data-cursor-axis className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 pointer-events-none z-10" />

      {/* Title Overlay */}
      <div ref={overlayRef} className="relative z-30 max-w-2xl w-full text-center px-6 select-none">
        <div ref={topThingsRef} className="flex items-center justify-center gap-3 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-ok-axis animate-pulse" />
          <span className="font-mono text-[10px] tracking-[0.5em] text-ok-axis uppercase">
            SYS.EXEC // CONCEPT_04
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-ok-bone tracking-[0.18em] font-light uppercase leading-none mb-6 whitespace-nowrap">
          <span ref={ownRef} className="inline-block mr-4 md:mr-8">OWN</span>
          <span ref={karmaRef} className="inline-block">KARMA</span>
        </h1>

        <div ref={bottomThingsRef} className="flex flex-col items-center">
          <div className="w-20 h-px bg-ok-axis/30 mx-auto mb-6" />

          <p className="font-sans text-xs md:text-sm text-ok-dust leading-relaxed tracking-wider max-w-lg mx-auto mb-1">
            "Break what contains you."
          </p>
          <p className="font-mono text-[10px] text-ok-axis/70 tracking-[0.2em] max-w-lg mx-auto mb-10">
            Remove the walls.
          </p>

          <div className="flex items-center justify-center w-full max-w-sm mx-auto pointer-events-auto">
            <button
              onClick={handleExplore}
              className="group relative px-8 py-3.5 text-[10px] font-mono tracking-[0.25em] bg-ok-axis text-ok-void hover:bg-ok-bone hover:text-ok-void active:scale-[0.98] transition-all duration-300 uppercase cursor-pointer font-bold shadow-lg shadow-ok-axis/10"
            >
              Break the Walls
            </button>
          </div>
        </div>
      </div>

      {/* Cues */}
      <div ref={cuesContainerRef} className="absolute bottom-24 left-6 md:left-12 right-6 pointer-events-none z-20 select-none">
        {DESTINY_REALMS.map((realm) => (
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

function HourglassHero() {
  const [progress, setProgress] = useState(0)
  const cuesContainerRef = useRef(null)
  const ownRef = useRef(null)
  const karmaRef = useRef(null)
  const topThingsRef = useRef(null)
  const bottomThingsRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const overlayRef = useRef(null)
  const hasStartedRef = useRef(false)

  // Route-scoped preload: hint the browser to fetch the hourglass poster during
  // hydration so it overlaps with React mount. See DivineHero note on why we
  // don't use <link rel="preload" as="video">.


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
    for (let i = 0; i < HOURGLASS_RANGES.length; i++) {
      const [start, end] = HOURGLASS_RANGES[i]
      if (p >= start && p <= end) return i
    }
    return HOURGLASS_RANGES.length - 1
  }

  const segmentIndex = getSegmentIndex(progress)

  // Cues fading with GSAP. `overwrite: 'auto'` handles conflicts — no
  // gsap.context() cleanup so StrictMode doesn't revert cues mid-fade.
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

  // Splitting Title Card Animation on Playback Start.
  // No gsap.context() — StrictMode's synthetic cleanup would ctx.revert() the
  // timeline before it plays. hasStartedRef guarantees single-fire; autoAlpha
  // instead of display:'none' avoids the removeChild race on route change.
  useEffect(() => {
    if (!(progress > 0 && !hasStartedRef.current)) return
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
      autoAlpha: 0,
      duration: 0.1
    })
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
          src="/videos/story-hourglass.mp4"
          poster="/videos/story-hourglass-poster.jpg"
        />
      </div>

      {/* Snap axis */}
      <div data-cursor-axis className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 pointer-events-none z-10" />

      {/* Title Overlay */}
      <div ref={overlayRef} className="relative z-30 max-w-2xl w-full text-center px-6 select-none">
        <div ref={topThingsRef} className="flex items-center justify-center gap-3 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-ok-axis animate-pulse" />
          <span className="font-mono text-[10px] tracking-[0.5em] text-ok-axis uppercase">
            SYS.EXEC // CONCEPT_05
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-ok-bone tracking-[0.18em] font-light uppercase leading-none mb-6 whitespace-nowrap">
          <span ref={ownRef} className="inline-block mr-4 md:mr-8">OWN</span>
          <span ref={karmaRef} className="inline-block">KARMA</span>
        </h1>

        <div ref={bottomThingsRef} className="flex flex-col items-center">
          <div className="w-20 h-px bg-ok-axis/30 mx-auto mb-6" />

          <p className="font-sans text-xs md:text-sm text-ok-dust leading-relaxed tracking-wider max-w-lg mx-auto mb-1">
            "Break the frame."
          </p>
          <p className="font-mono text-[10px] text-ok-axis/70 tracking-[0.2em] max-w-lg mx-auto mb-10">
            Step outside time.
          </p>

          <div className="flex items-center justify-center w-full max-w-sm mx-auto pointer-events-auto">
            <button
              onClick={handleExplore}
              className="group relative px-8 py-3.5 text-[10px] font-mono tracking-[0.25em] bg-ok-axis text-ok-void hover:bg-ok-bone hover:text-ok-void active:scale-[0.98] transition-all duration-300 uppercase cursor-pointer font-bold shadow-lg shadow-ok-axis/10"
            >
              Break the Frame
            </button>
          </div>
        </div>
      </div>

      {/* Cues */}
      <div ref={cuesContainerRef} className="absolute bottom-24 left-6 md:left-12 right-6 pointer-events-none z-20 select-none">
        {HOURGLASS_REALMS.map((realm) => (
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
