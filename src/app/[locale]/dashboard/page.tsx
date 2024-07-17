'use client'

import Title from "@/shared/components/Title";
import SubTitle from "@/shared/components/SubTitle";
import Input from "@/shared/components/Input";

export default function Page() {
  return (
    <div className="bg-light rounded-2xl p-5">
      <Title>Informações da empresa</Title>
      <SubTitle>Dados do seu perfil de negócio.</SubTitle>
      <div className="bg-light rounded-2xl p-5">
        <img src="/assets/fotoCompany.svg" alt="Foto Companhia" />
        <Input
          type="text"
          name="name"
          label="Nome"
          labelPlacement="outside"
          placeholder="Nome da companhia"
          onChange={() => 1}
          isRequired
        />
        <Input
          type="text"
          name="name"
          label="Url da empresa"
          labelPlacement="outside"
          placeholder="URL"
          onChange={() => 1}
          isRequired
        />
      </div>
    </div>
  )
}