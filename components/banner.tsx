'use client'

import { useState } from 'react'

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(true)

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-6 right-0 w-full md:bottom-6 md:right-12 md:w-auto z-50 px-4 md:px-0 flex justify-center md:justify-end">
          <a
            className="reqtec-modal-glow cta-unroll flex items-center justify-center gap-0 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm text-gray-300 shadow-lg backdrop-blur transition-all hover:gap-3 hover:border-sky-400/60 hover:text-white"
            href="mailto:info@reqtec.com"
            target="_blank"
            rel="noreferrer"
          >
            <span className="cta-unroll-text uppercase tracking-widest text-xs text-gray-400">Speak to a consultant now</span>
            <span className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/10 bg-black/50 text-gray-100 transition hover:border-sky-400/60 hover:text-white">
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
                <path d="M13.5 5.5 12.09 6.91l4.09 4.09H4.5v2h11.68l-4.09 4.09 1.41 1.41 6.5-6.5-6.5-6.5Z" />
              </svg>
            </span>
          </a>
        </div>
      )}
    </>
  )
}
