import { Popover as HPopover } from '@headlessui/react'
import cls from './Popover.module.scss'
import {ReactNode} from "react";
import {classNames} from "@/shared/lib/classNames/classNames";

interface PopoverProps {
    className?: string;
    trigger?: ReactNode;
    children?: ReactNode;
}

export function Popover(props: PopoverProps) {
    const {className, trigger, children} = props;
    return (
        <HPopover
            className={classNames(cls.Popover, {}, [className])}
        >
            <HPopover.Button
                className={cls.btn}
            >
                {trigger}
            </HPopover.Button>
            <HPopover.Panel
                className={cls.menu}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    )
}