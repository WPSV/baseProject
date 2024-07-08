import React from 'react'
import styles from "../styles/authLogin.module.css";
import Header from "@/shared/components/Header";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.banner}>
      <Header />
      {children}
    </div>
  )
}
