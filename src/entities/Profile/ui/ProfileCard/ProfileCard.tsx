import {classNames, Mods} from "@/shared/lib/classNames/classNames";
import cls from './ProfileCard.module.scss'
import {useTranslation} from "react-i18next";
import {Text, TextAlign, TextTheme} from "@/shared/ui/Text";
import {Input} from "@/shared/ui/Input";
import {Profile} from "../../model/types/profile";
import {Loader} from "@/widgets/Loader";
import {Avatar} from "@/shared/ui/Avatar";
import {Currency, CurrencySelect} from "../../../Currency";
import {Country, CountrySelect} from "../../../Country";
import {HStack, VStack} from "@/shared/ui/Stack";

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string | undefined;
    readonly?: boolean
    isLoading?: boolean | undefined;
    onChangeFirstName?: (value?: string) => void;
    onChangeLastName?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeUserName?: (value?: string) => void
    onChangeAvatar?: (value?: string) => void
    onChangeCurrency?: (currency: Currency) => void
    onChangeCountry?: (country: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {t} = useTranslation('profile')
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeLastName,
        onChangeFirstName,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUserName,
        onChangeCountry,
        onChangeCurrency
    } = props

    if (isLoading) {
        return (
            <HStack justify='center' max className={classNames(cls.ProfileCard, {[cls.loader]: true}, [className])}>
                <Loader/>
            </HStack>
        )
    }

    if (error) {
        return (
            <HStack justify='center' max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        )
    }

    const mods: Mods = {
        [cls.edition]: !readonly
    }


    return (
        <VStack gap='8' max className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar && (
                <HStack justify='center' max className={cls.AvatarWrapper}>
                    <Avatar src={data?.avatar} size={'100'}/>
                </HStack>
            )}
            <Input
                value={data?.first}
                placeholder={t('Ваше имя')}
                className={cls.input}
                onChange={onChangeFirstName}
                readonly={readonly}
                data-testid="ProfileCard.firstname"
            />
            <Input
                value={data?.lastname}
                placeholder={t('Ваше фамилия')}
                className={cls.input}
                onChange={onChangeLastName}
                readonly={readonly}
                data-testid="ProfileCard.lastname"
            />
            <Input
                value={data?.age}
                placeholder={t('Ваш возраст')}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
            />
            <Input
                value={data?.city}
                placeholder={t('Ваш город')}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <Input
                value={data?.username}
                placeholder={t('Введите имя пользователя')}
                className={cls.input}
                onChange={onChangeUserName}
                readonly={readonly}
            />
            <Input
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



