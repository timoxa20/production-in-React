import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { memo } from 'react';
import { ArticleImageBlock } from '../../model/types/article';
import { Text, TextAlign } from '@/shared/ui/Text';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
    ({ className, block }: ArticleImageBlockComponentProps) => {
        return (
            <div className={classNames('', {}, [className])}>
                <img
                    className={cls.img}
                    src={block.src}
                    alt={block.title}
                />
                {block.title && (
                    <Text
                        text={block.title}
                        align={TextAlign.CENTER}
                    />
                )}
            </div>
        );
    },
);

ArticleImageBlockComponent.displayName = 'ArticleImageBlockComponent';
