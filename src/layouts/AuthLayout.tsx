import React from 'react'
import styles from "../styles/authLogin.module.css";
import Header from "@/shared/components/Header";

type TAuthLayoutProps = {
  children: React.ReactNode;
}

export default function AuthLayout({ children } : TAuthLayoutProps) {
  return (
    <div className={styles.banner}>
      <Header/>
      {children}
    </div>
  )
}
