import { ArticleSection } from '@/components/article-section'

export const metadata = {
  title: 'Investor Relations - REQtec',
  description:
    'Investor information for Requisite Technologies. Learn about our growth trajectory, product portfolio, and seed funding opportunity.',
}

export default function InvestorRelationsPage() {
  return (
    <div className="min-h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 z-0 pointer-events-none object-cover w-full h-full"
        style={{
          filter: 'grayscale(100%)',
          opacity: 0.15,
        }}
      >
        <source src="/videos/particles.mp4" type="video/mp4" />
      </video>
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 z-10 snap-start">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-6 text-gray-100">
            Investor Relations
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Requisite Technologies is a growing, capital-efficient technology company currently seeking seed funding to
            accelerate product delivery and market expansion.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <ArticleSection animationDelay={200}>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-100">Company Overview</h2>
          <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
            <p>
              REQtec is a small, agile technology firm delivering SaaS products, consulting services, custom software,
              and AI-driven solutions for small and medium-sized businesses. Our team operates lean and moves fast,
              guided by a commitment to ethical technology, decentralization, and practical independence from dominant
              tech platforms.
            </p>
          </div>
        </div>
      </ArticleSection>

      {/* Funding Opportunity */}
      <ArticleSection animationDelay={200}>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-100">Seed Funding Opportunity</h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            REQtec is currently seeking seed-stage investment to scale product delivery, expand market reach, and grow
            the team. We are a small but focused group with a proven ability to ship production-quality software on
            minimal capital.
          </p>
          <ul className="space-y-3 text-lg text-gray-300 ml-6 list-disc">
            <li>
              100% of 2025 spending was a strategic reinvestment into product, infrastructure, and launch
              readiness—entirely funded by leadership with zero impact to outside stakeholders.
            </li>
            <li>
              Consulting engagements delivered strong positive cashflow, validating near-term revenue capacity ahead of
              scale.
            </li>
            <li>
              Seed funding will accelerate hiring pipelines, partner activation, paid acquisition, and investor-ready
              materials across the portfolio.
            </li>
            <li>
              The company maintains a capital-efficient operating model with minimal overhead through its remote-first
              structure.
            </li>
          </ul>
        </div>
      </ArticleSection>

      {/* Intellectual Property */}
      <ArticleSection animationDelay={200}>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-100">
            Intellectual Property &amp; Trademarks
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            REQtec has completed trademark filings for its existing brands and is actively pursuing additional filings
            for projects currently in development. Our IP protection strategy includes confidentiality frameworks,
            hardened communications, and structured legal readiness to safeguard our growing portfolio.
          </p>
          <ul className="space-y-3 text-lg text-gray-300 ml-6 list-disc">
            <li>Completed trademark filings on established brands.</li>
            <li>New filings in progress for incubated products entering market.</li>
            <li>Fixed-fee legal structures and internal templates to protect margins and accelerate future filings.</li>
            <li>
              Confidentiality and NDA frameworks in place for all partnerships and consulting engagements.
            </li>
          </ul>
        </div>
      </ArticleSection>

      {/* Product Portfolio */}
      <ArticleSection animationDelay={200}>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-100">Product Portfolio</h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            REQtec operates an incubation model with multiple products at various stages of development and
            go-to-market readiness. Each targets underserved segments of the SMB market.
          </p>
          <ul className="space-y-4 text-lg text-gray-300 ml-6 list-disc">
            <li>
              <strong className="text-gray-200">Commit250</strong> — A guided health improvement experience launched
              in 2025, now mature and market-ready with a fully tested engagement system and cross-platform delivery via
              Expo and EAS.
            </li>
            <li>
              <strong className="text-gray-200">Synergy Integrative</strong> — An integrative health platform unifying
              scheduling, secure data exchange, and practitioner tools with a HIPAA/SOC 2 compliance-first roadmap.
            </li>
            <li>
              <strong className="text-gray-200">Enthous.io</strong> — A financial ML research platform developed in
              partnership with FinML, providing an independent, secure R&amp;D environment for trading strategy
              validation.
            </li>
            <li>
              <strong className="text-gray-200">DEALVR</strong> — A local delivery optimization platform with automated
              inventory, routing, and tracking to help SMB merchants compete with large logistics networks.
            </li>
            <li>
              <strong className="text-gray-200">HANNO</strong> — Migration playbooks and risk assessments guiding
              businesses away from dominant tech stacks toward sovereign alternatives.
            </li>
            <li>
              <strong className="text-gray-200">STARTYR</strong> — An integrated ecosystem of alternative tools with
              managed support and automation, easing the transition to lower-cost, ethical infrastructure.
            </li>
          </ul>
        </div>
      </ArticleSection>

      {/* 2025 Performance */}
      <ArticleSection animationDelay={200}>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-100">
            2025 Performance Highlights
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            2025 was a high-velocity year across product execution and business infrastructure, with strong Q4
            acceleration in partnership and operational readiness.
          </p>
          <ul className="space-y-3 text-lg text-gray-300 ml-6 list-disc">
            <li>
              Commit250 advanced from concept to a launch-ready platform with robust user experience, notification
              systems, and subscription infrastructure.
            </li>
            <li>
              Deep cross-platform delivery capabilities built with Expo and EAS, compressing time-to-market and lowering
              future development risk.
            </li>
            <li>
              Digital presence overhauled with updated brand narrative, new service pages, and improved conversion paths.
            </li>
            <li>
              Insurance coverage, tax planning, and banking aligned with growth milestones.
            </li>
            <li>
              Strategic partnership proposals, demos, and reseller exploration advanced throughout the year.
            </li>
            <li>
              Consulting revenue validated the company&apos;s capacity to generate positive cashflow while
              simultaneously investing in product.
            </li>
          </ul>
        </div>
      </ArticleSection>

      {/* 2026 Strategic Outlook */}
      <ArticleSection animationDelay={200}>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-100">
            2026 Strategic Outlook
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            REQtec&apos;s 2026 strategy centers on agentic automation—autonomous systems that plan, decide, and execute
            tasks with minimal ongoing input. As computing costs continue to fall (40–50% lower than proprietary
            alternatives), SMBs gain access to powerful automation at a fraction of prior prices.
          </p>
          <ul className="space-y-3 text-lg text-gray-300 ml-6 list-disc">
            <li>
              Expanding agentic consulting with tailored assessments, deployment of autonomous agents, and migration
              support via HANNO and STARTYR.
            </li>
            <li>
              Building translation layers—intelligent bridges that convert data formats, APIs, and workflows between
              platforms—reducing vendor migration timelines from months to weeks.
            </li>
            <li>
              Broadening partner and affiliate programs to scale distribution, with a focus on signed commitments and
              co-branded campaigns.
            </li>
            <li>
              Preparing investor communications, hiring pipelines, and internal operations for investor-backed expansion.
            </li>
            <li>
              International market exploration planned for Year 3, with initial geographic targets identified.
            </li>
          </ul>
        </div>
      </ArticleSection>

      {/* Market Opportunity */}
      <ArticleSection animationDelay={200}>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-100">Market Opportunity</h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            The early 2026 tech realignment exposed vulnerabilities in centralized technology providers, creating an
            opening for nimble, independent operators. Growing demand for privacy-focused, decentralized solutions
            positions REQtec favorably as SMBs seek alternatives to restrictive vendor ecosystems.
          </p>
          <ul className="space-y-3 text-lg text-gray-300 ml-6 list-disc">
            <li>
              Primary market: small to mid-sized businesses seeking affordable, ethical technology solutions.
            </li>
            <li>
              Rising adoption of SaaS and AI among SMBs competing with larger firms.
            </li>
            <li>
              Open-source models and broader hardware access are democratizing compute, eroding the pricing power of
              dominant cloud providers.
            </li>
            <li>
              REQtec differentiates through practical independence, personalized service, and flexible architectures that
              evolve with the business.
            </li>
          </ul>
        </div>
      </ArticleSection>

      {/* Contact */}
      <ArticleSection animationDelay={200}>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-100">Contact</h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            For investor inquiries, partnership discussions, or to request additional materials, please reach out
            directly.
          </p>
          <div className="space-y-3 text-lg text-gray-300">
            <p>
              <strong className="text-gray-200">Email:</strong>{' '}
              <a
                href="mailto:info@reqtec.com"
                className="text-teal-400 hover:text-teal-300 transition underline underline-offset-4"
              >
                info@reqtec.com
              </a>
            </p>
            <p>
              <strong className="text-gray-200">Schedule a Meeting:</strong>{' '}
              <a
                href="https://cal.com/reqtec"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 transition underline underline-offset-4"
              >
                cal.com/reqtec
              </a>
            </p>
            <p>
              <strong className="text-gray-200">Website:</strong>{' '}
              <a
                href="https://reqtec.com"
                className="text-teal-400 hover:text-teal-300 transition underline underline-offset-4"
              >
                reqtec.com
              </a>
            </p>
          </div>
        </div>
      </ArticleSection>
    </div>
  )
}
