import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
    useGetProfileRating,
    useRateProfile,
} from '../../api/ProfileRatingApi';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { RatingCard } from '@/entities/Rating';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

export interface ProfileRatingProps {
    className?: string;
    profileId: string;
}

const ProfileRating = ({ profileId }: ProfileRatingProps) => {
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetProfileRating({
        profileId,
        userId: userData?.id ?? '',
    });
    const [rateProfileMutation] = useRateProfile();

    const handleRateArticle = useCallback(
        (startCount: number, feedback?: string) => {
            try {
                rateProfileMutation({
                    userId: userData?.id ?? '',
                    profileId,
                    rate: startCount,
                    feedback,
                });
            } catch (e) {
                console.log(e);
            }
        },
        [profileId, rateProfileMutation, userData?.id],
    );

    const onAccept = useCallback(
        (startCount: number, feedback?: string) => {
            handleRateArticle(startCount, feedback);
        },
        [handleRateArticle],
    );

    const onCancel = useCallback(
        (startCount: number) => {
            handleRateArticle(startCount);
        },
        [handleRateArticle],
    );

    const rating = data?.[0];

    if (isLoading) {
        return (
            <Skeleton
                width="100%"
                height={120}
            />
        );
    }
    return (
        <RatingCard
            onCancel={onCancel}
            rate={rating?.rate}
            onAccept={onAccept}
            feedbackTitle={t(
                'Оставьте свой отзыв о прифиле, это поможет улучшить качество',
            )}
            hasFeedback
            title={t('Оцените профиль')}
        />
    );
};

export default memo(ProfileRating);
