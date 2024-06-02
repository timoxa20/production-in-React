import { memo } from 'react';
import { Icon } from '@/shared/ui/redesigned/Icon';
import CircleIcon from '@/shared/assets/icons/circle-up.svg?react';

interface ScrollToTopButtonProps {
    className?: string;
}

export const ScrollToTopButton = memo(
    ({ className }: ScrollToTopButtonProps) => {
        const onClick = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        };
        return (
            <Icon
                Svg={CircleIcon}
                width={32}
                height={32}
                onClick={onClick}
                clickable
                className={className}
            />
        );
    },
);

ScrollToTopButton.displayName = 'ScrollToTopButton';
