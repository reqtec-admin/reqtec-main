import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { DetailPage } from '@/components/detail-page'
import { services } from '@/data/services'
import { toSlug } from '@/lib/slug'

const DEFAULT_BACKGROUND = '/images/financials.jpg'

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: toSlug(service.title),
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((item) => toSlug(item.title) === slug)

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: `${service.title} - REQtec`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((item) => toSlug(item.title) === slug)

  if (!service) {
    notFound()
  }

  const backgroundImage = service.image || DEFAULT_BACKGROUND
  const descriptionParts = service.description.split('\n\n').filter(Boolean)

  return (
    <DetailPage
      eyebrow="Services"
      title={service.title}
      description={descriptionParts[0]}
      backgroundImage={backgroundImage}
      link={service.url ? { href: service.url, label: 'Learn More' } : undefined}
      sections={
        descriptionParts.length > 1
          ? [
              {
                title: 'Overview',
                content: (
                  <>
                    {descriptionParts.slice(1).map((paragraph, index) => (
                      <p
                        key={`${service.title}-paragraph-${index}`}
                        className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </>
                ),
              },
            ]
          : []
      }
    />
  )
}
