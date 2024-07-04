import React from 'react';
import Sidebar from '@/shared/components/Sidebar';
import PageLocation from '@/shared/components/pagelocation';
import MainMessage from '@/shared/components/MainMessage';
import CompanyResume from "@/shared/components/CompanyResume";
import Matchs from '@/shared/components/Matchs';
import OnboardingPercentage from '@/shared/components/OnboardingPercentage';
import { CardData } from '@/shared/types/homepage';
import CompanyPlaceholder2 from "@/public/assets/companyplaceholder2.svg";
import CompanyPlaceHolder3 from '@/public/assets/CompanyPlaceholder3.svg';
import GrowthPlan from '@/shared/components/GrowthPlan';
import DataUpload from "@/shared/components/DataUpload";
import Historic from '@/shared/components/Historic';

export default function DashboardLayoutHistoric({ children }: { children: React.ReactNode }) {
    const message: string = "👋  Olá! Bem-vindo à plataforma GT!";
    const company: string = "Companhia um";
    const description: string = "Aqui é a descrição de sua companhia";
    const tags: string[] = ["Startup", "Publicidade", "UE", "Portugal", "Marketing", "Investimento", "Taxas Isentas"];
    const cardList: CardData[] = [
        {
            img: CompanyPlaceholder2,
            title: "Match bom",
            description: "Este é um ótimo match para sua empresa.",
            buttonLabel: "Match bom"
        },
        {
            img: CompanyPlaceholder2,
            title: "Match ruim",
            description: "Este match pode não ser ideal.",
            buttonLabel: "Match ruim"
        },
        {
            img: CompanyPlaceholder2,
            title: "Match incerto",
            description: "Este match pode precisar de mais análise.",
            buttonLabel: "Match incerto"
        }
    ];

    const progressValue: number = 100;

    const growthPlanData = [
        {
            image: CompanyPlaceHolder3,
            title: "PLANO DE RECUPERAÇÃO E RESILIÊNCIA – PRR",
            description: "Up to 70% financed.",
            date: "Jan 2024",
            tag: "Match bom"
        },
        {
            image: CompanyPlaceHolder3,
            title: "PLANO DE RECUPERAÇÃO E RESILIÊNCIA – PRR",
            description: "Up to 70% financed.",
            date: "Jan 2024",
            tag: "Match bom"
        },
        {
            image: CompanyPlaceHolder3,
            title: "Plano de Crescimento 2",
            description: "Descrição do plano de crescimento 2",
            date: "Feb 2024",
            tag: "Match ruim"
        },
    ];

    return (
        <div className="relative flex w-screen min-h-screen bg-darkPlus">
            <Sidebar />
            <div className="flex flex-col md:flex-row flex-grow">
                <div className="w-2/4 p-4 space-y-4">
                    <PageLocation />
                    <MainMessage message={message} />
                    <CompanyResume company={company} description={description} tags={tags} canEdit={true} />
                    <Matchs cardData={cardList} />
                    <OnboardingPercentage progressValue={progressValue} />
                    <GrowthPlan data={growthPlanData} />
                </div>
                <div className="w-1/3 p-4 space-y-4 mt-11">
                    <DataUpload />
                    <Historic />
                </div>
            </div>
        </div>
    );
}
