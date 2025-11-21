import { GlassCard } from '@/components/glass-card'
import ProgrammerChart from '@/components/programmer-chart'
import DataScientistChart from '@/components/data-scientist-chart'

export const metadata = {
  title: 'The Challenge - REQtec',
  description: 'The outright left-wing bias that has absorbed nearly all of the tech industry',
}

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
    <section className="pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-4">THE CHALLENGE</h1>
          <p className="text-xl text-gray-400">
            The outright left-wing bias that has absorbed nearly all of the tech industry. There is a need for more balanced engineers in this space.
          </p>
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto space-y-8">
          <GlassCard>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">The Problem</h2>
            <p className="text-base text-gray-400 mb-4">
              The technology industry has become increasingly monolithic in its political orientation, with a significant left-wing bias that permeates hiring practices, company culture, and product development decisions. This homogeneity creates several critical problems:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base text-gray-400 ml-4">
              <li>Limited diversity of thought and perspective in problem-solving</li>
              <li>Potential for bias in AI and algorithmic systems</li>
              <li>Discrimination against employees and clients with different political or religious views</li>
              <li>Retaliation against clients based on their beliefs or values</li>
              <li>Reduced innovation due to groupthink</li>
            </ul>
          </GlassCard>

          {/* Political Affiliation Charts */}
          <GlassCard
            title="Political Affiliation - Programmers"
            description="76% Democrat | 24% Republican"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Chart on the left */}
              <div className="flex items-center justify-center">
                <ProgrammerChart />
              </div>
              
              {/* Content on the right */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-gray-100 mb-2">Other Terms for Programmers</h3>
                  <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-400 ml-4">
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

                <div>
                  <h3 className="text-base font-semibold text-gray-100 mb-2">Risks</h3>
                  <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-400 ml-4">
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
          </GlassCard>

          <GlassCard
            title="Political Affiliation - Data Scientists"
            description="95% Democrat | 5% Republican"
          >
            <DataScientistChart />
          </GlassCard>

          <GlassCard>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Why It Matters</h2>
            <p className="text-base text-gray-400 mb-4">
              When technology companies and their employees actively work against clients based on political or religious beliefs, it creates a dangerous precedent. Small businesses, religious organizations, and individuals with traditional values find themselves unable to access quality technology services without fear of retaliation or discrimination.
            </p>
            <p className="text-base text-gray-400">
              This environment has created a critical need for technology providers who can deliver professional, unbiased solutions regardless of a client's political or religious affiliations.
            </p>
          </GlassCard>

          {/* Citations */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-100 mb-6 text-center">Documented Cases</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {citations.map((citation, index) => (
                <GlassCard
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <h3 className="text-lg font-semibold text-gray-100 mb-2">{citation.title}</h3>
                  <p className="text-base text-gray-400 mb-3">{citation.description}</p>
                  <p className="text-sm text-gray-500 italic">{citation.source}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          <GlassCard>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">The Solution</h2>
            <p className="text-base text-gray-400">
              Requisite Technologies is committed to providing technology solutions based on technical merit, not political alignment. We believe in serving all clients with professionalism, respect, and excellence, regardless of their beliefs. Our team focuses on delivering the best possible technical solutions while maintaining ethical standards that respect diverse perspectives.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}

