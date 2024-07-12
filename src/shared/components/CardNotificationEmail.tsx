'use client'

import { Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { Switch } from '@nextui-org/react';
import { useState } from "react";

export default function CardNotificationEmail() {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => setChecked(!checked);
  return (
    <Card radius="lg" className="bg-background flex items-center justify-center mb-5">
      <CardHeader className="flex gap-3 p-6">
        <div className="flex flex-col">
          <p className="text-md font-bold text-2xl mt-5">Email de nofiticação</p>
        </div>
      </CardHeader>
      <CardBody className="p-4">
        <span className="text-gray-700 p-2 font-bold">Newsletter:</span>
        <div className="p-4 rounded-lg border border-gray-300 hover:border-gray-400 flex items-center justify-between">
          <span className="text-gray-700">Newsletter</span>
          <Switch checked={checked} onChange={handleToggle} />
        </div>

        <span className="text-gray-700 p-2 font-bold mt-5">Oportunidades:</span>
        <div className="p-4 rounded-lg border border-gray-300 hover:border-gray-400 flex items-center justify-between mb-2">
          <span className="text-gray-700">Novas oportunidades lançadas na plataforma</span>
          <Switch checked={checked} onChange={handleToggle} />
        </div>

        <div className="p-4 rounded-lg border border-gray-300 hover:border-gray-400 flex items-center justify-between">
          <span className="text-gray-700">E-mails com informações relevantes para você</span>
          <Switch checked={checked} onChange={handleToggle} />
        </div>

        <span className="text-gray-700 p-2 font-bold mt-5">Plano:</span>
        <div className="p-4 rounded-lg border border-gray-300 hover:border-gray-400 flex items-center justify-between mb-2">
          <span className="text-gray-700">Notificações de planos</span>
          <Switch checked={checked} onChange={handleToggle} />
        </div>

        <div className="p-4 rounded-lg border border-gray-300 hover:border-gray-400 flex items-center justify-between">
          <span className="text-gray-700">E-mails com informações relevantes para você</span>
          <Switch checked={checked} onChange={handleToggle} />
        </div>

        <span className="text-gray-700 p-2 font-bold mt-5">Aplicações:</span>
        <div className="p-4 rounded-lg border border-gray-300 hover:border-gray-400 flex items-center justify-between mb-5">
          <span className="text-gray-700">Um lembrete para aplicativos que foram iniciados, mas não concluídos</span>
          <Switch checked={checked} onChange={handleToggle} />
        </div>
      </CardBody>
    </Card>
  );
}


