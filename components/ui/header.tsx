import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'

import logo from '@/public/images/REQtec-icon-white.png'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="REQtec">
              <Image className="rounded-full" src={logo} width={48} height={48} alt="Logo" />
            </Link>

          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/our-work"
                  className="font-medium text-gray-300 hover:text-teal-400 px-4 py-3 flex items-center gap-2 transition duration-150 ease-in-out"
                >
                  Our Work
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href="/the-challenge"
                  className="font-medium text-gray-300 hover:text-teal-400 px-4 py-3 flex items-center gap-2 transition duration-150 ease-in-out"
                >
                  The Challenge
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href="/our-vision"
                  className="font-medium text-gray-300 hover:text-teal-400 px-4 py-3 flex items-center gap-2 transition duration-150 ease-in-out"
                >
                  Our Vision
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
