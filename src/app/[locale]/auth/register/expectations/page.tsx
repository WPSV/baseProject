'use client'

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import RegisterLayout from "@/layouts/RegisterLayout";
import Title from "@/shared/components/Title";
import SubTitle from "@/shared/components/SubTitle";
import CardOptions from "@/shared/components/CardOptions";
import ButtonsSection from "@/shared/components/ButtonsSection";
import AuthLayout from "@/layouts/AuthLayout";
import RegisterContainer from "@/shared/components/RegisterContainer";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentStep } from "@/store/slices/registerStepsSlice";
import { RootState } from "@/store/store";
import { removeValue, updateField } from "@/store/slices/registerFormsSlice";

export default function Page() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setCurrentStep(6));
  }, [dispatch]);
  
  const t = useTranslations("Expectations");
  
  const items = ["Marketing", "R&D", "Infraestructure", "Internationalization", "HR", "Machinary and Equipaments"];
  
  const name = "expectations";
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
        <RegisterContainer className="w-[846px]">
          <Title>
            {t("title")}
          </Title>
          <SubTitle>
            {t("subTitle")}
          </SubTitle>
          <div className="flex flex-wrap justify-center gap-4">
            {items.map((item) => (
              <CardOptions key={item} item={item} itemsSelected={itemsSelected} onClick={handleSelectedItem}/>
            ))}
          </div>
          <ButtonsSection prevLink="/auth/register/preferences" nextLink="/auth/register/success"/>
        </RegisterContainer>
      </RegisterLayout>
    </AuthLayout>
  )
}