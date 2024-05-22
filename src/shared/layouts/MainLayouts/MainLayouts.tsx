import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainLayouts.module.scss';
import { memo, ReactElement } from 'react';

interface MainLayoutsProps {
    className?: string;
    header: ReactElement;
    content: ReactElement;
    sidebar: ReactElement;
    toolbar?: ReactElement;
}

export const MainLayouts = memo((props: MainLayoutsProps) => {
    const { className, header, toolbar, content, sidebar } = props;
    return (
        <div className={classNames(cls.MainLayouts, {}, [className])}>
            <div className={cls.sidebar}>{sidebar}</div>
            <div className={cls.content}>{content}</div>
            <div className={cls.rightbar}>
                <div className={cls.header}>{header}</div>
                <div className={cls.toolbar}>{toolbar}</div>
            </div>
        </div>
    );
});

MainLayouts.displayName = 'MainLayouts';
