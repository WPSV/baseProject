import React from 'react'
import { RegisterSteps } from "@/app/[locale]/auth/registerSteps";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-1 items-center flex-col">
      <RegisterSteps />
      {children}
    </div>
  )
}
