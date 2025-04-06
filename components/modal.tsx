'use client'

import { useState, useRef, Fragment } from 'react'
import type { StaticImageData } from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
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
    <div>

      {/* Static Images */}
        <div>
            <div className="bg-cover h-screen w-screen flex place-items-center before:absolute before:h-[300px] before:w-[480px]  before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute ">
                <Image
                    src={bgImage}
                    alt="Particles" 
                    style={{ objectFit: 'cover' , fill: '100%'}}
                    width={bgImageWidth}
                    height={bgImageHeight}
                    priority
                />
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    style={{ gridArea: '1/1', placeSelf: 'center' }}
                    src={fgImage}
                    alt="REQtec Logo"
                    width={fgImageWidth}
                    height={fgImageHeight}
                    priority
                />
            </div>
        </div>

    </div>
)};
