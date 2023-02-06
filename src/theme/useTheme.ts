import {useContext} from "react";
import {LOCALE_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

interface useThemeResult {
    theme: Theme,
    toggleTheme: () => void
}

export function useTheme(): useThemeResult {
    const {theme , setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const value = Theme.LIGHT === theme ? Theme.DARK : Theme.LIGHT;
        setTheme(value);
        localStorage.setItem(LOCALE_STORAGE_THEME_KEY, value);
    }

    return {
        theme,
        toggleTheme
    }
}