'use client'

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Button from "./Button";
import { UserCircle, Envelope, UsersThree, Database } from '@phosphor-icons/react'

export default function CardConfiguration() {
  return (
    <Card radius="lg" className="bg-colorCard flex items-center justify-center w-90 min-h-80 max-h-96">
      <CardHeader className="flex gap-3 p-6">
        <div className="flex flex-col">
          <p className="text-md font-bold text-2xl mt-5">Configurações</p>
        </div>
      </CardHeader>
      <CardBody className="p-6">
        <Button className="flex items-center justify-start bg-buttonConfig hover:bg-buttonConfigHover border-transparent border border-solid rounded-lg hover:text-buttonConfigTextHover text-buttonConfigText text-sm">
          <UserCircle size={25} className="mr-2" />
          <span className="font-light">Perfil</span>
        </Button>
        <Button className="flex items-center justify-start bg-buttonConfig mt-5 hover:bg-buttonConfigHover border-transparent border border-solid rounded-lg hover:text-buttonConfigTextHover text-buttonConfigText text-sm">
          <Envelope size={25} className="mr-2" />
          <span className="font-light">Email de notificação</span>
        </Button>
        <Button className="flex items-center justify-start bg-buttonConfig mt-5 hover:bg-buttonConfigHover border-transparent border border-solid rounded-lg hover:text-buttonConfigTextHover text-buttonConfigText text-sm">
          <UsersThree size={25} className="mr-2" />
          <span className="font-light">Time</span>
        </Button>
        <Button className="flex items-center justify-start bg-buttonConfig mt-5 hover:bg-buttonConfigHover border-transparent border border-solid rounded-lg hover:text-buttonConfigTextHover text-buttonConfigText text-sm">
          <Database size={25} className="mr-2" />
          <span className="font-light">Plano</span>
        </Button>
      </CardBody>
    </Card>
  );
}


