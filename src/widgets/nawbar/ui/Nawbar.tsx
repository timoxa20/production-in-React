import React, {memo, useCallback, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {LoginModal} from "features/AuthByUserName";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, userActions} from "../../../entities/User";
import {Text, TextTheme} from "shared/ui/Text/Text";
import {AppLinks, AppLinkTheme} from "shared/ui/AppLink/AppLinks";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {Dropdown} from "shared/ui/Dropdown/Dropdown";
import {Avatar} from "shared/ui/Avatar/Avatar";

interface NavbarProps {
    className?: string;
}

export const Nawbar = memo(({className}: NavbarProps) => {
    const {t} = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const authData = useSelector(getUserAuthData)
    const dispatch = useDispatch()

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t('Artem')}
                    theme={TextTheme.INVERTED}
                />
                <AppLinks
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.article_create}
                >
                    {t('Создать пост')}
                </AppLinks>
                <Dropdown
                    className={cls.dropdown}
                    active
                    items={[
                        {
                            content: t('Выйти'),
                            onClick: onLogout
                        },
                        {
                            content: t('Профиль пользователя'),
                            href: RoutePath.profile + authData.id
                        }
                    ]}
                    trigger={<Avatar size={'30px'} src={authData.avatar}/>}
                />
            </header>
        )
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            { isAuthModal && <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />}

        </header>
    );
});

Nawbar.displayName = 'Navbar'



