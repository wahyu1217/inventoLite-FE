import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const fastItems = ['Kabel NYM 2x1.5', 'Stop Kontak Broco', 'Saklar Panasonic']
const slowItems = ['Lampu Gudang', 'MCB Cadangan']

export function FastSlowItems() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Fast Moving Items</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {fastItems.map(item => (
            <div key={item} className="text-sm">
              {item}
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Slow Moving Items</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {slowItems.map(item => (
            <div key={item} className="text-sm text-muted-foreground">
              {item}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
