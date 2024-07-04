export interface CardData {
    title: string;
    description: string;
    buttonLabel: string;
    img: string;
}

export interface CompanyResumeProps {
    company: string;
    description: string;
    tags: string[];
    canEdit: boolean;
}

export interface GrowthPlanData {
    image: string;
    title: string;
    description: string;
    date: string;
    tag: string;
}