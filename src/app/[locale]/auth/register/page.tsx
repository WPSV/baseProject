'use client'

import React from "react";
import { useTranslations } from "next-intl";
import AuthLayout from "@/layouts/AuthLayout";
import RegisterLayout from "@/layouts/RegisterLayout";
import Title from "@/shared/components/Title";
import Input from "@/shared/components/Input";
import Select from "@/shared/components/Select";
import Textarea from "@/shared/components/Textarea";
import { Checkbox } from "@nextui-org/react";
import ButtonsSection from "@/shared/components/ButtonsSection";
import RegisterContainer from "@/shared/components/RegisterContainer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { updateField } from "@/store/slices/registerFormsSlice";

export default function Register() {
  const t = useTranslations("YourBussiness");
  
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.registerForms);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = event.target;
    const checked = (event.target as HTMLInputElement).checked;
    
    dispatch(updateField({ name: name as keyof typeof formData, value: type === "checkbox" ? checked : value }));
  };
  
  const itemsSelect = ["Brasil", "Argentina"];
  
  return (
    <AuthLayout>
      <RegisterLayout>
        <div className="w-full flex justify-center mb-10">
          <RegisterContainer className="w-[534px]">
            <form className="w-full">
              <Title className="mb-[60px]">
                {t("title")}
              </Title>
              <Input
                type="text"
                name="company"
                label={t("companyName")}
                labelPlacement="outside"
                placeholder=" "
                isRequired
                onChange={handleChange}
              />
              <div className="flex gap-[10px]">
                <Select
                  name="localization"
                  label={t("localization")}
                  labelPlacement="outside"
                  placeholder="Selecionar"
                  items={itemsSelect}
                  onChange={handleChange}
                  classNames={{
                    base: ["w-2/5"]
                  }}
                />
                <Input
                  type="text"
                  name="url"
                  label={t("url")}
                  labelPlacement="outside"
                  placeholder=" "
                  isRequired
                  onChange={handleChange}
                  classNames={{
                    base: ["w-3/5"]
                  }}
                />
              </div>
              <Textarea
                name="businessDescription"
                label={t("descriptionBussiness")}
                labelPlacement="outside"
                placeholder=" "
                minRows={5}
                onChange={handleChange}
              />
              <div className="flex justify-between mt-5">
                <p className="text-[10px] leading-4 tracking-[0.04em] text-left text-dark">
                  {t("description")}
                </p>
                <p className="w-[140px] text-xs leading-4 text-right text-dark">
                  0/800
                </p>
              </div>
              <div className="text-center mt-5">
                <Checkbox
                  name="termsOfUse"
                  checked={formData.termsOfUse}
                  onChange={handleChange}
                  classNames={{
                    label: ["text-xs leading-[16px] tracking-[0.04em] text-darkPlus"]
                  }}
                >
                  {t("agreement")} &nbsp;
                  <span className="text-primary underline">{t("useTerms")}</span>
                </Checkbox>
              </div>
              <ButtonsSection prevLink="/auth/login" nextLink="/oportunidades" justifyContent="justify-around" />
            </form>
          </RegisterContainer>
        </div>
      </RegisterLayout>
    </AuthLayout>
  )
}