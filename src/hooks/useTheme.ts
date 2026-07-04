import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";

const getPreferredTheme = (): Theme => {
    if (typeof window === "undefined") {
        return "light";
    }

    const savedTheme = window.localStorage.getItem(STORAGE_KEY);

    if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>(getPreferredTheme);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
      window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

    const toggleTheme = () => {
        setTheme((current) => (current === "light" ? "dark" : "light"));
    };

    return {
        theme,
        toggleTheme,
    };
};
