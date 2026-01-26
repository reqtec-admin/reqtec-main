import { Fragment } from 'react'
import { Dialog as HeadlessDialog } from '@headlessui/react'
import { cn } from '@/lib/utils'

interface DialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  return (
    <HeadlessDialog open={open} onClose={onOpenChange} className="relative z-50">
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Fragment>{children}</Fragment>
      </div>
    </HeadlessDialog>
  )
}

interface DialogContentProps {
  children: React.ReactNode
  className?: string
}

export function DialogContent({ children, className }: DialogContentProps) {
  return (
    <HeadlessDialog.Panel
      className={cn(
        'w-full rounded-lg p-6 shadow-xl',
        className
      )}
    >
      {children}
    </HeadlessDialog.Panel>
  )
}

interface DialogHeaderProps {
  children: React.ReactNode
  className?: string
}

export function DialogHeader({ children, className }: DialogHeaderProps) {
  return <div className={cn('mb-4', className)}>{children}</div>
}

interface DialogTitleProps {
  children: React.ReactNode
  className?: string
}

export function DialogTitle({ children, className }: DialogTitleProps) {
  return (
    <HeadlessDialog.Title className={cn('text-lg font-semibold', className)}>
      {children}
    </HeadlessDialog.Title>
  )
}
