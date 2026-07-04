import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";

const getPreferredTheme = (): Theme => {
    const savedTheme = localStorage.getItem(STORAGE_KEY) as Theme | null;

    if (savedTheme) {
        return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
};

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>(getPreferredTheme);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((current) => (current === "light" ? "dark" : "light"));
    };

    return {
        theme,
        toggleTheme,
    };
};
