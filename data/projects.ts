export interface Project {
  name: string
  url?: string
  status: 'delivered' | 'incubation'
  description: string
  competition?: string
  targetCustomer?: string
  launch?: string
}

export const projects: Project[] = [
  {
    name: 'Commit 250',
    url: 'https://commit250.com',
    status: 'delivered',
    description: 'A guided health improvement experience anchored on traditional American values, focused on accountability, habit formation, and measurable wellness outcomes. The platform combines structured programming, progress tracking, and motivation systems to help users take ownership of their health.',
    competition: '75 Hard, BODi',
    targetCustomer: 'Americans motivated by patriotic sentiments wanting to improve their health',
    launch: 'July 2025',
  },
  {
    name: 'Synergy Integrative',
    url: 'https://sih.reqtec.com',
    status: 'incubation',
    description: 'An integrative health platform designed to elevate both practitioners and clients through a unified care experience. The program includes a six‑month delivery roadmap, practitioner console demos, and a compliance‑first plan (HIPAA/SOC 2) integrated from day one to support secure clinical operations.',
  },
  {
    name: 'DEALVR',
    status: 'incubation',
    description: 'A trusted community delivery network built for small businesses, positioning local commerce to compete with big‑box logistics. DEALVR is designed to complement marketplace ecosystems and increase local purchasing through reliable, values‑aligned fulfillment.',
    competition: 'Amazon Prime',
    targetCustomer: 'SMB with fulfillment chains',
    launch: 'September 2026',
  },
  {
    name: 'HANNO',
    status: 'incubation',
    description: 'A mobile‑first guidance platform that helps organizations transition away from Big Tech dependencies. HANNO curates vetted alternative technology stacks and provides a step‑by‑step migration path tailored to business needs.',
    competition: 'CoolLabs LLC (potential if not partnered)',
    targetCustomer: 'SMB and Startups with serious technical needs',
    launch: 'March 2026',
  },
  {
    name: 'STARTYR',
    status: 'incubation',
    description: 'An integrated Alt‑Tech ecosystem that accelerates ethically minded SMBs with secure hosting, automation, and streamlined ops. Built on proven infrastructure with paid enhancements to shorten adoption time and reduce operational overhead.',
    competition: 'CoolLabs LLC (potential if not partnered)',
    targetCustomer: 'SMB and Startups with serious technical needs',
    launch: 'March 2026',
  },
]

