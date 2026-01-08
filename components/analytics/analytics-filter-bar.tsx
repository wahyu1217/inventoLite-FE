'use client'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { AnalyticsFilter, PeriodKey } from './types'

type Props = {
  value: AnalyticsFilter
  onChange: (val: AnalyticsFilter) => void
}

const PERIODS: PeriodKey[] = ['7D', '30D', '3M', '6M', '1Y']

export function AnalyticsFilterBar({ value, onChange }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-lg border bg-card p-4">
      {/* Period */}
      <div className="flex items-center gap-2">
        {PERIODS.map(p => (
          <Button
            key={p}
            size="sm"
            variant={value.period === p ? 'default' : 'outline'}
            onClick={() => onChange({ ...value, period: p })}
          >
            {p}
          </Button>
        ))}
      </div>

      <div className="ml-auto flex gap-2">
        <Select value={value.itemId} onValueChange={v => onChange({ ...value, itemId: v })}>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="All Items" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">All Items</SelectItem>
            <SelectItem value="item-1">Kabel NYM 2x1.5</SelectItem>
            <SelectItem value="item-2">Stop Kontak Broco</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={value.warehouseId}
          onValueChange={v => onChange({ ...value, warehouseId: v })}
        >
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="All Warehouses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">All Warehouses</SelectItem>
            <SelectItem value="wh-1">Main Warehouse</SelectItem>
            <SelectItem value="wh-2">Store Front</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
