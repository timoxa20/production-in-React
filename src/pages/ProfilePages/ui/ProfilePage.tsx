import {classNames} from "shared/lib/classNames/classNames";
import cls from './ProfilePage.module.scss'
import {ProfilePageHeaders} from "./ProfilePageHeaders/ProfilePageHeaders";
import {Page} from "widgets/Page/Page";
import {VStack} from "shared/ui/Stack/VStack/VStack";
import {EditableProfileCard} from "features/editableProfileCard";
import {useParams} from "react-router-dom";
import {Text, TextTheme} from "shared/ui/Text/Text";
import {useTranslation} from "react-i18next";

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({className}: ProfilePageProps) => {
    const {id} = useParams<{ id: string }>()
    const {t} = useTranslation('profile')

    if (!id) {
        return <Text title={t('Произошла ошибка')} theme={TextTheme.ERROR}/>
    }

    return (
        <Page className={classNames(cls.ProfilePage, {}, [className])}>
            <VStack gap='16' max>
                <ProfilePageHeaders/>
                <EditableProfileCard id={id}/>
            </VStack>
        </Page>
    );
};

export default ProfilePage



