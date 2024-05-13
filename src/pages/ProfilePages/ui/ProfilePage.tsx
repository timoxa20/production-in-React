import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './ProfilePage.module.scss'
import {ProfilePageHeaders} from "./ProfilePageHeaders/ProfilePageHeaders";
import {Page} from "@/widgets/Page";
import {VStack} from "@/shared/ui/Stack/VStack/VStack";
import {EditableProfileCard} from "@/features/editableProfileCard";
import {useParams} from "react-router-dom";
import {ProfileRating} from "@/features/profileRating";

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({className}: ProfilePageProps) => {
    const {id} = useParams<{ id: string }>()

    return (
        <Page className={classNames(cls.ProfilePage, {}, [className])}>
            <VStack gap='16' max>
                <ProfilePageHeaders/>
                <EditableProfileCard id={id}/>
                <ProfileRating profileId={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage



