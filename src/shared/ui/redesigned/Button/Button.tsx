import cls from './Button.module.scss';
import { ButtonHTMLAttributes, memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import React from 'react';

export type ThemeVariant = 'clear' | 'outline';

export type ButtonSize = 'size_m' | 'size_l' | 'size_xl';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ThemeVariant;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        children,
        variant = 'outline',
        className,
        square,
        size = 'size_m',
        disabled,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
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
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';
