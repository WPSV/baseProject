'use client'

import DashboardLayout from '@/layouts/DashboardLayout';

export default function Home() {
    return (
        <DashboardLayout>
            <div className="text-center">
                <h1 className="text-2xl text-white font-bold">Aqui entra o texto da página</h1>
                <p className="text-white">A fazer.</p>
            </div>
        </DashboardLayout>
    );
}