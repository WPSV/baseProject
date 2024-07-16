'use client'

import { ChangeEvent, FormEvent, useState } from "react";
import {EnvelopeSimple, Lock} from '@phosphor-icons/react'
import AuthLayout from '@/layouts/AuthLayout';
import { useTranslations } from "next-intl";
import Input from "@/shared/components/Input";
import Button from "@/shared/components/Button";
import { Link} from "@nextui-org/react";
import Title from "@/shared/components/Title";
import SubTitle from "@/shared/components/SubTitle";

export default function Login() {
  const t = useTranslations("Login");

  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(form);
  }

  return (
    <AuthLayout>
      <div className="bg-card w-[534px] h-[736px] rounded-[24px] p-[40px_calc((534px-406px)/2)] text-center">
        <img className="mt-0 mx-auto mb-[50px]" src="/assets/logoForm.svg" alt="Logo"/>
        <Title>
          {t('title')}
        </Title>
        <SubTitle>
          {t('subTitle')}
        </SubTitle>
        <form className="w-full" onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder={t('inputEmail')}
            endContent={<EnvelopeSimple size={32}/>}
            onChange={handleChange}
            isRequired
            isInvalid={true}
            errorMessage={t('wrongEmail')}
          />
          <Input
            type="password"
            name="password"
            placeholder={t('inputPassword')}
            endContent={<Lock size={32}/>}
            onChange={handleChange}
            isRequired
            isInvalid={true}
            errorMessage={t('wrongPassword')}
          />
          <p className="text-left mb-5">
            <Link href="/auth/forgotPassword/"
                  className="text-xs leading-4 tracking-wider text-colorTitle underline">
              {t('linkForgotPassword')}
            </Link>
          </p>
          <Button className="w-[142px] bg-buttonBg hover:bg-colorTp hover:border-transparent border border-solid border-primary rounded-lg text-buttonText text-sm font-bold">
            {t('buttonText')}
          </Button>
        </form>
        <p className="text-xs font-normal leading-[18px] tracking-[0.04em] my-5 text-subtTitle text-center text-input">
          Ou
        </p>
        <Button
          className="w-full h-12 bg-card hover:bg-googleButtonHover border-solid border-outline text-sm font-bold leading-5 tracking-[0.02em] text-center text-googleButtonColor hover:text-googleButtonTextHover py-2.5">
          <img className="m-0" src="/assets/googleIcon.svg" alt="Google"/>
          {t('googleButtonText')}
        </Button>
        <p className="text-xs leading-4 tracking-wider text-colorTitle mt-10">
          {t('registerMessage')} &nbsp;
          <Link href={`/auth/register`} className="text-xs leading-4 tracking-wider text-primary underline">
            {t('linkRegister')}
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}
