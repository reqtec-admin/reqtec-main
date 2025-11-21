import { GlassCard } from '@/components/glass-card'

export const metadata = {
  title: 'Our Vision - REQtec',
  description: 'Our value proposition as an unbiased solutions provider focused on providing the most decentralized, non-Big Tech solution possible',
}

const services = [
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

const products = [
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

export default function OurVision() {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-4">OUR VISION</h1>
          <p className="text-xl text-gray-400">
            Our value proposition as an unbiased solutions provider focused on providing the most decentralized, non-Big Tech solution possible while respecting your budget and needs.
          </p>
        </div>

        {/* Company Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <GlassCard>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Company Description</h2>
            <div className="space-y-4 text-base text-gray-400">
              <p>
                <strong className="text-gray-200">Name:</strong> Requisite Technologies
              </p>
              <p>
                <strong className="text-gray-200">Founded:</strong> March 2012
              </p>
              <p>
                <strong className="text-gray-200">Location:</strong> Remote-first with a small headquarters in Omaha, NE
              </p>
              <p>
                <strong className="text-gray-200">Legal Structure:</strong> S-Corp
              </p>
              <p className="pt-4">
                <strong className="text-gray-200">Vision:</strong> To deliver cutting-edge technology solutions that uphold traditional values and foster trust in an era dominated by big tech monopolies.
              </p>
              <p>
                <strong className="text-gray-200">Mission:</strong> Provide small businesses, mid-sized enterprises, and individuals with affordable, ethical, and customized tech solutions that enhance productivity and innovation without compromising integrity.
              </p>
            </div>
          </GlassCard>
        </div>

        {/* Products and Services */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-8 text-center">Products and Services</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <GlassCard
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                title={service.title}
              >
                <p className="text-base text-gray-400">{service.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Planned Products */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-8 text-center">Planned Products</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product, index) => (
              <GlassCard
                key={product.name}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                title={product.name}
              >
                <p className="text-base text-gray-400 mb-4">{product.description}</p>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="text-gray-500">Competition: </span>
                    <span className="text-gray-300">{product.competition}</span>
                  </p>
                  <p>
                    <span className="text-gray-500">Launch: </span>
                    <span className="text-gray-300">{product.launch}</span>
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

