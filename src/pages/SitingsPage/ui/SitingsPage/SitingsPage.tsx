import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import { UiDesignedSwitcher } from '@/features/uiDesignedSwitcher';

interface SitingsPageProps {
    className?: string;
}

const SitingsPage = memo((props: SitingsPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <Page className={className}>
            <VStack gap="16">
                <Text title={t('Настройки пользователя')} />
                <UiDesignedSwitcher />
            </VStack>
        </Page>
    );
});

export default SitingsPage;
SitingsPage.displayName = 'SitingsPage';
