export type ModalMessageVariant = 'error' | 'warning' | 'info' | 'success'

export interface ModalMessageProps {
  open: boolean
  title: string
  description?: string
  variant?: ModalMessageVariant

  primaryAction?: {
    label: string
    href: string
  }

  secondaryAction?: {
    label: string
    onClick: () => void
  }

  onClose: () => void
}
