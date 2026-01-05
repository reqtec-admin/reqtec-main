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

