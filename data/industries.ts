export interface Industry {
  name: string
  tagline: string
  description?: string
  url?: string
  image?: string
}

export const industries: Industry[] = [
  {
    name: 'Finance',
    tagline: 'Secure, compliant, and resilient systems for institutions where reliability is non-negotiable.',
    description:
      'Financial technology demands rigorous security, clear audit trails, and dependable uptime. We apply the same principles behind Enthous.IO by prioritizing reproducible model research, disciplined risk calibration, and governance from data ingestion through deployment. Trusted providers matter because they safeguard sensitive transactions, manage regulatory risk, and keep institutions operating when reliability is non-negotiable. Ethical AI practices are essential in finance, where model bias, opaque decisioning, or careless automation can create real harm for customers and institutions. In financial tech, trusted providers protect transaction integrity, maintain regulatory-grade controls, and keep systems resilient during market volatility. You need partners who can prove audit readiness, document model decisions, and design for compliance from day one, because doing the right thing up front is far less costly than remediating risk after production impact.',
  },
  {
    name: 'Defense',
    tagline: 'Mission-critical technology built for security, compliance, and operational continuity under pressure.',
    description:
      'Defense programs require disciplined controls, secure infrastructure, and careful handling of mission-critical information. Trusted providers are essential to protect operational integrity, ensure compliance, and keep systems resilient under pressure. In defense, trusted providers must secure mission-critical data, enforce least-privilege access, and sustain systems during high-stakes operations. Reliability and compliance are not optional; they are mission requirements.',
  },
  {
    name: 'Health',
    tagline: 'Healthcare-grade solutions that protect patient data and keep care operations dependable.',
    description:
      'Healthcare environments depend on accuracy, privacy, and availability. Trusted providers are vital for protecting patient data, maintaining continuity of care, and meeting strict compliance expectations without introducing operational risk. In health, trusted providers safeguard PHI, maintain clinical uptime, and support compliance without slowing care delivery. The right partner reduces breach risk while keeping workflows dependable for patients and clinicians.',
  },
  {
    name: 'Civics',
    tagline: 'Public-facing systems designed for transparency, reliability, and trust at community scale.',
    description:
      'Civic platforms carry public trust and must remain transparent, secure, and reliable. Trusted providers help ensure data integrity, withstand scrutiny, and keep services available for the communities that depend on them. In civics, trusted providers ensure data integrity, transparency, and service continuity for the public. Systems must remain reliable under scrutiny and resilient against misinformation, tampering, or service disruption.',
  },
  {
    name: 'Nonprofit',
    tagline: 'Mission-focused technology that safeguards donor trust and maximizes operational impact.',
    description:
      'Nonprofit organizations depend on credibility, donor trust, and efficient operations to fulfill their mission. Trusted providers matter because they protect sensitive donor data, ensure reliable services, and help organizations focus resources on impact. In the nonprofit sector, trusted providers safeguard donor information, keep fundraising systems dependable, and support transparency to maintain public confidence. Reliability and data stewardship directly affect mission delivery.',
  },
]
