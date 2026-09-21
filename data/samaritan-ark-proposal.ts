export const proposalMeta = {
  preparedFor: "Samaritan's Purse",
  audience: "Samaritan's Purse leadership and the Samaritan Ark Cloud Services team",
  dateLabel: 'September 2026',
  title: "Samaritan's Purse — Observations and Future Work",
  eyebrow: 'Proposal to Samaritan’s Purse',
  subtitle:
    'Samaritan Ark Cloud: what the platform already is, what implementation sessions cannot carry, and three pieces of future work.',
}

export const incidentYears = [
  { year: '2017', count: 1, peak: false },
  { year: '2018', count: 2, peak: false },
  { year: '2019', count: 1, peak: false },
  { year: '2020', count: 4, peak: true },
  { year: '2021', count: 5, peak: true },
  { year: '2022', count: 7, peak: true },
  { year: '2023', count: 3, peak: false },
  { year: '2024', count: 2, peak: false },
] as const

export const cutSurfaces = [
  { label: 'Social & video', count: 10, color: '#1e4d7b' },
  { label: 'Banks & payments', count: 5, color: '#c4704a' },
  { label: 'Venues & ads', count: 4, color: '#2f6f73' },
  { label: 'Web host & domain', count: 2, color: '#c4a35a' },
  { label: 'Retail & donations', count: 2, color: '#3f7a5a' },
] as const

export const reportedCases = [
  {
    when: '2017',
    who: 'Dozens of Catholic pages',
    what: 'Facebook pages',
    source: 'Christian Post / contemporaneous coverage',
  },
  {
    when: '2018–20',
    who: 'Billy Graham Evangelistic Association / Franklin Graham',
    what: 'UK bus ads; every booked UK arena (2020). Glasgow venue later ordered to pay ~£97k (2022)',
    source: 'BBC, NYT, Christian Institute, Glasgow Sheriff Court',
  },
  {
    when: '2019',
    who: 'Alliance Defending Freedom',
    what: 'AmazonSmile donation eligibility',
    source: 'Contemporaneous ministry / press reports',
  },
  {
    when: '2020',
    who: 'Timothy Two Project International; Core Issues Trust',
    what: 'Bank of America account; Barclays accounts',
    source: 'Debanking letters / compilations',
  },
  {
    when: '2021',
    who: 'LifeSiteNews; Focus on the Family Daily Citizen; Ryan T. Anderson',
    what: 'YouTube channel; Facebook; Twitter; Amazon book removal',
    source: 'House/Napa compilation; Family Policy Alliance; USA Today',
  },
  {
    when: '2022',
    who: 'Texas Right to Life; Live Action; CatholicVote; EWTN; Ruth Institute; Warriors for Christ',
    what: 'GoDaddy site; TikTok; YouTube videos and channels',
    source: 'NPR; House/Napa compilation; ministry statements',
  },
  {
    when: '2022–23',
    who: 'Moms for Liberty; Indigenous Advance + supporting church; Voice of the Voiceless; Restored Hope Network',
    what: 'PayPal freeze; Bank of America closures; Meta pages',
    source: 'CBN / state coverage; Christian Post; ministry statements',
  },
] as const

export const effortRows = [
  {
    work: 'Tenant setup and first VM / namespace',
    inSessions: true,
    effort: 'Covered by Ark',
    hoursLow: 32,
    hoursHigh: 64,
  },
  {
    work: 'Discovery, target architecture, service replacement',
    inSessions: false,
    effort: '80–280 hrs',
    hoursLow: 80,
    hoursHigh: 280,
  },
  {
    work: 'IaC / pipeline rewrite, data move, cutover',
    inSessions: false,
    effort: '140–450 hrs',
    hoursLow: 140,
    hoursHigh: 450,
  },
  {
    work: 'Security evidence, runbooks, 30-day hypercare',
    inSessions: false,
    effort: '70–180 hrs',
    hoursLow: 70,
    hoursHigh: 180,
  },
] as const

export const contractSurfaces = [
  {
    title: 'Platform',
    body: 'Surge capacity next to the Ark team or a partner platform team — OpenStack, Kubernetes, GitOps, identity, observability — then a written step-down.',
  },
  {
    title: 'Products',
    body: 'Managed site hosting and the applications that must stay up every day: public sites, campaign pages, giving endpoints.',
  },
  {
    title: 'Partner development',
    body: 'Stand up the next ministry tenant the way the last one should have been stood up — patterns, landing zones, runbooks — so each new partner does not invent the path again.',
  },
] as const

export const contractSeasons = [
  {
    season: 'Build',
    work: 'Landing zone, first production, partner onboarding patterns',
    shape: 'Higher weekly capacity, paired with the standing team',
  },
  {
    season: 'Stabilize',
    work: 'Hypercare, runbooks, first incidents',
    shape: 'Medium capacity, then handover',
  },
  {
    season: 'Maintain',
    work: 'Patching, certificates, managed sites, quiet partner queue',
    shape: 'Thin retainer that can be raised on notice',
  },
] as const

export const porchTraits = [
  {
    title: 'Form',
    body: 'A ministry, not a hosting company. Donations fund the work.',
  },
  {
    title: 'Door',
    body: 'Free to join if the ministry can sign the statement of faith. That is the terms of service, stated first.',
  },
  {
    title: 'Product',
    body: 'Site, domain, TLS, backups, a giving or contact path. No tenant homework.',
  },
  {
    title: 'Substrate',
    body: 'One small Ark Cloud Services stack, many small sites. Grow only when demand is real.',
  },
  {
    title: 'Relation to the Ark',
    body: 'Complementary. Tenants for production estates leaving AWS / GCP / Azure. Porch for homepages leaving GoDaddy. One partner supporting many smaller partners.',
  },
] as const

export const nextSteps = [
  {
    title: 'Investigate Hosting Ministry/Service',
    body: 'Reach those 95% of ministries offering them an alternative. Statement of faith, thin stack on Ark Cloud Services, donor case. The 95 percent should not wait for the last large estate to finish moving.',
  },
  {
    title: 'Understanding Professional Services',
    body: 'Start an affiliate program that allows for reduced risk and liability.',
  },
  {
    title: 'Pilot elastic contract support against platform, products, and partner development',
    body: 'Write the step-down: build hours, stabilize hours, then a maintenance retainer that can rise on notice.',
  },
] as const

export const proposalNav = [
  { id: 'why', label: 'Requirement' },
  { id: 'incidents', label: 'Sample' },
  { id: 'gap', label: 'Gap' },
  { id: 'contract', label: 'Contract' },
  { id: 'porch', label: 'Porch' },
  { id: 'next', label: 'Next' },
] as const
