"use client";

import React from 'react';
import Image from 'next/image';
import CompanyPlaceholder from '@/public/assets/companyPlaceholder.svg';

const data = [
    {
        date: "18 Junho 2024",
        items: [
            {
                photo: CompanyPlaceholder,
                name: "Match com oportunidades boas e negociaveis",
                time: "10:00"
            },
            {
                photo: CompanyPlaceholder,
                name: "Match com oportunidades boas e negociaveis",
                time: "11:00"
            }
        ]
    },
    {
        date: "17 Junho 2024",
        items: [
            {
                photo: CompanyPlaceholder,
                name: "Match com oportunidades boas e negociaveis",
                time: "09:00"
            }
        ]
    }
];

export default function DataUpload() {
    return (
        <div className="p-6 bg-colorBgField rounded-lg w-[300px]">
            <h1 className="text-xl font-bold text-colorTitle mb-6">Histórico</h1>
            {data.map((group, index) => (
                <div key={index} className="mb-6">
                    <div className="font-bold text-colorTitle text-sm mb-2">{group.date}</div>
                    {group.items.map((item, idx) => (
                        <div key={idx} className="grid grid-cols-[auto_1fr_auto] gap-4 items-center mb-4">
                            <Image src={item.photo} alt={item.name} width={40} height={40} className="rounded-full" />
                            <div className="text-sm line-clamp-2 text-colorTitle">{item.name}</div>
                            <div className="text-xs text-primary">{item.time}</div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
