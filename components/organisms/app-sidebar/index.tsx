'use client'
import { ComponentProps } from 'react'
import { IconHome } from '@tabler/icons-react'
import { NavMain } from '@/components/organisms/nav-main'
import { NavSecondary } from '@/components/organisms/nav-secondary'
import { NavUser } from '@/components/organisms/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar'
import { SIDEBAR_DATA } from '@/constans/sidebar'

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  const data = SIDEBAR_DATA
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <a href="#">
                <IconHome className="!size-5" />
                <span className="text-base font-semibold">
                  Invento<span className="text-primary dark:text-green-500">Lite</span>
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
