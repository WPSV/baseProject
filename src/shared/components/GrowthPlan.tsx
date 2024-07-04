"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Chip } from "@nextui-org/react";
import { GrowthPlanData } from "@/shared/types/homepage";

const getTagColor = (tag: string): "default" | "primary" | "secondary" | "success" | "warning" | "danger" => {
    switch (tag) {
        case 'Match bom':
            return 'success';
        case 'Match ruim':
            return 'danger';
        case 'Match incerto':
            return 'warning';
        default:
            return 'default';
    }
};

interface GrowthPlanProps {
    data: GrowthPlanData[];
}

export default function GrowthPlan({ data }: GrowthPlanProps) {
    const router = useRouter();

    const handleViewMore = () => {
        router.push('/growth-plans');
    };

    if (!data || data.length === 0) {
        return (
            <div className="text-white bg-dark rounded-lg p-6 relative">
                <h1 className="text-xl font-bold">Planos de crescimento</h1>
                <p className="text-sm opacity-80 mt-2">Comece a construir seu plano de ação</p>
                <button
                    className="absolute top-4 right-4 text-white text-sm"
                    onClick={handleViewMore}
                >
                    Ver mais
                </button>
            </div>
        );
    }

    return (
        <div className="w-full text-white p-6 rounded-lg bg-dark h-72 flex flex-col">
            <h2 className="text-xl font-bold mb-5 sticky top-0 bg-dark z-10">Planos de crescimento</h2>
            <div className="relative flex-1 overflow-scroll">
                <span className="relative flex ml-3 text-sm font-bold mb-4"> Data de <br /> abertura </span>
                {data.map((item, index) => {
                    const isFirstOfGroup = index === 0 || data[index - 1].date !== item.date;
                    return (
                        <div key={index} className="mb-8 flex items-center relative">
                            <div className="flex flex-col items-center pr-2 w-24">
                                {isFirstOfGroup ? (
                                    <p className="text-sm">{item.date}</p>
                                ) : (
                                    <div className="text-sm">&nbsp;</div>
                                )}
                            </div>
                            {isFirstOfGroup && (
                                <div className="absolute flex-shrink-0 ml-[6.5rem] w-4 h-4 bg-gray-400 rounded-full"></div>
                            )}
                            <div className={`ml-8 flex-grow bg-darkMinus p-4 rounded-lg flex items-center relative ${!isFirstOfGroup && 'ml-32'}`}>
                                <div className="absolute left-[-1rem] top-0 bottom-0 border-l-2 h-[127%] border-gray-400 border-opacity-50"></div>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={88}
                                    height={88}
                                    className="rounded-lg mr-4"
                                />
                                <div className="flex flex-col">
                                    <h4 className="text-lg font-bold">{item.title}</h4>
                                    <p className="text-sm mb-2">{item.description}</p>
                                    <Chip size="lg" className="text-xs" color={getTagColor(item.tag)}>
                                        {item.tag}
                                    </Chip>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
