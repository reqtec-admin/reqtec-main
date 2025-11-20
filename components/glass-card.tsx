import { cn } from '@/lib/utils'
import type { PropsWithChildren, ReactNode } from 'react'

type GlassCardProps = PropsWithChildren<{
  title?: string
  description?: string
  icon?: ReactNode
  className?: string
  headerAction?: ReactNode
}>

export function GlassCard({
  title,
  description,
  icon,
  className,
  headerAction,
  children
}: GlassCardProps) {
  return (
    <section className={cn('reqtec-glass-card overflow-hidden p-6', className)}>
      {(title || description || icon || headerAction) && (
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            {icon && (
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-teal-500/30 bg-teal-500/10 text-teal-400 transition-colors">
                {icon}
              </span>
            )}
            <div>
              {title && <h3 className="font-inter text-xl text-gray-100 font-semibold">{title}</h3>}
              {description && <p className="text-sm text-gray-400">{description}</p>}
            </div>
          </div>
          {headerAction}
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </section>
  )
}

