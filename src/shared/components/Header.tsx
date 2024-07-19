'use client'

import React from "react";
import LanguageSwitcher from "@/shared/components/LanguageSwitcher";
import { useTranslations } from "next-intl";
import SwitchMode from "@/shared/components/SwitchMode";
import { List, X } from "@phosphor-icons/react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function App() {
  const t = useTranslations("Header");
  const isDarkMode = useSelector((state: RootState) => state.darkMode.isDarkMode);

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
        <div className={`space-y-1 flex flex-col justify-center items-center h-[50px] w-[50px] rounded-full border ${isOpen ? "border-light-300" : "border-secondary-300"}`}>
          {isOpen ? <X className="text-secondary-400 dark:text-light-100" size={24} /> : <List className="text-light-100" size={24} />}
        </div>
      </button>

      <div
        className={`flex justify-center items-center fixed h-[88px] inset-0 bg-light-100 dark:bg-secondary-400 transform ${isOpen ? 'translate-y-0' : '-translate-y-[88px]'} transition-transform duration-200 ease-in-out z-40`}
      >
        <nav className="flex justify-around items-center h-full w-[1366px]">
          <div>
            <img src={`/assets/${isDarkMode ? "logoHeaderDark" : "logoHeader"}.svg`} alt="logo" />
          </div>
          <ul className="flex justify-between w-[400px] text-secondary-400 dark:text-light-100">
            <li>{t("contactUs")}</li>
            <li>{t("plan")}</li>
            <li>{t("createAccount")}</li>
            <li>{t("login")}</li>
          </ul>
          <div className="flex justify-between items-center">
            <span className="mr-2.5 text-secondary-400 dark:text-light-100">{t("darkMode")}</span>
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
