import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { User } from '@/entities/User';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';

interface ArticleAditionInfoProps {
    className?: string;
    author: User;
    createAt: string;
    views: number;
    onEdit: () => void;
}

export const ArticleAdditionInfo = memo((props: ArticleAditionInfoProps) => {
    const { className, author, views, createAt, onEdit } = props;
    const { t } = useTranslation();
    return (
        <VStack
            gap="32"
            className={className}
        >
            <HStack gap="8">
                <Avatar
                    src={author.avatar}
                    size={'32px'}
                />
                <Text
                    text={author.username}
                    bold
                />
                <Text text={createAt} />
            </HStack>
            <Button onClick={onEdit}>{t('Редактировать')}</Button>
            <Text text={t('{{count}} просмотров', { count: views })} />
        </VStack>
    );
});

ArticleAdditionInfo.displayName = 'ArticleAdditionInfo';
