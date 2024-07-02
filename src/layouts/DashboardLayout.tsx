import React from 'react';
import Sidebar from '@/shared/components/Sidebar';
import PageLocation from '@/shared/components/pagelocation';
import MainMessage from '@/shared/components/MainMessage';
import CompanyResume from "@/shared/components/CompanyResume";
import Matchs from "@/shared/components/Matchs";
import { CardData } from '@/shared/types/homepage';
import CompanyPlaceholder2 from "@/public/assets/companyplaceholder2.svg"

export default function DashboardLayout({
                                            children
                                        }: {
    children: React.ReactNode
}) {
    const message: string = "👋  Olá! Bem-vindo à plataforma GT!";
    const company: string = "Companhia um";
    const description: string = "Aqui é a descrição de sua companhia";
    const tags: string[] = ["Startup", "Publicidade", "UE", "Portugal", "Marketing", "Investimento", "Taxas Isentas"];
    const cardList: CardData[] = [];

    return (
        <div className="flex w-screen h-screen bg-darkPlus">
            <Sidebar />
            <div className="flex-grow flex flex-col p-8 overflow-auto">
                <div className="w-[1248px] flex flex-col gap-4">
                    <PageLocation />
                    <MainMessage message={message} />
                    <CompanyResume company={company} description={description} tags={tags} canEdit={true} />
                    <Matchs cardData={cardList} />
                </div>
                <div className="flex-grow flex justify-center p-4">
                    {children}
                </div>
            </div>
        </div>
    );
}
