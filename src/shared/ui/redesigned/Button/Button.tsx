import cls from './Button.module.scss';
import {
    ButtonHTMLAttributes,
    ForwardedRef,
    forwardRef,
    ReactNode,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import React from 'react';

export type ThemeVariant =
    | 'clear'
    | 'outline'
    | 'field'
    | 'normal'
    | 'success'
    | 'error';

export type ButtonSize = 'size_m' | 'size_l' | 'size_xl';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ThemeVariant;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
}

export const Button = forwardRef(
    (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const {
            children,
            variant = 'outline',
            className,
            square,
            size = 'size_m',
            disabled,
            addonRight,
            addonLeft,
            ...otherProps
        } = props;

        const mods: Mods = {
            [cls.square]: square,
            [cls.disabled]: disabled,
            [cls.widthAddon]: Boolean(addonLeft) || Boolean(addonRight),
        };

        return (
            <button
                type={'button'}
                className={classNames(cls.Button, mods, [
                    className,
                    cls[variant],
                    cls[size],
                ])}
                disabled={disabled}
                {...otherProps}
                ref={ref}
            >
                <div className={cls.addonLeft}>{addonLeft}</div>
                {children}
                <div className={cls.addonRight}>{addonRight}</div>
            </button>
        );
    },
);

Button.displayName = 'Button';
