'use client'

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Button from "./Button";
import { ChangeEvent, FormEvent, useState } from "react";
import companyPlaceholder from '@/public/assets/companyPlaceholder.svg';
import Image from 'next/image';

export default function CardTime() {

  const [form, setForm] = useState({ email: "" });
  const [emails, setEmails] = useState<string[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (form.email) {
      setEmails([...emails, form.email]);
      setForm({ email: "" });
    }
  }

  return (
    <Card radius="lg" className="bg-colorCard flex items-center justify-center">
      <CardHeader className="flex gap-3 p-6">
        <div className="flex flex-col">
          <p className="text-md font-bold text-2xl mt-3">Time</p>
        </div>
      </CardHeader>
      <CardBody className="p-6">
        <p className="text-md font-bold text-2xl mb-1">Usuários da companhia</p>
        <p className="text-sm text-2xl mb-5">O plano grátis oferece a presença de até 2 membros.</p>
        <div className="p-4 rounded-lg border border-borderInput flex items-center justify-between mb-4">
          <div className="grid grid-cols-4 grid-rows-1 gap-1">
            <div >
              <Image
                width={50}
                height={50}
                alt="Company Placeholder"
                src={companyPlaceholder}
                className="mr-4 relative"
              />
            </div>
            <div className="col-span-2"><div className="mt-3"><span>email@gtgroup.com.br</span></div></div>
            <div className="col-start-4"><div className="mt-3 font-bold">Proprietário</div></div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className="rounded-lg bg-transparent border bg-borderInput border-borderInput hover:border-outline py-3 w-full focus:outline-none focus:border-outline pl-5"
            type="email"
            placeholder=" Add emails to invite *"
            onChange={handleChange}
          />
          <p className="text-sm text-2xl mt-2">Pressione Enter ou Espaço para adicionar o email.</p>
          <div className="flex justify-end">
            <div >
              <Button
                className="w-[200px] bg-buttonBg hover:bg-colorTp hover:border-transparent border border-solid border-primary rounded-lg text-buttonText text-sm font-bold mt-5">
                {"Enviar convite"}
              </Button>
            </div>
          </div>
        </form>



      </CardBody>
    </Card>
  );
}


