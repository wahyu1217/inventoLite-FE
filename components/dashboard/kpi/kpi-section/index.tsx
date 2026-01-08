import { KpiCard } from '../kpi-card'
import type { KpiItem } from '../../chart/stock-in-out-chart/types'

const mockKpis: KpiItem[] = [
  { label: 'Total Items', value: 128 },
  { label: 'Low Stock', value: 6, tone: 'danger' },
  { label: 'Stock Value', value: 'Rp 124.000.000' },
  { label: 'Today Transactions', value: 14 }
]

export function KpiSection() {
  return (
    <div className="grid gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
      {mockKpis.map(kpi => (
        <KpiCard key={kpi.label} {...kpi} />
      ))}
    </div>
  )
}
