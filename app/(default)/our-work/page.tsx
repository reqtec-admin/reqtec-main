import type { Metadata } from 'next'
import OurWorkContent from './our-work-content'

export const metadata: Metadata = {
  title: 'Our Work — Products Built on Alternative Technology Stacks',
  description:
    'REQtec builds products across health tech, financial ML, local delivery, and migration platforms — all on alternative technology stacks independent of Big Tech. Mobile apps, agentic AI tools, and accelerator platforms for SMBs.',
  keywords: [
    'alternative technology products',
    'mobile app development',
    'agentic AI products',
    'technology accelerator',
    'tech disrupter',
    'health tech platform',
    'financial ML research',
    'local delivery platform',
    'Big Tech alternatives',
    'sovereign infrastructure',
    'SMB technology products',
    'independent tech stack',
  ],
  openGraph: {
    title: 'Our Work — Products & Platforms | REQtec',
    description:
      'Products and platforms built on alternative technology stacks — independent, practical, and free from Big Tech lock-in.',
    url: 'https://reqtec.com/our-work',
  },
  alternates: {
    canonical: 'https://reqtec.com/our-work',
  },
}

export default function OurWorkPage() {
  return <OurWorkContent />
}
