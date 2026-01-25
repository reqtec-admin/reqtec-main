import Link from 'next/link'
import { ArticleSection } from '@/components/article-section'
import { getAllPages } from '@/lib/markdown'

export const metadata = {
  title: 'Pages - REQtec',
  description: 'Read our latest long-form pages and articles.',
}

export default function PagesIndex() {
  const pages = getAllPages()

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      {/* Fixed Background Image for entire page */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/the-challenge-1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          filter: 'grayscale(100%)',
          opacity: 0.15,
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 z-10 snap-start">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-6 text-gray-100">
            Pages
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Long-form articles, updates, and reports from REQtec.
          </p>
        </div>
      </section>

      {/* Pages List */}
      <ArticleSection animationDelay={200}>
        <div className="space-y-8">
          {pages.length === 0 ? (
            <p className="text-lg text-gray-300">No pages yet. Check back soon!</p>
          ) : (
            pages.map((page) => (
              <article
                key={page.slug}
                className="border-l-2 border-gray-600 pl-6 hover:border-teal-500 transition-colors duration-150"
              >
                <Link href={`/pages/${page.slug}`}>
                  <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-3 text-gray-100 hover:text-teal-400 transition-colors duration-150">
                    {page.metadata.title}
                  </h2>
                </Link>
                {page.metadata.description && (
                  <p className="text-lg text-gray-300 mb-3">{page.metadata.description}</p>
                )}
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  {page.metadata.date && (
                    <time>
                      {new Date(page.metadata.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  )}
                  {page.metadata.author && <span>By {page.metadata.author}</span>}
                </div>
                {page.metadata.tags && page.metadata.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {page.metadata.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))
          )}
        </div>
      </ArticleSection>
    </div>
  )
}
