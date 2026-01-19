'use client'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { AlertTriangle, CheckCircle, Info, XCircle } from 'lucide-react'
import { ModalMessageProps } from './types'

const ICON_MAP = {
  error: XCircle,
  warning: AlertTriangle,
  info: Info,
  success: CheckCircle
}

export function ModalMessage({
  open,
  title,
  description,
  variant = 'error',
  primaryAction,
  secondaryAction,
  onClose
}: ModalMessageProps) {
  const Icon = ICON_MAP[variant]

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm rounded-xl">
        <div className="space-y-4 text-center">
          <div className="flex justify-center">
            <Icon className="h-10 w-10 text-destructive" />
          </div>

          <h2 className="text-lg font-semibold">{title}</h2>

          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>

        <div className="mt-6 flex flex-col gap-2">
          {primaryAction && (
            <Link href={primaryAction.href}>
              <Button className="w-full">{primaryAction.label}</Button>
            </Link>
          )}

          {secondaryAction && (
            <Button variant="ghost" onClick={secondaryAction.onClick}>
              {secondaryAction.label}
            </Button>
          )}

          {/* Kalau tidak ada secondaryAction, tombol close juga opsional */}
          {!secondaryAction && !primaryAction && (
            <Button variant="ghost" onClick={onClose}>
              Tutup
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
