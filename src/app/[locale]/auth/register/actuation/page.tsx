'use client'

import { ChangeEvent, useEffect, useState } from "react";
import AuthLayout from "@/layouts/AuthLayout";
import RegisterLayout from "@/layouts/RegisterLayout";
import Title from "@/shared/components/Title";
import SubTitle from "@/shared/components/SubTitle";
import Select from "@/shared/components/Select";
import Description from "@/shared/components/Description";
import ButtonsSection from "@/shared/components/ButtonsSection";
import { useTranslations } from "next-intl";
import RegisterContainer from "@/shared/components/RegisterContainer";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentStep } from "@/store/slices/registerStepsSlice";
import { RootState } from "@/store/store";
import { removeValue, updateField } from "@/store/slices/registerFormsSlice";

export default function Page() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setCurrentStep(3));
  }, [dispatch]);
  
  const t = useTranslations("Actuation");
  
  const itemsSelect = ["Publicidade", "Agronomia", "Saúde"];
  
  const name = "actuation";
  const itemsSelected = useSelector((state: RootState) => state.registerForms[name]);
  
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateField({ name: name, value: event.target.value }));
  }
  
  const handleRemove = (itemToRemove: string) => {
    dispatch(removeValue({ name: name, value: itemToRemove }));
  }
  
  return (
    <AuthLayout>
      <RegisterLayout>
        <RegisterContainer className="w-[616px]">
          <Title>
            {t("title")}
          </Title>
          <SubTitle>
            {t("subTitle")}
          </SubTitle>
          <p className="text-left font-bold text-dark leading-[24px] mb-2.5">
            {t("label")}
          </p>
          <div className={`w-full flex flex-wrap text-left ${itemsSelected.length > 0 && "mb-5"}`}>
            {itemsSelected.map((item) => item !== "" && (
              <button
                onClick={() => handleRemove(item)}
                key={item}
                className="bg-[#5CFF6C] mr-2 px-4 py-3 rounded-full text-xs mt-1"
              >
                {item}
              </button>
            ))}
          </div>
          <Select
            aria-label="Escolha as opções"
            placeholder={t("options")}
            selectionMode="multiple"
            items={itemsSelect}
            isRequired
            onChange={handleChange}
            selectedKeys={itemsSelected}
            classNames={{
              base: ["mb-[10px]"]
            }}
          />
          <Description>
            {t("description")}
          </Description>
          <ButtonsSection prevLink="/auth/register/opportunities" nextLink="/auth/register/bussinessType" justifyContent="justify-around"/>
        </RegisterContainer>
      </RegisterLayout>
    </AuthLayout>
  )
}