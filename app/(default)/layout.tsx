'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import PageIllustration from '@/components/page-illustration'
import Footer from '@/components/ui/footer'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') return

    // Check if we're on mobile/phone
    const isMobile = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    
    if (isMobile) {
      // Skip AOS initialization on mobile devices to avoid errors
      return
    }

    try {
      AOS.init({
        once: true,
        disable: 'phone',
        duration: 600,
        easing: 'ease-out-sine',
      })
    } catch (error) {
      // Silently fail if AOS has issues (e.g., with beta version)
      console.warn('AOS initialization error:', error)
    }
  }, [])

  return (
    <>
      <main>
        <PageIllustration />
        {children}
        <Footer />
      </main>
    </>
  )
}
