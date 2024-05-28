import { useTranslation } from 'react-i18next';
import { HStack, VStack } from '@/shared/ui/Stack';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Input } from '@/shared/ui/redesigned/Input';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';

export const ProfileCardsRedesignedError = () => {
    const { t } = useTranslation('profile');
    return (
        <HStack
            justify="center"
            max
        >
            <Text
                variant={'error'}
                title={t('Произошла ошибка')}
                text={t('Попробуйте обновить страницу')}
                align={'center'}
            />
        </HStack>
    );
};

export const ProfileCardsRedesignedSkeleton = () => {
    return (
        <Card
            padding="24"
            max
        >
            <VStack gap="32">
                <HStack
                    max
                    justify="center"
                >
                    <Skeleton
                        border="100%"
                        width={128}
                        height={128}
                    />
                </HStack>
                <HStack
                    gap="32"
                    max
                >
                    <VStack
                        gap="16"
                        max
                    >
                        <Skeleton
                            width="100%"
                            height={38}
                        />
                        <Skeleton
                            width="100%"
                            height={38}
                        />
                        <Skeleton
                            width="100%"
                            height={38}
                        />
                        <Skeleton
                            width="100%"
                            height={38}
                        />
                    </VStack>

                    <VStack
                        gap="16"
                        max
                    >
                        <Skeleton
                            width="100%"
                            height={38}
                        />
                        <Skeleton
                            width="100%"
                            height={38}
                        />
                        <Skeleton
                            width="100%"
                            height={38}
                        />
                        <Skeleton
                            width="100%"
                            height={38}
                        />
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    );
};
export const Redesigned = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const {
        data,
        readonly,
        onChangeLastName,
        onChangeFirstName,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUserName,
        onChangeCountry,
        onChangeCurrency,
    } = props;

    return (
        <Card
            padding={'24'}
            max
        >
            <VStack>
                {data?.avatar && (
                    <HStack
                        justify="center"
                        max
                    >
                        <Avatar
                            src={data?.avatar}
                            size={'120px'}
                        />
                    </HStack>
                )}
                <HStack
                    gap={'24'}
                    max
                >
                    <VStack
                        gap="16"
                        max
                    >
                        <Input
                            value={data?.first}
                            label={t('Имя')}
                            onChange={onChangeFirstName}
                            readonly={readonly}
                            data-testid="ProfileCard.firstname"
                        />
                        <Input
                            value={data?.lastname}
                            label={t('Фамилия')}
                            onChange={onChangeLastName}
                            readonly={readonly}
                            data-testid="ProfileCard.lastname"
                        />
                        <Input
                            value={data?.age}
                            label={t('Возраст')}
                            onChange={onChangeAge}
                            readonly={readonly}
                        />
                        <Input
                            value={data?.city}
                            label={t('Город')}
                            onChange={onChangeCity}
                            readonly={readonly}
                        />
                    </VStack>
                    <VStack
                        max
                        gap="16"
                    >
                        <Input
                            value={data?.username}
                            label={t('Имя пользователя')}
                            onChange={onChangeUserName}
                            readonly={readonly}
                        />
                        <Input
                            value={data?.avatar}
                            label={t('Ссылка на аватар')}
                            onChange={onChangeAvatar}
                            readonly={readonly}
                        />
                        <CurrencySelect
                            value={data?.currency}
                            onChange={onChangeCurrency}
                            readonly={readonly}
                        />
                        <CountrySelect
                            value={data?.country}
                            onChange={onChangeCountry}
                            readonly={readonly}
                        />
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    );
};
