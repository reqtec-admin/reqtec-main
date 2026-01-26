import logo from '@/public/images/REQtec-logo-white.png'
import Head from 'next/head'
import Modal from './modal'
import ParticleCanvas from './ParticleCanvas'

export default function Hero() {
  return (
    <section>
      <Modal 
        bgComponent={<ParticleCanvas width={1200} height={1080} />}
        fgImage={logo}
        fgImageWidth={1024}
        fgImageHeight={576}
      />

      {/* Content with padding */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="max-w-3xl mx-auto text-center pt-32 pb-10 md:pt-40 md:pb-16">
          <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-4" data-aos="fade-up">REQUISITE TECHNOLOGIES</h1>
          <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">
            Technology with a Clear Conscience.
          </p>
          {/* Contact button hidden for now */}
        </div>
      </div>
    </section>
  )
}
