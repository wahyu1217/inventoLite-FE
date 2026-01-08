'use client'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { IconMoon, IconSun } from '@tabler/icons-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../ui/tooltip'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { getPageName } from '@/lib/naming/page-name'

export function SiteHeader() {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const pageName = getPageName(pathname)

  const mounted = typeof window !== 'undefined'

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1 cursor-pointer" />
        <Separator orientation="vertical" className="mx-2 h-4" />
        <h1 className="text-base font-medium">{pageName}</h1>

        {mounted && (
          <div className="ml-auto">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  >
                    {theme === 'dark' ? <IconSun /> : <IconMoon />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}
      </div>
    </header>
  )
}
