import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react'
import cls from './Dropdown.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {Fragment, ReactNode} from "react";
import {AppLinks} from "shared/ui/AppLink/AppLinks";
import {RoutePath} from "shared/config/routeConfig/routeConfig";

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    active?: boolean;
    items: DropdownItem[];
    trigger: ReactNode;
}

export function Dropdown(props: DropdownProps) {
    const {className, active, trigger, items} = props
    return (
        <Menu
            as='div'
            className={classNames(cls.Dropdown, {}, [className])}
        >
            <MenuButton className={cls.btn}>{trigger}</MenuButton>
            <MenuItems className={cls.menu} anchor="bottom">
                {items.map(item => {
                    const content = <button
                        disabled={item.disabled}
                        type={'button'}
                        onClick={item.onClick}
                        className={classNames(cls.item, {[cls.active]: active}, [className])}>
                        {item.content}
                    </button>
                    if (item.href) {
                        return (
                            <MenuItem as={AppLinks} to={item.href}>
                                {content}
                            </MenuItem>
                        )
                    }
                    return (
                        <MenuItem as={Fragment}>
                            {content}
                        </MenuItem>
                    )
                })}
            </MenuItems>
        </Menu>
    )
}