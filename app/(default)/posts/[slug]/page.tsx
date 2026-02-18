import Image from 'next/image'
import { notFound } from 'next/navigation'
import { cookies, headers } from 'next/headers'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { MarkdownSection } from '@/components/markdown-section'
import { ScrollAnimate } from '@/components/scroll-animate'
import { formatPostDate, getPostBySlug, getPostSlugs } from '@/lib/markdown'
import PostAccessGate from '@/components/post-access-gate'
import PostFloatingActions from '@/components/post-floating-actions'

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
    title: post.metadata.title,
    description: post.metadata.description || `${post.metadata.title} — insights from REQtec on alternative technology, agentic AI, and building independent of Big Tech.`,
    ...(post.metadata.tags ? { keywords: post.metadata.tags } : {}),
    openGraph: {
      title: `${post.metadata.title} | REQtec`,
      description: post.metadata.description || '',
      url: `https://reqtec.com/posts/${slug}`,
      type: 'article',
      ...(post.metadata.date ? { publishedTime: post.metadata.date } : {}),
      ...(post.metadata.author ? { authors: [post.metadata.author] } : {}),
    },
    alternates: {
      canonical: `https://reqtec.com/posts/${slug}`,
    },
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

      {hasAccess && (
        <PostFloatingActions
          ctaLabel={ctaLabel}
          ctaHref={ctaHref}
          ctaIsExternal={ctaIsExternal}
          showShare={!isProtected}
          xShareUrl={xShareUrl}
          linkedinShareUrl={linkedinShareUrl}
        />
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
                    pre: (props) => (
                      <div className="my-6">
                        <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto" {...props} />
                      </div>
                    ),
                    code: (props: any) => {
                      const { className, children, ...rest } = props
                      const isBlock = typeof className === 'string' && className.includes('language-')

                      if (isBlock) {
                        return (
                          <code className={`text-gray-300 text-sm ${className}`} {...rest}>
                            {children}
                          </code>
                        )
                      }

                      return (
                        <code className="bg-gray-800 px-2 py-1 rounded text-teal-400 text-sm" {...rest}>
                          {children}
                        </code>
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
                      pre: (props) => (
                        <div className="my-6">
                          <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto" {...props} />
                        </div>
                      ),
                      code: (props: any) => {
                        const { className, children, ...rest } = props
                        const isBlock = typeof className === 'string' && className.includes('language-')

                        if (isBlock) {
                          return (
                            <code className={`text-gray-300 text-sm ${className}`} {...rest}>
                              {children}
                            </code>
                          )
                        }

                        return (
                          <code className="bg-gray-800 px-2 py-1 rounded text-teal-400 text-sm" {...rest}>
                            {children}
                          </code>
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
