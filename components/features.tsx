import Link from 'next/link'
import { GlassCard } from './glass-card'

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-4">Our mission is to empower businesses and individuals with reliable, ethical, and high-quality alternative technology solutions.</h2>
            <p className="text-xl text-gray-400">
              Across the last 20 years we have seen a dominance by large tech industry firms that have captured the technology infrastructure sector, while brokering your private data to offer extreme convenience. Now with the advent of Artificial Intelligence and Machine Learning it's vital to use ethical options for your data and solutions, avoiding tech capture while reducing costs. REQtec is a balanced, politically neutral alternative to Google Cloud, AWS, and Azure — delivering agentic AI, cloud migrations, and custom software with no political baggage.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 items-stretch md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <Link href="/industries/defense" className="no-underline">
              <GlassCard 
                className="h-full"
                data-aos="fade-up" 
                data-aos-anchor="[data-aos-id-blocks]"
                icon={
                  <svg className="w-6 h-6" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <path className="stroke-current" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                    <path className="stroke-current" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
                </svg>
                }
                title="Defense Ethos"
              >
                <p className="text-base text-gray-400 text-center">
                  Our team has worked across an array of Defense needs ranging from User Experience to Big Data Analytics, within intelligence production and target acquisition.
                </p>
              </GlassCard>
            </Link>

            {/* 2nd item */}
            <Link href="/the-challenge" className="no-underline">
              <GlassCard 
                className="h-full"
                data-aos="fade-up" 
                data-aos-delay="100" 
                data-aos-anchor="[data-aos-id-blocks]"
                icon={
                  <svg className="w-6 h-6" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <path className="stroke-current" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                    <path className="stroke-current" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
                </svg>
                }
                title="Data Privacy"
              >
                <p className="text-base text-gray-400 text-center">
                  We don't ignore real software risks of retaliation, retribution, and cancellation concerns. Adversarial environments is a modern day reality of mainstream tech solutions.
                </p>
              </GlassCard>
            </Link>

            {/* 3rd item */}
            <Link href="/services/ethical-agentic-ai" className="no-underline">
              <GlassCard 
                className="h-full"
                data-aos="fade-up" 
                data-aos-delay="300" 
                data-aos-anchor="[data-aos-id-blocks]"
                icon={
                  <svg className="w-6 h-6" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                      <path className="stroke-current" d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5" />
                      <circle className="stroke-current" cx="13" cy="9" r="3" />
                  </g>
                </svg>
                }
                title="AI Guidance"
              >
                <p className="text-base text-gray-400 text-center">We guide our clients through complex challenges where the latest tech jargon won't do, but practical revenue generating solutions are needed.</p>
              </GlassCard>
            </Link>

          </div>

        </div>
      </div>
    </section>
  )
}
