'use client'

import React from "react";
import { Provider } from "react-redux";
import store from "@/store/store";

type TReduxProviderProps = {
  children: React.ReactNode;
}

export default function ReduxProvider({ children } : TReduxProviderProps) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}