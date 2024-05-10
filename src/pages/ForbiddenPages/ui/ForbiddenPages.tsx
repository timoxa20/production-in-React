import React from 'react';
import {useTranslation} from "react-i18next";
import {Page} from "widgets/Page/Page";

const ForbiddenPages = () => {
    const {t} = useTranslation()
    return (
        <Page>
            { t('Тебе сюда нельзя ') }
        </Page>
    );
};

export default ForbiddenPages;