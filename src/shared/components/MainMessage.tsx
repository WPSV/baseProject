"use client";

import React from 'react';
import { Card, CardBody } from "@nextui-org/react";

interface MainMessageProps {
    message: string;
}

export default function MainMessage({ message }: MainMessageProps) {
    return (
        <Card radius="lg" className="h-14 bg-dark flex items-center justify-center">
            <CardBody className="text-left p-4 text-white">
                {message}
            </CardBody>
        </Card>
    );
}
