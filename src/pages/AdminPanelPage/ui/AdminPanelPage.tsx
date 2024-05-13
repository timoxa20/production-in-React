import React from 'react';
import {useTranslation} from "react-i18next";
import {Page} from "@/widgets/Page";

const AboutPage = () => {
    const {t} = useTranslation()
    return (
        <Page>
            { t('Админ панель') }
        </Page>
    );
};

export default AboutPage;