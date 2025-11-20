import { GlassCard } from '@/components/glass-card'

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
          <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-4">The Challenge</h1>
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

