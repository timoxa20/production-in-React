import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { memo, useCallback } from 'react';
import { Button } from '@/shared/ui/redesigned/Button/Button';
import CopyIcon from '../../../assets/icons/copy-20-20.svg?react';

interface CodeProps {
    className?: string;
    text: string;
}

/**
 * @deprecated
 */

export const Code = memo(({ className, text }: CodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                onClick={onCopy}
                variant={'clear'}
                className={cls.copy}
            >
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>{text}</code>
        </pre>
    );
});

Code.displayName = 'Code';