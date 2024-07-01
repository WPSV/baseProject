import {ThemeProvider as NextThemesProvider} from "next-themes";
import {NextUIProvider} from "@nextui-org/react";

export default function Provider({children}: any) {
    return (
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="dark">
                {children}
            </NextThemesProvider>
        </NextUIProvider>
    );
}
