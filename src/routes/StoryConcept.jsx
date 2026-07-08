import { useParams, Link, Navigate } from 'react-router-dom'
import { storyConcepts } from '../data/storyConcepts.js'
import StoryFilm from '../hero/StoryFilm.jsx'

export default function StoryConcept() {
  const { concept } = useParams()

  const data = storyConcepts[concept]

  if (!data) {
    return <Navigate to="/story" replace />
  }

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

        {/* Concept film — only renders when storyConcepts.js defines a `video` for this slug. */}
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
