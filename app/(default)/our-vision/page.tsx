import type { Metadata } from 'next'
import OurVisionContent from './our-vision-content'

export const metadata: Metadata = {
  title: 'Our Vision — Alternative Technology Services Independent from Big Tech',
  description:
    'REQtec delivers alternative technology consulting, custom software, cloud migrations away from Google Cloud, AWS, and Azure, ethical agentic AI, and high-performance websites. Politically neutral, balanced, and built for independence.',
  keywords: [
    'alternative technology services',
    'alternative to Big Tech',
    'alternatives to Google Cloud',
    'alternatives to AWS',
    'alternatives to Azure',
    'neutral technology provider',
    'politically neutral tech company',
    'no political baggage tech',
    'cloud migration consulting',
    'ethical agentic AI',
    'independent software development',
    'custom software solutions',
    'tech freedom',
    'vendor lock-in alternative',
  ],
  openGraph: {
    title: 'Our Vision — Alternative Technology Services | REQtec',
    description:
      'Digital solutions outside the Big Tech oligarchy. Alternative cloud, AI, mobile, and web technology with no political baggage.',
    url: 'https://reqtec.com/our-vision',
  },
  alternates: {
    canonical: 'https://reqtec.com/our-vision',
  },
}

export default function OurVisionPage() {
  return <OurVisionContent />
}
