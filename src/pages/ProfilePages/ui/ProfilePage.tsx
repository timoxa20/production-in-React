import {classNames} from "shared/lib/classNames/classNames";
import cls from './ProfilePage.module.scss'
import {useTranslation} from "react-i18next";
import {DynamicModuleLoader, ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {profileReducer} from "../../../entities/Profile";

const redusers: ReducerList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({className}: ProfilePageProps) => {
    const {t} = useTranslation()
    return (
        <DynamicModuleLoader reducers={redusers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [className])}>

                {t('PROFILE PAGE')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage



