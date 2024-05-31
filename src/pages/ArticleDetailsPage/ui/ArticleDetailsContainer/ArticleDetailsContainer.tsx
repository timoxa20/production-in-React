import { memo } from 'react';
import { ArticleDetails } from '@/entities/Article';
import { useParams } from 'react-router-dom';
import { Card } from '@/shared/ui/redesigned/Card';

interface ArticleDetailsContainerProps {
    className?: string;
}

export const ArticleDetailsContainer = memo(
    ({ className }: ArticleDetailsContainerProps) => {
        const { id } = useParams<{ id: string }>();
        return (
            <Card
                max
                border="round"
                className={className}
                padding="24"
            >
                <ArticleDetails id={id} />
            </Card>
        );
    },
);

ArticleDetailsContainer.displayName = 'ArticleDetailsContainer';
