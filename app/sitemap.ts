import type { MetadataRoute } from 'next'
import { getPostSlugs, getPostBySlug } from '@/lib/markdown'
import { services } from '@/data/services'
import { products } from '@/data/products'
import { industries } from '@/data/industries'
import { toSlug } from '@/lib/slug'

const BASE_URL = 'https://reqtec.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/our-vision`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/the-challenge`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/our-work`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/careers`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/investor-relations`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/posts`, changeFrequency: 'weekly', priority: 0.8 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/services/${toSlug(service.name)}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE_URL}/products/${toSlug(product.name)}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const industryRoutes: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${BASE_URL}/industries/${toSlug(industry.name)}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const postSlugs = getPostSlugs()
  const postRoutes: MetadataRoute.Sitemap = postSlugs
    .map((slug) => {
      const post = getPostBySlug(slug)
      if (!post || post.metadata.protected) return null
      return {
        url: `${BASE_URL}/posts/${slug}`,
        ...(post.metadata.date ? { lastModified: new Date(post.metadata.date) } : {}),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }
    })
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null)

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...productRoutes,
    ...industryRoutes,
    ...postRoutes,
  ]
}
