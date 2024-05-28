import { memo } from 'react';
import { ArticleFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo(({ className }: FiltersContainerProps) => {
    const {
        type,
        onChangeType,
        onChangeSort,
        sort,
        onChangeSearch,
        search,
        onChangeOrder,
        order,
    } = useArticleFilters();

    return (
        <ArticleFilters
            type={type}
            search={search}
            onChangeSearch={onChangeSearch}
            onChangeType={onChangeType}
            onChangeSort={onChangeSort}
            sort={sort}
            onChangeOrder={onChangeOrder}
            order={order}
            className={className}
        />
    );
});

FiltersContainer.displayName = 'FiltersContainer';
