'use client'

import { GlassCard } from '@/components/glass-card'
import { ArticleSection } from '@/components/article-section'
import { ScrollAnimate } from '@/components/scroll-animate'
import { TypingAnimation } from '@/components/typing-animation'
import ProgrammerChart from '@/components/programmer-chart'
import DataScientistChart from '@/components/data-scientist-chart'

const citations = [
  {
    title: 'Google Employee Activism',
    description: 'Google employees have organized walkouts and protests against company contracts with government agencies, citing political disagreements.',
    source: 'Multiple news reports on Google employee activism (2018-2024)',
  },
  {
    title: 'Tech Employee Retaliation Against Clients',
    description: 'Tech workers have organized to cancel contracts and services for clients based on political or religious beliefs, including cases involving defense contractors, religious organizations, and conservative businesses.',
    source: 'Various tech industry reports and whistleblower accounts',
  },
  {
    title: 'Big Tech Content Moderation Bias',
    description: 'Major tech platforms have been accused of systematically suppressing conservative voices and religious content through algorithmic bias and content moderation policies.',
    source: 'Multiple congressional hearings and independent audits (2020-2024)',
  },
  {
    title: 'Workplace Discrimination',
    description: 'Reports of conservative and religious employees facing discrimination, retaliation, and career limitations in major tech companies.',
    source: 'Employee testimonials and legal cases (2021-2024)',
  },
]

