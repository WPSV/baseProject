import {useTranslations} from 'next-intl';
import AuthLayout from "@/layouts/AuthLayout";
import {Button} from "@nextui-org/react";

export default function NotFoundPage() {
    const t = useTranslations('NotFoundPage');
    const p = useTranslations('BackPage');
    
    return (
        <AuthLayout>
            <div
                className="flex flex-col items-center">
                <span className="text-9xl font-bold text-primary pb-5">404</span>
                <h1 className="text-2xl text-lightPrimary">{t('message')}</h1>
                <Button
                    className="w-btn h-14 bg-primary border border-solid border-primary rounded-lg text-light text-sm font-bold mt-10">
                    {p('message')}
                </Button>
            </div>
        </AuthLayout>
    );
}