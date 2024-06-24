import React from 'react';
import Sidebar from '@/shared/components/Sidebar';

export default function DashboardLayout({
                                            children
                                        }: {
    children: React.ReactNode
}) {
    return (
        <div className="flex w-screen h-screen bg-darkPlus">
            <Sidebar />
            <div className="flex-grow flex justify-center p-4">
                {children}
            </div>
        </div>
    );
}