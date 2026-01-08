import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { ActivityItem } from '../../chart/stock-in-out-chart/types'

const mockActivities: ActivityItem[] = [
  {
    id: '1',
    date: '2025-12-16',
    type: 'OUT',
    itemName: 'Kabel NYM 2x1.5',
    quantity: 10,
    user: 'Admin'
  },
  {
    id: '2',
    date: '2025-12-16',
    type: 'IN',
    itemName: 'Stop Kontak',
    quantity: 25,
    user: 'Warehouse'
  }
]

export function ActivityTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Item</TableHead>
              <TableHead className="text-right">Qty</TableHead>
              <TableHead>User</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockActivities.map(activity => (
              <TableRow key={activity.id}>
                <TableCell>{activity.date}</TableCell>
                <TableCell>
                  <Badge variant={activity.type === 'IN' ? 'default' : 'destructive'}>
                    {activity.type}
                  </Badge>
                </TableCell>
                <TableCell>{activity.itemName}</TableCell>
                <TableCell className="text-right">{activity.quantity}</TableCell>
                <TableCell>{activity.user}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
