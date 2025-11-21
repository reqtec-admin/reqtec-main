import { GlassCard } from '@/components/glass-card'
import Link from 'next/link'

export const metadata = {
  title: 'Our Work - REQtec',
  description: 'Current and previous projects by Requisite Technologies',
}

const projects = [
  {
    name: 'Commit 250',
    url: 'https://commit250.com',
    status: 'delivered',
    description: 'A guided health improvement experience anchored on traditional American values educating Americans on how to take charge of their health.',
    competition: '75 Hard, BODi',
    targetCustomer: 'Americans motivated by patriotic sentiments wanting to improve their health',
    launch: 'July 2025',
  },
  {
    name: 'Synergy Integrative',
    url: 'https://sih.reqtec.com',
    status: 'incubation',
    description: 'A product vision and platform for integrative health solutions.',
  },
  {
    name: 'DEALVR',
    status: 'incubation',
    description: 'Rideshare for delivery, the Uber of trusted community of product delivery centered on small business needs. Intended to complement services like Public Square and increase the purchasing of local products.',
    competition: 'Amazon Prime',
    targetCustomer: 'SMB with fulfillment chains',
    launch: 'September 2026',
  },
  {
    name: 'HANNO',
    status: 'incubation',
    description: 'Primarily Phone App wizard guiding customers towards Alt Tech solution avoiding Big Tech solutions.',
    competition: 'CoolLabs LLC (potential if not partnered)',
    targetCustomer: 'SMB and Startups with serious technical needs',
    launch: 'March 2026',
  },
  {
    name: 'STARTYR',
    status: 'incubation',
    description: 'Alt Tech Integrated Ecosystem that accelerates small ethically minded SMB. Based on the Coolify and Kubero Stacks with paid for enhancements to reduce the adoption curve.',
    competition: 'CoolLabs LLC (potential if not partnered)',
    targetCustomer: 'SMB and Startups with serious technical needs',
    launch: 'March 2026',
  },
]

export default function OurWork() {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-4">OUR WORK</h1>
          <p className="text-xl text-gray-400">
            Current and previous projects we are doing. Each includes a summary and a link if provided.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {projects.map((project, index) => (
            <GlassCard
              key={project.name}
              className="h-full"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              title={project.name}
              headerAction={
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'delivered' 
                    ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                  {project.status}
                </span>
              }
            >
              <p className="text-base text-gray-400 mb-4">{project.description}</p>
              
              {project.url && (
                <div className="mb-4">
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
                </div>
              )}

              {project.competition && (
                <div className="mb-2">
                  <span className="text-sm text-gray-500">Competition: </span>
                  <span className="text-sm text-gray-300">{project.competition}</span>
                </div>
              )}

              {project.targetCustomer && (
                <div className="mb-2">
                  <span className="text-sm text-gray-500">Target: </span>
                  <span className="text-sm text-gray-300">{project.targetCustomer}</span>
                </div>
              )}

              {project.launch && (
                <div>
                  <span className="text-sm text-gray-500">Launch: </span>
                  <span className="text-sm text-gray-300">{project.launch}</span>
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}

