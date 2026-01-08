'use client'
import { useMemo, useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartRangeSelector } from './chart-range-selector'
import type { RangeKey } from './types'
import { StockChartPoint } from '@/types/StockChartPoint'

type Props = {
  title?: string
  data?: StockChartPoint[]
  showRange?: boolean
}

// 🔹 MOCK DATA PER RANGE (nanti ganti API)
const dataMap: Record<RangeKey, StockChartPoint[]> = {
  '7D': [
    { date: '01 Dec', stockIn: 40, stockOut: 24 },
    { date: '02 Dec', stockIn: 30, stockOut: 18 },
    { date: '03 Dec', stockIn: 32, stockOut: 20 },
    { date: '04 Dec', stockIn: 27, stockOut: 21 },
    { date: '05 Dec', stockIn: 29, stockOut: 18 }
  ],
  '30D': [
    { date: 'Week 1', stockIn: 120, stockOut: 98 },
    { date: 'Week 2', stockIn: 140, stockOut: 110 },
    { date: 'Week 3', stockIn: 132, stockOut: 125 },
    { date: 'Week 4', stockIn: 150, stockOut: 130 }
  ],
  '3M': [],
  '6M': [],
  '1Y': []
}

// 🔑 Custom dot
function ChartDot({ cx, cy, stroke }: any) {
  if (cx === null || cy === null) return null
  return (
    <circle cx={cx} cy={cy} r={5} fill={stroke} stroke="hsl(var(--background))" strokeWidth={2} />
  )
}

// 🔑 Tooltip custom
function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null

  return (
    <div className="rounded-md border bg-background px-3 py-2 text-sm shadow-md">
      <p className="mb-1 font-medium">{label}</p>
      <p className="text-primary">
        Stock In: <span className="font-semibold">{payload[0].value}</span>
      </p>
      <p className="text-destructive">
        Stock Out: <span className="font-semibold">{payload[1].value}</span>
      </p>
    </div>
  )
}

export function StockInOutChart({
  title = 'Stock In vs Stock Out',
  data: externalData,
  showRange = false
}: Props) {
  const [range, setRange] = useState<RangeKey>('7D')

  const data = useMemo(() => {
    if (externalData) return externalData
    return dataMap[range]
  }, [range, externalData])

  const hasData = data.length > 0

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{title}</CardTitle>
        {showRange && <ChartRangeSelector value={range} onChange={setRange} />}
      </CardHeader>

      <CardContent className="h-[340px]">
        {hasData ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 32, right: 16, left: 0, bottom: 0 }}>
              <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tick={{
                  fill: 'var(--foreground)',
                  fontSize: 12
                }}
              />

              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{
                  fill: 'var(--muted-foreground)',
                  fontSize: 12
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                verticalAlign="top"
                align="center"
                wrapperStyle={{
                  paddingBottom: 12
                }}
              />

              <Line
                type="monotone"
                dataKey="stockIn"
                name="Stock In"
                stroke="var(--success)"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6 }}
                isAnimationActive={false}
              />

              <Line
                type="monotone"
                dataKey="stockOut"
                name="Stock Out"
                stroke="var(--error)"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6 }}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            No data available for selected range
          </div>
        )}
      </CardContent>
    </Card>
  )
}
