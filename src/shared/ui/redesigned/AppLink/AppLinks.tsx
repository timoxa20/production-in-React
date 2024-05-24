import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLinks.module.scss';
import { LinkProps, NavLink } from 'react-router-dom';
import { memo, ReactNode } from 'react';

export type AppLinkVariant = 'primary' | 'secondary';

interface AppLinksProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariant;
    children?: ReactNode;
    activeClassName?: string;
}

export const AppLinks = memo((props: AppLinksProps) => {
    const {
        to,
        className,
        children,
        variant = 'primary',
        activeClassName = '',
        ...otherProps
    } = props;

    return (
        <NavLink
            to={to}
            className={(isActive) =>
                classNames(cls.AppLinks, { [activeClassName]: isActive }, [
                    className,
                    cls[variant],
                ])
            }
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});

AppLinks.displayName = 'AppLinks';
