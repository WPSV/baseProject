import React from "react";
import '@/styles/globals.css';
import type { Metadata } from 'next'
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { NextUIProvider } from "@nextui-org/system";
import ReduxProvider from "@/shared/components/ReduxProvider";

export const metadata: Metadata = {
  title: '',
  description: '',
}

type TLocaleLayout = {
  children: React.ReactNode;
  params: { locale: string };
}

export default function LocaleLayout({ children, params: { locale } } : TLocaleLayout) {
  const messages = useMessages();
    
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <NextUIProvider>
            <ReduxProvider>
              {children}
            </ReduxProvider>
          </NextUIProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
