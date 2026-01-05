export interface Service {
  title: string
  description: string
}

export interface PlannedProduct {
  name: string
  description: string
  competition?: string
  launch?: string
}

export const services: Service[] = [
  {
    title: 'SaaS Products',
    description: 'Subscription-based software tools tailored for small to mid-sized businesses, including Hanno and Commit250. Features include user-friendly interfaces, robust security, and no dependency on big tech ecosystems.',
  },
  {
    title: 'Consultation Services',
    description: 'Strategic tech consulting to help businesses adopt and integrate software solutions effectively. Competitive edge in providing the necessary insight to avoid Big (Legacy) Tech solutions. Focus areas: Digital transformation, cybersecurity, and AI implementation.',
  },
  {
    title: 'Custom Software Solutions',
    description: 'Bespoke software development for clients needing unique applications. Emphasis on open-source frameworks and avoiding proprietary big tech dependencies.',
  },
  {
    title: 'Ethical AI Guidance and Solutions',
    description: 'Ethical AI advisory services to help clients leverage artificial intelligence responsibly. Development of small-scale AI Agents tailored to specific industries (e.g., healthcare, education, agriculture).',
  },
]

export const plannedProducts: PlannedProduct[] = [
  {
    name: 'Commit250',
    description: 'A guided health improvement experience anchored on traditional American values educating Americans on how to take charge of their health.',
    competition: '75 Hard, BODi',
    launch: 'July 2025',
  },
  {
    name: 'HANNO',
    description: 'Primarily Phone App wizard guiding customers towards Alt Tech solution avoiding Big Tech solutions.',
    competition: 'CoolLabs LLC (potential if not partnered)',
    launch: 'March 2026',
  },
  {
    name: 'STARTYR',
    description: 'Alt Tech Integrated Ecosystem that accelerates small ethically minded SMB. Based on the Coolify and Kubero Stacks with paid for enhancements to reduce the adoption curve.',
    competition: 'CoolLabs LLC (potential if not partnered)',
    launch: 'March 2026',
  },
  {
    name: 'DEALVR',
    description: 'Rideshare for delivery, the Uber of trusted community of product delivery centered on small business needs. Intended to complement services like Public Square and increase the purchasing of local products.',
    competition: 'Amazon Prime',
    launch: 'September 2026',
  },
]

