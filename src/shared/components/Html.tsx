'use client'

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setDarkMode } from "@/store/slices/darkModeSlice";

type THtmlProps = {
  lang: string;
  children: React.ReactNode;
}

export default function Html({ lang, children }: THtmlProps) {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.darkMode.isDarkMode);
  
  useEffect(() => {
    const darkModeFromStorage = window.localStorage.getItem("darkMode") === "true";
    
    if (darkModeFromStorage) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    dispatch(setDarkMode(darkModeFromStorage));
  }, [dispatch]);
  
  return (
    <html lang={lang} className={isDarkMode ? "dark" : ""}>
    {children}
    </html>
  )
}