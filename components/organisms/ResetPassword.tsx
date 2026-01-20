'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Eye, EyeOff } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams, useRouter } from 'next/navigation'
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { AuthTitle } from '@/components/atoms/AuthTitle'
import { AuthSubtitle } from '@/components/atoms/AuthSubtitle'
import { AuthField } from '@/components/molecules/AuthField'
import Link from 'next/link'
import { ModalMessage } from '../molecules/Modal/ModalMessage'
const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/

const schema = z
  .object({
    password: z
      .string()
      .min(8, 'Password minimal 8 karakter')
      .regex(
        passwordRules,
        'Password harus mengandung huruf kecil, huruf besar, angka, dan simbol'
      ),
    confirmPassword: z.string()
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Password tidak sama',
    path: ['confirmPassword']
  })

type ResetPasswordValues = z.infer<typeof schema>

export function ResetPasswordForm() {
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const searchParams = useSearchParams()
  const [modalOpen, setModalOpen] = useState(false)
  const [variant, setVariant] = useState<'error' | 'info' | 'success' | 'warning'>('error')
  const [modalContent, setModalContent] = useState({
    title: '',
    message: '',
    direct: '',
    label: ''
  })
  const router = useRouter()
  const token = searchParams.get('token')

  const form = useForm<ResetPasswordValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      password: '',
      confirmPassword: ''
    }
  })

  async function onSubmit(values: ResetPasswordValues) {
    if (!token) {
      form.setError('password', {
        message: 'Token reset tidak ditemukan'
      })
      return
    }

    setLoading(true)

    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token,
          password: values.password
        })
      })

      const data = await res.json()
      if (!res.ok) {
        if (data.message === 'Token tidak valid atau sudah kadaluarsa') {
          setModalContent({
            title: 'Reset Password Gagal',
            message: data.message,
            direct: '/forgot-password',
            label: 'Kirim link Reset Password Baru'
          })
          setVariant('error')
          setModalOpen(true)
          return
        }
        form.setError('password', {
          message: data.message ?? 'Reset password gagal'
        })
        return
      } else {
        setModalOpen(true)
        setVariant('success')
        setModalContent({
          title: 'Reset Password Berhasil',
          message: 'Password Anda telah berhasil direset. Silakan login kembali.',
          direct: '/sign-in',
          label: 'Kembali ke Halaman Login'
        })
      }

      // router.push('/login')
    } catch (e) {
      console.log('ini keluar error : ', e)
      form.setError('password', {
        message: 'Terjadi kesalahan server'
      })
    } finally {
      setLoading(false)
      console.log('finally jalan')
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-1">
            <AuthTitle>Buat Password Baru</AuthTitle>
            <AuthSubtitle>
              Link <b>reset password</b> hanya berlaku maksimal 30 menit setelah mendapatkan email
              untuk reset password
            </AuthSubtitle>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <AuthField
                placeholder="Masukkan password baru anda"
                name="password"
                label="Password baru"
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

            <div className="relative">
              <AuthField
                placeholder="Masukkan password kembali baru anda"
                name="confirmPassword"
                label="Konfirmasi password"
                type={showConfirm ? 'text' : 'password'}
              />
              <button
                type="button"
                onClick={() => setShowConfirm(v => !v)}
                className="absolute right-3 top-8 text-muted-foreground hover:text-foreground"
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <Button
            className={`w-full ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            disabled={loading}
          >
            {loading ? 'Menyimpan...' : 'Reset Password'}
          </Button>
        </form>
      </Form>

      <div className="w-full mt-4 flex justify-center">
        <Link className="text-sm text-blue-600 dark:text-green-500" href="/sign-in">
          Kembali ke halaman Login
        </Link>
      </div>

      <div className="w-full mt-4 flex justify-center">
        <Link className="text-sm text-blue-600 dark:text-green-500" href="/forgot-password">
          Kembali ke halaman Lupa Password
        </Link>
      </div>
      {modalOpen && (
        <ModalMessage
          open={modalOpen}
          variant={variant}
          title={modalContent.title}
          description={modalContent.message}
          primaryAction={{
            label: modalContent.label,
            href: modalContent.direct
          }}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  )
}
