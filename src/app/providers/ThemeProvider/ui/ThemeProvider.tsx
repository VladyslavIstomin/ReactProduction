import React, { FC, useMemo, useState } from 'react';
import { Theme, ThemeContext } from '../lib/ThemeContext';
import { THEME_LOCALSTORAGE_KEY } from 'shared/config/const/localstorage';

const defaultTheme = localStorage.getItem(THEME_LOCALSTORAGE_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { children, initialTheme } = props;
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultValue = useMemo(() => ({
        theme,
        setTheme
    }), [theme]);
    document.body.className = theme;

    return (
        <ThemeContext.Provider value={defaultValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;