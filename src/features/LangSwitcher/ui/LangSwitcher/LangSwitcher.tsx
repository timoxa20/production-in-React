import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Button } from '@/shared/ui/redesigned/Button';
import { ToggleFeature } from '@/shared/lib/features';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <ToggleFeature
            on={
                <Button
                    variant={'clear'}
                    className={classNames('', {}, [className])}
                    onClick={toggle}
                >
                    {t(short ? 'ru' : 'Язык')}
                </Button>
            }
            off={
                <Button
                    variant={'clear'}
                    className={classNames('', {}, [className])}
                    onClick={toggle}
                >
                    {t(short ? 'ru' : 'Язык')}
                </Button>
            }
            feature={'isAppRedesigned'}
        />
    );
});

LangSwitcher.displayName = 'LangSwitcher';
