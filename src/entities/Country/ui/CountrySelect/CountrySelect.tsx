import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Select} from "shared/ui/Select/Select";
import {Country} from "../../model/types/country";
import {memo, useCallback} from "react";



interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void
    readonly?: boolean
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine }
]

// eslint-disable-next-line react/display-name
export const CountrySelect = memo((props: CountrySelectProps, ) => {
    const {
        className,
        value,
        onChange,
        readonly
    } = props
    const {t} = useTranslation()

    const onChangeHendler = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [onChange])

    return (
        <Select
            value={value}
            onChange={onChangeHendler}
            className={classNames('', {}, [className])}
            label={t('Укажите страну')}
            options={options}
            readonly={readonly}
        />
    );
});



