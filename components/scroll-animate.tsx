'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface ScrollAnimateProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'fade'
  threshold?: number
}

export function ScrollAnimate({
  children,
  className,
  delay = 0,
  direction = 'up',
  threshold = 0.1,
}: ScrollAnimateProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setTimeout(() => {
              setIsVisible(true)
              setHasAnimated(true)
            }, delay)
          }
        })
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay, threshold, hasAnimated])

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'translate-y-12 opacity-0'
        case 'down':
          return '-translate-y-12 opacity-0'
        case 'fade':
          return 'opacity-0'
        default:
          return 'translate-y-12 opacity-0'
      }
    }
    return 'translate-y-0 opacity-100'
  }

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-1000 ease-out',
        getAnimationClass(),
        className
      )}
    >
      {children}
    </div>
  )
}


