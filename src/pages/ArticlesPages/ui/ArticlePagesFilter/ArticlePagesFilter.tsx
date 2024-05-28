import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlePagesFilter.module.scss';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/deprecated/Card';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { Input } from '@/shared/ui/deprecated/Input';
import { ArticleViewSelect } from '@/features/ArticleViewSelect';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ArticlePagesFilterProps {
    className?: string;
}

export const ArticlePagesFilter = memo(
    ({ className }: ArticlePagesFilterProps) => {
        const { t } = useTranslation();
        const {
            type,
            onChangeType,
            onChangeSort,
            sort,
            onChangeView,
            view,
            onChangeSearch,
            search,
            onChangeOrder,
            order,
        } = useArticleFilters();

        return (
            <div
                className={classNames(cls.ArticlePagesFilter, {}, [className])}
            >
                <div className={cls.sortWrapper}>
                    <ArticleSortSelector
                        sort={sort}
                        order={order}
                        onChangeOrder={onChangeOrder}
                        onChangeSort={onChangeSort}
                    />
                    <ArticleViewSelect
                        view={view}
                        onViewClick={onChangeView}
                    />
                </div>
                <Card className={cls.search}>
                    <Input
                        value={search}
                        onChange={onChangeSearch}
                        placeholder={t('Поиск')}
                    />
                </Card>
                <ArticleTypeTabs
                    value={type}
                    onChangeType={onChangeType}
                />
            </div>
        );
    },
);

ArticlePagesFilter.displayName = 'ArticlePagesFilter';
