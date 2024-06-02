import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Article, ArticleView } from '../../model/types/article';
import { ToggleFeature } from '@/shared/lib/features';
import { ArticleListItemRedesigned } from '../ArticleListItemRedesigned/ArticleListItemRedesigned';
import { ArticleListItemDeprecated } from '../ArticleListItemDeprecated/ArticleListItemDeprecated';

export interface ArticleListItemProps {
    className?: string;
    article: Article;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    return (
        <ArticleListItemRedesigned {...props} />
    );
});

ArticleListItem.displayName = 'ArticleListItem';
