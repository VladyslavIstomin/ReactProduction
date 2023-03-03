import { useContext } from 'react';
import { THEME_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { Theme, ThemeContext } from './ThemeContext';

interface useThemeResult {
    theme: Theme,
    toggleTheme: () => void
}

export function useTheme(): useThemeResult {
    const { theme , setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const value = Theme.LIGHT === theme ? Theme.DARK : Theme.LIGHT;
        setTheme(value);
        localStorage.setItem(THEME_LOCALSTORAGE_KEY, value);
    };

    return {
        theme,
        toggleTheme
    };
}