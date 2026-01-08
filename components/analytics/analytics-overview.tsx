import { KpiCard } from '../dashboard/kpi/kpi-card'

export function AnalyticsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <KpiCard label="Total Transactions (30D)" value={432} tone="success" />
      <KpiCard label="Fast Moving Items" value={18} tone="success" />
      <KpiCard label="Slow Moving Items" value={7} tone="success" />
    </div>
  )
}
