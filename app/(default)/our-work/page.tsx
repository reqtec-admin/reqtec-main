'use client'

import Link from 'next/link'
import { ArticleSection } from '@/components/article-section'
import { TypingAnimation } from '@/components/typing-animation'
import { projects } from '@/data/products'

export default function OurWork() {
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
        <source src="/videos/particle_collision.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay for better text readability */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 pointer-events-none" />

      {/* Hero Section - Full Viewport */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 z-10 snap-start">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-6 text-gray-100">
            <TypingAnimation 
              text="OUR WORK" 
              speed={80}
              className="inline-block"
            />
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Our current and previous projects.
            <br />
            Each includes a summary and a link if provided.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-teal-500/20 relative z-10" />

      {/* Project Sections */}
      {projects.map((project, index) => (
        <ArticleSection key={project.name} animationDelay={200}>
          <div className="prose prose-invert max-w-none">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-100 mb-0">
                {project.name}
              </h2>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                project.status === 'delivered' 
                  ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                  : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
              }`}>
                {project.status}
              </span>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              {project.description}
            </p>

            {project.url && (
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 transition duration-150 ease-in-out inline-flex items-center gap-2"
                >
                  Visit Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </p>
            )}

            <div className="space-y-3 text-lg text-gray-300">
              {project.targetCustomer && (
                <p>
                  <span className="text-gray-500">Target Customer: </span>
                  <span className="text-gray-300">{project.targetCustomer}</span>
                </p>
              )}

              {project.launch && (
                <p>
                  <span className="text-gray-500">Launch: </span>
                  <span className="text-gray-300">{project.launch}</span>
                </p>
              )}
            </div>
          </div>
        </ArticleSection>
      ))}
    </div>
  )
}

