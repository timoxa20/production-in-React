import React, { Suspense, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { AppRouter } from './providers/router';
import { Nawbar } from '@/widgets/nawbar';
import { Sidebar } from '@/widgets/Sidebar';
import { useSelector } from 'react-redux';
import { getUserInited, initAuthData, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { MainLayouts } from '@/shared/layouts/MainLayouts';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { useAppToolbar } from './lib/useAppToolbar/useAppToolbar';
import { ThemeProvider } from '@/app/providers/ThemeProvider';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);
    const toolbar = useAppToolbar();

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!inited) {
        return (
            <div
                id={'app'}
                className={classNames('app__redesigned', {}, [theme])}
            >
                <AppLoaderLayout />
            </div>
        );
    }

    return (
        <div
            id={'app'}
            className={classNames('app__redesigned', {}, [theme])}
        >
            <Suspense fallback="">
                <MainLayouts
                    header={<Nawbar />}
                    sidebar={<Sidebar />}
                    content={<AppRouter />}
                    toolbar={toolbar}
                />
            </Suspense>
        </div>
    );
};

const widthTheme = (Comment: React.ComponentType) => {
    return () => {
        const { theme: defaultTheme } = useJsonSettings();
        return (
            <ThemeProvider initialTheme={defaultTheme}>
                <Comment />
            </ThemeProvider>
        );
    };
};

export default widthTheme(App);
