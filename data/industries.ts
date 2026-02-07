export interface Industry {
  name: string
  description?: string
  trustedProviderNote?: string
  url?: string
  image?: string
}

export const industries: Industry[] = [
  {
    name: 'Finance',
    description:
      'Financial technology demands rigorous security, clear audit trails, and dependable uptime. Trusted providers matter because they safeguard sensitive transactions, manage regulatory risk, and keep institutions operating when reliability is non-negotiable.',
    trustedProviderNote:
      'In financial tech, a trusted provider protects transaction integrity, maintains regulatory-grade controls, and keeps systems resilient during market volatility. You need partners who can prove audit readiness and prevent downtime that directly impacts revenue.',
  },
  {
    name: 'Defense',
    description:
      'Defense programs require disciplined controls, secure infrastructure, and careful handling of mission-critical information. Trusted providers are essential to protect operational integrity, ensure compliance, and keep systems resilient under pressure.',
    trustedProviderNote:
      'In defense, trusted providers must secure mission-critical data, enforce least-privilege access, and sustain systems during high-stakes operations. Reliability and compliance are not optional; they are mission requirements.',
  },
  {
    name: 'Health',
    description:
      'Healthcare environments depend on accuracy, privacy, and availability. Trusted providers are vital for protecting patient data, maintaining continuity of care, and meeting strict compliance expectations without introducing operational risk.',
    trustedProviderNote:
      'In health, trusted providers safeguard PHI, maintain clinical uptime, and support compliance without slowing care delivery. The right partner reduces breach risk while keeping workflows dependable for patients and clinicians.',
  },
  {
    name: 'Civics',
    description:
      'Civic platforms carry public trust and must remain transparent, secure, and reliable. Trusted providers help ensure data integrity, withstand scrutiny, and keep services available for the communities that depend on them.',
    trustedProviderNote:
      'In civics, trusted providers ensure data integrity, transparency, and service continuity for the public. Systems must remain reliable under scrutiny and resilient against misinformation, tampering, or service disruption.',
  },
  {
    name: 'Nonprofit',
    description:
      'Nonprofit organizations depend on credibility, donor trust, and efficient operations to fulfill their mission. Trusted providers matter because they protect sensitive donor data, ensure reliable services, and help organizations focus resources on impact.',
    trustedProviderNote:
      'In the nonprofit sector, trusted providers safeguard donor information, keep fundraising systems dependable, and support transparency to maintain public confidence. Reliability and data stewardship directly affect mission delivery.',
  },
]
