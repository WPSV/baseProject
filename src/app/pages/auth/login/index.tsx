'use client'

import Button from '../../../../shared/components/Button'
import { SignIn } from '@phosphor-icons/react'
import AuthLayout from '../../../../layouts/AuthLayout';
import LanguageSwitcher from "../../../../shared/components/LanguageSwitcher";
import { useTranslation } from "next-i18next";

export default function Login() {
  const { t } = useTranslation();

  return (
    <main>
      <AuthLayout>
        <LanguageSwitcher/>
        <div>
          {t('formDescription')} <br/>
          <Button
              width="w-btn"
              height="h-14"
              color="text-primary"
              fontSize="text-base"
              backgroundColor="bg-light"
              border="border border-solid border-primary"
          >
            <SignIn size={24}/>
            {t('login')}
          </Button>
        </div>

      </AuthLayout>
    </main>
  )
}
