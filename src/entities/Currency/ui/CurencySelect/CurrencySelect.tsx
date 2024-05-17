import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/curency';
import { memo, useCallback } from 'react';
import { ListBox } from '@/shared/ui/ListBox';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EURO, content: Currency.EURO },
];

// eslint-disable-next-line react/display-name
export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { className, value, onChange, readonly } = props;
    const { t } = useTranslation();

    const onChangeHendler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

    return (
        <ListBox
            className={classNames('', {}, [className])}
            defaultValue={t('Укажите валюту')}
            label={t('Укажите валюту')}
            items={options}
            value={value}
            onChange={onChangeHendler}
            readonly={readonly}
        />
    );
});
