import {classNames} from "shared/lib/classNames/classNames";
import cls from './AppLinks.module.scss'
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";


export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}
interface AppLinksProps extends  LinkProps{
    className?: string;
    theme?: AppLinkTheme;
}
export const AppLinks: FC<AppLinksProps> = (props) => {
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
};

