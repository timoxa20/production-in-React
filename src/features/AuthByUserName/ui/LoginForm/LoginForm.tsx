import {classNames} from "shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss'
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {memo, useCallback} from "react";
import {loginActions} from "../../model/slice/loginSlice";
import {getLoginState} from "../../model/selectors/selectLoginState/getLoginState/getLoginState";
import {loginByUserName} from "../../model/services/loginByUserName/loginByUserName";
import {Text, TextTheme} from "shared/ui/Text/Text";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({className}: LoginFormProps) => {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const {
        username,
        password,
        isLoading,
        error
    } = useSelector(getLoginState)

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        // @ts-ignore
        dispatch(loginByUserName({username, password}))
    }, [dispatch, username, password])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизаций')}/>
            {error && <Text text={t('Вы ввели неправельный логин или пароль')} theme={TextTheme.ERROR}/>}
            <Input
                placeholder={t('Введите username')}
                type='text'
                className={cls.input}
                autofocus
                onChange={onChangeUserName}
                value={username}
            />
            <Input
                placeholder={t('Введите пароль')}
                type='text'
                className={cls.input}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ThemeButton.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}

            </Button>
        </div>
    );
});



