'use client'

import Button from '../../../../shared/components/Button'
import { SignIn } from '@phosphor-icons/react'
import AuthLayout from '@/layouts/AuthLayout'

export default function Login() {
  return (
    <main>
      <AuthLayout>
        Login!
        <Button
          width="w-btn"
          height="h-14"
          color="text-primary"
          fontSize="text-base"
          backgroundColor="bg-light"
          border="border border-solid border-primary"
        >
          <SignIn size={24} />
          Log In
        </Button>
      </AuthLayout>
    </main>
  )
}
