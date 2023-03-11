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
        let value;
        switch (theme) {
        case Theme.LIGHT:
            value = Theme.DARK;
            break;
        case Theme.DARK:
            value = Theme.PURPLE;
            break;
        case Theme.PURPLE:
            value = Theme.LIGHT;
            break;
        default:
            value = Theme.LIGHT; 
        }

        setTheme?.(value);
        localStorage.setItem(THEME_LOCALSTORAGE_KEY, value);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme
    };
}