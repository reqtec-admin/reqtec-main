import Link from 'next/link'
import { ArticleSection } from '@/components/article-section'

type DetailLink = {
  href: string
  label: string
}

type DetailSection = {
  title: string
  content: React.ReactNode
}

type DetailPageProps = {
  eyebrow?: string
  title: string
  description?: string
  backgroundImage: string
  link?: DetailLink
  sections?: DetailSection[]
}

function isExternalUrl(url: string) {
  return url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//')
}

export function DetailPage({
  eyebrow,
  title,
  description,
  backgroundImage,
  link,
  sections = [],
}: DetailPageProps) {
  const hasSections = sections.some((section) => section.content)

  return (
    <div className="min-h-screen">
      {/* Fixed Background Image for entire page */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${backgroundImage})`,
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
          {eyebrow && <p className="text-xs uppercase tracking-widest text-teal-300/80 mb-3">{eyebrow}</p>}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-6 text-gray-100">
            {title}
          </h1>
          {description && (
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          )}
          {link && (
            <div className="mt-8">
              <Link
                href={link.href}
                className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-teal-300 hover:text-teal-200 transition"
                target={isExternalUrl(link.href) ? '_blank' : undefined}
                rel={isExternalUrl(link.href) ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </Link>
            </div>
          )}
        </div>
      </section>

      {hasSections && (
        <ArticleSection animationDelay={200}>
          <div className="prose prose-invert max-w-none">
            {sections.map((section) => (
              <div key={section.title} className="mb-10 last:mb-0">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-100">
                  {section.title}
                </h2>
                {section.content}
              </div>
            ))}
          </div>
        </ArticleSection>
      )}
    </div>
  )
}
