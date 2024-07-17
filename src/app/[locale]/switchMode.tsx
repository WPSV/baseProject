"use client";

import { Switch } from "@nextui-org/react";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

const SwitchMode = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null;
  
  const handleChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  
  return(
    <div>
      <Switch 
        isSelected={theme === 'dark'}
        onValueChange={handleChange}
      />
    </div>
  );
}

export default SwitchMode