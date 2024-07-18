'use client'

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Button from "./Button";
import Image from 'next/image';
import companyPlaceholder from '@/public/assets/companyPlaceholder.svg';

export default function CardProfile() {
  return (
    <Card radius="lg" className="bg-light-100 flex items-center justify-center">
      <CardHeader className="flex gap-3 p-6">
        <div className="flex flex-col">
          <p className="text-md font-bold text-2xl mt-5">Perfil</p>
        </div>
      </CardHeader>
      <CardBody className="p-4">
        <div className="grid grid-cols-3 grid-rows-1 gap-4">
          <div className="col-span-2 col-start-2 row-start-1 mr-5">
            <div className="p-4 rounded-lg border border-borderInput hover:border-gray-400 flex items-center justify-between mb-5">
              <span className="text-secondary-400"><span className="font-bold text-secondary-400">Email:</span> email@gtgroup.com.br</span>
            </div>
            <div className="p-4 rounded-lg border border-borderInput hover:border-gray-400 flex items-center justify-between mb-5">
              <span className="text-secondary-400"><span className="font-bold text-secondary-400">Companhia:</span> Minha companhia</span>
            </div>
            <div className="p-4 rounded-lg border border-borderInput hover:border-gray-400 flex items-center justify-between mb-5">
              <span className="text-secondary-400"><span className="font-bold text-secondary-400">Língua:</span> Inglês</span>
            </div>
            <div className="p-4 rounded-lg border border-borderInput hover:border-gray-400 flex items-center justify-between">
              <span className="text-secondary-400"><span className="font-bold text-secondary-400">Criado em:</span> 17/06/2024</span>
            </div>
          </div>
          <div className="col-start-1 row-start-1 flex justify-center items-center">
            <Image
              width={112}
              height={112}
              alt="Company Placeholder"
              src={companyPlaceholder}
              className="mr-4 relative top-[-90px]"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <div ><Button className="w-[200px] bg-primary-200 hover:bg-colorTp hover:border-transparent border border-solid border-primary rounded-lg text-light-100 text-sm font-bold mt-8 mb-5 mr-5">
            {"Trocar senha"}
          </Button></div>
        </div>
      </CardBody>
    </Card>
  );
}


