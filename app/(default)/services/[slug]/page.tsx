import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { DetailPage } from '@/components/detail-page'
import { services } from '@/data/services'
import { toSlug } from '@/lib/slug'

const DEFAULT_BACKGROUND = '/images/financials.jpg'

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: toSlug(service.name),
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((item) => toSlug(item.name) === slug)

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: `${service.name} — Alternative Technology Services`,
    description: `${service.tagline} REQtec delivers ${service.name.toLowerCase()} as an alternative to Big Tech, with neutral, balanced service and no vendor lock-in.`,
    keywords: [
      service.name.toLowerCase(),
      'alternative technology',
      'alternative to Big Tech',
      'neutral technology provider',
      'independent tech services',
    ],
    openGraph: {
      title: `${service.name} | REQtec Services`,
      description: service.tagline,
      url: `https://reqtec.com/services/${slug}`,
    },
    alternates: {
      canonical: `https://reqtec.com/services/${slug}`,
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((item) => toSlug(item.name) === slug)

  if (!service) {
    notFound()
  }

  const backgroundImage = service.image || DEFAULT_BACKGROUND

  return (
    <DetailPage
      eyebrow="Services"
      title={service.name}
      description={service.tagline}
      backgroundImage={backgroundImage}
      link={service.url ? { href: service.url, label: 'Learn More' } : undefined}
      sections={[
        {
          title: 'Overview',
          content: <p className="text-lg text-gray-300 leading-relaxed">{service.description}</p>,
        },
      ]}
    />
  )
}
