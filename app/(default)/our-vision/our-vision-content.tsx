'use client'

import Link from 'next/link'
import { ArticleSection } from '@/components/article-section'
import { TypingAnimation } from '@/components/typing-animation'
import { services } from '@/data/services'
import { toSlug } from '@/lib/slug'

export default function OurVisionContent() {
  return (
    <div className="min-h-screen">
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
            Digital solutions outside the Big Tech oligarchy and resistant to social contagion.
            <br />
            <br />
            Our team empowers you and your business to employ alternative technology providers while respecting your budget and needs.
            We prioritize tech freedom and practical independence so your roadmap is not dictated by closed platforms or shifting cultural pressures.
            Our approach helps independent-minded owners bring ideas to market faster without taking on unnecessary platform risk.
            The goal is durable systems, clear ownership, and the confidence to build outside the normal groupthink.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-teal-500/20 relative z-10" />

      {/* Products and Services Sections */}
      {services.map((service) => (
        <ArticleSection key={service.name} animationDelay={200}>
          <div className="prose prose-invert max-w-none">
            <Link href={`/services/${toSlug(service.name)}`} className="no-underline hover:opacity-80 transition">
              <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-100">{service.name}</h2>
            </Link>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">{service.tagline}</p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {service.description.split('\n\n').map((paragraph, paragraphIndex) => (
                <span key={`${service.name}-${paragraphIndex}`}>
                  {paragraph}
                  {paragraphIndex < service.description.split('\n\n').length - 1 && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </span>
              ))}
            </p>
            <p className="mt-6">
              <Link
                href={`/services/${toSlug(service.name)}`}
                className="text-teal-400 hover:text-teal-300 transition duration-150 ease-in-out inline-flex items-center gap-2"
              >
                Learn more about {service.name}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </p>
          </div>
        </ArticleSection>
      ))}

      {/* Cross-links to related pages */}
      <ArticleSection animationDelay={200}>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-100">Explore More</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/the-challenge" className="block p-6 border border-white/10 rounded-lg hover:border-teal-500/40 transition no-underline">
              <h3 className="text-xl font-light text-gray-100 mb-2">The Challenge</h3>
              <p className="text-base text-gray-400">Why alternative technology matters and the bias in the tech industry.</p>
            </Link>
            <Link href="/our-work" className="block p-6 border border-white/10 rounded-lg hover:border-teal-500/40 transition no-underline">
              <h3 className="text-xl font-light text-gray-100 mb-2">Our Work</h3>
              <p className="text-base text-gray-400">Products and platforms we have built and are building.</p>
            </Link>
            <Link href="/posts" className="block p-6 border border-white/10 rounded-lg hover:border-teal-500/40 transition no-underline">
              <h3 className="text-xl font-light text-gray-100 mb-2">Our Thoughts</h3>
              <p className="text-base text-gray-400">Long-form posts on technology, independence, and building outside Big Tech.</p>
            </Link>
          </div>
        </div>
      </ArticleSection>
    </div>
  )
}
