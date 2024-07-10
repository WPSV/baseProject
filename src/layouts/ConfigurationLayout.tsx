import React from 'react';
import Sidebar from '@/shared/components/Sidebar';
import PageLocation from '@/shared/components/pagelocation';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import Button from '@/shared/components/Button';
import Title from '@/shared/components/Title';

export default function ConfigurationLayout() {
  return (
    <div className="flex w-screen h-screen bg-darkPlus">
      <Sidebar />
      <div className="flex-grow flex flex-col p-8">
        <div className="w-[1248px] flex flex-col gap-4">
          <PageLocation />
          <div className="grid grid-cols-3 grid-rows-1 gap-4">
            <div>
              <Card radius="lg" className="bg-dark flex items-center justify-center">
                <CardHeader className="flex gap-3">
                  <div className="flex flex-col">
                    <p className="text-md font-bold text-2xl">Configurações</p>
                  </div>
                </CardHeader>
                <CardBody className="text-left p-4 text-white">
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
            </div>
            <div className="col-span-2">2</div>
          </div>
        </div>
      </div>
    </div>
  );
}