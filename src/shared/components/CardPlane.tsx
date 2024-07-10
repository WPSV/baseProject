'use client'

import { Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import Button from "./Button";

export default function CardPlane() {
  return (
     <Card radius="lg" className="bg-background flex items-center justify-center">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md font-bold text-2xl mt-5">Planos e inscrições</p>
        </div>
      </CardHeader>
      <CardBody className="p-4">
        <Input
          type="text"
          placeholder="gratuito"
          labelPlacement="outside"
          isDisabled
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small font-bold">Plano:</span>
            </div>
          }
        />

        <div className="flex justify-end">
          <div ><Button className="w-[200px] bg-buttonBg hover:bg-colorTp hover:border-transparent border border-solid border-primary rounded-lg text-buttonText text-sm font-bold mt-5">
            {"Mudar plano"}
          </Button></div>
        </div>

      </CardBody>
    </Card>
  );
}


