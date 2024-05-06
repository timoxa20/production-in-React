import {classNames} from "shared/lib/classNames/classNames";
import cls from './ProfilePageHeaders.module.scss'
import {useTranslation} from "react-i18next";
import {Text} from "shared/ui/Text/Text";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useSelector} from "react-redux";
import {getProfileData, getProfileReadonly, profileActions, updateProfileData} from "../../../../entities/Profile";
import {useCallback} from "react";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {getUserAuthData} from "../../../../entities/User";


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
        <div className={classNames(cls.ProfilePageHeaders, {}, [className])}>
            <Text title={t('Профиль')}/>
            {canEdit && (
                <div className={cls.btnWrapper}>
                    {readonly ?
                        (<Button
                            className={cls.editButton}
                            theme={ThemeButton.OUTLINE}
                            onClick={onEdit}
                        >
                            {t('Редактировать')}
                        </Button>)
                        :
                        (<>
                            <Button
                                className={cls.editButton}
                                theme={ThemeButton.OUTLINE}
                                onClick={onCancelEdit}
                            >
                                {t('Отмена')}
                            </Button>
                            <Button
                                className={cls.editButton}
                                theme={ThemeButton.OUTLINE_RED}
                                onClick={onSave}
                            >
                                {t('Сохранить')}
                            </Button>
                        </>)
                    }
                </div>
            )}
        </div>
    );
};



