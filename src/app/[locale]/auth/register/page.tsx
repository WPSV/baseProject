'use client'

import { ChangeEvent, useState } from "react";
import AuthLayout from "@/layouts/AuthLayout";
import RegisterLayout from "@/layouts/RegisterLayout";
import Title from "@/shared/components/Title";
import Input from "@/shared/components/Input";
import Select from "@/shared/components/Select";
import Textarea from "@/shared/components/Textarea";
import { Checkbox } from "@nextui-org/react";
import ButtonsSection from "@/shared/components/ButtonsSection";

export default function Register() {
  const [form, setForm] = useState({
    companhia: "",
    localizacao: "",
    url: "",
    descricaoNegocio: "",
  });
  
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }
  
  const itemsSelect = ["Brasil", "Argentina"];
  
  return (
    <AuthLayout>
      <RegisterLayout>
        <div className="w-full flex justify-center">
          <div className="text-center w-[534px] bg-light rounded-[24px] p-[40px_calc((534px-406px)/2)]">
            <form className="w-full">
              <Title>
                Conte sobre o seu negócio!
              </Title>
              <Input
                type="text"
                name="companhia"
                label="Companhia"
                labelPlacement="outside"
                placeholder=" "
                isRequired
                onChange={handleChange}
                classNames={{
                  base: ["mt-[35px]"],
                }}
              />
              <Select
                label="Localização"
                name="localizacao"
                labelPlacement="outside"
                placeholder="Selecionar"
                items={itemsSelect}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="url"
                label="URL do negócio"
                labelPlacement="outside"
                placeholder=" "
                isRequired
                onChange={handleChange}
              />
              <Textarea
                name="descricaoNegocio"
                label="O que você faz?"
                labelPlacement="outside"
                placeholder="Olá..."
                minRows={5}
              />
              <div className="flex justify-between mt-5">
                <p className="text-[10px] leading-4 tracking-[0.04em] text-left text-dark">
                  Insira um breve brief descrevendo as atividades e missões realizadas por seu negócio.
                </p>
                <p className="w-[140px] text-xs leading-4 text-right text-dark">
                  0/800
                </p>
              </div>
              <div className="text-center mt-5">
                <Checkbox
                  classNames={{
                    label: ["text-xs leading-[16px] tracking-[0.04em] text-darkPlus"]
                  }}
                >
                  Concordo com os &nbsp;
                  <span className="text-primary underline">termos de uso</span>
                </Checkbox>
              </div>
              <ButtonsSection prevLink="/auth/login" nextLink="/oportunidades" justifyContent="justify-around" />
            </form>
          </div>
        </div>
      </RegisterLayout>
    </AuthLayout>
  )
}