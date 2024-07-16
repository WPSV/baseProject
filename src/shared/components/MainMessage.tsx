"use client";

import React from 'react';
import { Card, CardBody } from "@nextui-org/react";

interface MainMessageProps {
    message: string;
}

export default function MainMessage({ message }: MainMessageProps) {
    return (
        <Card radius="lg" className="h-14 bg-card flex items-center justify-center">
            <CardBody className="text-left p-4 text-colorTitle">
                {message}
            </CardBody>
        </Card>
    );
}
