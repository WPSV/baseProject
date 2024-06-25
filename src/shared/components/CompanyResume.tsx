"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import placeholder from "@/public/assets/companyPlaceholder.svg";
import { Card, CardHeader, CardBody, Chip, Button, Input } from "@nextui-org/react";
import { PencilSimple } from "@phosphor-icons/react";
import { useRouter } from 'next/navigation';

interface CompanyResumeProps {
    company: string;
    description: string;
    tags: string[];
    canEdit: boolean;
}

type ChipColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger";

const colors: ChipColor[] = ["default", "primary", "secondary", "success", "warning", "danger"];

const getRandomColor = (): ChipColor => {
    return colors[Math.floor(Math.random() * colors.length)];
};

export default function CompanyResume({ company: initialCompany, description, tags, canEdit }: CompanyResumeProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [company, setCompany] = useState(initialCompany);
    const [tempCompany, setTempCompany] = useState(initialCompany);
    const [tagColors, setTagColors] = useState<ChipColor[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    useEffect(() => {
        // Inicializa as cores das tags apenas uma vez
        setTagColors(tags.map(() => getRandomColor()));
    }, [tags]);

    const handleEditClick = () => {
        if (canEdit) {
            setIsEditing(true);
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        } else {
            // Redirecionar para um link específico
            router.push('/your-link-here'); // Substitua '/your-link-here' pelo link desejado
        }
    };

    const handleSave = () => {
        setCompany(tempCompany);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setTempCompany(company);
        setIsEditing(false);
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
            handleSave();
        }
    };

    useEffect(() => {
        if (isEditing) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isEditing]);

    return (
        <Card className="h-40 rounded-2xl bg-dark flex flex-row items-center p-4">
            <Image
                width={112}
                height={112}
                alt="Company Placeholder"
                src={placeholder}
                className="mr-4"
            />
            <div className="flex flex-col justify-center flex-grow">
                <CardHeader className="pb-0 pt-2 px-0 flex justify-between items-center w-full">
                    {isEditing ? (
                        <Input
                            ref={inputRef}
                            value={tempCompany}
                            onChange={(e) => setTempCompany(e.target.value)}
                            className="text-xl text-white"
                            autoFocus
                            fullWidth
                            variant="flat"
                            classNames={{
                                inputWrapper: "border-white group-focus-within:border-white",
                                input: "text-white",
                            }}
                        />
                    ) : (
                        <h4 className="font-bold text-xl text-white">{company}</h4>
                    )}
                    <div onClick={handleEditClick} className="ml-2 cursor-pointer">
                        <PencilSimple className="text-white" size={24} />
                    </div>
                </CardHeader>
                {isEditing && (
                    <div className="flex mt-2">
                        <Button onClick={handleSave} size="sm" className="mr-2">Salvar</Button>
                        <Button onClick={handleCancel} size="sm">Cancelar</Button>
                    </div>
                )}
                <CardBody className="overflow-visible gap-2 py-2 px-0">
                    <p className="text-default-400 text-xs">{description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {tags.map((tag, index) => (
                            <Chip key={index} className="text-xs text-black" variant="solid" radius="full" size="lg" color={tagColors[index]}>
                                {tag}
                            </Chip>
                        ))}
                    </div>
                </CardBody>
            </div>
        </Card>
    );
}