'use client'

import { Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { Switch } from '@nextui-org/react';
import { useState } from "react";

export default function CardNotificationEmail() {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => setChecked(!checked);
  return (
    <Card radius="lg" className="bg-light-100 flex items-center justify-center mb-5">
      <CardHeader className="flex gap-3 p-6">
        <div className="flex flex-col">
          <p className="text-md font-bold text-2xl mt-5 text-secondary-400">Email de nofiticação</p>
        </div>
      </CardHeader>
      <CardBody className="p-4">
        <span className="p-2 font-bold text-secondary-400">Newsletter:</span>
        <div className="p-4 rounded-lg border border-borderInput hover:border-gray-400 flex items-center justify-between">
          <span className="text-secondary-400">Newsletter</span>
          <Switch checked={checked} onChange={handleToggle} />
        </div>

        <span className="p-2 font-bold mt-5 text-secondary-400">Oportunidades:</span>
        <div className="p-4 rounded-lg border border-borderInput hover:border-gray-400 flex items-center justify-between mb-2">
          <span className="text-secondary-400">Novas oportunidades lançadas na plataforma</span>
          <Switch checked={checked} onChange={handleToggle} />
        </div>

        <div className="p-4 rounded-lg border border-borderInput hover:border-gray-400 flex items-center justify-between">
          <span className="text-secondary-400">E-mails com informações relevantes para você</span>
          <Switch checked={checked} onChange={handleToggle} />
        </div>

        <span className="p-2 font-bold mt-5 text-secondary-400">Plano:</span>
        <div className="p-4 rounded-lg border border-borderInput hover:border-gray-400 flex items-center justify-between mb-2">
          <span className="text-secondary-400">Notificações de planos</span>
          <Switch checked={checked} onChange={handleToggle} />
        </div>

        <div className="p-4 rounded-lg border border-borderInput hover:border-gray-400 flex items-center justify-between">
          <span className="text-secondary-400">E-mails com informações relevantes para você</span>
          <Switch checked={checked} onChange={handleToggle} />
        </div>

        <span className="p-2 font-bold mt-5 text-secondary-400">Aplicações:</span>
        <div className="p-4 rounded-lg border border-borderInput hover:border-gray-400 flex items-center justify-between mb-5">
          <span className="text-secondary-400">Um lembrete para aplicativos que foram iniciados, mas não concluídos</span>
          <Switch checked={checked} onChange={handleToggle} />
        </div>
      </CardBody>
    </Card>
  );
}


