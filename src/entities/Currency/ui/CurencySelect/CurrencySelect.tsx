import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Select} from "shared/ui/Select/Select";
import {Currency} from "../../model/types/curency";
import {memo, useCallback} from "react";



interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void
    readonly?: boolean
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EURO, content: Currency.EURO }
]

// eslint-disable-next-line react/display-name
export const CurrencySelect = memo((props: CurrencySelectProps, ) => {
    const {
        className,
        value,
        onChange,
        readonly
    } = props
    const {t} = useTranslation()

    const onChangeHendler = useCallback((value: string) => {
        onChange?.(value as Currency)
    }, [onChange])

    return (
        <Select
            value={value}
            onChange={onChangeHendler}
            className={classNames('', {}, [className])}
            label={t('Укажите валюту')}
            options={options}
            readonly={readonly}
        />
    );
});



