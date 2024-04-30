import {classNames} from "shared/lib/classNames/classNames";
import cls from './AppLinks.module.scss'
import {Link, LinkProps} from "react-router-dom";
import { memo, ReactNode} from "react";


export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}
interface AppLinksProps extends  LinkProps{
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode
}
export const AppLinks = memo((props: AppLinksProps) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props

    return (
        <Link
            to={to}
            className={classNames(cls.AppLinks, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});

AppLinks.displayName = 'AppLinks';

