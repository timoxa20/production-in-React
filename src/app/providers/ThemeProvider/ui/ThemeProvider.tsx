import React, {FC, useMemo, useState} from "react";
import {LOCAL_STORAGE_LOCAL_KEY, Theme, ThemeContext} from "app/providers/ThemeProvider/lib/ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_LOCAL_KEY) as Theme || Theme.NORMAL

interface ThemeProviderProps {
    children: React.ReactNode;
    initialTheme?: Theme
}
const ThemeProvider: FC<ThemeProviderProps> = ({children, initialTheme}) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)


    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme])
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;