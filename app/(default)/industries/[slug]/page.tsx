import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { DetailPage } from '@/components/detail-page'
import { industries } from '@/data/industries'
import { toSlug } from '@/lib/slug'

const DEFAULT_BACKGROUND = '/images/financials.jpg'

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: toSlug(industry.name),
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const industry = industries.find((item) => toSlug(item.name) === slug)

  if (!industry) {
    return {
      title: 'Industry Not Found',
    }
  }

  return {
    title: `${industry.name} Technology Solutions — Alternative to Big Tech`,
    description: `${industry.tagline} REQtec serves the ${industry.name.toLowerCase()} sector with alternative technology solutions independent of dominant cloud providers.`,
    keywords: [
      `${industry.name.toLowerCase()} technology`,
      `${industry.name.toLowerCase()} software`,
      'alternative technology',
      'alternative to Big Tech',
      'neutral technology provider',
      'independent tech solutions',
    ],
    openGraph: {
      title: `${industry.name} Technology Solutions | REQtec`,
      description: industry.tagline,
      url: `https://reqtec.com/industries/${slug}`,
    },
    alternates: {
      canonical: `https://reqtec.com/industries/${slug}`,
    },
  }
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const industry = industries.find((item) => toSlug(item.name) === slug)

  if (!industry) {
    notFound()
  }

  const backgroundImage = industry.image || DEFAULT_BACKGROUND

  return (
    <DetailPage
      eyebrow="Sectors"
      title={industry.name}
      description={industry.tagline}
      backgroundImage={backgroundImage}
      sections={
        industry.description
          ? [
              {
                title: 'Overview',
                content: <p className="text-lg text-gray-300 leading-relaxed">{industry.description}</p>,
              },
            ]
          : []
      }
    />
  )
}
