import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Input as InputDepracated } from '@/shared/ui/deprecated/Input';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { useSelector } from 'react-redux';
import {
    addCommentFormSelectorError,
    addCommentFormSelectorText,
} from '../../model/selectors/addCommentFormSelector';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from '@/shared/ui/Stack';
import { ToggleFeature } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducer: ReducerList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = ({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation();
    const text = useSelector(addCommentFormSelectorText);
    const error = useSelector(addCommentFormSelectorError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, text, onSendComment]);

    if (error) {
        return null;
    }

    return (
        <DynamicModuleLoader
            reducers={reducer}
            removeAfterUnmount
        >
            <Card
                padding="24"
                max
                border="partial"
            >
                <HStack
                    data-testid="AddCommentForm"
                    justify="between"
                    max
                    gap="16"
                    className={classNames(cls.AddCommentForm, {}, [className])}
                >
                    <ToggleFeature
                        on={
                            <Input
                                className={cls.input}
                                value={text}
                                onChange={onCommentTextChange}
                                placeholder={t('Введите текст коментария')}
                            />
                        }
                        off={
                            <InputDepracated
                                data-testid="AddCommentForm.Input"
                                className={cls.input}
                                value={text}
                                onChange={onCommentTextChange}
                                placeholder={t('Введите текст коментария')}
                            />
                        }
                        feature={'isAppRedesigned'}
                    />

                    <Button
                        data-testid="AddCommentForm.Button"
                        onClick={onSendHandler}
                        variant={'outline'}
                    >
                        {t('Отправить')}
                    </Button>
                </HStack>
            </Card>
        </DynamicModuleLoader>
    );
};

export default memo(AddCommentForm);
