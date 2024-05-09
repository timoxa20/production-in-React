import {classNames} from "shared/lib/classNames/classNames";
import cls from './ArticleSortSelector.module.scss'
import {memo, useMemo} from "react";
import {useTranslation} from "react-i18next";
import {Select, SelectOptions} from "shared/ui/Select/Select";
import {ArticleSortField} from "../../model/types/article";
import {SortOrder} from "shared/types";


interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void
    onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {className, onChangeSort, sort, onChangeOrder, order} = props
    const {t} = useTranslation()

    const orderOption = useMemo<SelectOptions<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('Возрастанию')
        },
        {
            value: 'desc',
            content: t('Убыванию')
        }
    ], [t])
    const sortFieldOption = useMemo<SelectOptions<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('Дате создания')
        },
        {
            value: ArticleSortField.TITLE,
            content: t('Заголовку')
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('Просмотрам')
        }
    ], [t])



    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                className={cls.select}
                onChange={onChangeSort}
                value={sort}
                options={sortFieldOption}
                label={t('Сортировать ПО')}
            />
            <Select
                onChange={onChangeOrder}
                value={order}
                options={orderOption}
                label={t('по')}
            />
        </div>
    );
});

ArticleSortSelector.displayName = 'ArticleSortSelector'