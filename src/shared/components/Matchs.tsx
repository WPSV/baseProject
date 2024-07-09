"use client";

import React from 'react';
import { Card, CardBody } from "@nextui-org/react";
import Image from 'next/image';
import { CardData } from '@/shared/types/homepage';

interface MatchsProps {
    cardData?: CardData[];
}

const getButtonClass = (label: string): string => {
    switch (label) {
        case 'Match incerto':
            return 'bg-warning text-black';
        case 'Match ruim':
            return 'bg-danger text-black';
        case 'Match bom':
            return 'bg-success text-black';
        default:
            return 'bg-gray-500 text-black';
    }
};

export default function Matchs({ cardData = [] }: MatchsProps): JSX.Element {
    return (
        <Card radius="lg" className="relative w-auto bg-secondary flex flex-col">
            {cardData.length > 0 && (
                <div className="flex justify-between p-5">
                    <div>
                        <h2 className="text-xl text-colorTitle font-bold">Seus matchs</h2>
                        <p className="text-sm text-colorTitle">{cardData.length} matchs encontrados</p>
                    </div>
                    <a className="text-right text-colorTitle">Mostrar tudo</a>
                </div>
            )}
            <CardBody className={`text-left p-4 text-colorTitle flex-grow ${cardData.length === 0 ? 'min-h-[168px]' : ''}`}>
                {cardData.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {cardData.map((item: CardData, index: number) => (
                            <div key={index} className="flex h-full bg-colorBgField p-4 rounded-lg">
                                <div className="flex-shrink-0 mr-4 flex items-center">
                                    <Image
                                        src={item.img}
                                        alt="Match Image"
                                        width={88}
                                        height={116}
                                        className="rounded-lg"
                                    />
                                </div>
                                <div className="flex flex-col justify-between w-[16.625rem] h-[7.25rem]">
                                    <p className="font-bold text-colorTitle text-base uppercase break-words max-w-full">{item.title}</p>
                                    <span className="text-default-400 text-xs">{item.description}</span>
                                    <div className="px-0 flex">
                                        <button
                                            className={`${getButtonClass(item.buttonLabel)} text-xs rounded-full px-3 py-2`}>
                                            {item.buttonLabel}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        <div className="flex w-full justify-between items-center">
                            <div>
                                <p className="text-colorTitle opacity-80 text-xs">Calculando os possíveis matchs e oportunidades.</p>
                            </div>
                            <a className="text-right text-sm cursor-pointer text-colorTitle">Mostrar tudo</a>
                        </div>
                        <div className="mt-auto h-2 bg-white rounded-full animate-pulse"></div>
                    </>
                )}
            </CardBody>
        </Card>
    );
}
