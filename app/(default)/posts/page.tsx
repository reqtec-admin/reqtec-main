import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleSection } from '@/components/article-section'
import { formatPostDate, getAllPosts } from '@/lib/markdown'

export const metadata: Metadata = {
  title: 'Posts — Insights on Alternative Technology, Agentic AI & Independence from Big Tech',
  description:
    'Long-form articles from REQtec on alternative technology strategy, agentic AI adoption, cloud migration away from Google Cloud and AWS, and building balanced, politically neutral technology solutions.',
  keywords: [
    'alternative technology blog',
    'agentic AI articles',
    'Big Tech alternatives',
    'cloud migration insights',
    'independent technology',
    'neutral technology thought leadership',
    'tech independence',
  ],
  openGraph: {
    title: 'Posts — Technology Insights | REQtec',
    description:
      'Long-form articles on alternative technology, agentic AI, cloud migration, and building outside Big Tech.',
    url: 'https://reqtec.com/posts',
  },
  alternates: {
    canonical: 'https://reqtec.com/posts',
  },
}

export default function PostsIndex() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen">
      {/* Fixed Background Image for entire page */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/developers-table.jpg)',
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
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb- z-10 snap-start">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-6 text-gray-100">
            Stay Up to Date
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Long-form updates from REQtec.
          </p>
        </div>
      </section>

      {/* Posts List */}
      <ArticleSection animationDelay={200}>
        <div className="space-y-8">
          {posts.length === 0 ? (
            <p className="text-lg text-gray-300">No posts yet. Check back soon!</p>
          ) : (
            posts.map((post) => (
              <article
                key={post.slug}
                className="border-l-2 border-gray-600 pl-6 hover:border-teal-500 transition-colors duration-150"
              >
                <Link href={`/posts/${post.slug}`}>
                  <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-3 text-gray-100 hover:text-teal-400 transition-colors duration-150">
                    {post.metadata.title}
                  </h2>
                </Link>
                {post.metadata.description && (
                  <p className="text-lg text-gray-300 mb-3">{post.metadata.description}</p>
                )}
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  {post.metadata.date && <time>{formatPostDate(post.metadata.date)}</time>}
                  {post.metadata.author && <span>By {post.metadata.author}</span>}
                </div>
                {post.metadata.tags && post.metadata.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.metadata.tags.map((tag) => (
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
