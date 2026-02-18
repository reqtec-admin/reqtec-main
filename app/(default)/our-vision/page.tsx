'use client'

import { ArticleSection } from '@/components/article-section'
import { TypingAnimation } from '@/components/typing-animation'
import { services } from '@/data/services'

export default function OurVision() {
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

      {/* Company Description Section */}
      {/* <ArticleSection animationDelay={200}>
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
      </ArticleSection> */}

      {/* Products and Services Sections */}
      {services.map((service) => (
        <ArticleSection key={service.name} animationDelay={200}>
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-100">{service.name}</h2>
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
          </div>
        </ArticleSection>
      ))}
    </div>
  )
}

