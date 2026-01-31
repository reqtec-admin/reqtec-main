'use client'

import Link from 'next/link'
import { useState } from 'react'
import PillActionButton from '@/components/pill-action-button'

type PostFloatingActionsProps = {
  ctaLabel: string
  ctaHref: string
  ctaIsExternal: boolean
  showShare: boolean
  xShareUrl: string
  linkedinShareUrl: string
}

type OpenAction = 'contact' | 'share' | 'back' | null

export default function PostFloatingActions({
  ctaLabel,
  ctaHref,
  ctaIsExternal,
  showShare,
  xShareUrl,
  linkedinShareUrl,
}: PostFloatingActionsProps) {
  const [openAction, setOpenAction] = useState<OpenAction>(null)

  const toggleAction = (action: Exclude<OpenAction, null>) => {
    setOpenAction((current) => (current === action ? null : action))
  }

  const isContactOpen = openAction === 'contact'
  const isShareOpen = openAction === 'share'
  const isBackOpen = openAction === 'back'

  return (
    <>
      {ctaLabel && ctaHref && (
        <PillActionButton
          text="CONTACT"
          isOpen={isContactOpen}
          onToggleAction={() => toggleAction('contact')}
          controlsId="post-action-contact"
          align="right"
          openMaxWidthClassName="max-w-[140px]"
          wrapperClassName="fixed bottom-6 right-6 z-20"
        >
          {ctaIsExternal ? (
            <a
              className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/10 bg-black/50 text-gray-100 transition hover:border-sky-400/60 hover:text-white"
              href={ctaHref}
              rel={ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
              target={ctaHref.startsWith('http') ? '_blank' : undefined}
              aria-label="Contact"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
                <path d="M13.5 5.5 12.09 6.91l4.09 4.09H4.5v2h11.68l-4.09 4.09 1.41 1.41 6.5-6.5-6.5-6.5Z" />
              </svg>
            </a>
          ) : (
            <Link
              className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/10 bg-black/50 text-gray-100 transition hover:border-sky-400/60 hover:text-white"
              href={ctaHref}
              aria-label="Contact"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
                <path d="M13.5 5.5 12.09 6.91l4.09 4.09H4.5v2h11.68l-4.09 4.09 1.41 1.41 6.5-6.5-6.5-6.5Z" />
              </svg>
            </Link>
          )}
        </PillActionButton>
      )}

      <PillActionButton
        text="BACK"
        isOpen={isBackOpen}
        onToggleAction={() => toggleAction('back')}
        controlsId="post-action-back"
        align="left"
        reverse
        textClassName="text-right"
        openMaxWidthClassName="max-w-[140px]"
        wrapperClassName="fixed bottom-[5.5rem] left-0 w-full md:bottom-6 md:left-12 md:w-auto z-20 px-4 md:px-0"
      >
        <Link
          className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/10 bg-black/50 text-gray-100 transition hover:border-sky-400/60 hover:text-white"
          href="/posts"
          aria-label="Back to Posts"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 rotate-180" aria-hidden="true" fill="currentColor">
            <path d="M13.5 5.5 12.09 6.91l4.09 4.09H4.5v2h11.68l-4.09 4.09 1.41 1.41 6.5-6.5-6.5-6.5Z" />
          </svg>
        </Link>
      </PillActionButton>

      {showShare && (
        <PillActionButton
          text="SHARE"
          isOpen={isShareOpen}
          onToggleAction={() => toggleAction('share')}
          controlsId="post-action-share"
          align="center"
          breathing
          openMaxWidthClassName="max-w-[160px]"
          iconContainerClassName="gap-2"
          wrapperClassName="fixed bottom-[10rem] right-0 w-full md:bottom-6 md:left-1/2 md:-translate-x-1/2 md:w-auto z-20 px-4 md:px-0"
        >
          <a
            href={xShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/10 bg-black/50 text-gray-100 transition hover:border-sky-400/60 hover:text-white"
            aria-label="Share on X"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
              <path d="M13.46 10.74 20.8 2h-1.74l-6.36 7.57L7.62 2H2.5l7.7 11.19L2.5 22h1.74l6.71-7.98L16.38 22h5.12l-8.04-11.26Zm-2.35 2.79-.78-1.11L4.66 3.8h2.33l4.58 6.5.78 1.11 5.96 8.45h-2.33l-4.87-6.33Z" />
            </svg>
          </a>
          <a
            href={linkedinShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/10 bg-black/50 text-gray-100 transition hover:border-sky-400/60 hover:text-white"
            aria-label="Share on LinkedIn"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.5H9.47V9h3.41v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.39 4.3 5.5v6.24ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm-1.78 13.02h3.55V9H3.56v11.45Z" />
            </svg>
          </a>
        </PillActionButton>
      )}
    </>
  )
}
