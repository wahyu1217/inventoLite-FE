export type RangeKey = '7D' | '30D' | '3M' | '6M' | '1Y'
export type KpiTone = 'default' | 'danger' | 'success' | 'warning'

export interface KpiItem {
  label: string
  value: string | number
  tone?: KpiTone
}

export interface ActivityItem {
  id: string
  date: string
  type: 'IN' | 'OUT'
  itemName: string
  quantity: number
  user: string
}
