'use client'

import Link from 'next/link'
import { ArticleSection } from '@/components/article-section'
import { TypingAnimation } from '@/components/typing-animation'
import ProgrammerChart from '@/components/programmer-chart'
import DataScientistChart from '@/components/data-scientist-chart'

const citations = [
  {
    title: 'Google Employee Activism',
    description: 'Google employees have organized walkouts and protests against company contracts with government agencies, citing political disagreements.',
    source: '"Google Walkout: Employees Stage Protest Over Treatment of Women" by Kate Conger and Daisuke Wakabayashi, The New York Times (2018); "Google Employees Protest Secret Work on Censored Search Engine for China" by Kate Conger, The New York Times (2018)',
  },
  {
    title: 'Tech Employee Retaliation Against Clients',
    description: 'Tech workers have organized to cancel contracts and services for clients based on political or religious beliefs, including cases involving defense contractors, religious organizations, and conservative businesses.',
    source: '"Google Employees Resign in Protest Against Pentagon Contract" by Kate Conger, The New York Times (2018); "Tech Workers Refuse to Build Tools for ICE" by Nitasha Tiku, Wired (2018)',
  },
  {
    title: 'Big Tech Content Moderation Bias',
    description: 'Major tech platforms have been accused of systematically suppressing conservative voices and religious content through algorithmic bias and content moderation policies.',
    source: '"#Deleted: Big Tech\'s Battle to Erase the Trump Movement and Steal the Election" by Allum Bokhari (2020); "Senate Judiciary Committee Hearing on Social Media Censorship" testimony by various witnesses (2020-2024)',
  },
  {
    title: 'Workplace Discrimination',
    description: 'Reports of conservative and religious employees facing discrimination, retaliation, and career limitations in major tech companies.',
    source: '"Ex-Google Engineer James Damore Files Class Action Lawsuit" by David Streitfeld, The New York Times (2018); "Silicon Valley\'s Conservative Problem" by Nellie Bowles, The New York Times (2018)',
  },
]

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
          <div className="space-y-8">
            {citations.map((citation, index) => (
              <div key={index} className="border-l-2 border-gray-600 pl-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-100 mb-3">{citation.title}</h3>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">{citation.description}</p>
                <p className="text-base text-gray-500 italic">{citation.source}</p>
              </div>
            ))}
          </div>
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
          
          {/* Programmers Section */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-light tracking-wide mb-4 text-gray-100 flex items-center gap-3">
              Affiliation - Software Engineers
              <div className="group relative">
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-teal-400 transition duration-150 ease-in-out cursor-help"
                  aria-label="Other Terms for Programmers"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <div className="absolute left-0 top-8 w-80 max-w-[calc(100vw-2rem)] md:max-w-none bg-gray-900/95 backdrop-blur-sm border border-teal-500/30 rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-xl">
                  <h5 className="text-lg font-semibold text-gray-100 mb-3">Other Terms for Programmers</h5>
                  <ul className="space-y-2 text-sm text-gray-300 ml-4 list-disc">
                    <li>
                      <span className="font-medium">Software Developer / Software Engineer</span>
                      <span className="block text-xs text-gray-400 mt-1">Designs and builds software applications. Access: Full codebase, user data, business logic.</span>
                    </li>
                    <li>
                      <span className="font-medium">Full-Stack Developer</span>
                      <span className="block text-xs text-gray-400 mt-1">Works on both frontend and backend systems. Access: Complete application stack, databases, APIs.</span>
                    </li>
                    <li>
                      <span className="font-medium">Backend Developer / Backend Engineer</span>
                      <span className="block text-xs text-gray-400 mt-1">Develops server-side logic and infrastructure. Access: Databases, APIs, server configurations.</span>
                    </li>
                    <li>
                      <span className="font-medium">Frontend Developer / Frontend Engineer</span>
                      <span className="block text-xs text-gray-400 mt-1">Creates user-facing interfaces and experiences. Access: Client-side code, user interactions.</span>
                    </li>
                    <li>
                      <span className="font-medium">DevOps Engineer</span>
                      <span className="block text-xs text-gray-400 mt-1">Manages deployment, infrastructure, and automation. Access: Production systems, deployment pipelines.</span>
                    </li>
                    <li>
                      <span className="font-medium">Systems Programmer</span>
                      <span className="block text-xs text-gray-400 mt-1">Develops low-level system software and infrastructure. Access: Operating systems, hardware interfaces.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </h3>
            <p className="text-lg text-gray-400 mb-6">76% Democrat | 24% Republican</p>
            
            {/* Chart */}
            <div className="mb-8 flex justify-center">
              <div className="w-full max-w-md">
                <ProgrammerChart />
              </div>
            </div>

            {/* Risks */}
            <div>
              <h4 className="text-xl font-semibold text-gray-100 mb-3">Risks</h4>
              <ul className="space-y-2 text-base text-gray-300 ml-6 list-disc">
                <li>
                  <span 
                    className="risk-tooltip text-gray-200 font-medium" 
                    data-tooltip="Homogeneous teams may inadvertently encode their political perspectives into AI systems, recommendation algorithms, and automated decision-making tools, affecting millions of users."
                  >
                    Algorithmic Bias
                  </span>
                </li>
                <li>
                  <span 
                    className="risk-tooltip text-gray-200 font-medium" 
                    data-tooltip="Programmers with strong ideological commitments may refuse to work on projects for clients whose values they disagree with, or intentionally degrade service quality."
                  >
                    Selective Service Denial
                  </span>
                </li>
                <li>
                  <span 
                    className="risk-tooltip text-gray-200 font-medium" 
                    data-tooltip="Access to critical systems allows for potential manipulation of data, analytics, or reporting that could favor certain political narratives."
                  >
                    Data Manipulation
                  </span>
                </li>
                <li>
                  <span 
                    className="risk-tooltip text-gray-200 font-medium" 
                    data-tooltip="Ideologically motivated insiders may introduce backdoors, weaken security measures, or selectively enforce security policies based on political alignment."
                  >
                    Security Vulnerabilities
                  </span>
                </li>
                <li>
                  <span 
                    className="risk-tooltip text-gray-200 font-medium" 
                    data-tooltip="Programmers controlling content moderation systems may apply standards inconsistently, suppressing certain viewpoints while allowing others."
                  >
                    Content Filtering Bias
                  </span>
                </li>
                <li>
                  <span 
                    className="risk-tooltip text-gray-200 font-medium" 
                    data-tooltip="In extreme cases, ideological actors with system access could disrupt critical infrastructure, payment systems, or communication networks."
                  >
                    Infrastructure Sabotage
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ArticleSection>

      <ArticleSection animationDelay={200}>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-100">Bias - Data Science</h2>
          
          <div>
            <h3 className="text-2xl md:text-3xl font-light tracking-wide mb-4 text-gray-100 flex items-center gap-3">
              Affiliation - Data Scientists
              <div className="group relative">
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-teal-400 transition duration-150 ease-in-out cursor-help"
                  aria-label="Other Terms for Data Scientists"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <div className="absolute left-0 top-8 w-80 max-w-[calc(100vw-2rem)] md:max-w-none bg-gray-900/95 backdrop-blur-sm border border-teal-500/30 rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-xl">
                  <h5 className="text-lg font-semibold text-gray-100 mb-3">Other Terms for Data Scientists</h5>
                  <ul className="space-y-2 text-sm text-gray-300 ml-4 list-disc">
                    <li>
                      <span className="font-medium">Data Analyst / Business Intelligence Analyst</span>
                      <span className="block text-xs text-gray-400 mt-1">Analyzes complex datasets to extract insights and build predictive models. Access: Large-scale databases, user behavior data.</span>
                    </li>
                    <li>
                      <span className="font-medium">Machine Learning Engineer / ML Engineer</span>
                      <span className="block text-xs text-gray-400 mt-1">Develops and deploys machine learning models and AI systems. Access: Training datasets, model architectures.</span>
                    </li>
                    <li>
                      <span className="font-medium">Data Engineer</span>
                      <span className="block text-xs text-gray-400 mt-1">Builds and maintains data processing infrastructure and pipelines. Access: Data warehouses, ETL systems.</span>
                    </li>
                    <li>
                      <span className="font-medium">Analytics Engineer / Statistical Analyst</span>
                      <span className="block text-xs text-gray-400 mt-1">Applies statistical methods and advanced analytics to solve business problems. Access: Statistical models, experimental data.</span>
                    </li>
                    <li>
                      <span className="font-medium">AI Engineer / AI Researcher</span>
                      <span className="block text-xs text-gray-400 mt-1">Designs and implements AI systems and algorithms. Access: AI model training data, neural network architectures.</span>
                    </li>
                    <li>
                      <span className="font-medium">Big Data Engineer / Data Architect</span>
                      <span className="block text-xs text-gray-400 mt-1">Manages and analyzes large-scale data infrastructure. Access: Big data platforms, distributed computing systems.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </h3>
            <p className="text-lg text-gray-400 mb-6">95% Democrat | 5% Republican</p>
            
            {/* Chart */}
            <div className="mb-8 flex justify-center">
              <div className="w-full max-w-md">
                <DataScientistChart />
              </div>
            </div>

            {/* Risks */}
            <div>
              <h4 className="text-xl font-semibold text-gray-100 mb-3">Risks</h4>
              <ul className="space-y-2 text-base text-gray-300 ml-6 list-disc">
                <li>
                  <span 
                    className="risk-tooltip text-gray-200 font-medium" 
                    data-tooltip="Data scientists control the training data and algorithms that power AI systems, allowing them to embed political biases into models that affect millions of users' experiences and decisions."
                  >
                    AI Model Bias
                  </span>
                </li>
                <li>
                  <span 
                    className="risk-tooltip text-gray-200 font-medium" 
                    data-tooltip="Data scientists can manipulate analytics, metrics, and reporting to favor certain narratives or suppress unfavorable data about political issues or candidates."
                  >
                    Data Interpretation Manipulation
                  </span>
                </li>
                <li>
                  <span 
                    className="risk-tooltip text-gray-200 font-medium" 
                    data-tooltip="Control over recommendation algorithms allows data scientists to influence what content users see, potentially suppressing certain viewpoints or promoting others."
                  >
                    Algorithmic Content Curation
                  </span>
                </li>
                <li>
                  <span 
                    className="risk-tooltip text-gray-200 font-medium" 
                    data-tooltip="Data scientists can selectively enforce or ignore data privacy policies based on political alignment, potentially exposing sensitive information about certain groups."
                  >
                    Selective Privacy Enforcement
                  </span>
                </li>
                <li>
                  <span 
                    className="risk-tooltip text-gray-200 font-medium" 
                    data-tooltip="Access to user behavior data and analytics allows data scientists to identify and target users based on political beliefs for differential treatment."
                  >
                    User Profiling and Targeting
                  </span>
                </li>
                <li>
                  <span 
                    className="risk-tooltip text-gray-200 font-medium" 
                    data-tooltip="Data scientists can design A/B tests and experiments with built-in biases, ensuring that results favor certain political outcomes or narratives."
                  >
                    Biased Experimental Design
                  </span>
                </li>
              </ul>
            </div>
          </div>
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

