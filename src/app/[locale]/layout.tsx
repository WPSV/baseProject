import React from 'react'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { NextUIProvider } from '@nextui-org/system'

export const metadata: Metadata = {
  title: '',
  description: '',
}

type TLocaleLayout = {
  children: React.ReactNode
  params: { locale: string }
}

export default function LocaleLayout({
  children,
  params: { locale },
}: TLocaleLayout) {
  const messages = useMessages()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <NextUIProvider>{children}</NextUIProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
