import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const pagesDirectory = path.join(process.cwd(), 'content/pages')

function extractTitleFromContent(content: string) {
  const lines = content.split('\n')
  for (let i = 0; i < lines.length; i += 1) {
    const match = lines[i].match(/^#\s+(.+)$/)
    if (match) {
      const title = match[1].trim()
      lines.splice(i, 1)
      if (lines[i] === '') {
        lines.splice(i, 1)
      }
      return {
        title,
        content: lines.join('\n').trimStart(),
      }
    }
  }

  return {
    title: '',
    content,
  }
}

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
  const { title: contentTitle, content: contentWithoutTitle } = extractTitleFromContent(content)
  const resolvedTitle = contentTitle || (data.title as string | undefined) || slug

  return {
    slug,
    content: contentWithoutTitle,
    metadata: {
      ...(data as PageMetadata),
      title: resolvedTitle,
    },
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
