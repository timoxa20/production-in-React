import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { memo, useCallback } from 'react';
import CopyIcon from '../../../assets/icons/copy-20-20.svg?react';
import CopyIconNew from '../../../assets/icons/copy.svg?react';
import { Icon } from '../Icon';
import { ToggleFeature } from '@/shared/lib/features';
import { Button } from '../Button';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre
                            className={classNames(cls.CodeRedesigned, {}, [className])}
                        >
                            <Icon
                                clickable
                                onClick={onCopy}
                                className={cls.copyBtn}
                                Svg={CopyIconNew}
                            />
                            <code>{text}</code>
                        </pre>
    );
});

Code.displayName = 'Code';
