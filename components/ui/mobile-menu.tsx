'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { products } from '@/data/products'
import { services } from '@/data/services'
import { industries } from '@/data/industries'
import { toSlug } from '@/lib/slug'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)
  const [openSection, setOpenSection] = useState<'products' | 'services' | 'industries' | null>(null)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return
      setMobileNavOpen(false)
      setOpenSection(null)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  }, [mobileNavOpen])

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return
      setMobileNavOpen(false)
      setOpenSection(null)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  }, [mobileNavOpen])

  // close mobile nav and reset accordions after route changes
  useEffect(() => {
    setMobileNavOpen(false)
    setOpenSection(null)
  }, [pathname])

  const toggleMenu = () => {
    setMobileNavOpen((open) => {
      const nextOpen = !open
      if (!nextOpen) setOpenSection(null)
      return nextOpen
    })
  }

  const toggleSection = (section: 'products' | 'services' | 'industries') => {
    setOpenSection((current) => (current === section ? null : section))
  }

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={toggleMenu}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-out"
        style={mobileNavOpen ? { maxHeight: '1000px', opacity: 1 } : { maxHeight: 0, opacity: 0 }}
      >
        <ul className="mt-2 rounded-lg border border-white/10 bg-gray-900/95 backdrop-blur-sm px-3 py-2">
          <li className="border-b border-white/10 last:border-b-0">
            <button
              type="button"
              className="flex w-full items-center justify-between py-2.5 px-1 text-left text-xs uppercase tracking-widest text-gray-400 hover:text-gray-200 transition duration-150 ease-in-out"
              onClick={() => toggleSection('products')}
              aria-expanded={openSection === 'products'}
              aria-controls="mobile-products-menu"
            >
              Products
              <svg
                width="16"
                height="10"
                viewBox="0 0 20 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`text-white/70 transition-transform duration-200 ${openSection === 'products' ? 'rotate-180' : ''}`}
                aria-hidden="true"
              >
                <path
                  d="M2 2L10 10L18 2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              id="mobile-products-menu"
              className="mb-2 overflow-hidden rounded-md border border-white/10 bg-black/40 transition-all duration-300 ease-out"
              style={openSection === 'products' ? { maxHeight: '600px', opacity: 1 } : { maxHeight: 0, opacity: 0 }}
            >
              {products.map((product) => (
                <Link
                  key={product.name}
                  href={`/products/${toSlug(product.name)}`}
                  className="group flex items-center justify-between gap-3 px-4 py-2.5 text-sm text-gray-300 hover:text-gray-100 hover:bg-white/5 transition"
                  onClick={() => {
                    setMobileNavOpen(false)
                    setOpenSection(null)
                  }}
                >
                  <span>{product.name}</span>
                  <svg
                    width="10"
                    height="16"
                    viewBox="0 0 12 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white/70 opacity-0 -translate-x-1 transition-all duration-150 ease-out group-hover:opacity-100 group-hover:translate-x-0"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 2L10 10L2 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </li>
          <li className="border-b border-white/10 last:border-b-0">
            <button
              type="button"
              className="flex w-full items-center justify-between py-2.5 px-1 text-left text-xs uppercase tracking-widest text-gray-400 hover:text-gray-200 transition duration-150 ease-in-out"
              onClick={() => toggleSection('services')}
              aria-expanded={openSection === 'services'}
              aria-controls="mobile-services-menu"
            >
              Services
              <svg
                width="16"
                height="10"
                viewBox="0 0 20 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`text-white/70 transition-transform duration-200 ${openSection === 'services' ? 'rotate-180' : ''}`}
                aria-hidden="true"
              >
                <path
                  d="M2 2L10 10L18 2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              id="mobile-services-menu"
              className="mb-2 overflow-hidden rounded-md border border-white/10 bg-black/40 transition-all duration-300 ease-out"
              style={openSection === 'services' ? { maxHeight: '600px', opacity: 1 } : { maxHeight: 0, opacity: 0 }}
            >
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={`/services/${toSlug(service.name)}`}
                  className="group flex items-center justify-between gap-3 px-4 py-2.5 text-sm text-gray-300 hover:text-gray-100 hover:bg-white/5 transition"
                  onClick={() => {
                    setMobileNavOpen(false)
                    setOpenSection(null)
                  }}
                >
                  <span>{service.name}</span>
                  <svg
                    width="10"
                    height="16"
                    viewBox="0 0 12 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white/70 opacity-0 -translate-x-1 transition-all duration-150 ease-out group-hover:opacity-100 group-hover:translate-x-0"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 2L10 10L2 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </li>
          <li className="last:border-b-0">
            <button
              type="button"
              className="flex w-full items-center justify-between py-2.5 px-1 text-left text-xs uppercase tracking-widest text-gray-400 hover:text-gray-200 transition duration-150 ease-in-out"
              onClick={() => toggleSection('industries')}
              aria-expanded={openSection === 'industries'}
              aria-controls="mobile-industries-menu"
            >
              Sectors
              <svg
                width="16"
                height="10"
                viewBox="0 0 20 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`text-white/70 transition-transform duration-200 ${openSection === 'industries' ? 'rotate-180' : ''}`}
                aria-hidden="true"
              >
                <path
                  d="M2 2L10 10L18 2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              id="mobile-industries-menu"
              className="mb-2 overflow-hidden rounded-md border border-white/10 bg-black/40 transition-all duration-300 ease-out"
              style={openSection === 'industries' ? { maxHeight: '600px', opacity: 1 } : { maxHeight: 0, opacity: 0 }}
            >
              {industries.map((industry) => (
                <Link
                  key={industry.name}
                  href={`/industries/${toSlug(industry.name)}`}
                  className="group flex items-center justify-between gap-3 px-4 py-2.5 text-sm text-gray-300 hover:text-gray-100 hover:bg-white/5 transition"
                  onClick={() => {
                    setMobileNavOpen(false)
                    setOpenSection(null)
                  }}
                >
                  <span>{industry.name}</span>
                  <svg
                    width="10"
                    height="16"
                    viewBox="0 0 12 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white/70 opacity-0 -translate-x-1 transition-all duration-150 ease-out group-hover:opacity-100 group-hover:translate-x-0"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 2L10 10L2 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}
