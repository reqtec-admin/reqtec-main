'use client'

import { useEffect, useRef, useState } from 'react'
import { GlassCard } from '@/components/glass-card'
import { ScrollAnimate } from '@/components/scroll-animate'
import {
  CutSurfaceBarChart,
  DeplatformingBarChart,
} from '@/components/samaritan-ark/proposal-charts'
import {
  contractSeasons,
  contractSurfaces,
  effortRows,
  nextSteps,
  porchTraits,
  proposalMeta,
  proposalNav,
  reportedCases,
} from '@/data/samaritan-ark-proposal'
import { cn } from '@/lib/utils'

const NAV_OFFSET_PX = 144

function Section({
  id,
  children,
  className,
}: {
  id: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn('relative z-10 py-20 md:py-28 scroll-mt-[9.5rem]', className)}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">{children}</div>
    </section>
  )
}

function getSectionIdFromScroll() {
  const marker = NAV_OFFSET_PX + 8
  let current = proposalNav[0].id

  for (const item of proposalNav) {
    const el = document.getElementById(item.id)
    if (!el) continue
    if (el.getBoundingClientRect().top - marker <= 0) {
      current = item.id
    }
  }

  return current
}

function ProposalNav({
  activeId,
  onNavigate,
}: {
  activeId: string
  onNavigate: (id: string) => void
}) {
  return (
    <nav
      aria-label="Proposal sections"
      className="fixed top-20 left-0 right-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-xl supports-[backdrop-filter]:bg-black/65"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <ul className="flex flex-nowrap justify-start sm:justify-center gap-1 py-3 overflow-x-auto reqtec-scrollbar">
          {proposalNav.map((item) => {
            const isActive = activeId === item.id
            return (
              <li key={item.id} className="shrink-0">
                <a
                  href={`#${item.id}`}
                  onClick={(event) => {
                    event.preventDefault()
                    onNavigate(item.id)
                  }}
                  className={cn(
                    'whitespace-nowrap rounded-full px-3 py-1.5 text-xs uppercase tracking-widest transition',
                    isActive
                      ? 'bg-teal-500/20 text-teal-200 border border-teal-400/40'
                      : 'text-gray-400 hover:text-gray-200 border border-transparent'
                  )}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

function EffortBar({ low, high, max = 450 }: { low: number; high: number; max?: number }) {
  return (
    <div className="mt-3 h-2.5 rounded-full bg-white/10 overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-teal-500/70 to-sky-400/80"
        style={{ width: `${Math.max(8, (high / max) * 100)}%` }}
      />
      <span className="sr-only">
        Typical effort {low} to {high} hours
      </span>
    </div>
  )
}

export default function SamaritanArkContent() {
  const [activeId, setActiveId] = useState<string>(proposalNav[0].id)
  const navigatingToRef = useRef<string | null>(null)
  const navTimerRef = useRef<number | null>(null)

  const scrollToSection = (id: string, behavior: ScrollBehavior = 'smooth') => {
    const target = document.getElementById(id)
    if (!target) return

    if (navTimerRef.current) {
      window.clearTimeout(navTimerRef.current)
      navTimerRef.current = null
    }

    navigatingToRef.current = id
    setActiveId(id)

    const top = Math.max(0, window.scrollY + target.getBoundingClientRect().top - NAV_OFFSET_PX)
    const instant =
      behavior === 'auto' || window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Native scrollIntoView({ behavior: 'smooth' }) is a no-op here: html and body
    // both compute overflow-y: auto from overflow-x: hidden, so Chrome animates
    // the wrong scroller. window.scrollTo targets the document element correctly.
    if (instant) {
      window.scrollTo(0, top)
    } else {
      window.scrollTo({ top, behavior: 'smooth' })
    }

    navTimerRef.current = window.setTimeout(() => {
      window.history.replaceState(null, '', `#${id}`)
      if (navigatingToRef.current === id) {
        navigatingToRef.current = null
        setActiveId(getSectionIdFromScroll())
      }
      navTimerRef.current = null
    }, instant ? 0 : 1200)
  }

  useEffect(() => {
    const syncActiveFromScroll = () => {
      if (navigatingToRef.current) return
      setActiveId(getSectionIdFromScroll())
    }

    const hash = window.location.hash.replace('#', '')
    if (proposalNav.some((item) => item.id === hash)) {
      requestAnimationFrame(() => scrollToSection(hash, 'auto'))
    } else {
      syncActiveFromScroll()
    }

    window.addEventListener('scroll', syncActiveFromScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', syncActiveFromScroll)
      if (navTimerRef.current) window.clearTimeout(navTimerRef.current)
    }
  }, [])

  return (
    <div className="min-h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 z-0 pointer-events-none object-cover w-full h-full"
        style={{ filter: 'grayscale(100%)', opacity: 0.12 }}
      >
        <source src="/videos/particles.mp4" type="video/mp4" />
      </video>
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75 pointer-events-none" />

      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 z-10">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.28em] text-[#c4a35a] mb-5">
            {proposalMeta.eyebrow}
          </p>
          <div className="mx-auto mb-8 h-px w-24 bg-[#c4a35a]/70" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide mb-6 text-gray-100">
            Gospel work is not leased ground.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {proposalMeta.subtitle}
          </p>
          <p className="mt-8 text-sm uppercase tracking-widest text-gray-500">
            Prepared for {proposalMeta.audience}. {proposalMeta.dateLabel}.
          </p>
          <a
            href="#why"
            onClick={(event) => {
              event.preventDefault()
              scrollToSection('why')
            }}
            className="mt-12 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-teal-300 hover:text-teal-200 transition"
          >
            Read the brief
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <ProposalNav activeId={activeId} onNavigate={scrollToSection} />

      <Section id="why">
        <ScrollAnimate direction="up" delay={80}>
          <p className="text-xs uppercase tracking-widest text-teal-300/80 mb-3">The requirement</p>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-8 text-gray-100">
            The Ark is the right answer to a real problem.
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            <p>
              A ministry can own its VMs, pay its cloud bill, keep its backups — and still be one
              acceptable-use change away from silence if that compute sits on AWS, GCP, Azure, or a
              commercial host that does not share the confession. The Ark exists so Gospel work is
              not leased ground.
            </p>
            <p>
              These observations are offered in that spirit. Implementation sessions (4–8 meetings,
              32–64 hours) are the right introduction to the platform. They are not a migration
              program, a standing surge bench, or a Squarespace replacement. Three pieces of future
              work sit beside those sessions. None of them asks the Ark team to become every
              partner’s resident SRE.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <GlassCard title="Sessions stay in lane">
              <p className="text-gray-300">
                32–64 hours transfer platform literacy. Partners send operators, not only signers.
              </p>
            </GlassCard>
            <GlassCard title="Estates need a SOW">
              <p className="text-gray-300">
                A mid-size production move is hundreds of hours: identity, networking, databases,
                queues, observability, IaC.
              </p>
            </GlassCard>
            <GlassCard title="Most never file a ticket">
              <p className="text-gray-300">
                The other 95 percent do not need OpenStack. They need a porch that will not cancel
                them for preaching the Gospel.
              </p>
            </GlassCard>
          </div>
        </ScrollAnimate>
      </Section>

      <Section id="incidents" className="bg-black/20">
        <ScrollAnimate direction="up" delay={80}>
          <p className="text-xs uppercase tracking-widest text-teal-300/80 mb-3">The sample</p>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-4 text-gray-100">
            Alignment of the host is the product.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl">
            Some accounts were later restored under public pressure. Restoration is not a home. Napa
            Institute testimony to Congress in 2023 described faith-based organizations being taken
            down at least weekly in early 2021, and again after Dobbs. That is why the Ark was
            built.
          </p>

          <GlassCard
            title="Selected ministry & faith-voice deplatformings, 2017–2024"
            description="Peak years in coral. Sample cited in this brief — not a complete inventory."
            className="mb-8"
          >
            <DeplatformingBarChart />
          </GlassCard>

          <GlassCard
            title="The cut is not only “social media”"
            description="A homepage, a cloud account, and a bank relationship are as exposed as a YouTube channel."
            className="mb-8"
          >
            <CutSurfaceBarChart />
          </GlassCard>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-black/40">
            <table className="min-w-full text-left text-sm md:text-base">
              <thead className="text-xs uppercase tracking-widest text-gray-400 border-b border-white/10">
                <tr>
                  <th className="px-4 py-4 font-medium">When</th>
                  <th className="px-4 py-4 font-medium">Who</th>
                  <th className="px-4 py-4 font-medium">What was cut</th>
                  <th className="px-4 py-4 font-medium">Source (public)</th>
                </tr>
              </thead>
              <tbody>
                {reportedCases.map((row) => (
                  <tr key={row.when + row.who} className="border-b border-white/5 last:border-0 align-top">
                    <td className="px-4 py-4 whitespace-nowrap text-[#c4a35a]">{row.when}</td>
                    <td className="px-4 py-4 text-gray-100">{row.who}</td>
                    <td className="px-4 py-4 text-gray-300">{row.what}</td>
                    <td className="px-4 py-4 text-gray-500">{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            The work below is how the Ark covers more than the partners who can already staff a
            tenant.
          </p>
        </ScrollAnimate>
      </Section>

      <Section id="gap">
        <ScrollAnimate direction="up" delay={80}>
          <p className="text-xs uppercase tracking-widest text-teal-300/80 mb-3">1 · Observation</p>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-4 text-gray-100">
            The professional services gap
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
            <p>
              Partners who already “own their compute” are often the ones most sure they are safe.
              They are not — not while that compute still lives on AWS, GCP, or Azure. Moving it
              onto OpenStack is also not a console change. Identity, networking, managed databases,
              queues, serverless, observability, and infrastructure-as-code all have to be rebuilt.
              A mid-size estate is hundreds of hours, not a 32–64 hour onboarding block.
            </p>
            <blockquote className="border-l-2 border-[#c4a35a] pl-6 italic text-gray-200">
              Sessions transfer platform literacy. Professional services transfer production systems
              off a misaligned host.
            </blockquote>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-10">
            <GlassCard title="Implementation sessions">
              <p className="text-5xl font-light tracking-wide text-teal-300 mb-2">32–64</p>
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">hours</p>
              <p className="text-gray-300">
                Tenant setup and first VM / namespace. The right introduction. Not a cutover.
              </p>
            </GlassCard>
            <GlassCard title="Typical production move">
              <p className="text-5xl font-light tracking-wide text-[#c4a35a] mb-2">290–910</p>
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">hours</p>
              <p className="text-gray-300">
                Discover, design, rebuild, rehearse, cut over, hand over. Under contract, not under
                session goodwill.
              </p>
            </GlassCard>
          </div>

          <div className="space-y-4">
            {effortRows.map((row) => (
              <div
                key={row.work}
                className="rounded-2xl border border-white/10 bg-black/40 p-5 md:p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg text-gray-100">{row.work}</h3>
                    <p className="text-sm text-gray-400 mt-1">{row.effort}</p>
                  </div>
                  <span
                    className={cn(
                      'rounded-full px-3 py-1 text-xs uppercase tracking-widest border',
                      row.inSessions
                        ? 'border-teal-400/40 bg-teal-500/15 text-teal-200'
                        : 'border-white/15 bg-white/5 text-gray-400'
                    )}
                  >
                    {row.inSessions ? 'In 32–64 hrs' : 'Not in sessions'}
                  </span>
                </div>
                <EffortBar low={row.hoursLow} high={row.hoursHigh} />
              </div>
            ))}
          </div>

          <p className="mt-10 text-lg text-gray-300 leading-relaxed">
            Future work: keep sessions in their lane. Let a contracted statement of work — discover,
            design, rebuild, rehearse, cut over, hand over — carry partner production estates. That
            protects the Ark team and the partner’s year-end giving in the same motion.
          </p>
        </ScrollAnimate>
      </Section>

      <Section id="contract" className="bg-black/20">
        <ScrollAnimate direction="up" delay={80}>
          <p className="text-xs uppercase tracking-widest text-teal-300/80 mb-3">2 · Future work</p>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-4 text-gray-100">
            Contract support to platform, products, and partner development
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl">
            After a partner moves — and while the Ark itself is still being productized — the need
            is people who can appear for a build and leave for maintain. A permanent senior bench
            sized for a six-month spike is idle cost in the maintain season. Leaving production on
            implementation-session goodwill is how partners underspend and the platform team
            overextends.
          </p>

          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {contractSurfaces.map((surface) => (
              <GlassCard key={surface.title} title={surface.title}>
                <p className="text-gray-300">{surface.body}</p>
              </GlassCard>
            ))}
          </div>

          <h3 className="text-2xl font-light tracking-wide text-gray-100 mb-6">Written to shrink</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {contractSeasons.map((season, index) => (
              <div key={season.season} className="rounded-2xl border border-white/10 bg-black/40 p-6">
                <p className="text-xs uppercase tracking-widest text-[#c4a35a] mb-2">
                  {String(index + 1).padStart(2, '0')} · {season.season}
                </p>
                <p className="text-gray-100 mb-3">{season.work}</p>
                <p className="text-sm text-gray-400">{season.shape}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-lg text-gray-300 leading-relaxed">
            This is a cost-saving design for partners and a load-shedding design for the Ark.
            Samaritan’s Purse remains the platform owner. The contractor works inside that authority
            and is written to shrink when the effort is complete.
          </p>
        </ScrollAnimate>
      </Section>

      <Section id="porch">
        <ScrollAnimate direction="up" delay={80}>
          <p className="text-xs uppercase tracking-widest text-teal-300/80 mb-3">3 · Future work</p>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-4 text-gray-100">
            Hosting for the other 95 percent
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
            <p>
              Most ministries will never file a migration ticket. They have no computing infrastructure to move.
              Their entire digital life is a theme, a domain, a mailbox, and a giving widget on
              companies that do not share their confession. They do not need OpenStack literacy.
              They need a Squarespace / Wix / GoDaddy alternative that will not cancel them for
              preaching the Gospel.
            </p>
            <p>
              The 5 percent who do have infrastructure are not in a different category of risk. They are
              often still guests on AWS, GCP, or Azure. Owning the VMs is not owning the platform.
            </p>
          </div>

          <GlassCard
            title="Owning compute is not the same as owning the platform"
            description="Both groups are one policy change away from silence if the host does not share the confession."
            className="mb-8"
          >
            <div className="flex h-20 overflow-hidden rounded-2xl border border-white/10">
              <div className="flex w-[14%] min-w-[4.5rem] items-center justify-center bg-teal-500/25 text-lg font-light text-teal-200 border-r border-teal-400/30">
                5%
              </div>
              <div className="flex flex-1 items-center bg-[#c4a35a]/20 px-5 text-sm md:text-base text-gray-200">
                95% no owned compute — Squarespace, Wix, GoDaddy, a giving widget
              </div>
            </div>
            <div className="mt-4 grid gap-2 text-sm text-gray-400 md:grid-cols-2">
              <p>Often still on AWS / GCP / Azure</p>
              <p className="md:text-right">Never had a tenant to lose — only a theme and a domain</p>
            </div>
          </GlassCard>

          <GlassCard
            title="Two populations — two hosting answers"
            description="Same aligned substrate. Two products on top. Working estimate — not a census."
            className="mb-8"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-teal-400/30 bg-teal-500/10 p-5">
                <p className="text-3xl font-light text-teal-300 mb-1">~5%</p>
                <p className="text-gray-100 mb-2">Have compute to move</p>
                <p className="text-sm text-gray-400">
                  Off misaligned AWS / GCP / Azure onto an Ark tenant. Need professional
                  services.
                </p>
              </div>
              <div className="rounded-2xl border border-[#c4a35a]/40 bg-[#c4a35a]/10 p-5">
                <p className="text-3xl font-light text-[#c4a35a] mb-1">~95%</p>
                <p className="text-gray-100 mb-2">Never had compute</p>
                <p className="text-sm text-gray-400">
                  Off Squarespace / Wix / GoDaddy onto a sister hosting ministry. Need a site,
                  not a tenant.
                </p>
              </div>
            </div>
          </GlassCard>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-6 md:p-8 mb-10">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4 text-center">
              Same aligned substrate
            </p>
            <p className="text-center text-2xl font-light tracking-wide text-gray-100 mb-8">
              Ark Cloud Services
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-teal-400/30 p-5 text-center">
                <p className="text-xs uppercase tracking-widest text-teal-300 mb-2">Tenants</p>
                <p className="text-gray-200">Production estates leaving AWS / GCP / Azure</p>
              </div>
              <div className="rounded-xl border border-[#c4a35a]/40 p-5 text-center">
                <p className="text-xs uppercase tracking-widest text-[#c4a35a] mb-2">The porch</p>
                <p className="text-gray-200">Homepages leaving GoDaddy / Squarespace / Wix</p>
                <p className="text-sm text-gray-400 mt-2">One partner supporting many smaller partners.</p>
              </div>
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            That porch should itself be a ministry: donation-funded, hosted small on Ark Cloud
            Services, free to join at the cost of a public statement of faith. One partner
            supporting many smaller partners. Tiny at first. Grown only as ministries subscribe and
            donors underwrite it. The small church never sees Nova or Neutron.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {porchTraits.map((trait) => (
              <div
                key={trait.title}
                className={cn(
                  'rounded-2xl border border-white/10 bg-black/40 p-5',
                  trait.title === 'Relation to the Ark' && 'md:col-span-2'
                )}
              >
                <h3 className="text-lg text-gray-100 mb-2">{trait.title}</h3>
                <p className="text-gray-400">{trait.body}</p>
              </div>
            ))}
          </div>
        </ScrollAnimate>
      </Section>

      <Section id="next" className="bg-black/20">
        <ScrollAnimate direction="up" delay={80}>
          <p className="text-xs uppercase tracking-widest text-teal-300/80 mb-3">Recommended next steps</p>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-10 text-gray-100">
            Keep the Ark the place, the platform, and the product.
          </h2>
          <ol className="space-y-5 mb-12">
            {nextSteps.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-4 rounded-2xl border border-white/10 bg-black/40 p-5 md:p-6"
              >
                <span className="text-[#c4a35a] text-sm tracking-widest pt-1">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="text-lg text-gray-100 leading-relaxed">{step.title}</p>
                  <p className="text-base text-gray-400 leading-relaxed mt-2">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
            The Ark is already the place, the platform, and the product. Contracted services can
            lift estates off hyperscalers that do not share the confession. A sister ministry can
            take the small. That division of labor is how Samaritan’s Purse covers more of the
            Church than the already-technical.
          </p>
        </ScrollAnimate>
      </Section>

      <Section id="notes">
        <ScrollAnimate direction="up" delay={80}>
          <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-6 text-gray-100">
            Notes on figures and cases
          </h2>
          <div className="space-y-4 text-base text-gray-400 leading-relaxed">
            <p>
              This document is a proposal back to Samaritan’s Purse. It does not speak for the
              organization and does not describe a deficiency in Ark implementation sessions.
              Figures 1–2 count only the publicly reported incidents in the table — a sample, not a
              registry. Some cases were later reversed under pressure. Figures 3–5 belong to the
              hosting argument: compute on a misaligned hyperscaler is still leased ground, and a
              working 5 / 95 split separates tenant-shaped ministries from those with no
              infrastructure. That split is operator judgment, not a published census.
            </p>
            <p>
              Primary sources include BBC News, The New York Times, The Christian Institute /
              Glasgow Sheriff Court (BGEA v. SEC, 2022), House Energy &amp; Commerce / Napa
              Institute compilation (2023), Family Policy Alliance (Daily Citizen / Twitter, 2021),
              NPR (Texas Right to Life / GoDaddy, 2022), and ministry or press accounts of Bank of
              America closures (Timothy Two, 2020; Indigenous Advance, 2023).
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-black/50 p-8 text-center">
            <p className="text-xs uppercase tracking-widest text-[#c4a35a] mb-3">
              Internal proposal · {proposalMeta.dateLabel}
            </p>
            <p className="text-2xl font-light tracking-wide text-gray-100 mb-6">
              Prepared by Requisite Technologies
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:info@reqtec.com" className="btn btn-gradient">
                <span>info@reqtec.com</span>
              </a>
              <a
                href="https://cal.com/reqtec"
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-white/15 text-gray-200 hover:border-teal-400/50"
              >
                Schedule a conversation
              </a>
            </div>
          </div>
        </ScrollAnimate>
      </Section>
    </div>
  )
}
