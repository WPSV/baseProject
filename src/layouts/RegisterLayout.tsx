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
      <div className="flex-1 mb-10">
        {children}
      </div>
    </div>
  )
}
