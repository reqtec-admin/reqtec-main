'use client'

import { cn } from '@/lib/utils'
import { ScrollAnimate } from './scroll-animate'
import type { ReactNode } from 'react'

interface ArticleSectionProps {
  children: ReactNode
  backgroundImage?: string
  className?: string
  overlay?: boolean
  animate?: boolean
  animationDelay?: number
}

export function ArticleSection({
  children,
  backgroundImage,
  className,
  overlay = true,
  animate = true,
  animationDelay = 0,
}: ArticleSectionProps) {
  const content = (
    <section
      className={cn(
        'relative min-h-screen flex items-center justify-center py-16 md:py-24 overflow-hidden snap-start',
        className
      )}
    >
      {/* Background Image with Grayscale */}
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'grayscale(100%)',
              opacity: 0.15,
            }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full">
        {children}
      </div>
    </section>
  )

  if (animate) {
    return (
      <ScrollAnimate direction="up" delay={animationDelay} threshold={0.2}>
        {content}
      </ScrollAnimate>
    )
  }

  return content
}

