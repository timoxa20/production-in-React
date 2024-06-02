import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollToolbar.module.scss';
import { memo } from 'react';
import { VStack } from '@/shared/ui/Stack';
import { ScrollToTopButton } from '@/features/scrollToTopButton';

interface ScrollToolbarProps {
    className?: string;
}

export const ScrollToolbar = memo(({ className }: ScrollToolbarProps) => {
    return (
        <VStack
            align={'center'}
            max
            justify={'center'}
            className={classNames(cls.ScrollToolbar, {}, [className])}
        >
            <ScrollToTopButton />
        </VStack>
    );
});

ScrollToolbar.displayName = 'ScrollToolbar';
