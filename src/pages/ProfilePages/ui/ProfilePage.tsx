import {classNames} from "shared/lib/classNames/classNames";
import cls from './ProfilePage.module.scss'
import {useTranslation} from "react-i18next";
import {useCallback, useEffect} from "react";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {ProfilePageHeaders} from "./ProfilePageHeaders/ProfilePageHeaders";
import {DynamicModuleLoader, ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileisLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer, ValidateProFileError
} from "../../../entities/Profile";
import {Currency} from "entities/Currency";
import {Country} from "entities/Country";
import {Text, TextTheme} from "shared/ui/Text/Text";


const redusers: ReducerList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({className}: ProfilePageProps) => {
    const {t} = useTranslation('profile')
    const dispatch = useAppDispatch()
    const formData = useSelector(getProfileForm)
    const isLoading = useSelector(getProfileisLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadonly)
    const validateError = useSelector(getProfileValidateErrors)

    const validateErrorTranslate = {
        [ValidateProFileError.SERVER_ERROR]: t('Серверная ошибка'),
        [ValidateProFileError.NO_DATA]: t('Данные не указанны '),
        [ValidateProFileError.INCORRECT_COUNTRY]: t('Некоректный город'),
        [ValidateProFileError.INCORRECT_AGE]: t('Некоректный возраст'),
        [ValidateProFileError.INCORRECT_USER_DATA]: t('Некоректный имя и фамилия')
    }

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch]);

    const onChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({first: value || ''}))
    }, [dispatch])

    const onChangeLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({lastname: value || ''}))
    }, [dispatch])

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({age: Number(value || 0)}))
    }, [dispatch])

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({city: value || ''}))
    }, [dispatch])

    const onChangeUserName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({username: value || ''}))
    }, [dispatch])

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({avatar: value || ''}))
    }, [dispatch])

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({currency}))
    }, [dispatch])

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({country}))
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={redusers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfilePageHeaders/>
                {validateError?.length && validateError.map(err => (
                    <Text key={validateErrorTranslate[err]} theme={TextTheme.ERROR} text={err}/>
                ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUserName={onChangeUserName}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage



