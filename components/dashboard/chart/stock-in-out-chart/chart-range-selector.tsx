import { Button } from '@/components/ui/button'
import { Popover, PopoverContent } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'

export function ChartRangeSelector({ value, onChange, onCustom }: any) {
  return (
    <div className="flex gap-1">
      {['7D', '30D', '3M', '6M', '1Y'].map(r => (
        <Button
          key={r}
          size="sm"
          variant={value === r ? 'default' : 'ghost'}
          onClick={() => onChange(r)}
          className="cursor-pointer"
        >
          {r}
        </Button>
      ))}

      <Popover>
        {/* <PopoverTrigger asChild>
          <Button size="sm" variant={value === 'CUSTOM' ? 'default' : 'ghost'}>
            Custom
          </Button>
        </PopoverTrigger> */}

        <PopoverContent className="w-auto p-2">
          <Calendar
            mode="range"
            onSelect={range => {
              if (range?.from && range?.to) {
                onCustom(range)
              }
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
