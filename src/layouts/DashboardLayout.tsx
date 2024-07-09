import React from 'react';
import Sidebar from '@/shared/components/Sidebar';
import PageLocation from '@/shared/components/pagelocation';
import MainMessage from '@/shared/components/MainMessage';
import CompanyResume from "@/shared/components/CompanyResume";
import Matchs from '@/shared/components/Matchs';
import OnboardingPercentage from '@/shared/components/OnboardingPercentage';
import { CardData } from '@/shared/types/homepage';
import CompanyPlaceholder2 from "@/public/assets/companyplaceholder2.svg";
import GrowthPlan from '@/shared/components/GrowthPlan';
import CallUs from '@/shared/components/CallUs';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const message: string = "👋  Olá! Bem-vindo à plataforma GT!";
    const company: string = "Companhia um";
    const description: string = "Aqui é a descrição de sua companhia";
    const tags: string[] = ["Startup", "Publicidade", "UE", "Portugal", "Marketing", "Investimento", "Taxas Isentas"];
    const cardList: CardData[] = [
    ];

    const progressValue: number = 75;

    return (
        <div className="relative flex w-screen h-screen bg-background">
            <Sidebar />
            <div className="flex flex-col md:flex-row flex-grow p-4 overflow-auto">
                <div className="w-full md:w-2/3  space-y-4">
                    <PageLocation />
                    <MainMessage message={message} />
                    <CompanyResume company={company} description={description} tags={tags} canEdit={true} />
                    <div className="flex w-full space-x-4">
                        <div className="flex-auto w-1/4">
                            <Matchs cardData={cardList} />
                        </div>
                        <div className="flex-1">
                            <OnboardingPercentage progressValue={progressValue} />
                        </div>
                    </div>
                    <GrowthPlan />
                    <CallUs />
                </div>
                <div className="w-full md:w-1/3 p-4 space-y-4 mt-4 md:mt-0">
                    {children}
                </div>
            </div>
        </div>
    );
}
