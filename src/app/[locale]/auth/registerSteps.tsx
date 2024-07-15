'use client'

import styles from "@/styles/registerSteps.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export function RegisterSteps() {
  const steps: string[] = ["Seu negócio", "Oportunidades", "Atuação", "Tipo de negócio", "Preferências", "Expectativas", "Sucesso!"];
  const currentStep = useSelector((state: RootState) => state.registerSteps.currentStep);
  
  return (
    <div className="flex justify-center h-full max-h-[100px] my-10">
      {steps.map((step, index) => (
        <div className={`${styles.stepItem} ${currentStep >= (index + 1) ? styles.active : styles.inactive}`} key={index}>
          <p className="flex justify-center items-center rounded-full w-10 h-10 font-bold leading-[21.6px] text-lg mb-2.5">
            {index + 1}
          </p>
          <p>{step}</p>
        </div>
      ))}
    </div>
  )
}