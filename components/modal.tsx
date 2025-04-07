'use client'

import { StaticImageData } from 'next/image'
import Image from 'next/image'

interface ModalProps {
  bgImage: StaticImageData
  bgImageWidth: number
  bgImageHeight: number
  fgImage: StaticImageData
  fgImageWidth: number
  fgImageHeight: number
}

export default function Modal({
  bgImage,
  bgImageWidth,
  bgImageHeight,
  fgImage,
  fgImageWidth,
  fgImageHeight
}: ModalProps) {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center">
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Background Particles"
        style={{ objectFit: 'cover' }}
        width={bgImageWidth}
        height={bgImageHeight}
        priority
        className="absolute inset-0 w-full h-full"
      />
      {/* Foreground Image */}
      <Image
        src={fgImage}
        alt="REQtec Logo"
        width={fgImageWidth}
        height={fgImageHeight}
        priority
        className="relative z-10"
      />
    </div>
  )
}