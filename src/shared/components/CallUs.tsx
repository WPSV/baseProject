"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Phone from '@/public/assets/Phone.svg';

export default function GrowthPlan() {
    const router = useRouter();

    const handleViewMore = () => {
        router.push('/growth-plans');
    };

    return (
        <div className="w-full text-white h-[6.5rem] p-6 rounded-lg bg-buttonHomeCall flex justify-center items-center cursor-pointer" onClick={handleViewMore}>
            <Image src={Phone} alt="Phone icon" className="mr-4" width={24} height={24} />
            <span className="font-bold text-buttonHomeCallText">Entre em contato conosco e faça sua aplicação</span>
        </div>
    );
}
