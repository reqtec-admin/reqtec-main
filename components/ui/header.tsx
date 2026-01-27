import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'

import logo from '@/public/images/REQtec-logo-white.png'

export default function Header() {
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
              <li>
                <Link
                  href="/our-work"
                  className="px-4 py-3 text-xs uppercase tracking-widest text-gray-400 transition duration-150 ease-in-out hover:text-gray-200"
                >
                  OUR work |
                </Link>
              </li>
              <li>
                <Link
                  href="/the-challenge"
                  className="px-4 py-3 text-xs uppercase tracking-widest text-gray-400 transition duration-150 ease-in-out hover:text-gray-200"
                >
                  THE challenge |
                </Link>
              </li>
              <li>
                <Link
                  href="/our-vision"
                  className="px-4 py-3 text-xs uppercase tracking-widest text-gray-400 transition duration-150 ease-in-out hover:text-gray-200"
                >
                  OUR vision |
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
