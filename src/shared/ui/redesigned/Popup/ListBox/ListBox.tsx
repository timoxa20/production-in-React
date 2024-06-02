import {
    Listbox as HListBox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from '@headlessui/react';
import { ReactNode, useMemo } from 'react';
import cls from './ListBox.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '../../Button';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg?react';
import { Icon } from '../../Icon';

export interface ListBoxItems<T extends string> {
    value: T;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps<T extends string> {
    items?: ListBoxItems<T>[];
    className?: string;
    value?: T;
    defaultValue?: string;
    onChange: (value: T) => void;
    readonly?: boolean;
    label?: string;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
    const { items, className, value, defaultValue, onChange, readonly, label } =
        props;

    const selectedItem = useMemo(() => {
        return items?.find((item) => item.value === value);
    }, [items, value]);

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
                as={Button}
                disabled={readonly}
                className={cls.trigger}
                addonRight={<Icon Svg={ArrowIcon} />}
                variant="field"
            >
                {selectedItem?.content ?? defaultValue}
            </ListboxButton>
            <ListboxOptions
                className={cls.options}
                anchor="bottom"
            >
                {items?.map((item) => (
                    <ListboxOption
                        key={item.value}
                        data-focus
                        disabled={item.disabled}
                        value={item.value}
                        className={cls.item}
                    >
                        {item.content}
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </HListBox>
    );
}
