import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { storyConcepts } from '../data/storyConcepts.js'

export default function Story() {
  const { t } = useTranslation()

  const concepts = [
    { slug: 'axis', num: 'I', title: storyConcepts.axis.title, subtitle: storyConcepts.axis.subtitle },
    { slug: 'divine', num: 'II', title: storyConcepts.divine.title, subtitle: storyConcepts.divine.subtitle },
    { slug: 'karmas-eye', num: 'III', title: storyConcepts['karmas-eye'].title, subtitle: storyConcepts['karmas-eye'].subtitle },
    { slug: 'destiny', num: 'IV', title: storyConcepts.destiny.title, subtitle: storyConcepts.destiny.subtitle },
    { slug: 'broken-hourglass', num: 'V', title: storyConcepts['broken-hourglass'].title, subtitle: storyConcepts['broken-hourglass'].subtitle },
  ]

  return (
    <div className="min-h-screen px-6 md:px-12 pt-24 pb-24 bg-ok-void text-ok-bone">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 border-b border-ok-stone/35 pb-8">
          <p className="font-mono text-[10px] tracking-[0.4em] text-ok-axis uppercase mb-2">The Philosophy</p>
          <h1 className="font-display text-ok-xl text-ok-bone">{t('story.title')}</h1>
        </header>

        <div className="space-y-8">
          {concepts.map((c) => (
            <Link
              key={c.slug}
              to={`/story/${c.slug}`}
              className="group flex flex-col md:flex-row items-baseline gap-6 p-8 border border-ok-stone/30 bg-ok-obsidian/40 hover:border-ok-axis/40 transition-all duration-500 ease-ok"
            >
              <span className="font-display text-ok-lg md:text-ok-xl text-ok-axis/20 group-hover:text-ok-axis/60 transition-colors duration-500 w-16 select-none">
                {c.num}
              </span>
              <div className="flex-1 space-y-2">
                <p className="font-mono text-[10px] tracking-[0.25em] text-ok-dust uppercase">{c.subtitle}</p>
                <h2 className="font-display text-xl md:text-ok-md text-ok-bone group-hover:text-ok-axis transition-colors duration-500">
                  {c.title.replace(/Concept \d+ — /, '')}
                </h2>
              </div>
              <span className="font-mono text-xs text-ok-dust group-hover:text-ok-axis transition-colors duration-500 mt-4 md:mt-0">
                {t('story.read_more')} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
