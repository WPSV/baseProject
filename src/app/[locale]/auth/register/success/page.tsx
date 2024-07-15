'use client'

import { useTranslations } from "next-intl";
import AuthLayout from "@/layouts/AuthLayout";
import RegisterLayout from "@/layouts/RegisterLayout";
import RegisterContainer from "@/shared/components/RegisterContainer";
import Title from "@/shared/components/Title";
import SubTitle from "@/shared/components/SubTitle";
import ButtonsSection from "@/shared/components/ButtonsSection";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCurrentStep } from "@/store/slices/registerStepsSlice";

export default function Page() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setCurrentStep(7));
  }, [dispatch]);
  
  const t = useTranslations("Success");
  
  return (
    <AuthLayout>
      <RegisterLayout>
        <RegisterContainer className="w-[534px]">
          <img className="mb-[60px] mx-auto" src="/assets/logoForm.svg" alt="Logo" />
          <Title>
            {t("title")}
          </Title>
          <SubTitle>
            {t("subTitle")}
          </SubTitle>
          <ButtonsSection prevLink="/auth/register/expectations" nextLink="/" />
        </RegisterContainer>
      </RegisterLayout>
    </AuthLayout>
  )
}