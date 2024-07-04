"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Update from '@/public/assets/Update.svg';

export default function DataUpload() {
    const router = useRouter();

    const handleButtonClick = () => {
        router.push('/custom-route'); // Caminho para a página que você deseja navegar
    };

    return (
        <div className="w-[300px] h-[96px] p-6 rounded-lg bg-primary flex  items-center cursor-pointer opacity-100" onClick={handleButtonClick}>
            <Image src={Update} alt="Phone icon" className="mr-4" width={24} height={24} />
            <span className="font-bold text-white">Upload de dados para a aplicação</span>
        </div>
    );
}
