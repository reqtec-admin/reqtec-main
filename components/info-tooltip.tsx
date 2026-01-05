'use client'

import type { ReactNode } from 'react'

interface InfoTooltipProps {
  title: string
  content: ReactNode
  ariaLabel?: string
}

export function InfoTooltip({ title, content, ariaLabel }: InfoTooltipProps) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-teal-400 transition duration-150 ease-in-out cursor-help"
        aria-label={ariaLabel || title}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
      <div className="absolute left-0 top-8 w-80 max-w-[calc(100vw-2rem)] md:max-w-none bg-gray-900/95 backdrop-blur-sm border border-teal-500/30 rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-xl">
        <h5 className="text-lg font-semibold text-gray-100 mb-3">{title}</h5>
        {content}
      </div>
    </div>
  )
}

