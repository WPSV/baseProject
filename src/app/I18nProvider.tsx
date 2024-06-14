'use client'

import React, { ReactNode, useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

type I18nProviderProps = {
    children: ReactNode;
};

const I18nProvider = ({ children }: I18nProviderProps) => {
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        if (i18n.isInitialized) {
            setIsInitialized(true);
        } else {
            i18n.on('initialized', () => {
                setIsInitialized(true);
            });
        }
    }, []);

    if (!isInitialized) {
        return <div>Loading...</div>;
    }

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProvider;