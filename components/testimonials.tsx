import Image from 'next/image'
import { GlassCard } from './glass-card'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-teal-500/20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-4">Don't take our word for it</h2>
            <p className="text-xl text-gray-400">Hear from a few previous clients about our services.</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-stretch lg:max-w-none">

            {/* 1st testimonial */}
            <GlassCard className="flex flex-col h-full" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full grayscale" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-teal-400" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-base text-gray-400 grow">— I am incredibly grateful to Aaron for his generous contribution of time and expertise in providing software consultancy for my new nonprofit. His deep knowledge, problem-solving skills, and commitment to excellence played a crucial role in helping us establish a strong technological foundation. He went above and beyond to ensure we had the right systems in place, offering innovative solutions that streamlined our operations and improved efficiency. </blockquote>
              <div className="text-gray-500 font-medium mt-6 pt-5 border-t border-teal-500/20">
                <cite className="text-gray-200 not-italic">Gina T. </cite> - <a className="text-teal-400 hover:text-teal-300 transition duration-150 ease-in-out" href="#0">Nonprofit Professional</a>
              </div>
            </GlassCard>

            {/* 2nd testimonial */}
            <GlassCard className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full grayscale" src={TestimonialImage02} width={48} height={48} alt="Testimonial 02" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-teal-400" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-base text-gray-400 grow">— I have known Aaron Gilliland personally and professionally for several years.  He is one of the smartest, highly talented and most professional people I know.  He eagerly supported my campaign for the Nebraska Legislature from the very beginning. I would highly recommend Aaron to my friends, family and colleagues for any and all software- or computer-based needs. I will be forever grateful for the outstanding support Aaron provided.</blockquote>
              <div className="text-gray-500 font-medium mt-6 pt-5 border-t border-teal-500/20">
                <cite className="text-gray-200 not-italic">Bob A.</cite> - <a className="text-teal-400 hover:text-teal-300 transition duration-150 ease-in-out" href="#0">Business Owner and Legislator</a>
              </div>
            </GlassCard>

            {/* 3rd testimonial */}
            <GlassCard className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full grayscale" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-teal-400" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-base text-gray-400 grow">— During my recent campaign for the school board, their expertise in web services, graphic design, and technical problem-solving played a key role in our success. In addition, his creativity, attention to detail, and ability to bring ideas to life were invaluable. His ability to leverage technology effectively, streamline processes, and deliver high-quality solutions was truly impressive. I have no doubt that his skills and professionalism will be a tremendous asset to any business in need of software and technology consulting.</blockquote>
              <div className="text-gray-500 font-medium mt-6 pt-5 border-t border-teal-500/20">
                <cite className="text-gray-200 not-italic">Pat B.</cite> - <a className="text-teal-400 hover:text-teal-300 transition duration-150 ease-in-out" href="#0">Actuarial Professional</a>
              </div>
            </GlassCard>

          </div>

        </div>
      </div>
    </section>
  )
}
