'use client'

import AuthLayout from "../../../../layouts/AuthLayout";
import {Button, Input} from "@nextui-org/react";
import {EnvelopeSimple} from "@phosphor-icons/react";
import { useTranslations } from "next-intl";

export default function ForgotPassword() {
    const t = useTranslations("ForgotPassword");

    return (
        <AuthLayout>
            <div className="flex justify-center items-center">
                <div className="flex flex-col items-center bg-background w-[534px] h-[512px] rounded-[24px] p-[60px_calc((534px-406px)/2)]">
                    <img className="mt-0 mx-auto mb-[50px]" src="/assets/logoForm.svg" alt="Logo"/>
                    <p className="text-2xl font-bold leading-7 text-center text-colorTitle m-2.5">
                        {t('title')}
                    </p>
                    <p className="text-xs font-normal leading-[18px] tracking-[0.04em] text-subtTitle text-center mb-10">
                        {t('subTitle')}
                    </p>
                    <Input
                        type="email"
                        placeholder={t('inputEmail')}
                        endContent={<EnvelopeSimple size={32}/>}
                        classNames={{
                            base: [
                                "bg-colorBgField border border-solid border-outline rounded overflow-hidden mb-5",
                            ],
                            mainWrapper: [
                                "bg-colorBgField",
                            ],
                            inputWrapper: [
                                "data-[hover]:bg-colorBgField group-data-[focus]:bg-colorBgField bg-colorBgField h-14 text-colorTitle",
                            ],
                            innerWrapper: [
                                "bg-colorBgField",
                            ],
                            input: [
                                "focus:outline-none placeholder-input",
                            ],
                        }}
                    />
                    <Button className="w-btn h-14 px-12 bg-buttonBg hover:bg-colorTp border border-transparent border-solid hover:border-colorTb rounded-lg text-buttonText text-sm font-bold ">
                        {t('buttonText')}
                    </Button>
                </div>
            </div>
        </AuthLayout>
    )
}