'use client'

import React from "react";
import LanguageSwitcher from "@/shared/components/LanguageSwitcher";
import styles from "@/styles/header.module.css";
import { useTranslations } from "next-intl";
import SwitchMode from "@/app/[locale]/switchMode";

export default function App() {
  const t = useTranslations("Header");

  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative">
      <button
        className="fixed top-4 right-4 z-50 focus:outline-none"
        onClick={handleToggle}
      >
        <div className={`space-y-1 flex flex-col justify-center items-center h-[50px] w-[50px] rounded-full border ${isOpen ? "border-headerButtonColor" : "border-headerButtonColor"}`}>
          <div
            className={`w-[17px] h-[1px] transform transition-transform duration-200 ease-in-out ${isOpen ? `bg-headerButtonLinesInside ${styles.lineUp}` : 'bg-headerButtonLines'}`} />
          <div
            className={`w-[17px] h-[1px] transition-opacity duration-200 ease-in-out ${isOpen ? 'bg-headerButtonColor opacity-0' : 'bg-headerButtonLines'}`} />
          <div
            className={`w-[17px] h-[1px] transform transition-transform duration-200 ease-in-out ${isOpen ? `bg-headerButtonLinesInside ${styles.lineDown}` : 'bg-headerButtonLines'}`} />
        </div>
      </button>

      <div
        className={`flex justify-center items-center fixed h-[88px] inset-0 bg-card transform ${isOpen ? 'translate-y-0' : '-translate-y-[88px]'} transition-transform duration-200 ease-in-out z-40`}
      >
        <nav className="flex justify-around items-center h-full w-[1366px]">
          <div>
            <img src="/assets/logoHeader.svg" alt="logo" />
          </div>
          <ul className="flex justify-between w-[400px]">
            <li className="text-colorTitle">{t("contactUs")}</li>
            <li className="text-colorTitle">{t("plan")}</li>
            <li className="text-colorTitle">{t("createAccount")}</li>
            <li className="text-colorTitle">{t("login")}</li>
          </ul>
          <div className="flex justify-between items-center">
            <span className="mr-2.5 text-colorTitle">{t("darkMode")}</span>
            <div className="mr-5">
              <SwitchMode />
            </div>
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </div>
  );
}
