import { AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

interface LowStockItem {
  id: number
  name: string
  stock: number
  unit: string
}

// const mockLowStock = [
//   { id: 1, name: 'Kabel NYM 2x1.5', stock: 2, unit: 'pcs' },
//   { id: 2, name: 'Stop Kontak Broco', stock: 4, unit: 'pcs' },
//   { id: 3, name: 'Saklar Panasonic', stock: 1, unit: 'pcs' }
// ]

export function LowStockAlert({ items }: { items: LowStockItem[] }) {
  if (items.length === 0) return null
  return (
    <Card className="border-warning/40 bg-warning/5">
      <CardHeader className="flex flex-row items-center gap-2">
        <AlertTriangle className="h-5 w-5 text-warning" />
        <CardTitle className="text-base">Low Stock Alert</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">{items.length} items need restock</p>

        <ul className="space-y-2 text-sm">
          {items.map(item => (
            <li key={item.id} className="flex justify-between">
              <span>{item.name}</span>
              <span className="font-medium dark:text-warning text-error">
                {item.stock} {item.unit}
              </span>
            </li>
          ))}
        </ul>

        <Link href="/inventory?filter=low-stock">
          <Button variant="outline" size="sm" className="cursor-pointer">
            View all low stock
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
