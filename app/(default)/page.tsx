import type { Metadata } from 'next'
import HomeContent from './home-content'

export const metadata: Metadata = {
  title: 'REQtec — Alternative Technology Solutions | Agentic AI, Cloud Migrations, Custom Software',
  description:
    'Requisite Technologies (REQtec) is an alternative technology accelerator delivering agentic AI, cloud migrations off Google Cloud, AWS, and Azure, custom software, and mobile apps. Politically neutral, balanced, and independent from Big Tech — technology with a clear conscience.',
  keywords: [
    'alternative technology company',
    'alternative to Big Tech',
    'alternatives to Google Cloud',
    'alternatives to AWS',
    'alternatives to Azure',
    'agentic AI solutions',
    'technology accelerator',
    'tech disrupter',
    'neutral technology',
    'balanced technology provider',
    'politically neutral',
    'no political baggage',
    'cloud migration services',
    'custom software development',
    'mobile app development',
    'ethical AI',
    'independent tech company',
    'SMB technology solutions',
  ],
  openGraph: {
    title: 'REQtec — Alternative Technology Solutions | Independent from Big Tech',
    description:
      'Agentic AI, cloud migrations, custom software, and mobile apps — built independent of Big Tech. Technology with a clear conscience.',
    url: 'https://reqtec.com',
  },
  alternates: {
    canonical: 'https://reqtec.com',
  },
}

export default function Home() {
  return <HomeContent />
}
