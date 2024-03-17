import React, {Suspense, useContext, useState} from 'react';
import './styles/index.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {AppRouter} from "app/providers/router";
import {Nawbar} from "widgets/nawbar";


const App = () => {

    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <Nawbar/>
            <AppRouter/>
            <button onClick={toggleTheme}>Toggle</button>
        </div>

    );
};

export default App;