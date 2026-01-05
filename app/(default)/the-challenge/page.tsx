'use client'

import Link from 'next/link'
import { ArticleSection } from '@/components/article-section'
import { TypingAnimation } from '@/components/typing-animation'
import ProgrammerChart from '@/components/programmer-chart'
import DataScientistChart from '@/components/data-scientist-chart'
import { CitationList } from '@/components/citation-card'
import { AffiliationSection } from '@/components/affiliation-section'
import { citations } from '@/data/citations'
import {
  programmerTerms,
  programmerRisks,
  dataScientistTerms,
  dataScientistRisks,
} from '@/data/affiliation-data'

export default function TheChallenge() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      {/* Fixed Background Image for entire page */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/the-challenge-1.png)',
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

      {/* Hero Section - Full Viewport */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 z-10 snap-start">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-6 text-gray-100">
            <TypingAnimation 
              text="THE CHALLENGE" 
              speed={80}
              className="inline-block"
            />
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            The bias that has absorbed nearly all of the tech industry has created a need for balance in the tech industry.
          </p>
        </div>
      </section>

      {/* Documented Cases Section */}
      <ArticleSection animationDelay={200}>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-8 text-gray-100">Documented Cases</h2>
          <CitationList citations={citations} />
        </div>
      </ArticleSection>

      {/* The Problem - Article Section */}
      <ArticleSection animationDelay={200}>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-100">The Problem</h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            The technology industry has become increasingly monolithic in its political orientation, with a significant left-wing bias that permeates hiring practices, company culture, and product development decisions. This homogeneity creates several critical problems:
          </p>
          <ul className="space-y-3 text-lg text-gray-300 ml-6 list-disc">
            <li>Limited diversity of thought and perspective in problem-solving</li>
            <li>Potential for bias in AI and algorithmic systems</li>
            <li>Discrimination against employees and clients with different political or religious views</li>
            <li>Retaliation against clients based on their beliefs or values</li>
            <li>Reduced innovation due to groupthink</li>
          </ul>
        </div>
      </ArticleSection>

      {/* The Bias - Article Section */}
      <ArticleSection animationDelay={200}>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-100">Bias - Software Engineering</h2>
          
          <AffiliationSection
            title="Affiliation - Software Engineers"
            affiliation="76% Democrat | 24% Republican"
            chart={<ProgrammerChart />}
            terms={programmerTerms}
            termsTitle="Other Terms for Programmers"
            risks={programmerRisks}
          />
        </div>
      </ArticleSection>

      <ArticleSection animationDelay={200}>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-100">Bias - Data Science</h2>
          
          <AffiliationSection
            title="Affiliation - Data Scientists"
            affiliation="95% Democrat | 5% Republican"
            chart={<DataScientistChart />}
            terms={dataScientistTerms}
            termsTitle="Other Terms for Data Scientists"
            risks={dataScientistRisks}
          />
        </div>
      </ArticleSection>


      {/* Why It Matters - Article Section */}
      <ArticleSection animationDelay={200}>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-100">Why It Matters</h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            When technology companies and their employees actively work against clients based on political or religious beliefs, it creates a dangerous precedent. Small businesses, religious organizations, and individuals with traditional values find themselves unable to access quality technology services without fear of retaliation or discrimination.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            This environment has created a critical need for technology providers who can deliver professional, unbiased solutions regardless of a client's political or religious affiliations.
          </p>
        </div>
      </ArticleSection>

      {/* The Solution - Article Section */}
      <ArticleSection animationDelay={200}>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-100">The Solution</h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Requisite Technologies is committed to providing technology solutions not chasing social trends. If retaliation, cancellation, or discrimination concern you Requisite Technologies is there to guide you through safe and ethical technological options.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            You Have Other Options!
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            <Link href="/our-vision" className="text-teal-400 hover:text-teal-300 transition duration-150 ease-in-out inline-flex items-center gap-2">
              Find out how
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </p>
        </div>
      </ArticleSection>
    </div>
  )
}

