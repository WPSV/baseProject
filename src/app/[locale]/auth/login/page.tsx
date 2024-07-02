'use client'

import {EnvelopeSimple, Lock} from '@phosphor-icons/react'
import AuthLayout from '@/layouts/AuthLayout';
import { useTranslations } from "next-intl";
import {Input, Button, Link} from "@nextui-org/react";

export default function Login() {
    const t = useTranslations("Login");

    return (
        <AuthLayout>
            <div className="flex flex-col items-center bg-background w-[534px] h-[736px] rounded-[24px] p-[40px_calc((534px-406px)/2)] text-center">
                <img className="mt-0 mx-auto mb-[50px]" src="/assets/logoForm.svg" alt="Logo"/>
                <p className="text-2xl font-bold leading-7 text-center text-colorTitle m-2.5">
                    {t('title')}
                </p>
                <p className="text-xs font-normal text-subtTitle leading-[18px] tracking-[0.04em] text-center text-input mb-10">
                    {t('subTitle')}
                </p>
              <form className="w-full">
                <Input
                  type="email"
                  placeholder={t('inputEmail')}
                  endContent={<EnvelopeSimple size={32}/>}
                  classNames={{
                    base: [
                      "bg-colorBgField border border-solid border-outline rounded overflow-hidden mb-5",
                    ],
                    mainWrapper: [
                      "bg-colorBgField",
                    ],
                    inputWrapper: [
                      "data-[hover]:bg-colorBgField group-data-[focus]:bg-colorBgField bg-colorBgField h-14 text-colorTitle",
                    ],
                    innerWrapper: [
                      "bg-colorBgField",
                    ],
                    input: [
                      "focus:outline-none placeholder-input",
                    ],
                  }}
                />
                <Input
                  type="password"
                  placeholder={t('inputPassword')}
                  endContent={<Lock size={32}/>}
                  classNames={{
                    base: [
                      "bg-colorBgField border border-solid border-outline rounded overflow-hidden mb-1",
                    ],
                    mainWrapper: [
                      "bg-colorBgField",
                    ],
                    inputWrapper: [
                      "data-[hover]:bg-colorBgField group-data-[focus]:bg-colorBgField bg-colorBgField h-14 text-colorTitle",
                    ],
                    innerWrapper: [
                      "bg-colorBgField",
                    ],
                    input: [
                      "focus:outline-none placeholder-input",
                    ],
                  }}
                />
                <p className="text-left mb-5">
                  <Link href="/auth/forgotPassword/"
                        className="text-xs leading-4 tracking-wider text-colorTitle underline">
                    {t('linkForgotPassword')}
                  </Link>
                </p>
                <Button
                  className="w-btn h-14 px-12 bg-buttonBg hover:bg-colorTp hover:border-transparent border border-solid border-primary rounded-lg text-buttonText text-sm font-bold ">
                  {t('buttonText')}
                </Button>
                <p className="text-xs font-normal leading-[18px] tracking-[0.04em] my-5 text-subtTitle text-center text-input">
                  Ou
                </p>
                <Button
                  className="w-full h-12 border bg-background border-solid border-outline text-sm font-bold leading-5 tracking-[0.02em] text-center text-colorTitle py-2.5">
                  <img className="m-0" src="/assets/googleIcon.svg" alt="Google"/>
                  {t('googleButtonText')}
                </Button>
                <p className="text-xs leading-4 tracking-wider text-colorTitle mt-10">
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