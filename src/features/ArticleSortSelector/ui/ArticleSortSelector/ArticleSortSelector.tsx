import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleSortSelector.module.scss';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SelectOptions } from '@/shared/ui/deprecated/Select';
import { SortOrder } from '@/shared/types';
import { ArticleSortField } from '@/entities/Article';
import { ListBox } from '@/shared/ui/redesigned/Popup/ListBox';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { className, onChangeSort, sort, onChangeOrder, order } = props;
    const { t } = useTranslation();

    const orderOption = useMemo<SelectOptions<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('Возрастанию'),
            },
            {
                value: 'desc',
                content: t('Убыванию'),
            },
        ],
        [t],
    );
    const sortFieldOption = useMemo<SelectOptions<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t('Дате создания'),
            },
            {
                value: ArticleSortField.TITLE,
                content: t('Заголовку'),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('Просмотрам'),
            },
        ],
        [t],
    );

    return (
        <div
                            className={classNames(
                                cls.ArticleSortSelectorRedesigned,
                                {},
                                [className],
                            )}
                        >
                            <VStack gap="8">
                                <Text text={t('Сортировать ПО')} />
                                <ListBox
                                    className={cls.select}
                                    onChange={onChangeSort}
                                    value={sort}
                                    items={sortFieldOption}
                                />
                                <ListBox
                                    onChange={onChangeOrder}
                                    value={order}
                                    items={orderOption}
                                />
                            </VStack>
                        </div>
    );
});

ArticleSortSelector.displayName = 'ArticleSortSelector';
