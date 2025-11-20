'use client'

import { useState } from 'react'

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(true)

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-50 px-4 md:px-0">
          <a
            className="btn btn-gradient text-sm"
            href="mailto:info@reqtec.com"
            target="_blank"
            rel="noreferrer"
          >
            Speak to a consultant now
          </a>
        </div>
      )}
    </>
  )
}
