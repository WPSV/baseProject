import { ThemeProvider as NextThemesProvider } from "next-themes";
import {NextUIProvider} from "@nextui-org/react";

type TProvider = {
  children: React.ReactNode;
}

export default function Provider({children}: TProvider) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}