'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { AuthTitle } from '@/components/atoms/AuthTitle'
import { AuthSubtitle } from '@/components/atoms/AuthSubtitle'
import { AuthField } from '@/components/molecules/AuthField'
import Link from 'next/link'

const emailSchema = z
  .string()
  .min(1, 'Email wajib diisi')
  .refine(val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
    message: 'Email harus valid'
  })

const schema = z.object({
  email: emailSchema
})

type ForgotPasswordValues = z.infer<typeof schema>

export function ForgotPasswordForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const form = useForm<ForgotPasswordValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: ''
    }
  })

  async function onSubmit(values: ForgotPasswordValues) {
    setLoading(true)

    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: values.email.toLowerCase() })
      })

      await res.json()

      setSuccess(true)
    } catch {
      setSuccess(true)
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="space-y-4 text-center">
        <AuthTitle>Cek Email Kamu</AuthTitle>
        <AuthSubtitle>
          Jika email terdaftar, kami akan mengirimkan link untuk reset password. Silakan cek inbox
          atau folder spam.
        </AuthSubtitle>
        <Link className="text-sm text-blue-600 dark:text-green-500" href="/sign-in">
          Kembali ke halaman Login
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-1">
            <AuthTitle>Lupa Password</AuthTitle>
            <AuthSubtitle>
              Masukkan email yang terdaftar. Kami akan mengirimkan link reset password.
            </AuthSubtitle>
          </div>

          <div className="space-y-4">
            <AuthField name="email" label="Email" type="email" placeholder="email@bisnis.com" />
          </div>

          <Button
            className={`w-full ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            disabled={loading}
          >
            {loading ? 'Mengirim...' : 'Kirim Link Reset Password'}
          </Button>
        </form>
      </Form>

      <div className="w-full mt-4 flex justify-center">
        <Link className="text-sm text-blue-600 dark:text-green-500" href="/sign-in">
          Kembali ke halaman Login
        </Link>
      </div>
    </div>
  )
}
