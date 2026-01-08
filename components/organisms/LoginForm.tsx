'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { AuthTitle } from '@/components/atoms/AuthTitle'
import { AuthSubtitle } from '@/components/atoms/AuthSubtitle'
import { AuthField } from '@/components/molecules/AuthField'
import Link from 'next/link'
import { Checkbox } from '../ui/checkbox'

const schema = z.object({
  email: z.string().email('Email harus valid'),
  password: z.string().min(6, 'Password minimal 6 karakter')
})

type LoginValues = z.infer<typeof schema>

export function LoginForm() {
  const [loading, setLoading] = useState(false)

  const form = useForm<LoginValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  async function onSubmit(values: LoginValues) {
    setLoading(true)

    try {
      const res = await fetch('/api/auth/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })

      const data = await res.json()

      if (!res.ok) {
        form.setError('email', {
          message: data.message ?? 'Login gagal'
        })
        return
      }

      // contoh:
      // data.accessToken
      // redirect ke dashboard
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
          <AuthField name="email" label="Email" type="email" />
          <AuthField name="password" label="Password" type="password" />

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

        <Button
          className={`w-full ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          disabled={loading}
        >
          {loading ? 'Masuk...' : 'Masuk'}
        </Button>
      </form>
    </Form>
  )
}
