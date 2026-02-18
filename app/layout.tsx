import './css/style.css'

import type { Metadata } from 'next'
import { Inter, Architects_Daughter, Adamina } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'
import StarField from '@/components/star-field'
import ScrollIndicator from '@/components/scroll-indicator'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const font1 = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

const font2 = Adamina({
  subsets: ['latin'],
  variable: '--font-adamina',
  weight: '400',
  display: 'swap'
})

const BASE_URL = 'https://reqtec.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'REQtec — Alternative Technology Solutions | Independent from Big Tech',
    template: '%s | REQtec',
  },
  description:
    'REQtec is an alternative technology company delivering agentic AI, cloud migrations, custom software, and mobile app solutions independent of Big Tech. Neutral, balanced, and built for businesses that want practical tech without political baggage.',
  keywords: [
    'alternative technology',
    'alternative to Big Tech',
    'alternatives to Google Cloud',
    'alternatives to AWS',
    'alternatives to Azure',
    'agentic AI',
    'agentic solutions',
    'technology accelerator',
    'tech disrupter',
    'neutral technology provider',
    'balanced technology',
    'politically neutral tech',
    'no political baggage',
    'independent tech',
    'cloud migration',
    'custom software',
    'mobile app development',
    'ethical AI',
    'SMB technology',
    'alt-tech',
    'vendor lock-in alternative',
    'sovereign infrastructure',
    'decentralized technology',
    'privacy-focused tech',
  ],
  authors: [{ name: 'Requisite Technologies' }],
  creator: 'Requisite Technologies',
  publisher: 'Requisite Technologies',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'REQtec',
    title: 'REQtec — Alternative Technology Solutions | Independent from Big Tech',
    description:
      'Alternative technology company delivering agentic AI, cloud migrations, custom software, and mobile apps. Neutral, balanced, and free from Big Tech dependencies.',
    images: [{ url: '/images/REQtec-logo-white.png', width: 1200, height: 630, alt: 'REQtec Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@reqtecX',
    creator: '@reqtecX',
    title: 'REQtec — Alternative Technology Solutions',
    description:
      'Agentic AI, cloud migrations, and custom software built independent of Big Tech. Neutral technology with no political baggage.',
    images: ['/images/REQtec-logo-white.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: {
    canonical: BASE_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
        name: 'Requisite Technologies',
        alternateName: 'REQtec',
        url: BASE_URL,
        logo: `${BASE_URL}/images/REQtec-logo-white.png`,
        description:
          'Alternative technology company delivering agentic AI, cloud migrations, custom software, and mobile app solutions independent of Big Tech.',
        foundingDate: '2012-03',
        sameAs: [
          'https://x.com/reqtecX',
          'https://linkedin.com/company/reqtec',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'info@reqtec.com',
          contactType: 'customer service',
          url: 'https://cal.com/reqtec',
        },
        knowsAbout: [
          'Alternative Technology',
          'Agentic AI',
          'Cloud Migration',
          'Custom Software Development',
          'Mobile App Development',
          'Ethical AI',
          'Big Tech Alternatives',
          'Sovereign Infrastructure',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: 'REQtec',
        publisher: { '@id': `${BASE_URL}/#organization` },
        description:
          'Alternative technology solutions independent from Big Tech — agentic AI, cloud migrations, custom software, and mobile apps.',
      },
    ],
  }

  return (
    <html lang="en" className="overflow-x-hidden reqtec-scrollbar">
      <body className={`${inter.variable} ${font1.variable} ${font2.variable} font-inter antialiased text-gray-200 tracking-tight overflow-x-hidden`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <StarField />
        <div className="reqtec-backdrop flex flex-col min-h-screen relative z-10">
          <Header />
          <div className="pt-20">
            {children}
          </div>
          <Banner />
        </div>
        <ScrollIndicator />
      </body>
    </html>
  )
}
 