import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Text} from "shared/ui/Text/Text";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useSelector} from "react-redux";
import {useCallback} from "react";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {getUserAuthData} from "../../../../entities/User";
import {HStack} from "shared/ui/Stack/HStack/HStack";
import {getProfileData, getProfileReadonly, updateProfileData} from "features/editableProfileCard";
import { profileActions } from "features/editableProfileCard";


interface ProfilePageHeadersProps {
    className?: string;
}

export const ProfilePageHeaders = ({className}: ProfilePageHeadersProps) => {

    const {t} = useTranslation('profile')
    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)
    const canEdit = authData?.id === profileData?.id
    const readonly = useSelector(getProfileReadonly)
    const dispatch = useAppDispatch()

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])

    return (
        <HStack max justify='between' className={classNames('', {}, [className])}>
            <Text title={t('Профиль')}/>
            {canEdit && (
                <>
                    {readonly ?
                        (<Button
                            theme={ThemeButton.OUTLINE}
                            onClick={onEdit}
                        >
                            {t('Редактировать')}
                        </Button>)
                        :
                        (<HStack gap='8'>
                            <Button
                                theme={ThemeButton.OUTLINE}
                                onClick={onCancelEdit}
                            >
                                {t('Отмена')}
                            </Button>
                            <Button
                                theme={ThemeButton.OUTLINE_RED}
                                onClick={onSave}
                            >
                                {t('Сохранить')}
                            </Button>
                        </HStack>)
                    }
                </>
            )}
        </HStack>
    );
};



