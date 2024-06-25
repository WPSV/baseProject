"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react';

export default function PageLocation() {
    const pathname = usePathname();
    const pathParts = pathname.split('/').filter(Boolean);

    const capitalizeFirstLetter = (string: string): string => {
        if (!string) return string;
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className="p-1">
            <Breadcrumbs color='primary'>
                {pathParts.map((part, index) => (
                    <BreadcrumbItem key={index} href={`/${pathParts.slice(0, index + 1).join('/')}`}>
                        {capitalizeFirstLetter(part)}
                    </BreadcrumbItem>
                ))}
            </Breadcrumbs>
        </div>
    );
}
