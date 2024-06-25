import React from 'react'
import styles from "../styles/authLogin.module.css";
import { RegisterSteps } from "@/app/[locale]/auth/registerSteps";

export default function AuthLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <RegisterSteps />
      {children}
    </div>
  )
}
