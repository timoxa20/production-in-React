import React, {Suspense, useEffect} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {AppRouter} from "app/providers/router";
import {Nawbar} from "widgets/nawbar";
import {Sidebar} from "widgets/Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {getUserInited, userActions} from "../../src/entities/User";


const App = () => {

    const {theme} = useTheme()
    const dispatch = useDispatch()
    const inited = useSelector(getUserInited)

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Nawbar/>
                <div className='content-page'>
                    <Sidebar/>
                    {inited && <AppRouter/>}
                </div>
            </Suspense>
        </div>

    );
};

export default App;