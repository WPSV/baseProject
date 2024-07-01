import React from "react";
import '@/styles/globals.css';
import type { Metadata } from 'next'

import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import Provider from "./providers";
import SwitchMode from "./switchMode";

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default async function LocaleLayout({
   children,
   params: {locale}
}: {
    children: React.ReactNode;
    params: {locale: string};
}) {
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <Provider>
                        <SwitchMode />
                        {children}
                    </Provider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
