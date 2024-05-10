import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {memo, useCallback} from 'react';
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {Currency} from "../../../../entities/Currency";
import {Country} from "../../../../entities/Country";
import {Text, TextTheme} from "shared/ui/Text/Text";
import {getProfileForm} from "../../model/selectors/getProfileForm/getProfileForm";
import {
    getProfileisLoading
} from "../../model/selectors/getProfileisLoading/getProfileisLoading";
import {getProfileReadonly} from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import {
    getProfileValidateErrors
} from "../../model/selectors/getProfileValidateErrors/getProfileValidateErrors";
import {getProfileError} from "../../model/selectors/getProfileError/getProfileError";

import {ValidateProFileError} from "../../model/types/editableProfileCardSchema";
import {fetchProfileData} from "../../model/services/fetchProfileData/fetchProfileData";
import {profileActions, profileReducer} from "../../model/slice/profileSlice";
import {ProfileCard} from "../../../../entities/Profile";
import {DynamicModuleLoader, ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {VStack} from "shared/ui/Stack";

interface EditableProfileCardProps {
    className?: string;
    id?: string;
}

const redusers: ReducerList = {
    profile: profileReducer
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const {className, id} = props;
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
    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id))
        }
    })

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
            <VStack
                gap='8'
                max
                className={classNames('', {}, [className])}
            >
                {validateError?.length && validateError.map(err => (
                    <Text
                        key={validateErrorTranslate[err]}
                        theme={TextTheme.ERROR}
                        text={err}
                    />
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
            </VStack>
        </DynamicModuleLoader>
    );
});

EditableProfileCard.displayName = 'EditableProfileCard'