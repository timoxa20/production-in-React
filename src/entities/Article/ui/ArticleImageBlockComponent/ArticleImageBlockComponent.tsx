import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { memo } from 'react';
import { ArticleImageBlock } from '../../model/types/article';
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ToggleFeature } from '@/shared/lib/features';

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
                                                    align={'center'}
                                                />
                )}
            </div>
        );
    },
);

ArticleImageBlockComponent.displayName = 'ArticleImageBlockComponent';
