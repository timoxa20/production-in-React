import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { memo, ReactNode, useCallback } from 'react';
import { Card, CardTheme } from '../Card/Card';

export interface TabsItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabsItem[];
    value: string;
    onTabsClick?: (tab: TabsItem) => void;
}
/**
 * @deprecated
 */
export const Tabs = memo((props: TabsProps) => {
    const { className, tabs, onTabsClick, value } = props;

    const clickHandle = useCallback(
        (tab: TabsItem) => () => {
            if (onTabsClick) {
                onTabsClick(tab);
            }
        },
        [onTabsClick],
    );

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    theme={
                        tab.value === value
                            ? CardTheme.NORMAL
                            : CardTheme.OUTLINED
                    }
                    key={tab.value}
                    onClick={clickHandle(tab)}
                    className={cls.tab}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});

Tabs.displayName = 'Tabs';
