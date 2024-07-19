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
import RegisterContainer from "@/shared/components/RegisterContainer";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function Login() {
  const t = useTranslations("Login");
  const isDarkMode = useSelector((state: RootState) => state.darkMode.isDarkMode);

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
      <RegisterContainer className="w-[534px] h-[736px]">
        <img className="mt-0 mx-auto mb-[50px]" src={`/assets/${isDarkMode ? "logoFormDark" : "logoForm"}.svg`} alt="Logo"/>
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
            endContent={<EnvelopeSimple className="dark:text-light-100" size={32}/>}
            onChange={handleChange}
            isRequired
            isInvalid={true}
            errorMessage={t('wrongEmail')}
          />
          <Input
            type="password"
            name="password"
            placeholder={t('inputPassword')}
            endContent={<Lock className="dark:text-light-100" size={32}/>}
            onChange={handleChange}
            isRequired
            isInvalid={true}
            errorMessage={t('wrongPassword')}
          />
          <p className="text-left mb-5">
            <Link href="/auth/forgotPassword/"
                  className="text-xs leading-4 tracking-wider text-secondary-400 dark:text-light-100 underline">
              {t('linkForgotPassword')}
            </Link>
          </p>
          <Button
            className="w-[142px] bg-primary-200 hover:bg-colorTp hover:border-transparent border border-solid border-primary-200 rounded-lg text-light-100 text-sm font-bold">
            {t('buttonText')}
          </Button>
        </form>
        <p
          className="text-xs font-normal leading-[18px] tracking-[0.04em] my-5 text-secondary-100 dark:text-light-100 text-center text-input">
          Ou
        </p>
        <Button
          className="w-full h-12 bg-light-100 dark:bg-transparent border-solid border-outline text-sm font-bold leading-5 tracking-[0.02em] text-center text-secondary-300 dark:text-light-100 py-2.5">
          <img className="m-0" src="/assets/googleIcon.svg" alt="Google"/>
          {t('googleButtonText')}
        </Button>
        <p className="text-xs leading-4 tracking-wider text-secondary-400 dark:text-light-100 mt-10">
          {t('registerMessage')}&nbsp;
          <Link href={`/auth/register`} className="text-xs leading-4 tracking-wider text-primary-200 underline">
            {t('linkRegister')}
          </Link>
        </p>
      </RegisterContainer>
    </AuthLayout>
  )
}
