import React from 'react'
import styles from "../styles/authLogin.module.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className="w-screen h-screen">
          <div className={styles.banner}>
              {children}
          </div>
      </div>
  )
}
