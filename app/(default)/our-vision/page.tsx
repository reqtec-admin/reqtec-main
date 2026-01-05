'use client'

import { ArticleSection } from '@/components/article-section'
import { TypingAnimation } from '@/components/typing-animation'
import { services } from '@/data/vision-data'

export default function OurVision() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      {/* Fixed Background Video for entire page */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 z-0 pointer-events-none object-cover w-full h-full"
        style={{
          filter: 'grayscale(100%)',
          opacity: 0.15,
        }}
      >
        <source src="/videos/5230-183786680_small.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay for better text readability */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 pointer-events-none" />

      {/* Hero Section - Full Viewport */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 z-10 snap-start">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-6 text-gray-100">
            <TypingAnimation 
              text="OUR VISION" 
              speed={80}
              className="inline-block"
            />
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Unbiased tech solutions that are outside the Big Tech oligarchy.
            <br />
            Our team helping you and your business employ decentralized providers, avoiding Big Tech solutions as much as possible while respecting your budget and needs.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-teal-500/20 relative z-10" />

      {/* Company Description Section */}
      <ArticleSection animationDelay={200}>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-100">Company Description</h2>
          <div className="space-y-4 text-lg text-gray-300">
            <p>
              <strong className="text-gray-200">Name:</strong> Requisite Technologies
            </p>
            <p>
              <strong className="text-gray-200">Founded:</strong> March 2012
            </p>
            <p>
              <strong className="text-gray-200">Location:</strong> Remote-first with a small headquarters in Omaha, NE
            </p>
            <p className="pt-4">
              <strong className="text-gray-200">Vision:</strong> To deliver cutting-edge technology solutions that uphold traditional values and foster trust in an era dominated by big tech monopolies.
            </p>
            <p>
              <strong className="text-gray-200">Mission:</strong> Provide small businesses, mid-sized enterprises, and individuals with affordable, ethical, and customized tech solutions that enhance productivity and innovation without compromising integrity.
            </p>
          </div>
        </div>
      </ArticleSection>

      {/* Products and Services Sections */}
      {services.map((service, index) => (
        <ArticleSection key={service.title} animationDelay={200}>
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-100">{service.title}</h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {service.description}
            </p>
          </div>
        </ArticleSection>
      ))}
    </div>
  )
}

