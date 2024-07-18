import React from "react";
import { Switch } from "@nextui-org/react";

export default function SwitchMode() {
  const handleChange = () => {
    document.documentElement.classList.toggle("dark");
  }
  
  return (
    <Switch onChange={handleChange} className="mr-5" defaultSelected color="default"/>
  )
}
