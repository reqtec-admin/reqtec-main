import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { cookies } from 'next/headers'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { MarkdownSection } from '@/components/markdown-section'
import { ScrollAnimate } from '@/components/scroll-animate'
import { getPageBySlug, getPageSlugs } from '@/lib/markdown'
import PageAccessGate from '@/components/page-access-gate'

const DEFAULT_BACKGROUND = '/images/the-challenge-1.png'
const DEFAULT_CTA_LABEL = 'Contact Us'
const DEFAULT_CTA_HREF = 'mailto:info@reqtec.com'

function isExternalUrl(url: string) {
  return url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//')
}

function isMailto(url: string) {
  return url.startsWith('mailto:')
}

function isLocalPublicAsset(url: string) {
  return url.startsWith('/') && !url.startsWith('//')
}

function getAccessCookieName(slug: string) {
  const safeSlug = slug.replace(/[^a-z0-9_-]/gi, '')
  return `page-access-${safeSlug}`
}

function splitMarkdownByH2(markdown: string) {
  const lines = markdown.split('\n')
  const intro: string[] = []
  const sections: string[][] = []
  let currentSection: string[] | null = null

  for (const line of lines) {
    if (/^##\s+/.test(line)) {
      if (currentSection) {
        sections.push(currentSection)
      }
      currentSection = [line]
      continue
    }

    if (currentSection) {
      currentSection.push(line)
    } else {
      intro.push(line)
    }
  }

  if (currentSection) {
    sections.push(currentSection)
  }

  return {
    intro: intro.join('\n').trim(),
    sections: sections.map((section) => section.join('\n').trim()).filter(Boolean),
  }
}

export async function generateStaticParams() {
  const slugs = getPageSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = getPageBySlug(slug)

  if (!page) {
    return {
      title: 'Page Not Found',
    }
  }

  return {
    title: `${page.metadata.title} - REQtec`,
    description: page.metadata.description || '',
  }
}

