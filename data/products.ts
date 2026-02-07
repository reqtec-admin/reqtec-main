export interface Product {
  name: string
  url?: string
  image?: string
  status: 'delivered' | 'incubation'
  description: string
  competition?: string
  targetCustomer?: string
  launch?: string
}

export const products: Product[] = [
  {
    name: 'Commit 250',
    url: 'https://commit250.com',
    status: 'delivered',
    description: 'A guided health improvement experience anchored on traditional American values, focused on accountability, habit formation, and measurable wellness outcomes. The platform combines structured programming, progress tracking, and motivation systems to help users take ownership of their health. Participants move through a daily cadence of commitments, with clear checkpoints and practical nutrition and fitness guidance that turns ambition into a repeatable routine. The result is a community-powered path to resilience, built for people who want discipline without guesswork. Challenges are designed to scale from first-time participants to veterans, with tiered milestones and streaks that reward consistency. The experience includes weekly reflections and simple performance summaries so users can see what is working and adjust quickly. Social features highlight local leaders and shared wins without turning the program into a noisy feed. The goal is a credible, structured program that respects time, reinforces personal responsibility, and delivers measurable progress.',
    competition: '75 Hard, BODi',
    targetCustomer: 'Americans motivated by patriotic sentiments wanting to improve their health',
    launch: 'July 2025',
  },
  {
    name: 'Synergy Integrative',
    url: 'https://sih.reqtec.com',
    status: 'incubation',
    description: 'An integrative health platform designed to elevate both practitioners and clients through a unified care experience. The program includes a six‑month delivery roadmap, practitioner console demos, and a compliance‑first plan (HIPAA/SOC 2) integrated from day one to support secure clinical operations. It blends scheduling, care plans, and outcomes tracking into a single workflow so clinics can deliver consistent treatment while clients stay engaged between visits. The end goal is a scalable, trusted system that reduces administrative friction and improves patient adherence. The practitioner console is built around rapid intake, templated notes, and flexible care pathways that adapt to different modalities. Clients receive clear next steps, visit summaries, and reminders that keep them accountable between sessions. Reporting surfaces trends across cohorts so clinics can make evidence-based adjustments to programs. The platform also supports secure document exchange and role-based access to protect sensitive patient data.',
  },
  {
    name: 'Enthous.IO',
    url: 'https://enthous.reqtec.com',
    status: 'incubation',
    description: 'A financial ML research platform for validating and scaling trading strategies. Enthous.IO provides a secure R&D environment for sensitive data, reproducible model testing, and evidence‑driven calibration before production deployment. It standardizes the research pipeline from data ingestion to backtesting so teams can compare models, understand risk, and document results with confidence. By emphasizing governance and repeatability, it shortens the distance between promising experiments and deployable systems. Researchers can version datasets, track feature changes, and attach rationale to each experiment to avoid knowledge loss. Built-in risk analysis highlights regime shifts and stress scenarios alongside headline returns. The platform supports controlled sharing across teams so IP stays protected while collaboration improves. This results in a disciplined research cadence that prioritizes signal quality over hype.',
  },
  {
    name: 'DEALVR',
    status: 'incubation',
    description: 'A trusted community delivery network built for small businesses, positioning local commerce to compete with big‑box logistics. DEALVR is designed to complement marketplace ecosystems and increase local purchasing through reliable, values‑aligned fulfillment. It emphasizes neighborhood-scale efficiency, predictable delivery windows, and transparent cost structures that keep margins in the community. The platform connects merchants and couriers through a shared service layer that makes local buying as convenient as national chains. Merchant tools cover inventory syncing, pickup scheduling, and delivery routing without complex setup. Couriers operate within defined service zones to ensure faster handoffs and dependable ETAs. Customers receive simple tracking and support channels that feel personal, not automated. The outcome is a repeatable local logistics model that boosts small business competitiveness.',
    competition: 'Amazon Prime',
    targetCustomer: 'SMB with fulfillment chains',
    launch: 'September 2026',
  },
  {
    name: 'HANNO',
    status: 'incubation',
    description: 'A mobile‑first guidance platform that helps organizations transition away from Big Tech dependencies. HANNO curates vetted alternative technology stacks and provides a step‑by‑step migration path tailored to business needs. It pairs decision frameworks with practical tooling so teams can replace core services without losing reliability, security, or productivity. The experience is designed to make sovereign tech choices feel achievable, not overwhelming. Each recommendation includes tradeoffs, cost estimates, and timelines so leaders can make informed decisions quickly. Migration playbooks break the work into phases with rollback options and clear success criteria. A lightweight assessment captures current stack risks and maps them to recommended alternatives. The result is a confident path to independence that minimizes disruption.',
    competition: 'CoolLabs LLC (potential if not partnered)',
    targetCustomer: 'SMB and Startups with serious technical needs',
    launch: 'July 2026',
  },
  {
    name: 'STARTYR',
    status: 'incubation',
    description: 'An integrated Alt‑Tech ecosystem that accelerates ethically minded SMBs with secure hosting, automation, and streamlined ops. Built on proven infrastructure with paid enhancements to shorten adoption time and reduce operational overhead. STARTYR provides a curated bundle of services, templates, and managed support so teams can modernize their stack without hiring a full DevOps function. The focus is sustainable scale: dependable systems, lower vendor lock-in, and better control over data and operations. Onboarding starts with a reference architecture and a ready-to-run toolkit that covers hosting, identity, and backups. Automation handles routine maintenance so small teams can focus on product and customers. Support is structured around clear SLAs and pragmatic guidance instead of open-ended consulting. The ecosystem is designed to help founders move fast while still building on solid infrastructure.',
    competition: 'CoolLabs LLC (potential if not partnered)',
    targetCustomer: 'SMB and Startups with serious technical needs',
    launch: 'September 2026',
  },
]

