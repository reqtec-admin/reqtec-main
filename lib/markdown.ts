import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const pagesDirectory = path.join(process.cwd(), 'content/pages')

export interface PageMetadata {
  title: string
  date: string
  description?: string
  author?: string
  tags?: string[]
  image?: string
  ctaLabel?: string
  ctaHref?: string
  protected?: boolean
  [key: string]: unknown
}

export interface MarkdownPage {
  slug: string
  metadata: PageMetadata
  content: string
}

export function getPageSlugs(): string[] {
  if (!fs.existsSync(pagesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(pagesDirectory)
  return fileNames
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace(/\.md$/, ''))
}

export function getPageBySlug(slug: string): MarkdownPage | null {
  const fullPath = path.join(pagesDirectory, `${slug}.md`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    metadata: data as PageMetadata,
    content,
  }
}

export function getAllPages(): MarkdownPage[] {
  const slugs = getPageSlugs()
  const pages = slugs
    .map((slug) => getPageBySlug(slug))
    .filter((page): page is MarkdownPage => page !== null)

  return pages.sort((a, b) => {
    const dateA = new Date(a.metadata.date).getTime()
    const dateB = new Date(b.metadata.date).getTime()
    return dateB - dateA
  })
}
