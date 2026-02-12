'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const checkScroll = () => {
      const { scrollY, innerHeight } = window
      const scrollHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      )
      const hasMoreBelow = scrollHeight > innerHeight + 50
      const canScrollDown = scrollY + innerHeight < scrollHeight - 20
      setVisible(hasMoreBelow && canScrollDown)
    }

    // Run immediately and again after layout/resources load
    checkScroll()
    const timeoutId = setTimeout(checkScroll, 500)
    const lateTimeoutId = setTimeout(checkScroll, 1500) // Catch slow-rendering pages (animations, etc.)
    window.addEventListener('load', checkScroll)

    window.addEventListener('scroll', checkScroll, { passive: true })
    window.addEventListener('resize', checkScroll)
    return () => {
      clearTimeout(timeoutId)
      clearTimeout(lateTimeoutId)
      window.removeEventListener('load', checkScroll)
      window.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [pathname])

  if (!visible) return null

  return (
    <div
      className="fixed bottom-20 inset-x-0 flex justify-center z-[100] pointer-events-none"
      aria-hidden="true"
    >
      <span className="animate-bounce block">
      <svg
        width="16"
        height="10"
        viewBox="0 0 20 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white/70"
      >
        <path
          d="M2 2L10 10L18 2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      </span>
    </div>
  )
}
