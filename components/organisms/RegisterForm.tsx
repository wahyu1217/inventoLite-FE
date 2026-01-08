'use client'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { AuthTitle } from '@/components/atoms/AuthTitle'
import { AuthSubtitle } from '@/components/atoms/AuthSubtitle'
import { AuthField } from '@/components/molecules/AuthField'

const schema = z.object({
  businessName: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6)
})

export function RegisterForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      businessName: '',
      email: '',
      password: ''
    }
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})} className="space-y-6">
        <div className="space-y-1">
          <AuthTitle>Buat Akun InventoLite</AuthTitle>
          <AuthSubtitle>Sistem inventori profesional untuk bisnis nyata.</AuthSubtitle>
        </div>

        <div className="space-y-4">
          <AuthField name="businessName" label="Nama Usaha" placeholder="CV Sumber Jaya" />
          <AuthField name="email" label="Email" type="email" />
          <AuthField name="password" label="Password" type="password" />
        </div>

        <Button className="w-full">Daftar</Button>
      </form>
    </Form>
  )
}
