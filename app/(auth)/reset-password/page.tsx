import { Suspense } from 'react'
import { ResetPasswordForm } from '@/components/organisms/ResetPassword'

const page = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ResetPasswordForm />
    </Suspense>
  )
}

export default page
