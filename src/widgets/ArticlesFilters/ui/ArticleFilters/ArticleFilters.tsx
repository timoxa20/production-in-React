import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleFilters.module.scss';
import { memo } from 'react';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { Input } from '@/shared/ui/redesigned/Input';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { VStack } from '@/shared/ui/Stack';
import { useTranslation } from 'react-i18next';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types';
import SearchIcon from '@/shared/assets/icons/search.svg?react';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ArticleFiltersProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
    type: ArticleType;
    search: string;
    onChangeType: (type: ArticleType) => void;
    onChangeSearch: (value: string) => void;
}

export const ArticleFilters = memo((props: ArticleFiltersProps) => {
    const {
        className,
        type,
        search,
        onChangeSearch,
        onChangeType,
        onChangeSort,
        sort,
        onChangeOrder,
        order,
    } = props;

    const { t } = useTranslation();
    return (
        <Card
            className={classNames(cls.ArticleFilters, {}, [className])}
            padding={'24'}
        >
            <VStack gap="32">
                <Input
                    addonLeft={<Icon Svg={SearchIcon} />}
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t('Поиск')}
                />
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleTypeTabs
                    value={type}
                    onChangeType={onChangeType}
                />
            </VStack>
        </Card>
    );
});

ArticleFilters.displayName = 'ArticleFilters';
