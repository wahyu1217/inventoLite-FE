'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { KpiItem } from '../../chart/stock-in-out-chart/types'

const toneClass = {
  default: 'text-foreground',
  danger: 'text-red-600',
  success: 'text-green-600',
  warning: 'text-yellow-600'
}

export function KpiCard({ label, value, tone = 'default' }: KpiItem) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{label}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={cn('text-2xl font-bold', toneClass[tone])}>{value}</div>
      </CardContent>
    </Card>
  )
}