export default function TheChallenge() {
  return (
    <>
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
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 z-10">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-6 text-gray-100">
            <TypingAnimation 
              text="THE CHALLENGE" 
              speed={80}
              className="inline-block"
            />
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            The outright left-wing bias that has absorbed nearly all of the tech industry. There is a need for more balanced engineers in this space.
          </p>
        </div>
      </section>

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
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-100">The Bias</h2>
          
          {/* Programmers Section */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-light tracking-wide mb-4 text-gray-100">Political Affiliation - Programmers</h3>
            <p className="text-lg text-gray-400 mb-6">76% Democrat | 24% Republican</p>
            
            {/* Chart */}
            <div className="mb-8 flex justify-center">
              <div className="w-full max-w-md">
                <ProgrammerChart />
              </div>
            </div>

            {/* Other Terms for Programmers */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-100 mb-3">Other Terms for Programmers</h4>
              <ul className="space-y-2 text-base text-gray-300 ml-6 list-disc">
                <li>
                  <span 
                    className="risk-tooltip text-gray-200 font-medium" 
                    data-tooltip="Designs and builds software applications. Access: Full codebase, user data, business logic. Influence: Core functionality, feature implementation, system architecture."
                  >
                    Software Developer / Software Engineer
                  </span>
                </li>
                <li>
                  <span 
                    className="risk-tooltip text-gray-200 font-medium" 
                    data-tooltip="Works on both frontend and backend systems. Access: Complete application stack, databases, APIs, user interfaces. Influence: End-to-end system design, data flow, user experience."
                  >
                    Full-Stack Developer
                  </span>
                </li>
                <li>
                  <span 
                    className="risk-tooltip text-gray-200 font-medium" 
                    data-tooltip="Develops server-side logic and infrastructure. Access: Databases, APIs, server configurations, business logic. Influence: Data processing, security implementation, system performance."
                  >
                    Backend Developer / Backend Engineer
                  </span>
                </li>
                <li>
                  <span 
                    className="risk-tooltip text-gray-200 font-medium" 
                    data-tooltip="Creates user-facing interfaces and experiences. Access: Client-side code, user interactions, UI/UX data. Influence: User experience, content presentation, interface behavior."
                  >
                    Frontend Developer / Frontend Engineer
                  </span>
                </li>
                <li>
                  <span 
                    className="risk-tooltip text-gray-200 font-medium" 
                    data-tooltip="Manages deployment, infrastructure, and automation. Access: Production systems, deployment pipelines, server infrastructure, monitoring tools. Influence: System availability, security configurations, deployment processes."
                  >
                    DevOps Engineer
                  </span>
                </li>
                <li>
                  <span 
                    className="risk-tooltip text-gray-200 font-medium" 
                    data-tooltip="Develops low-level system software and infrastructure. Access: Operating systems, hardware interfaces, core system functions. Influence: System stability, performance optimization, security foundations."
                  >
                    Systems Programmer
                  </span>
                </li>
              </ul>
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

          {/* Data Scientists Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-light tracking-wide mb-4 text-gray-100">Political Affiliation - Data Scientists</h3>
            <p className="text-lg text-gray-400 mb-6">95% Democrat | 5% Republican</p>
            
            {/* Chart */}
            <div className="mb-8 flex justify-center">
              <div className="w-full max-w-md">
                <DataScientistChart />
              </div>
            </div>

            {/* Other Terms for Data Scientists */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-100 mb-3">Other Terms for Data Scientists</h4>
              <ul className="space-y-2 text-base text-gray-300 ml-6 list-disc">
                <li>
                  <span 
                    className="risk-tooltip text-gray-200 font-medium" 
                    data-tooltip="Analyzes complex datasets to extract insights and build predictive models. Access: Large-scale databases, user behavior data, business intelligence systems. Influence: Strategic decision-making, product recommendations, business analytics."
                  >
                    Data Analyst / Business Intelligence Analyst
                  </span>
                </li>
                <li>
                  <span 
                    className="risk-tooltip text-gray-200 font-medium" 
                    data-tooltip="Develops and deploys machine learning models and AI systems. Access: Training datasets, model architectures, production ML pipelines. Influence: Automated decision systems, AI-powered features, algorithmic outcomes."
                  >
                    Machine Learning Engineer / ML Engineer
                  </span>
                </li>
                <li>
                  <span 
                    className="risk-tooltip text-gray-200 font-medium" 
                    data-tooltip="Builds and maintains data processing infrastructure and pipelines. Access: Data warehouses, ETL systems, streaming data platforms. Influence: Data availability, processing efficiency, data quality."
                  >
                    Data Engineer
                  </span>
                </li>
                <li>
                  <span 
                    className="risk-tooltip text-gray-200 font-medium" 
                    data-tooltip="Applies statistical methods and advanced analytics to solve business problems. Access: Statistical models, experimental data, A/B test results. Influence: Product optimization, user experience decisions, business metrics."
                  >
                    Analytics Engineer / Statistical Analyst
                  </span>
                </li>
                <li>
                  <span 
                    className="risk-tooltip text-gray-200 font-medium" 
                    data-tooltip="Designs and implements AI systems and algorithms. Access: AI model training data, neural network architectures, AI deployment systems. Influence: AI behavior, automated decisions, content generation."
                  >
                    AI Engineer / AI Researcher
                  </span>
                </li>
                <li>
                  <span 
                    className="risk-tooltip text-gray-200 font-medium" 
                    data-tooltip="Manages and analyzes large-scale data infrastructure. Access: Big data platforms, distributed computing systems, data governance tools. Influence: Data architecture, data access policies, data processing capabilities."
                  >
                    Big Data Engineer / Data Architect
                  </span>
                </li>
              </ul>
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

      {/* Documented Cases Section */}
      <section className="relative py-16 md:py-24 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimate direction="up" delay={0} threshold={0.15}>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-12 text-center text-gray-100">Documented Cases</h2>
            </ScrollAnimate>
            <div className="grid gap-6 md:grid-cols-2">
              {citations.map((citation, index) => (
                <ScrollAnimate key={index} direction="up" delay={index * 100} threshold={0.15}>
                  <GlassCard>
                    <h3 className="text-lg font-semibold text-gray-100 mb-2">{citation.title}</h3>
                    <p className="text-base text-gray-400 mb-3">{citation.description}</p>
                    <p className="text-sm text-gray-500 italic">{citation.source}</p>
                  </GlassCard>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Solution - Article Section */}
      <ArticleSection animationDelay={200}>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-100">The Solution</h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Requisite Technologies is committed to providing technology solutions based on technical merit, not political alignment. We believe in serving all clients with professionalism, respect, and excellence, regardless of their beliefs. Our team focuses on delivering the best possible technical solutions while maintaining ethical standards that respect diverse perspectives.
          </p>
        </div>
      </ArticleSection>
    </>
  )
}

