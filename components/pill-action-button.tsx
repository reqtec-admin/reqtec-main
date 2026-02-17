'use client'

import { ReactNode } from 'react'

type PillActionButtonProps = {
  text: string
  isOpen: boolean
  onToggleAction: () => void
  controlsId: string
  align?: 'left' | 'center' | 'right'
  breathing?: boolean
  reverse?: boolean
  openMaxWidthClassName?: string
  wrapperClassName?: string
  buttonClassName?: string
  textClassName?: string
  iconContainerClassName?: string
  children: ReactNode
}

export default function PillActionButton({
  text,
  isOpen,
  onToggleAction,
  controlsId,
  align = 'center',
  breathing = false,
  reverse = false,
  openMaxWidthClassName = 'max-w-[140px]',
  wrapperClassName,
  buttonClassName,
  textClassName,
  iconContainerClassName,
  children,
}: PillActionButtonProps) {
  const alignmentClass =
    align === 'left'
      ? 'justify-end md:justify-start'
      : align === 'right'
        ? 'justify-end md:justify-end'
        : 'justify-end md:justify-center'

  return (
    <div className={`flex ${alignmentClass} ${wrapperClassName ?? ''}`.trim()}>
      <button
        type="button"
        className={`reqtec-modal-glow cta-unroll flex items-center rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm text-gray-300 shadow-lg backdrop-blur transition hover:border-sky-400/60 hover:text-white ${
          isOpen ? 'justify-start gap-3' : 'justify-center gap-0'
        } ${reverse ? 'flex-row-reverse' : ''} ${breathing ? 'share-bounce' : ''} ${buttonClassName ?? ''}`.trim()}
        onClick={onToggleAction}
        aria-expanded={isOpen}
        aria-controls={controlsId}
      >
        <span className={`cta-unroll-text uppercase tracking-widest text-xs text-gray-400 ${textClassName ?? ''}`.trim()}>
          {text}
        </span>
        <span
          id={controlsId}
          className={`flex items-center overflow-hidden transition-all duration-[800ms] ease-out ${
            isOpen ? `${openMaxWidthClassName} opacity-100` : 'max-w-0 min-w-0 opacity-0 pointer-events-none'
          } ${iconContainerClassName ?? ''}`.trim()}
          aria-hidden={!isOpen}
        >
          {children}
        </span>
      </button>
    </div>
  )
}
