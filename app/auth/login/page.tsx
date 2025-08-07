import { LoginForm } from '@/components/auth/login-form'
import { AuthLayout } from '@/components/auth/auth-layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign In - UptimeMatrix',
  description: 'Sign in to your UptimeMatrix account to monitor your infrastructure.',
}

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your account to continue monitoring your infrastructure"
      showBackToHome
    >
      <LoginForm />
    </AuthLayout>
  )
}