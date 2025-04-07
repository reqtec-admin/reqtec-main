export const metadata = {
  title: 'Home - REQtec',
  description: 'Requisite Technologies (REQtec) is a software solutions firm providing consulting in Cloud, AI/ML, Mobile, and Web Based solutions for your corporations needs.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* <Zigzag /> */}
      <Testimonials />
      {/* <Newsletter /> */}
    </>
  )
}
