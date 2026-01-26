import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

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

export interface PostMetadata {
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

export interface MarkdownPost {
  slug: string
  metadata: PostMetadata
  content: string
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace(/\.md$/, ''))
}

export function getPostBySlug(slug: string): MarkdownPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`)

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
      ...(data as PostMetadata),
      title: resolvedTitle,
    },
  }
}

export function getAllPosts(): MarkdownPost[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is MarkdownPost => post !== null)

  return posts.sort((a, b) => {
    const dateA = new Date(a.metadata.date).getTime()
    const dateB = new Date(b.metadata.date).getTime()
    return dateB - dateA
  })
}
