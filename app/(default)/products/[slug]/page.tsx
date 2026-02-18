import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { DetailPage } from '@/components/detail-page'
import { products } from '@/data/products'
import { toSlug } from '@/lib/slug'

const DEFAULT_BACKGROUND = '/images/developers-table.jpg'
const STATUS_LABELS = {
  delivered: 'Delivered',
  incubation: 'Incubation',
  development: 'Development',
} as const

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: toSlug(product.name),
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((item) => toSlug(item.name) === slug)

  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.name} — Alternative Technology Product`,
    description: `${product.tagline} Built by REQtec on independent, alternative technology stacks free from Big Tech dependencies.`,
    keywords: [
      product.name.toLowerCase(),
      'alternative technology product',
      'independent tech',
      'SMB technology',
      'agentic solutions',
    ],
    openGraph: {
      title: `${product.name} | REQtec Products`,
      description: product.tagline,
      url: `https://reqtec.com/products/${slug}`,
    },
    alternates: {
      canonical: `https://reqtec.com/products/${slug}`,
    },
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find((item) => toSlug(item.name) === slug)

  if (!product) {
    notFound()
  }

  const backgroundImage = product.image || DEFAULT_BACKGROUND
  const statusLabel = STATUS_LABELS[product.status]
  const details: string[] = [
    `Status: ${statusLabel}`,
    product.targetCustomer ? `Target Customer: ${product.targetCustomer}` : '',
    product.launch ? `Launch: ${product.launch}` : '',
  ].filter(Boolean)

  return (
    <DetailPage
      eyebrow="Products"
      title={product.name}
      description={product.tagline}
      backgroundImage={backgroundImage}
      link={product.url ? { href: product.url, label: 'Visit Website' } : undefined}
      sections={[
        {
          title: 'Overview',
          content: <p className="text-lg text-gray-300 leading-relaxed">{product.description}</p>,
        },
        ...(details.length > 0
          ? [
              {
                title: 'Product Details',
                content: (
                  <ul className="space-y-3 text-lg text-gray-300 ml-6 list-disc">
                    {details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                ),
              },
            ]
          : []),
      ]}
    />
  )
}
