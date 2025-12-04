'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IconCirclePlusFilled, IconMail, type Icon } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible'

export function NavMain({
  items
}: {
  items: {
    title: string
    url?: string
    icon?: Icon
    items?: {
      title: string
      url: string
      icon?: Icon
    }[]
  }[]
}) {
  const pathname = usePathname()
  console.log('NavMain pathname:', pathname)
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Quick Create Menu"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear cursor-pointer"
            >
              <IconCirclePlusFilled />
              <span>Quick Create</span>
            </SidebarMenuButton>
            <Button
              size="icon"
              className="size-8 group-data-[collapsible=icon]:opacity-0"
              variant="outline"
            >
              <IconMail />
              <span className="sr-only">Inbox</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map(item => {
            const isActiveParent = item?.items?.some(child => pathname.startsWith(child.url))

            // Jika item punya children → COLLAPSIBLE MENU
            if (item.items && item.items.length > 0) {
              return (
                <Collapsible key={item.title} defaultOpen={isActiveParent} className="w-full">
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      tooltip={item.title}
                      className={`cursor-pointer ${isActiveParent ? 'bg-primary text-sidebar-primary-foreground' : ''}`}
                    >
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>

                  <CollapsibleContent className="mt-1 ml-6 space-y-1">
                    {item.items.map(child => {
                      const isActiveChild = pathname.startsWith(child.url)

                      return (
                        <SidebarMenuItem key={child.title}>
                          <Link href={child.url}>
                            <SidebarMenuButton
                              tooltip={child.title}
                              className={`cursor-pointer text-sm ${
                                isActiveChild ? 'bg-primary text-sidebar-primary-foreground' : ''
                              }`}
                            >
                              {child.icon && <child.icon />}
                              <span>{child.title}</span>
                            </SidebarMenuButton>
                          </Link>
                        </SidebarMenuItem>
                      )
                    })}
                  </CollapsibleContent>
                </Collapsible>
              )
            }

            // Jika item tanpa child → MENU BIASA
            return (
              <Link href={item.url!} key={item.title}>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    tooltip={item.title}
                    className={`${item.url === pathname ? 'bg-primary text-sidebar-primary-foreground' : ''} cursor-pointer`}
                  >
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </Link>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
