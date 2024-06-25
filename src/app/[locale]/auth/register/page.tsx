'use client'

import AuthLayout from "@/layouts/AuthLayout";
import RegisterLayout from "@/layouts/RegisterLayout";
import { Input, Select, SelectItem, Textarea, Checkbox, Button, Link } from "@nextui-org/react";

export default function Register() {
  const handleRecaptchaChange = (token) => {
    console.log(token);
  }
  
  return (
    <main>
      <AuthLayout>
        <RegisterLayout>
          <div className="text-center w-[534px] bg-light rounded-[24px] p-[40px_calc((534px-406px)/2)]">
            <form className="w-full">
              <p className="text-2xl font-bold leading-[28.8px] text-center text-darkPlus mb-14">
                Conte sobre o seu negócio!
              </p>
              <Input
                key="outside"
                type="text"
                label="Companhia"
                labelPlacement="outside"
                placeholder=" "
                isRequired
                classNames={{
                  base: ["mb-[35px]"],
                  label: ["pb-[5px]"],
                  inputWrapper: ["data-[hover]:bg-light group-data-[focus]:bg-light bg-light border border-solid border-outline rounded h-14"],
                  innerWrapper: ["bg-light"],
                  input: ["focus:outline-none placeholder-input"],
                }}
              />
              <Select
                label="Localização"
                labelPlacement="outside"
                placeholder="Selecionar"
                classNames={{
                  base: ["mb-[38px]"],
                  label: ["pb-[5px]"],
                  mainWrapper: ["bg-light border border-solid border-outline rounded"],
                  trigger: ["data-[hover]:bg-light group-data-[focus]:bg-light bg-light h-14"],
                  popoverContent: ["rounded"],
                }}
              >
                <SelectItem key="Brasil">
                  Brasil
                </SelectItem>
                <SelectItem key="Venezuela">
                  Venezuela
                </SelectItem>
              </Select>
              <Input
                label="URL do negócio"
                labelPlacement="outside"
                placeholder=" "
                type="text"
                classNames={{
                  base: ["mb-[14px]"],
                  label: ["pb-[5px]"],
                  inputWrapper: ["data-[hover]:bg-light group-data-[focus]:bg-light bg-light border border-solid border-outline rounded h-14"],
                  innerWrapper: ["bg-light"],
                  input: ["focus:outline-none placeholder-input"],
                }}
              />
              <Textarea
                label="O que você faz?"
                labelPlacement="outside"
                placeholder="Olá..."
                minRows={5}
                classNames={{
                  label: ["text-left"],
                  inputWrapper: ["data-[hover]:bg-light group-data-[focus]:bg-light bg-light border border-solid border-outline rounded h-full"],
                  innerWrapper: ["bg-light"],
                  input: ["focus:outline-none placeholder-input"],
                }}
              />
              <div className="flex justify-between mt-5">
                <p className="text-[10px] leading-4 tracking-[0.04em] text-left text-dark">
                  Insira um breve brief descrevendo as atividades e missões realizadas por seu negócio.
                </p>
                <p className="w-[140px] text-xs leading-4 text-right text-dark">0/800</p>
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
              <div className="flex justify-center items-center mt-[30px]">
                <Link href="/auth/login" className="text-sm font-bold leading-[24px] tracking-[0.02em] text-dark mr-[30px]">
                  Voltar
                </Link>
                <Button className="w-[142px] h-14 bg-primary border border-solid border-primary rounded-lg text-light text-sm font-bold">
                  Continuar
                </Button>
              </div>
            </form>
          </div>
        </RegisterLayout>
      </AuthLayout>
    </main>
  )
}