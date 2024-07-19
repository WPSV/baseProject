import React, { ChangeEvent } from "react";
import { Switch } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setDarkMode } from "@/store/slices/darkModeSlice";

export default function SwitchMode() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.darkMode.isDarkMode);
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    dispatch(setDarkMode(value));
  }
  
  return (
    <Switch
      checked={isDarkMode}
      onChange={(event) => handleChange(event)}
      className="mr-5"
      color="default"
    />
  )
}