import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from '../ProfileCard/ProfileCard.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { Loader } from '@/widgets/Loader';
import { Text } from '@/shared/ui/redesigned/Text';

export const ProfileCardDeprecatedError = () => {
    const { t } = useTranslation('profile');
    return (
        <HStack
            justify="center"
            max
            className={classNames(cls.ProfileCard, {}, [cls.error])}
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

export const ProfileCardDeprecated = () => {
    return (
        <HStack
            justify="center"
            max
            className={classNames(cls.ProfileCard, { [cls.loader]: true }, [])}
        >
            <Loader />
        </HStack>
    );
};

export const Deprecated = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const {
        className,
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
    const mods: Mods = {
        [cls.edition]: !readonly,
    };
    return (
        <VStack
            gap="8"
            max
            className={classNames(cls.ProfileCard, mods, [className])}
        >
            {data?.avatar && (
                <HStack
                    justify="center"
                    max
                    className={cls.AvatarWrapper}
                >
                    <AvatarDeprecated
                        src={data?.avatar}
                        size={'100'}
                    />
                </HStack>
            )}
            <InputDeprecated
                value={data?.first}
                placeholder={t('Ваше имя')}
                className={cls.input}
                onChange={onChangeFirstName}
                readonly={readonly}
                data-testid="ProfileCard.firstname"
            />
            <InputDeprecated
                value={data?.lastname}
                placeholder={t('Ваше фамилия')}
                className={cls.input}
                onChange={onChangeLastName}
                readonly={readonly}
                data-testid="ProfileCard.lastname"
            />
            <InputDeprecated
                value={data?.age}
                placeholder={t('Ваш возраст')}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
            />
            <InputDeprecated
                value={data?.city}
                placeholder={t('Ваш город')}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <InputDeprecated
                value={data?.username}
                placeholder={t('Введите имя пользователя')}
                className={cls.input}
                onChange={onChangeUserName}
                readonly={readonly}
            />
            <InputDeprecated
                value={data?.avatar}
                placeholder={t('Введите ссылку на аватар')}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    );
};
