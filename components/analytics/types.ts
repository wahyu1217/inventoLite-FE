export type StockMovementPoint = {
  date: string
  stockIn: number
  stockOut: number
}

export type ItemMovement = {
  name: string
  qty: number
}

export type PeriodKey = '7D' | '30D' | '3M' | '6M' | '1Y'

export type AnalyticsFilter = {
  period: PeriodKey
  itemId: string // 'ALL' | itemId
  warehouseId: string // 'ALL' | warehouseId
}
