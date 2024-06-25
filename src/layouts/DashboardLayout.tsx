import React from 'react';
import Sidebar from '@/shared/components/Sidebar';
import PageLocation from '@/shared/components/pagelocation';
import MainMessage from '@/shared/components/MainMessage';
import CompanyResume from "@/shared/components/CompanyResume";

export default function DashboardLayout({
                                            children
                                        }: {
    children: React.ReactNode
}) {
    const message = "👋  Olá! Bem-vindo à plataforma GT!";
    const company = "Companhia um";
    const description = "Aqui é a descrição de sua companhia"
    const tags = ["Startup", "Publicidade", "UE", "Portugal", "Marketing", "Investimento", "Taxas Isentas"];
    return (
        <div className="flex w-screen h-screen bg-darkPlus">
            <Sidebar />
            <div className="flex-grow flex flex-col p-8">
                <div className="w-[1248px] flex flex-col gap-4">
                    <PageLocation />
                    <MainMessage message={message} />
                    <CompanyResume company={company} description={description} tags={tags} canEdit={true}/>
                </div>
                <div className="flex-grow flex justify-center p-4">
                    {children}
                </div>
            </div>
        </div>
    );
}
