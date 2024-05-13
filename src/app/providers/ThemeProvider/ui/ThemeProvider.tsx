import React, { useMemo, useState} from "react";
import {ThemeContext} from "@/shared/lib/context/ThemeContext";
import {Theme} from "@/shared/const/theme";
import {LOCAL_STORAGE_LOCAL_KEY} from "@/shared/const/localStorage";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_LOCAL_KEY) as Theme || Theme.NORMAL

interface ThemeProviderProps {
    children: React.ReactNode;
    initialTheme?: Theme
}
const ThemeProvider = ({children, initialTheme}: ThemeProviderProps) => {
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