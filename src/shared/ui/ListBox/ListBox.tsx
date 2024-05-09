import {
    Listbox as HListBox,
    ListboxButton,
    ListboxOption,
    ListboxOptions
} from '@headlessui/react'
import {ReactNode} from 'react'
import cls from './ListBox.module.scss'
import {Button} from "shared/ui/Button/Button";
import {classNames} from "shared/lib/classNames/classNames";


export interface ListBoxItems {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItems[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: <T extends string>(value: T) => void
    readonly?: boolean
    label?: string
}

export function ListBox(props: ListBoxProps) {
    const {
        items,
        className,
        value,
        defaultValue,
        onChange,
        readonly,
        label
    } = props


    return (
        <HListBox
            disabled={readonly}
            as={'div'}
            className={classNames(cls.ListBox, {}, [className])}
            value={value}
            onChange={onChange}
        >
            {label && <span className={cls.label}>{label + '>'}</span>}
            <ListboxButton
                disabled={readonly}
                className={cls.trigger}
            >
                <Button disabled={readonly}>
                    {value ?? defaultValue}
                </Button>
            </ListboxButton>
            <ListboxOptions className={cls.options} anchor="bottom">
                {items?.map((item) => (
                    <ListboxOption
                        key={item.value}
                        data-focus
                        disabled={item.disabled}
                        value={item.value}
                        className={cls.item}>
                        {item.content}
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </HListBox>
    )
}