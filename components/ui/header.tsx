import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'

import logo from '@/public/images/REQtec-logo-white.png'
import { products } from '@/data/products'
import { services } from '@/data/services'
import { industries } from '@/data/industries'
import { toSlug } from '@/lib/slug'

export default function Header() {
  const productLinks = products.map((product) => ({
    label: product.name,
    href: `/products/${toSlug(product.name)}`,
  }))
  const serviceLinks = services.map((service) => ({
    label: service.name,
    href: `/services/${toSlug(service.name)}`,
  }))
  const industryLinks = industries.map((industry) => ({
    label: industry.name,
    href: `/industries/${toSlug(industry.name)}`,
  }))

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="REQtec">
              <Image src={logo} width={120} height={48} alt="REQtec Logo" className="h-12 w-auto" />
            </Link>

          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li className="relative group">
                <button
                  type="button"
                  className="px-4 py-3 text-xs uppercase tracking-widest text-gray-400 transition duration-150 ease-in-out hover:text-gray-200"
                >
                  Products |
                </button>
                <div className="absolute right-0 top-full w-64 pt-2 opacity-0 max-h-0 translate-y-1 pointer-events-none transition-all duration-[800ms] ease-out group-hover:opacity-100 group-hover:max-h-96 group-hover:translate-y-0 group-hover:pointer-events-auto">
                  <div className="rounded-lg border border-white/10 bg-black/90 backdrop-blur-lg shadow-lg overflow-hidden">
                    <ul className="py-2">
                      {productLinks.map((item) => (
                        <li key={item.href} className="group/item">
                          <Link
                            href={item.href}
                            className="flex items-center justify-between gap-3 px-4 py-2 text-sm text-gray-300 hover:text-gray-100 hover:bg-white/5 transition"
                          >
                            <span>{item.label}</span>
                            <svg
                              width="10"
                              height="16"
                              viewBox="0 0 12 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-white/70 opacity-0 -translate-x-1 transition-all duration-150 ease-out group-hover/item:opacity-100 group-hover/item:translate-x-0"
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
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <button
                  type="button"
                  className="px-4 py-3 text-xs uppercase tracking-widest text-gray-400 transition duration-150 ease-in-out hover:text-gray-200"
                >
                  Services |
                </button>
                <div className="absolute right-0 top-full w-64 pt-2 opacity-0 max-h-0 translate-y-1 pointer-events-none transition-all duration-[800ms] ease-out group-hover:opacity-100 group-hover:max-h-96 group-hover:translate-y-0 group-hover:pointer-events-auto">
                  <div className="rounded-lg border border-white/10 bg-black/90 backdrop-blur-lg shadow-lg overflow-hidden">
                    <ul className="py-2">
                      {serviceLinks.map((item) => (
                        <li key={item.href} className="group/item">
                          <Link
                            href={item.href}
                            className="flex items-center justify-between gap-3 px-4 py-2 text-sm text-gray-300 hover:text-gray-100 hover:bg-white/5 transition"
                          >
                            <span>{item.label}</span>
                            <svg
                              width="10"
                              height="16"
                              viewBox="0 0 12 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-white/70 opacity-0 -translate-x-1 transition-all duration-150 ease-out group-hover/item:opacity-100 group-hover/item:translate-x-0"
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
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <button
                  type="button"
                  className="px-4 py-3 text-xs uppercase tracking-widest text-gray-400 transition duration-150 ease-in-out hover:text-gray-200"
                >
                  Sectors |
                </button>
                <div className="absolute right-0 top-full w-64 pt-2 opacity-0 max-h-0 translate-y-1 pointer-events-none transition-all duration-[800ms] ease-out group-hover:opacity-100 group-hover:max-h-96 group-hover:translate-y-0 group-hover:pointer-events-auto">
                  <div className="rounded-lg border border-white/10 bg-black/90 backdrop-blur-lg shadow-lg overflow-hidden">
                    <ul className="py-2">
                      {industryLinks.map((item) => (
                        <li key={item.href} className="group/item">
                          <Link
                            href={item.href}
                            className="flex items-center justify-between gap-3 px-4 py-2 text-sm text-gray-300 hover:text-gray-100 hover:bg-white/5 transition"
                          >
                            <span>{item.label}</span>
                            <svg
                              width="10"
                              height="16"
                              viewBox="0 0 12 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-white/70 opacity-0 -translate-x-1 transition-all duration-150 ease-out group-hover/item:opacity-100 group-hover/item:translate-x-0"
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
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}




