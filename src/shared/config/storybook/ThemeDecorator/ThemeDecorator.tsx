import {Decorator} from '@storybook/react';
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";
import {ThemeProvider} from "app/providers/ThemeProvider";
import React from "react";

export const ThemeDecorator = (theme: Theme): Decorator => ( Story) => (
    <ThemeProvider initialTheme={theme} >
        <div className={`app ${theme}`}>
            <Story/>
        </div>
    </ThemeProvider>
)