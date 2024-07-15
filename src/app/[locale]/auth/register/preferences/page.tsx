'use client'

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import AuthLayout from "@/layouts/AuthLayout";
import RegisterLayout from "@/layouts/RegisterLayout";
import Title from "@/shared/components/Title";
import SubTitle from "@/shared/components/SubTitle";
import ButtonsSection from "@/shared/components/ButtonsSection";
import CardOptions from "@/shared/components/CardOptions";
import RegisterContainer from "@/shared/components/RegisterContainer";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentStep } from "@/store/slices/registerStepsSlice";
import { RootState } from "@/store/store";
import { removeValue, updateField } from "@/store/slices/registerFormsSlice";

export default function Page() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setCurrentStep(5));
  }, [dispatch]);
  
  const t = useTranslations("Preferences");
  
  const items = ["Grants", "Tax Incentives", "Loans", "Investiment"];
  
  const name = "preferences";
  const itemsSelected = useSelector((state: RootState) => state.registerForms[name]);
  
  const handleSelectedItem = (item: string) => {
    if (itemsSelected.includes(item)) {
      dispatch(removeValue({ name: name, value: item }));
    } else {
      dispatch(updateField({ name: name, value: [...itemsSelected, item] }));
    }
  }
  
  return (
    <AuthLayout>
      <RegisterLayout>
        <RegisterContainer className="w-[960px]">
          <Title>
            {t("title")}
          </Title>
          <SubTitle>
            {t("subTitle")}
          </SubTitle>
          <div className="flex gap-4">
            {items.map((item) => (
              <CardOptions key={item} item={item} itemsSelected={itemsSelected} onClick={handleSelectedItem}/>
            ))}
          </div>
          <ButtonsSection prevLink="/auth/register/bussinessType" nextLink="/auth/register/expectations"/>
        </RegisterContainer>
      </RegisterLayout>
    </AuthLayout>
  )
}