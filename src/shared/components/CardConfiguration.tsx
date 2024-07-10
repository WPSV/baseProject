import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Button from "./Button";

export default function CardConfiguration() {
  return (
    <Card radius="lg" className="bg-dark flex items-center justify-center">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md font-bold text-2xl">Configurações</p>
        </div>
      </CardHeader>
      <CardBody className="p-4">
        <Button className="bg-buttonBg hover:bg-colorTp hover:border-transparent border border-solid border-primary rounded-lg text-buttonText text-sm font-bold">
          {"Perfil"}
        </Button>
        <Button className="bg-buttonBg mt-5 hover:bg-colorTp hover:border-transparent border border-solid border-primary rounded-lg text-buttonText text-sm font-bold">
          {"Email de notificação"}
        </Button>
        <Button className="bg-buttonBg mt-5 hover:bg-colorTp hover:border-transparent border border-solid border-primary rounded-lg text-buttonText text-sm font-bold">
          {"Time"}
        </Button>
        <Button className="bg-buttonBg mt-5 hover:bg-colorTp hover:border-transparent border border-solid border-primary rounded-lg text-buttonText text-sm font-bold">
          {"Plano"}
        </Button>
      </CardBody>
    </Card>
  )
}


