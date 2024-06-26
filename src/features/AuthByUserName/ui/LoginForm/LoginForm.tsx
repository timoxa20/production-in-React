import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/redesigned/Button';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { getLoginUserName } from '../../model/selectors/getLoginUserName/getLoginUserName';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/Stack';

export interface LoginFormProps {
    className?: string;
    onSuccess?: () => void;
}

const initialReducer: ReducerList = {
    LoginForm: loginReducer,
};

// eslint-disable-next-line react/display-name
const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUserName);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginLoading);
    const error = useSelector(getLoginError);

    const onChangeUserName = useCallback(
        (value: string) => {
            dispatch(loginActions.setUserName(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUserName({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            if (onSuccess) {
                onSuccess();
            }
        }
    }, [dispatch, username, password, onSuccess]);

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={initialReducer}
        >
            <div className={classNames(cls.LoginForm, {}, [className])}>
                                    <VStack gap="16">
                                        <Text title={t('Форма авторизаций')} />
                                        {error && (
                                            <Text
                                                text={t(
                                                    'Вы ввели неправельный логин или пароль',
                                                )}
                                                variant={'error'}
                                            />
                                        )}
                                        <Input
                                            placeholder={t('Введите username')}
                                            type="text"
                                            className={cls.input}
                                            autofocus
                                            onChange={onChangeUserName}
                                            value={username}
                                        />
                                        <Input
                                            placeholder={t('Введите пароль')}
                                            type="text"
                                            className={cls.input}
                                            onChange={onChangePassword}
                                            value={password}
                                        />
                                    </VStack>
                                    <Button
                                        variant={'outline'}
                                        className={cls.loginBtn}
                                        onClick={onLoginClick}
                                        disabled={isLoading}
                                    >
                                        {t('Войти')}
                                    </Button>
                                </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
