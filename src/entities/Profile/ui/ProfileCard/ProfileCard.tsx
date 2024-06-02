import { Profile } from '../../model/types/profile';
import { Currency } from '../../../Currency';
import { Country } from '../../../Country';


import {
    ProfileCardsRedesignedError,
    ProfileCardsRedesignedSkeleton,
    Redesigned,
} from '../ProfileCardRedesigned/ProfileCardRedesigned';

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
            <ProfileCardsRedesignedSkeleton />
        );
    }

    if (error) {
        return (
            <ProfileCardsRedesignedError />
        );
    }

    return (
        <Redesigned {...props} />
    );
};
