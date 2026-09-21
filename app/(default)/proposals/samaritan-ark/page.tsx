import type { Metadata } from 'next'
import SamaritanArkContent from './samaritan-ark-content'

export const metadata: Metadata = {
  title: 'Samaritan Ark — Observations and Future Work',
  description:
    'Internal proposal to Samaritan’s Purse on Samaritan Ark Cloud: the professional services gap, contracted surge support, and a ministry hosting layer for the other 95 percent.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
}

export default function SamaritanArkProposalPage() {
  return <SamaritanArkContent />
}
