import {classNames} from "shared/lib/classNames/classNames";
import cls from './AddCommentForm.module.scss'
import {memo, useCallback} from "react";
import {useTranslation} from "react-i18next";
import {Input} from "shared/ui/Input/Input";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useSelector} from "react-redux";
import {
    addCommentFormSelectorError,
    addCommentFormSelectorText
} from "../../model/selectors/addCommentFormSelector";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {addCommentFormActions, addCommentFormReducer} from "features/addCommentForm/model/slice/addCommentFormSlice";
import {DynamicModuleLoader, ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";


export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void
}

const reducer: ReducerList = {
    addCommentForm: addCommentFormReducer
}

const AddCommentForm = ({className, onSendComment}: AddCommentFormProps) => {
    const {t} = useTranslation()
    const text = useSelector(addCommentFormSelectorText)
    const error = useSelector(addCommentFormSelectorError)
    const dispatch = useAppDispatch()

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value))
    }, [dispatch])

    const onSendHandler = useCallback(() => {
        onSendComment(text || '')
        onCommentTextChange('')
    }, [onCommentTextChange, text, onSendComment])

    if (error) {
        return null
    }

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    value={text}
                    onChange={onCommentTextChange}
                    placeholder={t('Введите текст коментария')}
                />
                <Button
                    onClick={onSendHandler}
                    theme={ThemeButton.OUTLINE}
                >
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(AddCommentForm);