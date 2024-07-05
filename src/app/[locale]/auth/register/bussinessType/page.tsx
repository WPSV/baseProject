'use client'

import { ChangeEvent, useState } from "react";
import AuthLayout from "@/layouts/AuthLayout";
import RegisterLayout from "@/layouts/RegisterLayout";
import Title from "@/shared/components/Title";
import SubTitle from "@/shared/components/SubTitle";
import Select from "@/shared/components/Select";
import Description from "@/shared/components/Description";
import ButtonsSection from "@/shared/components/ButtonsSection";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("BussinessType");
  
  const [itemsSelected, setItemsSelected] = useState<string[]>([]);
  const itemsSelect = ["Startup", "Grande empresa", "Média empresa", "Pequena empresa"];
  
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const items = event.target.value.split(",");
    
    if (items[0] === "") {
      setItemsSelected([]);
    } else {
      setItemsSelected(items);
    }
  }
  
  const handleRemove = (itemToRemove: string) => {
    const updateItemsSelected = itemsSelected?.filter(item => item !== itemToRemove);
    setItemsSelected(updateItemsSelected);
  }
  
  return (
    <AuthLayout>
      <RegisterLayout>
        <div className="text-center w-[616px] h-full bg-light rounded-[24px] p-[40px_calc((534px-406px)/2)]">
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
                className="bg-[#5CC4FF] mr-2 px-4 py-3 rounded-full text-xs mt-1"
              >
                {item}
              </button>
            ))}
          </div>
          <Select
            aria-label="Escolha as opções"
            placeholder="Escolha as opções"
            selectionMode="multiple"
            items={itemsSelect}
            isRequired
            onChange={handleChange}
            selectedKeys={itemsSelected}
            classNames={{
              base: ["mb-[10px]"]
            }}
          />
          <ButtonsSection prevLink="/auth/register/actuation" nextLink="/" justifyContent="justify-around"/>
        </div>
      </RegisterLayout>
    </AuthLayout>
  )
}