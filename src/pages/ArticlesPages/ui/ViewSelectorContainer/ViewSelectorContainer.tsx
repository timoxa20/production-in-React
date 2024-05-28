import { memo } from 'react';
import { ArticleViewSelect } from '@/features/ArticleViewSelect';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ViewSelectorContainerProps {
    className?: string;
}

export const ViewSelectorContainer = memo(
    (props: ViewSelectorContainerProps) => {
        const { className } = props;
        const { view, onChangeView } = useArticleFilters();
        return (
            <ArticleViewSelect
                className={className}
                view={view}
                onViewClick={onChangeView}
            />
        );
    },
);

ViewSelectorContainer.displayName = 'ViewSelectorContainer';
