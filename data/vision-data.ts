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
    description: 'Subscription-based software tools tailored for small to mid-sized businesses - see our example of Commit250™. We will work with you to develop anything from Mobile Apps, to Websites, to complex OS based applications. We concentrate on user-friendly interfaces, robust security, and little to no dependency on big tech ecosystems.',
  },
  {
    title: 'Consultation Services',
    description: 'Strategic tech consulting to help businesses adopt and integrate software solutions effectively. Competitive edge in providing the necessary insight to avoid Big (Legacy) Tech solutions. Focus areas: Digital transformation, cybersecurity, and AI implementation.',
  },
  {
    title: 'Custom Software Solutions',
    description: 'Tailored software development for clients needing unique applications. Emphasis on open-source frameworks and avoiding proprietary big tech dependencies.',
  },
  {
    title: 'Cloud and Web Hosting Migrations',
    description: 'Join the rebellion and leave the Big Tech oligarchy behind. We help you migrate your web and cloud hosting to more ethical and secure solutions. From rebuilding websites from Squarespace to migrating data and compute from Google Cloud Platform, we are your trusted partner.',
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
    launch: 'July 2025',
  },
  {
    name: 'HANNO',
    description: 'Primarily Phone App wizard guiding customers towards Alt Tech solution avoiding Big Tech solutions.',
    launch: 'March 2026',
  },
  {
    name: 'STARTYR',
    description: 'Alt Tech Integrated Business Ecosystem that accelerates ethically minded SMB. Based on the well established technology stacks with paid for enhancements to reduce the adoption curve.',
    launch: 'March 2026',
  },
  {
    name: 'DEALVR',
    description: 'Amazon Prime but with a Clear Conscience, focused on local businesses. Rideshare for delivery, the Uber of trusted community of product delivery centered on small business needs. Intended to complement services like Public Square and increase the purchasing of local products.',
    launch: 'September 2026',
  },
]

