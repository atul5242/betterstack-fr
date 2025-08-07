import { ForgotPasswordForm } from '@/components/auth/forgot-password-form'
import { AuthLayout } from '@/components/auth/auth-layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reset Password - UptimeMatrix',
  description: 'Reset your UptimeMatrix account password.',
}

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Enter your email address and we'll send you a link to reset your password"
      showBackToLogin
    >
      <ForgotPasswordForm />
    </AuthLayout>
  )
}