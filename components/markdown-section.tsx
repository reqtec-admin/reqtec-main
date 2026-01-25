import { cn } from '@/lib/utils'
import { ScrollAnimate } from './scroll-animate'
import type { ReactNode } from 'react'

interface MarkdownSectionProps {
  children: ReactNode
  className?: string
  animate?: boolean
  animationDelay?: number
}

export function MarkdownSection({
  children,
  className,
  animate = true,
  animationDelay = 0,
}: MarkdownSectionProps) {
  const content = (
    <section
      className={cn(
        'relative py-16 md:py-24 snap-start',
        className
      )}
    >
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
