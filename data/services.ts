export interface Service {
  title: string
  description: string
  url?: string
  image?: string
}

export const services: Service[] = [
  {
    title: 'SaaS Products',
    description: 'Subscription-based software tools tailored for small to mid-sized businesses - see our example of Commit250™. We design and build everything from mobile apps to websites to complex OS-based applications. Our focus is user-friendly interfaces, robust security, and minimal dependency on big tech ecosystems.\n\nWe build mobile-first SaaS with Expo, EAS, and a cross-platform delivery model that ships faster without splitting teams. This lets you launch iOS, Android, and web experiences from a unified codebase with a consistent product strategy. The result is tech freedom with predictable costs, clear ownership, and a product roadmap you control. We help founders move faster with ready-to-launch patterns and transparent milestones while still delivering market-ready experiences.',
  },
  {
    title: 'Consultation Services',
    description: 'Consulting has been the primary driver of revenue at REQtec for the past several years. Over the last year, our primary area of work was agentic coding training and QA.\n\nWe provide strategic consulting to help businesses adopt and integrate software solutions effectively. Our competitive edge is the insight needed to avoid Big (Legacy) Tech solutions. Focus areas include digital transformation, cybersecurity, and AI implementation. We map your current stack, quantify vendor risk, and offer alt-tech pathways that reduce lock-in. The result is a faster path to market with fewer hidden dependencies and more control.',
  },
  {
    title: 'Custom Software Solutions',
    description: 'Tailored software development for clients who need unique applications. We emphasize open-source frameworks and avoid proprietary big tech dependencies.\n\nWe build for portability and clear exit options so you keep leverage over your future. Independent-minded teams get solutions that match their values without sacrificing performance. This reduces the risk of sudden policy changes, ecosystem pressure, or vendor lock-in.',
  },
  {
    title: 'Cloud Migrations',
    description: 'Do you know where your data is? Do you trust who has it? What\'s keeping the next cultural trend from getting you bounced from a platform? Join the rebellion and leave the Big Tech oligarchy behind. We help you migrate web and cloud workloads from dominant providers to diversified, ethical, and secure solutions.\n\nFrom rebuilding websites from Squarespace to migrating data and compute from Google Cloud Platform, we are your trusted partner. We plan the move with phased cutovers, data validation, and rollback options to keep business risk low. The migration strategy prioritizes cost control, data sovereignty, and long-term stability. You gain resilient infrastructure that is less exposed to cultural gatekeeping.',
  },
  {
    title: 'Ethical Agentic AI',
    description: 'We hear it all the time: "How do we navigate all this AI, and what does it mean for my business?" There are so many questions in this new world, and agentic AI is drastically changing productivity. We are here to steer you and your business away from hype and trends to provide valuable insights and setups. Each time you use one of these tools, you are training it with your data. Be wise about which tools you pick. We are here to help.\n\nEthical AI advisory services help clients leverage artificial intelligence responsibly. We develop small-scale AI agents tailored to specific sectors (e.g., healthcare, education, agriculture). We favor transparent models, auditable workflows, and data practices that respect your customers. We are preparing for agentic solutions that work beside employees in real offices, handling routine tasks without turning the workplace into a surveillance surface. That future should not require Big Tech dependencies or unnecessary security compromise. The outcome is useful automation that strengthens independence rather than eroding it.',
  },
  {
    title: 'Websites',
    description: 'Modern, high-performance websites that convert and communicate credibility. We build fast, responsive sites with clear messaging, strong accessibility, and a technical foundation built for long-term control. Our approach avoids lock-in and keeps content easy to maintain without sacrificing polish.\n\nOur process follows a week-by-week schedule to keep momentum and clarity. We start by decomposing your goals, content, and functional requirements into a structured site map and priorities. From there we generate full web design concepts, refine the UX flow, and validate the final layout before implementation.\n\nWe also plan and deliver integrations early in the process, including IAM (identity and access management) and CMS connections tailored to your stack. That means clean content workflows, secure user access, and a site that remains easy to operate after launch.\n\nFrom brand refreshes to full redesigns, we focus on conversion paths, clean information architecture, and SEO-ready structure. The result is a site that loads quickly, tells your story clearly, and stays reliable as your business grows.',
  },
]
