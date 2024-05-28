import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { memo, ReactNode, useCallback } from 'react';
import { Card } from '../Card/Card';
import { Flex, FlexDirection } from '../../Stack/Flex/Flex';

export interface TabsItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabsItem[];
    value: string;
    onTabsClick?: (tab: TabsItem) => void;
    direction?: FlexDirection;
}

export const Tabs = memo((props: TabsProps) => {
    const { className, tabs, onTabsClick, value, direction = 'row' } = props;

    const clickHandle = useCallback(
        (tab: TabsItem) => () => {
            if (onTabsClick) {
                onTabsClick(tab);
            }
        },
        [onTabsClick],
    );

    return (
        <Flex
            direction={direction}
            gap="8"
            align={'start'}
            className={classNames(cls.Tabs, {}, [className])}
        >
            {tabs.map((tab) => {
                const isSelected = tab.value === value;
                return (
                    <Card
                        variant={isSelected ? 'light' : 'normal'}
                        key={tab.value}
                        onClick={clickHandle(tab)}
                        className={cls.tab}
                        padding={isSelected ? '16' : '8'}
                        border="round"
                    >
                        {tab.content}
                    </Card>
                );
            })}
        </Flex>
    );
});

Tabs.displayName = 'Tabs';
