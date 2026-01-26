'use client'

import { StaticImageData } from 'next/image'
import Image from 'next/image'
import { ReactNode } from 'react'

interface ModalProps {
  bgImage?: StaticImageData
  bgImageWidth?: number
  bgImageHeight?: number
  bgComponent?: ReactNode
  fgImage: StaticImageData
  fgImageWidth: number
  fgImageHeight: number
}

export default function Modal({
  bgImage,
  bgImageWidth,
  bgImageHeight,
  bgComponent,
  fgImage,
  fgImageWidth,
  fgImageHeight
}: ModalProps) {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center pointer-events-none">
      {/* Background */}
      {bgImage ? (
        <Image
          src={bgImage}
          alt="Background Particles"
          style={{ objectFit: 'cover' }}
          width={bgImageWidth}
          height={bgImageHeight}
          priority
          className="absolute inset-0 w-full h-full"
        />
      ) : bgComponent ? (
        <div className="absolute inset-0 w-full h-full">
          {bgComponent}
        </div>
      ) : null}
      
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