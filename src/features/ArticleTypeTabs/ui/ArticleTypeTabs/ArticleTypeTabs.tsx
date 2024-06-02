import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TabsItem } from '@/shared/ui/deprecated/Tabs';
import { ArticleType } from '@/entities/Article';
import { Tabs } from '@/shared/ui/redesigned/Tabs';

interface ArticleTypeTabsProps {
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo(
    ({ value, onChangeType }: ArticleTypeTabsProps) => {
        const { t } = useTranslation();
        const typeTabs = useMemo<TabsItem[]>(
            () => [
                {
                    value: ArticleType.ALL,
                    content: t('Все статьи'),
                },
                {
                    value: ArticleType.SCIENCE,
                    content: t('Наука'),
                },
                {
                    value: ArticleType.ECONOMICS,
                    content: t('Экономика'),
                },
                {
                    value: ArticleType.IT,
                    content: t('Айти'),
                },
            ],
            [t],
        );

        const onTabsClick = useCallback(
            (type: TabsItem) => {
                onChangeType(type.value as ArticleType);
            },
            [onChangeType],
        );
        return (
            <Tabs
                                    direction={'colum'}
                                    tabs={typeTabs}
                                    value={value}
                                    onTabsClick={onTabsClick}
                                />
        );
    },
);

ArticleTypeTabs.displayName = 'ArticleTypeTabs';
