import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const ForbiddenPages = () => {
    const { t } = useTranslation();
    return <Page data-testid="ForbiddenPages">{t('Тебе сюда нельзя ')}</Page>;
};

export default ForbiddenPages;
