import stubPosts from '../../data/instagramStub.json'
import SafeImage from '../ui/SafeImage.jsx'

export default function InstagramGrid() {
  return (
    <section className="px-6 md:px-12 py-24 bg-ok-void border-t border-ok-stone/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="flex justify-between items-baseline border-b border-ok-stone/20 pb-4">
          <h2 className="font-mono text-xs tracking-[0.3em] text-ok-axis uppercase">Instagram Feed</h2>
          <a
            href="https://instagram.com/own_karma"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-[0.2em] text-ok-dust hover:text-ok-bone transition-colors uppercase"
          >
            @own_karma
          </a>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stubPosts.map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square bg-ok-obsidian border border-ok-stone/30 overflow-hidden flex flex-col justify-end p-4 transition-colors hover:border-ok-axis/40"
            >
              {/* Image with fallback */}
              <div className="absolute inset-0 z-0">
                <SafeImage
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-700 ease-ok group-hover:scale-105"
                />
              </div>

              {/* Minimalist Overlay Details */}
              <div className="relative z-10 bg-ok-void/90 border border-ok-stone/40 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-left">
                <p className="font-mono text-[8px] tracking-wider text-ok-axis uppercase mb-1">{post.handle}</p>
                <p className="text-[10px] text-ok-bone leading-normal line-clamp-2">{post.caption}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
