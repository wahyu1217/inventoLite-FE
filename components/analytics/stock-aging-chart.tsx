'use client'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const data = [
  { range: '0–30 days', value: 64 },
  { range: '31–60 days', value: 42 },
  { range: '60+ days', value: 22 }
]

export function StockAgingChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Stock Aging Distribution</CardTitle>
      </CardHeader>

      <CardContent className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="range" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="hsl(var(--warning))" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
