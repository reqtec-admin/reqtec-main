import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleSection } from '@/components/article-section'

export const metadata: Metadata = {
  title: 'Careers — Agentic AI & Alternative Technology Jobs',
  description:
    'Join REQtec and build alternative technology independent from Big Tech. Open roles in agentic AI, social media, and engineering. Own stock, own what you build, and work with a balanced, politically neutral team.',
  keywords: [
    'agentic AI jobs',
    'alternative technology careers',
    'tech jobs no politics',
    'neutral tech company jobs',
    'agentic intern',
    'startup careers',
    'technology accelerator jobs',
    'independent tech careers',
  ],
  openGraph: {
    title: 'Careers at REQtec — Build Alternative Technology',
    description:
      'Open roles in agentic AI, social media, and engineering. Join a balanced, independent tech team building outside Big Tech.',
    url: 'https://reqtec.com/careers',
  },
  alternates: {
    canonical: 'https://reqtec.com/careers',
  },
}

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      {/* Fixed Background Image for entire page */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/developers-table.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          filter: 'grayscale(100%)',
          opacity: 0.15,
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 z-10 snap-start">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-6 text-gray-100">
            Careers
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Join a team building practical, independent technology with clear ownership and real-world impact.
          </p>
        </div>
      </section>

      <ArticleSection animationDelay={200}>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-100">
            Social Media Intern
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            Help us create and publish compelling content across channels while building repeatable workflows for
            growth.
          </p>
          <ul className="space-y-3 text-lg text-gray-300 ml-6 list-disc mb-10">
            <li>Intern role with potential path to full-time employment.</li>
            <li>Excel in n8n or comparable automation tooling.</li>
            <li>Create and manage design materials and social postings.</li>
            <li>High school diploma preferred; current high school students are encouraged to apply.</li>
            <li>Opportunity to own stock in REQtec and own what you build.</li>
          </ul>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
            <Link
              href="mailto:jobs@reqtec.com"
              className="text-teal-400 hover:text-teal-300 transition duration-150 ease-in-out underline"
            >
              Apply: jobs@reqtec.com
            </Link>
          </p>

          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-100">
            Agentic Intern
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            Bring your best agentic work and show us how you think, build, and execute in real environments.
          </p>
          <ul className="space-y-3 text-lg text-gray-300 ml-6 list-disc">
            <li>High school diploma preferred; current high school students are encouraged to apply.</li>
            <li>Provide examples of agentic work to be considered.</li>
            <li>Opportunity for full-time employment and to own stock in REQtec and own what you build.</li>
          </ul>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-6 mb-10">
            <Link
              href="mailto:jobs@reqtec.com"
              className="text-teal-400 hover:text-teal-300 transition duration-150 ease-in-out underline"
            >
              Apply: jobs@reqtec.com
            </Link>
          </p>

          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-100">
            Agentic AI Generalist
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            Are you interested in agentic solutions and ready to bring your ideas to life, even if you are still
            figuring out where to start? This role is built for builders who are curious, adaptable, and eager to
            ship practical work that helps expand what we can deliver in the future.
          </p>
          <ul className="space-y-3 text-lg text-gray-300 ml-6 list-disc">
            <li>High school diploma required.</li>
            <li>Show us cool projects you have worked on, especially agentic or automation-driven work.</li>
            <li>
              You will fit into a hands-on team where experimentation, execution, and clear ownership drive product
              expansion.
            </li>
            <li>Opportunity for full-time employment and to own stock in REQtec and own what you build.</li>
            <li>
              Get in early at a growing company and unleash your entrepreneurial mindset become a founder of
              yourself.
            </li>
          </ul>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-6 mb-10">
            <Link
              href="mailto:jobs@reqtec.com"
              className="text-teal-400 hover:text-teal-300 transition duration-150 ease-in-out underline"
            >
              Apply: jobs@reqtec.com
            </Link>
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">We are building the future.</p>
        </div>
      </ArticleSection>

      <ArticleSection animationDelay={200}>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-100">Learn More About REQtec</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/our-vision" className="block p-6 border border-white/10 rounded-lg hover:border-teal-500/40 transition no-underline">
              <h3 className="text-xl font-light text-gray-100 mb-2">Our Vision</h3>
              <p className="text-base text-gray-400">Alternative technology services and consulting independent from Big Tech.</p>
            </Link>
            <Link href="/our-work" className="block p-6 border border-white/10 rounded-lg hover:border-teal-500/40 transition no-underline">
              <h3 className="text-xl font-light text-gray-100 mb-2">Our Work</h3>
              <p className="text-base text-gray-400">Products and platforms we have built and are building.</p>
            </Link>
            <Link href="/the-challenge" className="block p-6 border border-white/10 rounded-lg hover:border-teal-500/40 transition no-underline">
              <h3 className="text-xl font-light text-gray-100 mb-2">The Challenge</h3>
              <p className="text-base text-gray-400">Why politically neutral, balanced technology matters.</p>
            </Link>
          </div>
        </div>
      </ArticleSection>
    </div>
  )
}
