import './css/style.css'

import { Inter, Architects_Daughter, Adamina } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'
import StarField from '@/components/star-field'
import ScrollIndicator from '@/components/scroll-indicator'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const font1 = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

const font2 = Adamina({
  subsets: ['latin'],
  variable: '--font-adamina',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'REQtec',
  description: 'Requisite Technologies (REQtec) is a software solutions firm providing consulting in Cloud, AI/ML, Mobile, and Web Based solutions for your corporations needs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden reqtec-scrollbar">
      <body className={`${inter.variable} ${font1.variable} ${font2.variable} font-inter antialiased text-gray-200 tracking-tight overflow-x-hidden`} suppressHydrationWarning>
        <StarField />
        <div className="reqtec-backdrop flex flex-col min-h-screen relative z-10">
          <Header />
          <div className="pt-20">
            {children}
          </div>
          <Banner />
        </div>
        <ScrollIndicator />
      </body>
    </html>
  )
}
 