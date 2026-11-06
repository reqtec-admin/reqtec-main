import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/__media__/', '/*.php$'],
    },
    sitemap: 'https://reqtec.com/sitemap.xml',
  }
}
