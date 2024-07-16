"use client";

import React from 'react';
import { Progress } from "@nextui-org/react";

interface OnboardingPercentageProps {
    progressValue: number | null;
}

export default function OnboardingPercentage({ progressValue }: OnboardingPercentageProps): JSX.Element | null {
    if (progressValue === null || progressValue === 100) {
        return null;
    }

    return (
        <div className="flex flex-col h-full p-4 bg-card text-colorTitle rounded-lg">
            <h2 className="text-xl font-bold">Onboarding</h2>
            <p className="text-xs opacity-80 mt-2">Adicione mais informações para matchs</p>
            <Progress
                aria-label="Loading progress"
                size="lg"
                value={progressValue}
                color="warning"
                showValueLabel={true}
                className="mt-4"
            />
        </div>
    );
}
