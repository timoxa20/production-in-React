import React, { useEffect, useMemo, useState } from "react";
import { ThemeContext } from "@/shared/lib/context/ThemeContext";
import { Theme } from "@/shared/const/theme";
import { useJsonSettings } from "@/entities/User";


interface ThemeProviderProps {
    children: React.ReactNode;
    initialTheme?: Theme;
}
const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
    const {theme: defaultTheme} = useJsonSettings()
    const [isThemeInited, setIsThemeInited] = useState(false)

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme || Theme.NORMAL);

    useEffect(() => {
        if (!isThemeInited && defaultTheme) {
            setTheme(defaultTheme)
            setIsThemeInited(true)
        }
    }, [defaultTheme, isThemeInited]);

    const defaultProps = useMemo(
        () => ({
            theme: theme,
            setTheme: setTheme,
        }),
        [theme],
    );
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
