import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/organisms/app-sidebar'

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'InventoLite',
  description: 'Inventory management system',
  icons: {
    icon: '/image/InventoLite.png',
    shortcut: '/image/InventoLite.png',
    apple: '/image/InventoLite.png'
  }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  )
}
