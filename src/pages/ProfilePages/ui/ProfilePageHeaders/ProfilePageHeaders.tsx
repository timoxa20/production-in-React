import {classNames} from "shared/lib/classNames/classNames";
import cls from './ProfilePageHeaders.module.scss'
import {useTranslation} from "react-i18next";
import {Text} from "shared/ui/Text/Text";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useSelector} from "react-redux";
import {getProfileReadonly, profileActions, updateProfileData} from "../../../../entities/Profile";
import {useCallback} from "react";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";


interface ProfilePageHeadersProps {
    className?: string;
}

export const ProfilePageHeaders = ({className}: ProfilePageHeadersProps) => {
    const {t} = useTranslation('profile')
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
                        className={cls.saveBtn}
                        theme={ThemeButton.OUTLINE_RED}
                        onClick={onSave}
                    >
                        {t('Сохранить')}
                    </Button>
                </>)
            }
        </div>
    );
};



