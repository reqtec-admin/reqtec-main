'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { products } from '@/data/products'
import { services } from '@/data/services'
import { industries } from '@/data/industries'
import { toSlug } from '@/lib/slug'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)
  const [productsOpen, setProductsOpen] = useState<boolean>(false)
  const [servicesOpen, setServicesOpen] = useState<boolean>(false)
  const [industriesOpen, setIndustriesOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  }, [mobileNavOpen])

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  }, [mobileNavOpen])

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
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
        className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-[800ms] ease-out"
        style={mobileNavOpen ? { maxHeight: '1000px', opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
      >
        <ul className="bg-gray-900/95 backdrop-blur-sm border border-teal-500/20 rounded-lg px-4 py-2 mt-2">
          <li>
            <button
              type="button"
              className="flex items-center justify-center gap-2 font-medium w-full text-gray-300 hover:text-teal-400 py-2 transition duration-150 ease-in-out"
              onClick={() => setProductsOpen((open) => !open)}
            >
              Products
              <span className="text-xs text-gray-500">{productsOpen ? '–' : '+'}</span>
            </button>
            <div
              className="mt-1 mb-2 rounded-md border border-white/10 bg-black/40 overflow-hidden transition-all duration-[800ms] ease-out"
              style={productsOpen ? { maxHeight: '600px', opacity: 1 } : { maxHeight: 0, opacity: 0 }}
            >
              {products.map((product) => (
                <Link
                  key={product.name}
                  href={`/products/${toSlug(product.name)}`}
                  className="block px-4 py-2 text-sm text-gray-300 hover:text-teal-300 hover:bg-white/5 transition"
                  onClick={() => setMobileNavOpen(false)}
                >
                  {product.name}
                </Link>
              ))}
            </div>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center justify-center gap-2 font-medium w-full text-gray-300 hover:text-teal-400 py-2 transition duration-150 ease-in-out"
              onClick={() => setServicesOpen((open) => !open)}
            >
              Services
              <span className="text-xs text-gray-500">{servicesOpen ? '–' : '+'}</span>
            </button>
            <div
              className="mt-1 mb-2 rounded-md border border-white/10 bg-black/40 overflow-hidden transition-all duration-[800ms] ease-out"
              style={servicesOpen ? { maxHeight: '600px', opacity: 1 } : { maxHeight: 0, opacity: 0 }}
            >
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={`/services/${toSlug(service.title)}`}
                  className="block px-4 py-2 text-sm text-gray-300 hover:text-teal-300 hover:bg-white/5 transition"
                  onClick={() => setMobileNavOpen(false)}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center justify-center gap-2 font-medium w-full text-gray-300 hover:text-teal-400 py-2 transition duration-150 ease-in-out"
              onClick={() => setIndustriesOpen((open) => !open)}
            >
              Sectors
              <span className="text-xs text-gray-500">{industriesOpen ? '–' : '+'}</span>
            </button>
            <div
              className="mt-1 mb-2 rounded-md border border-white/10 bg-black/40 overflow-hidden transition-all duration-[800ms] ease-out"
              style={industriesOpen ? { maxHeight: '600px', opacity: 1 } : { maxHeight: 0, opacity: 0 }}
            >
              {industries.map((industry) => (
                <Link
                  key={industry.name}
                  href={`/industries/${toSlug(industry.name)}`}
                  className="block px-4 py-2 text-sm text-gray-300 hover:text-teal-300 hover:bg-white/5 transition"
                  onClick={() => setMobileNavOpen(false)}
                >
                  {industry.name}
                </Link>
              ))}
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}
