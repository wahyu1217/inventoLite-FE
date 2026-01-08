'use client'
import { useState } from 'react'
import { AnalyticsOverview } from '@/components/analytics/analytics-overview'
import { FastSlowItems } from '@/components/analytics/fast-slow-items'
import { StockAgingChart } from '@/components/analytics/stock-aging-chart'
import { StockInOutChart } from '@/components/dashboard/chart/stock-in-out-chart'
import { AnalyticsFilter } from '@/components/analytics/types'
import { StockChartPoint } from '@/types/StockChartPoint'
import { getMockAnalyticsData } from '@/components/analytics/mock'

const analyticsData: StockChartPoint[] = [
  { date: '01 Dec', stockIn: 400, stockOut: 300 },
  { date: '02 Dec', stockIn: 380, stockOut: 310 },
  { date: '03 Dec', stockIn: 420, stockOut: 330 }
]

export default function Analytics() {
  const [filter, setFilter] = useState<AnalyticsFilter>({
    itemId: 'ALL',
    warehouseId: 'ALL',
    period: '30D'
  })

  // 🔹 nanti diganti API
  const data = getMockAnalyticsData(filter)
  return (
    <div className="flex flex-1 flex-col gap-6 py-6 px-4 lg:px-6">
      <AnalyticsOverview />
      <StockInOutChart title="Stock Movement Trend" data={analyticsData} />
      <FastSlowItems />
      <StockAgingChart />
    </div>
  )
}
