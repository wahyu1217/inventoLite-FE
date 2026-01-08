import { KpiSection } from '@/components/dashboard/kpi/kpi-section'
import { LowStockAlert } from '@/components/dashboard/alerts/low-stock-alert'
import { StockInOutChart } from '@/components/dashboard/chart/stock-in-out-chart'
import { ActivityTable } from '@/components/dashboard/activity/activity-table'

export default function DashboardPage() {
  const mockLowStock = [
    { id: 1, name: 'Kabel NYM 2x1.5', stock: 2, unit: 'pcs' },
    { id: 2, name: 'Stop Kontak Broco', stock: 4, unit: 'pcs' },
    { id: 3, name: 'Saklar Panasonic', stock: 1, unit: 'pcs' }
  ]
  return (
    <div className="flex flex-1 flex-col gap-6 py-6">
      <KpiSection />

      {/* 🔴 INI ALARM UTAMA */}
      <div className="px-4 lg:px-6">
        <LowStockAlert items={mockLowStock} />
      </div>

      <div className="px-4 lg:px-6">
        <StockInOutChart showRange />
      </div>

      <div className="px-4 lg:px-6">
        <ActivityTable />
      </div>
    </div>
  )
}
