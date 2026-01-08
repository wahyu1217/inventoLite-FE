import { IconHome } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Logo pojok kanan atas */}
      <div className="text-black dark:text-white absolute top-6 right-6 z-20">
        <Link href="/" className="flex">
          <IconHome className="!size-5" />
          <span className="text-base font-semibold">
            Invento<span className="text-primary dark:text-green-500">Lite</span>
          </span>
        </Link>
      </div>

      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* LEFT: Background */}
        <div className="relative hidden lg:block">
          <Image
            src="/bg/bg-auth-landscape.png"
            alt="InventoLite Background"
            fill
            priority
            className="object-cover"
          />

          {/* overlay biar teks kebaca */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Welcome Text */}
          <div className="absolute bottom-10 left-10 z-10 max-w-md text-white">
            <h2 className="text-3xl font-semibold leading-tight">Selamat Datang di InventoLite</h2>
            <p className="mt-2 text-sm text-white/80">
              Sistem inventori modern untuk bisnis yang ingin rapi, terkontrol, dan berkembang.
            </p>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md rounded-xl border bg-card p-6 shadow-sm">{children}</div>
        </div>
      </div>
    </div>
  )
}
