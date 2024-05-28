import { Profile } from '../../model/types/profile';
import { Currency } from '../../../Currency';
import { Country } from '../../../Country';
import { ToggleFeature } from '@/shared/lib/features';
import {
    Deprecated,
    ProfileCardDeprecated,
    ProfileCardDeprecatedError,
} from '../ProfileCardDeprecated/ProfileCardDeprecated';
import {
    ProfileCardsRedesignedError,
    ProfileCardsRedesignedSkeleton,
    Redesigned,
} from '@/entities/Profile/ui/ProfileCardRedesigned/ProfileCardRedesigned';

export interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string | undefined;
    readonly?: boolean;
    isLoading?: boolean | undefined;
    onChangeFirstName?: (value?: string) => void;
    onChangeLastName?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUserName?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { error, isLoading } = props;

    if (isLoading) {
        return (
            <ToggleFeature
                feature={'isAppRedesigned'}
                on={<ProfileCardsRedesignedSkeleton />}
                off={<ProfileCardDeprecated />}
            />
        );
    }

    if (error) {
        return (
            <ToggleFeature
                feature={'isAppRedesigned'}
                on={<ProfileCardsRedesignedError />}
                off={<ProfileCardDeprecatedError />}
            />
        );
    }

    return (
        <ToggleFeature
            feature={'isAppRedesigned'}
            on={<Redesigned {...props} />}
            off={<Deprecated {...props} />}
        />
    );
};
