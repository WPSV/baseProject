'use client'

import {EnvelopeSimple, Lock} from '@phosphor-icons/react'
import AuthLayout from '@/layouts/AuthLayout';
import { useTranslations } from "next-intl";
import {Input, Button, Link} from "@nextui-org/react";

export default function Login() {
    const t = useTranslations("Login");

    return (
        <AuthLayout>
            <div className="bg-light w-[534px] h-[736px] rounded-[24px] p-[40px_calc((534px-406px)/2)] text-center">
                <img className="mt-0 mx-auto mb-[50px]" src="/assets/logoForm.svg" alt="Logo"/>
                <p className="text-2xl font-bold leading-7 text-center text-darkPlus m-2.5">
                    {t('title')}
                </p>
                <p className="text-xs font-normal leading-[18px] tracking-[0.04em] text-center text-input mb-10">
                    {t('subTitle')}
                </p>
              <form className="w-full">
                <Input
                  type="email"
                  placeholder={t('inputEmail')}
                  endContent={<EnvelopeSimple size={32}/>}
                  classNames={{
                    base: ["bg-light border border-solid border-outline rounded overflow-hidden mb-5"],
                    mainWrapper: ["bg-light"],
                    inputWrapper: ["data-[hover]:bg-light group-data-[focus]:bg-light bg-light h-14"],
                    innerWrapper: ["bg-light"],
                    input: ["focus:outline-none placeholder-input"],
                  }}
                />
                <Input
                  type="password"
                  placeholder={t('inputPassword')}
                  endContent={<Lock size={32}/>}
                  classNames={{
                    base: ["bg-light border border-solid border-outline rounded overflow-hidden mb-1"],
                    mainWrapper: ["bg-light"],
                    inputWrapper: ["data-[hover]:bg-light group-data-[focus]:bg-light bg-light h-14"],
                    innerWrapper: ["bg-light"],
                    input: ["focus:outline-none placeholder-input"],
                  }}
                />
                <p className="text-left mb-5">
                  <Link href="/auth/forgotPassword/"
                        className="text-xs leading-4 tracking-wider text-darkMinus underline">
                    {t('linkForgotPassword')}
                  </Link>
                </p>
                <Button
                  className="w-[142px] h-14 bg-primary border border-solid border-primary rounded-lg text-light text-sm font-bold">
                  {t('buttonText')}
                </Button>
                <p className="text-xs font-normal leading-[18px] tracking-[0.04em] my-5 text-center text-input">
                  Ou
                </p>
                <Button
                  className="w-full h-12 border bg-light border-solid border-outline text-sm font-bold leading-5 tracking-[0.02em] text-center text-dark py-2.5">
                  <img className="m-0" src="/assets/googleIcon.svg" alt="Google"/>
                  {t('googleButtonText')}
                </Button>
                <p className="text-xs leading-4 tracking-wider text-darkPlus mt-10">
                  {t('registerMessage')} &nbsp;
                  <Link href="/auth/register" className="text-xs leading-4 tracking-wider text-primary underline">
                    {t('linkRegister')}
                  </Link>
                </p>
              </form>
            </div>
        </AuthLayout>
    )
}
