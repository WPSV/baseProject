"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/switch";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTheme(event.target.checked ? 'dark' : 'light');
    };

    return (
        <div>
            <Switch
                checked={theme === 'dark'}
                onChange={handleSwitchChange}
                aria-label="Toggle theme"
            />
        </div>
    );
}