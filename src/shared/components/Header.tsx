'use client'

import React from "react";
import LanguageSwitcher from "@/shared/components/LanguageSwitcher";
import styles from "@/styles/header.module.css";
import { Switch } from "@nextui-org/react";
import { useTranslations } from "next-intl";

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
        <div className={`space-y-1 flex flex-col justify-center items-center h-[50px] w-[50px] rounded-full border ${isOpen ? "border-outline" : "border-darkMinus" }`}>
          <div
            className={`w-[17px] h-[1px] transform transition-transform duration-200 ease-in-out ${isOpen ? `bg-dark ${styles.lineUp}` : 'bg-light'}`}/>
          <div
            className={`w-[17px] h-[1px] transition-opacity duration-200 ease-in-out ${isOpen ? 'bg-darkMinus opacity-0' : 'bg-light'}`}/>
          <div
            className={`w-[17px] h-[1px] transform transition-transform duration-200 ease-in-out ${isOpen ? `bg-dark ${styles.lineDown}` : 'bg-light'}`}/>
        </div>
      </button>
      
      <div
        className={`flex justify-center items-center fixed h-[88px] inset-0 bg-light transform ${isOpen ? 'translate-y-0' : '-translate-y-[88px]'} transition-transform duration-200 ease-in-out z-40`}
      >
        <nav className="flex justify-around items-center h-full w-[1366px]">
          <div>
            <img src="/assets/logoHeader.svg" alt="logo"/>
          </div>
          <ul className="flex justify-between w-[400px]">
            <li>{t("contactUs")}</li>
            <li>{t("plan")}</li>
            <li>{t("createAccount")}</li>
            <li>{t("login")}</li>
          </ul>
          <div className="flex justify-between items-center">
            <span className="mr-2.5">{t("darkMode")}</span>
            <Switch className="mr-5" defaultSelected color="default"/>
            <LanguageSwitcher/>
          </div>
        </nav>
      </div>
    </div>
  );
}
