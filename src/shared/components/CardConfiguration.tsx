'use client'

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Button from "./Button";
import {UserCircle, Envelope, UsersThree, Database} from '@phosphor-icons/react'

export default function CardConfiguration() {
  return (
    <Card radius="lg" className="bg-dark flex items-center justify-center">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md font-bold text-2xl">Configurações</p>
        </div>
      </CardHeader>
      <CardBody className="p-4">
        <Button className="bg-buttonConfig hover:bg-buttonConfigHover hover:border-transparent border border-solid border-primary rounded-lg text-buttonText text-sm font-bold flex items-center">
          <UserCircle size={32} className="mr-2" />
          <span>Perfil</span>
        </Button>
        <Button className="bg-buttonConfig mt-5 hover:bg-buttonConfigHover hover:border-transparent border border-solid border-primary rounded-lg text-buttonText text-sm font-bold flex items-center">
          <Envelope size={32} className="mr-2" />
          <span>Email de notificação</span>
        </Button>
        <Button className="bg-buttonConfig mt-5 hover:bg-buttonConfigHover hover:border-transparent border border-solid border-primary rounded-lg text-buttonText text-sm font-bold flex items-center">
          <UsersThree size={32} className="mr-2" />
          <span>Time</span>
        </Button>
        <Button className="bg-buttonConfig mt-5 hover:bg-buttonConfigHover hover:border-transparent border border-solid border-primary rounded-lg text-buttonText text-sm font-bold flex items-center">
          <Database size={32} className="mr-2" />
          <span>Plano</span>
        </Button>
      </CardBody>
    </Card>
  );
}


