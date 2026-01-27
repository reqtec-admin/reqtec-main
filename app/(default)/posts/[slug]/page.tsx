import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { cookies, headers } from 'next/headers'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { MarkdownSection } from '@/components/markdown-section'
import { ScrollAnimate } from '@/components/scroll-animate'
import { formatPostDate, getPostBySlug, getPostSlugs } from '@/lib/markdown'
import PostAccessGate from '@/components/post-access-gate'

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

function getAccessCookieNames(slug: string) {
  const safeSlug = slug.replace(/[^a-z0-9_-]/gi, '')
  return [`post-access-${safeSlug}`, `page-access-${safeSlug}`]
}

function getAccessCodeForSlug(slug: string) {
  const directMatch = process.env[slug]
  if (directMatch) {
    return directMatch
  }

  const normalized = slug.replace(/[^a-z0-9]/gi, '_').toUpperCase()
  return process.env[`POST_ACCESS_CODE_${normalized}`] || process.env[`PAGE_ACCESS_CODE_${normalized}`]
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

async function getBaseUrl() {
  const headerStore = await headers()
  const host = headerStore.get('x-forwarded-host') ?? headerStore.get('host')
  const proto = headerStore.get('x-forwarded-proto') ?? 'https'
  if (!host) {
    return 'https://reqtec.com'
  }
  return `${proto}://${host}`
}

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.metadata.title} - REQtec`,
    description: post.metadata.description || '',
  }
}

export default async function MarkdownPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const backgroundImage = post.metadata.image || DEFAULT_BACKGROUND
  const ctaLabel = post.metadata.ctaLabel || ''
  const ctaHref = post.metadata.ctaHref || ''
  const ctaIsExternal = isExternalUrl(ctaHref) || isMailto(ctaHref)
  const { intro, sections } = splitMarkdownByH2(post.content)
  const isProtected = Boolean(getAccessCodeForSlug(post.slug))
  const cookieStore = await cookies()
  const accessCookieNames = getAccessCookieNames(post.slug)
  const hasAccess = !isProtected || accessCookieNames.some((name) => cookieStore.get(name)?.value === 'true')
  const postUrl = `${await getBaseUrl()}/posts/${post.slug}`
  const encodedUrl = encodeURIComponent(postUrl)
  const encodedTitle = encodeURIComponent(post.metadata.title)
  const xShareUrl = `https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`

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

      {/* Floating CTA */}
      {hasAccess && ctaLabel && ctaHref && (
        <div className="fixed bottom-6 right-6 z-20">
          {ctaIsExternal ? (
            <a
              className="reqtec-modal-glow flex items-center gap-3 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm text-gray-300 shadow-lg backdrop-blur transition hover:border-sky-400/60 hover:text-white"
              href={ctaHref}
              rel={ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
              target={ctaHref.startsWith('http') ? '_blank' : undefined}
            >
              <span className="uppercase tracking-widest text-xs text-gray-400">{ctaLabel}</span>
              <span className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/10 bg-black/50 text-gray-100 transition hover:border-sky-400/60 hover:text-white">
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
                  <path d="M13.5 5.5 12.09 6.91l4.09 4.09H4.5v2h11.68l-4.09 4.09 1.41 1.41 6.5-6.5-6.5-6.5Z" />
                </svg>
              </span>
            </a>
          ) : (
            <Link
              className="reqtec-modal-glow flex items-center gap-3 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm text-gray-300 shadow-lg backdrop-blur transition hover:border-sky-400/60 hover:text-white"
              href={ctaHref}
            >
              <span className="uppercase tracking-widest text-xs text-gray-400">{ctaLabel}</span>
              <span className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/10 bg-black/50 text-gray-100 transition hover:border-sky-400/60 hover:text-white">
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
                  <path d="M13.5 5.5 12.09 6.91l4.09 4.09H4.5v2h11.68l-4.09 4.09 1.41 1.41 6.5-6.5-6.5-6.5Z" />
                </svg>
              </span>
            </Link>
          )}
        </div>
      )}

      {hasAccess && (
        <div className="fixed bottom-24 md:bottom-6 left-1/2 z-20 -translate-x-1/2">
          <div className="reqtec-modal-glow share-bounce flex items-center gap-3 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm text-gray-300 shadow-lg backdrop-blur">
            <span className="uppercase tracking-widest text-xs text-gray-400">Share</span>
            <a
              href={xShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/10 bg-black/50 text-gray-100 transition hover:border-sky-400/60 hover:text-white"
              aria-label="Share on X"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
                <path d="M13.46 10.74 20.8 2h-1.74l-6.36 7.57L7.62 2H2.5l7.7 11.19L2.5 22h1.74l6.71-7.98L16.38 22h5.12l-8.04-11.26Zm-2.35 2.79-.78-1.11L4.66 3.8h2.33l4.58 6.5.78 1.11 5.96 8.45h-2.33l-4.87-6.33Z" />
              </svg>
            </a>
            <a
              href={linkedinShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/10 bg-black/50 text-gray-100 transition hover:border-sky-400/60 hover:text-white"
              aria-label="Share on LinkedIn"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.5H9.47V9h3.41v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.39 4.3 5.5v6.24ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm-1.78 13.02h3.55V9H3.56v11.45Z" />
              </svg>
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 z-10 snap-start">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-6 text-gray-100">
            {post.metadata.title}
          </h1>
          {post.metadata.description && (
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {post.metadata.description}
            </p>
          )}
          {post.metadata.date && <p className="text-base text-gray-400 mt-4">{formatPostDate(post.metadata.date)}</p>}
        </div>
      </section>

      {/* Markdown Content */}
      <MarkdownSection animate={false}>
        <div className="prose prose-invert prose-lg max-w-none">
          {!hasAccess ? (
            <div className="max-w-xl mx-auto">
              <PostAccessGate
                slug={post.slug}
                title={post.metadata.title}
                description={post.metadata.description}
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
                      if (typeof src !== 'string') return null

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
                    code: (props: any) => {
                      const { inline, ...rest } = props
                      if (inline) {
                        return <code className="bg-gray-800 px-2 py-1 rounded text-teal-400 text-sm" {...rest} />
                      }

                      return (
                        <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto my-6">
                          <code className="text-gray-300 text-sm" {...rest} />
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
                <ScrollAnimate key={`${post.slug}-section-${index}`} direction="up" delay={120} threshold={0.2}>
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
                        if (typeof src !== 'string') return null

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
                      code: (props: any) => {
                        const { inline, ...rest } = props
                        if (inline) {
                          return <code className="bg-gray-800 px-2 py-1 rounded text-teal-400 text-sm" {...rest} />
                        }

                        return (
                          <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto my-6">
                            <code className="text-gray-300 text-sm" {...rest} />
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
