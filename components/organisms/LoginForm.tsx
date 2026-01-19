'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { AuthTitle } from '@/components/atoms/AuthTitle'
import { AuthSubtitle } from '@/components/atoms/AuthSubtitle'
import { AuthField } from '@/components/molecules/AuthField'
import Link from 'next/link'
import { Checkbox } from '@/components/ui/checkbox'

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/

const schema = z.object({
  email: z
    .string()
    .min(1, 'Email wajib diisi')
    .refine(val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), { message: 'Email harus valid' }),
  password: z
    .string()
    .min(8, 'Password minimal 8 karakter')
    .regex(passwordRules, 'Password harus mengandung huruf kecil, huruf besar, angka, dan simbol'),
  remember: z.boolean().optional()
})

type LoginValues = z.infer<typeof schema>

export function LoginForm() {
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm<LoginValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      remember: false
    }
  })

  async function onSubmit(values: LoginValues) {
    setLoading(true)

    try {
      const res = await fetch('/api/auth/sign-in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      })

      const data = await res.json()

      if (!res.ok) {
        form.setError('email', {
          message: data.message ?? 'Login gagal'
        })
        return
      }

      // redirect dashboard di sini
    } catch {
      form.setError('email', {
        message: 'Terjadi kesalahan server'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-1">
          <AuthTitle>Masuk ke InventoLite</AuthTitle>
          <AuthSubtitle>Kontrol stok, transaksi, dan laporan tanpa ribet.</AuthSubtitle>
        </div>

        <div className="space-y-4">
          <AuthField name="email" label="Email" type="email" placeholder="email@bisnis.com" />

          <div className="relative">
            <AuthField
              name="password"
              label="Password"
              placeholder="Masukkan Password"
              type={showPassword ? 'text' : 'password'}
            />
            <button
              type="button"
              onClick={() => setShowPassword(v => !v)}
              className="absolute right-3 top-8 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <FormField
              name="remember"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">Ingat saya</FormLabel>
                </FormItem>
              )}
            />

            <Link href="/forgot-password" className="text-sm text-primary hover:underline">
              Lupa password?
            </Link>
          </div>
        </div>

        <Button className="w-full" disabled={loading}>
          {loading ? 'Masuk...' : 'Masuk'}
        </Button>
      </form>
    </Form>
  )
}