export default async function MarkdownPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = getPageBySlug(slug)

  if (!page) {
    notFound()
  }

  const backgroundImage = page.metadata.image || DEFAULT_BACKGROUND
  const ctaLabel = page.metadata.ctaLabel || DEFAULT_CTA_LABEL
  const ctaHref = page.metadata.ctaHref || DEFAULT_CTA_HREF
  const ctaIsExternal = isExternalUrl(ctaHref) || isMailto(ctaHref)
  const { intro, sections } = splitMarkdownByH2(page.content)
  const isProtected = Boolean(page.metadata.protected)
  const cookieStore = cookies()
  const hasAccess = !isProtected || cookieStore.get(getAccessCookieName(page.slug))?.value === 'true'

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
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

      {/* Floating CTA */}
      {hasAccess && (
        <div className="fixed bottom-6 right-6 z-20">
          {ctaIsExternal ? (
            <a
              className="btn btn-gradient px-6 py-3 shadow-lg hover:shadow-xl transition duration-150 ease-in-out"
              href={ctaHref}
              rel={ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
              target={ctaHref.startsWith('http') ? '_blank' : undefined}
            >
              {ctaLabel}
            </a>
          ) : (
            <Link
              className="btn btn-gradient px-6 py-3 shadow-lg hover:shadow-xl transition duration-150 ease-in-out"
              href={ctaHref}
            >
              {ctaLabel}
            </Link>
          )}
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 z-10 snap-start">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-6 text-gray-100">
            {page.metadata.title}
          </h1>
          {page.metadata.description && (
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {page.metadata.description}
            </p>
          )}
          {page.metadata.date && (
            <p className="text-base text-gray-400 mt-4">
              {new Date(page.metadata.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          )}
        </div>
      </section>

      {/* Markdown Content */}
      <MarkdownSection animate={false}>
        <div className="prose prose-invert prose-lg max-w-none">
          {!hasAccess ? (
            <div className="max-w-xl mx-auto">
              <PageAccessGate
                slug={page.slug}
                title={page.metadata.title}
                description={page.metadata.description}
              />
            </div>
          ) : (
            <>
              {intro && (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: (props) => (
                  <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-100" {...props} />
                ),
                h2: (props) => (
                  <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-4 text-gray-100 mt-8" {...props} />
                ),
                h3: (props) => (
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-100 mt-6" {...props} />
                ),
                h4: (props) => (
                  <h4 className="text-lg md:text-xl font-semibold mb-2 text-gray-100 mt-4" {...props} />
                ),
                p: (props) => (
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6" {...props} />
                ),
                ul: (props) => (
                  <ul className="space-y-3 text-lg text-gray-300 ml-6 list-disc mb-6" {...props} />
                ),
                ol: (props) => (
                  <ol className="space-y-3 text-lg text-gray-300 ml-6 list-decimal mb-6" {...props} />
                ),
                li: (props) => <li className="text-gray-300" {...props} />,
                a: (props) => (
                  <a className="text-teal-400 hover:text-teal-300 transition duration-150 ease-in-out underline" {...props} />
                ),
                img: ({ src, alt }) => {
                  if (!src) return null

                  if (isExternalUrl(src)) {
                    return (
                      <span className="block my-8">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={src} alt={alt || ''} className="max-w-full h-auto rounded-lg mx-auto" />
                      </span>
                    )
                  }

                  const localSrc = isLocalPublicAsset(src) ? src : `/${src}`

                  return (
                    <span className="block my-8">
                      <Image
                        src={localSrc}
                        alt={alt || ''}
                        width={1200}
                        height={800}
                        className="w-full h-auto max-w-4xl rounded-lg mx-auto"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                      />
                    </span>
                  )
                },
                code: ({ inline, ...props }) => {
                  if (inline) {
                    return <code className="bg-gray-800 px-2 py-1 rounded text-teal-400 text-sm" {...props} />
                  }

                  return (
                    <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto my-6">
                      <code className="text-gray-300 text-sm" {...props} />
                    </pre>
                  )
                },
                blockquote: (props) => (
                  <blockquote className="border-l-4 border-teal-500 pl-6 italic text-gray-400 my-6" {...props} />
                ),
                table: (props) => (
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full border-collapse border border-gray-700" {...props} />
                  </div>
                ),
                th: (props) => (
                  <th className="border border-gray-700 px-4 py-2 bg-gray-800 text-gray-100 font-semibold text-left" {...props} />
                ),
                td: (props) => (
                  <td className="border border-gray-700 px-4 py-2 text-gray-300" {...props} />
                ),
              }}
            >
              {intro}
            </ReactMarkdown>
              )}

              {sections.map((section, index) => (
                <ScrollAnimate key={`${page.slug}-section-${index}`} direction="up" delay={120} threshold={0.2}>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: (props) => (
                        <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-100" {...props} />
                      ),
                      h2: (props) => (
                        <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-4 text-gray-100 mt-8" {...props} />
                      ),
                      h3: (props) => (
                        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-100 mt-6" {...props} />
                      ),
                      h4: (props) => (
                        <h4 className="text-lg md:text-xl font-semibold mb-2 text-gray-100 mt-4" {...props} />
                      ),
                      p: (props) => (
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6" {...props} />
                      ),
                      ul: (props) => (
                        <ul className="space-y-3 text-lg text-gray-300 ml-6 list-disc mb-6" {...props} />
                      ),
                      ol: (props) => (
                        <ol className="space-y-3 text-lg text-gray-300 ml-6 list-decimal mb-6" {...props} />
                      ),
                      li: (props) => <li className="text-gray-300" {...props} />,
                      a: (props) => (
                        <a className="text-teal-400 hover:text-teal-300 transition duration-150 ease-in-out underline" {...props} />
                      ),
                      img: ({ src, alt }) => {
                        if (!src) return null

                        if (isExternalUrl(src)) {
                          return (
                            <span className="block my-8">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={src} alt={alt || ''} className="max-w-full h-auto rounded-lg mx-auto" />
                            </span>
                          )
                        }

                        const localSrc = isLocalPublicAsset(src) ? src : `/${src}`

                        return (
                          <span className="block my-8">
                            <Image
                              src={localSrc}
                              alt={alt || ''}
                              width={1200}
                              height={800}
                              className="w-full h-auto max-w-4xl rounded-lg mx-auto"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                            />
                          </span>
                        )
                      },
                      code: ({ inline, ...props }) => {
                        if (inline) {
                          return <code className="bg-gray-800 px-2 py-1 rounded text-teal-400 text-sm" {...props} />
                        }

                        return (
                          <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto my-6">
                            <code className="text-gray-300 text-sm" {...props} />
                          </pre>
                        )
                      },
                      blockquote: (props) => (
                        <blockquote className="border-l-4 border-teal-500 pl-6 italic text-gray-400 my-6" {...props} />
                      ),
                      table: (props) => (
                        <div className="overflow-x-auto my-6">
                          <table className="min-w-full border-collapse border border-gray-700" {...props} />
                        </div>
                      ),
                      th: (props) => (
                        <th className="border border-gray-700 px-4 py-2 bg-gray-800 text-gray-100 font-semibold text-left" {...props} />
                      ),
                      td: (props) => (
                        <td className="border border-gray-700 px-4 py-2 text-gray-300" {...props} />
                      ),
                    }}
                  >
                    {section}
                  </ReactMarkdown>
                </ScrollAnimate>
              ))}
            </>
          )}
        </div>
      </MarkdownSection>
    </div>
  )
}
