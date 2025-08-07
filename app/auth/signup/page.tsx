import { SignupForm } from '@/components/auth/signup-form'
import { AuthLayout } from '@/components/auth/auth-layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up - UptimeMatrix',
  description: 'Create your UptimeMatrix account and start monitoring your infrastructure today.',
}

export default function SignupPage() {
  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start monitoring your infrastructure with a free 14-day trial"
      showBackToHome
    >
      <SignupForm />
    </AuthLayout>
  )
}