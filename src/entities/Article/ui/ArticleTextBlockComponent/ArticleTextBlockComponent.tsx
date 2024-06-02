import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { memo } from 'react';
import { ArticleTextBlock } from '../../model/types/article';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ToggleFeature } from '@/shared/lib/features';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
    ({ className, block }: ArticleTextBlockComponentProps) => {
        return (
            <div
                className={classNames(cls.ArticleTextBlockComponent, {}, [
                    className,
                ])}
            >
                {block.title && (
                    <Text
                                                    className={cls.title}
                                                    title={block?.title}
                                                />
                )}
                {block?.paragraphs.map((par) => (
                    <Text
                                                    className={cls.paragraphs}
                                                    text={par}
                                                />
                ))}
            </div>
        );
    },
);

ArticleTextBlockComponent.displayName = 'ArticleTextBlockComponent';
