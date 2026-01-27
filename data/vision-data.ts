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
    description: 'Subscription-based software tools tailored for small to mid-sized businesses - see our example of Commit250™. We will work with you to develop anything from Mobile Apps, to Websites, to complex OS based applications. We concentrate on user-friendly interfaces, robust security, and little to no dependency on big tech ecosystems. We build mobile-first SaaS with Expo, EAS, and a cross-platform delivery model that ships faster without splitting teams. This lets you launch iOS, Android, and web experiences with a unified codebase and a consistent product strategy. The focus is tech freedom with predictable costs, clear ownership, and a product roadmap you control. We help founders move faster with ready-to-launch patterns and transparent milestones. This keeps your business outside the normal groupthink while still delivering market-ready experiences.',
  },
  {
    title: 'Consultation Services',
    description: 'Strategic tech consulting to help businesses adopt and integrate software solutions effectively. Competitive edge in providing the necessary insight to avoid Big (Legacy) Tech solutions. Focus areas: Digital transformation, cybersecurity, and AI implementation. We map your current stack, quantify vendor risk, and offer alt-tech pathways that reduce lock-in. Guidance centers on pragmatic tradeoffs so you can move forward without betting the company on cultural or platform shifts. The result is a faster path to market with fewer hidden dependencies.',
  },
  {
    title: 'Custom Software Solutions',
    description: 'Tailored software development for clients needing unique applications. Emphasis on open-source frameworks and avoiding proprietary big tech dependencies. We build around portability and clear exit options so you keep leverage over your future. Independent-minded teams get a solution that matches their values without sacrificing performance. This reduces the risk of sudden policy changes or ecosystem pressure.',
  },
  {
    title: 'Cloud and Web Hosting Migrations',
    description: 'Join the rebellion and leave the Big Tech oligarchy behind. We help you migrate your web and cloud hosting to more ethical and secure solutions. From rebuilding websites from Squarespace to migrating data and compute from Google Cloud Platform, we are your trusted partner. Do you know where your data is? Do you trust who has it? What\'s keeping the next cultural trend from getting you bounced from a platform? We plan the move with phased cutovers, data validation, and rollback options to keep business risk low. The migration strategy prioritizes cost control, data sovereignty, and long-term stability. You gain resilient infrastructure that is less exposed to cultural gatekeeping.',
  },
  {
    title: 'Ethical AI Guidance and Solutions',
    description: 'Ethical AI advisory services to help clients leverage artificial intelligence responsibly. Development of small-scale AI Agents tailored to specific industries (e.g., healthcare, education, agriculture). We favor transparent models, auditable workflows, and data practices that respect your customers. We are preparing for agentic solutions that work beside employees in real offices, handling routine tasks without turning the workplace into a surveillance surface. That future should not require Big Tech dependencies or unnecessary security compromise. This keeps AI aligned with your mission and avoids the black-box risks of mainstream platforms. The outcome is useful automation that strengthens independence rather than eroding it.',
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

