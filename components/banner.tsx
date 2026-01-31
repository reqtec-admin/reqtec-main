'use client'

import { useState } from 'react'
import PillActionButton from '@/components/pill-action-button'

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(true)
  const [ctaOpen, setCtaOpen] = useState<boolean>(false)

  return (
    <>
      {bannerOpen && (
        <PillActionButton
          text="CONTACT"
          isOpen={ctaOpen}
          onToggleAction={() => setCtaOpen((current) => !current)}
          controlsId="banner-cta-action"
          align="right"
          openMaxWidthClassName="max-w-[140px]"
          wrapperClassName="fixed bottom-6 right-0 w-full md:bottom-6 md:right-12 md:w-auto z-50 px-4 md:px-0"
        >
          <a
            className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/10 bg-black/50 text-gray-100 transition hover:border-sky-400/60 hover:text-white"
            href="mailto:info@reqtec.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Contact REQtec"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
              <path d="M13.5 5.5 12.09 6.91l4.09 4.09H4.5v2h11.68l-4.09 4.09 1.41 1.41 6.5-6.5-6.5-6.5Z" />
            </svg>
          </a>
        </PillActionButton>
      )}
    </>
  )
}
