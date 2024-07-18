'use client'

import { Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import Button from "./Button";

export default function CardPlane() {
  return (
     <Card radius="lg" className="bg-light-100 flex items-center justify-center">
      <CardHeader className="flex gap-3 p-6">
        <div className="flex flex-col">
          <p className="text-md font-bold text-2xl mt-5">Planos e inscrições</p>
        </div>
      </CardHeader>
      <CardBody className="p-4">
      <div className="p-4 rounded-lg border border-borderInput hover:border-gray-400 flex items-center justify-between">
          <span className="text-secondary-400"><span className="font-bold mr-5">Plano atual:</span> gratuito</span>
        </div>
        <div className="flex justify-end">
          <div ><Button className="w-[200px] bg-primary-200 hover:bg-colorTp hover:border-transparent border border-solid border-primary rounded-lg text-buttonText text-sm font-bold mt-8 mb-5">
            {"Mudar plano"}
          </Button></div>
        </div>

      </CardBody>
    </Card>
  );
}


