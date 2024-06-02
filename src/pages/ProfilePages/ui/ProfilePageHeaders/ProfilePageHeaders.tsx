import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/Stack';
import {
    getProfileData,
    getProfileReadonly,
    updateProfileData,
} from '@/features/editableProfileCard';
import { profileActions } from '@/features/editableProfileCard';
import { ToggleFeature } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';

interface ProfilePageHeadersProps {
    className?: string;
}

export const ProfilePageHeaders = ({ className }: ProfilePageHeadersProps) => {
    const { t } = useTranslation('profile');
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <Card
            padding={'16'}
            max
            border={'partial'}
        >
            <HStack
                max
                justify="between"
                className={classNames('', {}, [className])}
            >
                <Text title={t('Профиль')} />
                {canEdit && (
                    <>
                        {readonly ? (
                            <Button
                                variant={'clear'}
                                onClick={onEdit}
                                data-testid="EditableProfileCardHeader.EditButton"
                            >
                                {t('Редактировать')}
                            </Button>
                        ) : (
                            <HStack gap="8">
                                <Button
                                    variant={'clear'}
                                    onClick={onCancelEdit}
                                    data-testid="EditableProfileCardHeader.CancelButton"
                                >
                                    {t('Отмена')}
                                </Button>
                                <Button
                                    variant={'clear'}
                                    onClick={onSave}
                                    data-testid="EditableProfileCardHeader.SaveButton"
                                >
                                    {t('Сохранить')}
                                </Button>
                            </HStack>
                        )}
                    </>
                )}
            </HStack>
        </Card>
    );
};
