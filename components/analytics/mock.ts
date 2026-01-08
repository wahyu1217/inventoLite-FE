import type { AnalyticsFilter } from './types'
import type { StockChartPoint } from '@/types/StockChartPoint'

// 🔹 BASE DATA (anggap ini data harian)
const BASE_DATA: StockChartPoint[] = [
  { date: '01 Dec', stockIn: 40, stockOut: 24 },
  { date: '02 Dec', stockIn: 30, stockOut: 18 },
  { date: '03 Dec', stockIn: 32, stockOut: 20 },
  { date: '04 Dec', stockIn: 27, stockOut: 21 },
  { date: '05 Dec', stockIn: 29, stockOut: 18 }
]

// 🔹 helper: scaling berdasarkan filter
function applyScale(data: StockChartPoint[], scaleIn: number, scaleOut: number) {
  return data.map(d => ({
    ...d,
    stockIn: Math.round(d.stockIn * scaleIn),
    stockOut: Math.round(d.stockOut * scaleOut)
  }))
}

// 🔹 helper: period mapping
function applyPeriod(data: StockChartPoint[], period: AnalyticsFilter['period']) {
  switch (period) {
    case '7D':
      return data.slice(-5)

    case '30D':
      return data

    case '3M':
      return applyScale(data, 3, 3)

    case '6M':
      return applyScale(data, 6, 6)

    case '1Y':
      return applyScale(data, 12, 12)

    default:
      return data
  }
}

export function getMockAnalyticsData(filter: AnalyticsFilter): StockChartPoint[] {
  let data = [...BASE_DATA]

  // 🔹 Item filter (simulasi kontribusi item)
  if (filter.itemId !== 'ALL') {
    data = applyScale(data, 0.8, 0.9)
  }

  // 🔹 Warehouse filter (simulasi kapasitas gudang)
  if (filter.warehouseId !== 'ALL') {
    data = applyScale(data, 0.7, 0.85)
  }

  // 🔹 Period filter (jumlah / skala data)
  data = applyPeriod(data, filter.period)

  return data
}
