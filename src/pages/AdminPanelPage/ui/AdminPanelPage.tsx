import React from 'react';
import {useTranslation} from "react-i18next";
import {Page} from "@/widgets/Page";

const AdminPanel = () => {
    const {t} = useTranslation()
    return (
        <Page data-testid='AdminPanel'>
            { t('Админ панель') }
        </Page>
    );
};

export default AdminPanel;