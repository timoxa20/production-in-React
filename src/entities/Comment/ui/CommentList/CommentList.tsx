import {classNames} from "shared/lib/classNames/classNames";
import cls from './CommentList.module.scss'
import {memo} from "react";
import {Text, TextAlign} from "shared/ui/Text/Text";
import {useTranslation} from "react-i18next";
import {CommentCard} from "../CommentCard/CommentCard";
import {Comment} from '../../model/types/comment'


interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const {
        className,
        comments,
        isLoading
    } = props
    const {t} = useTranslation()


    return (
        <div className={classNames('', {}, [className])}>
            {comments?.length
                ? comments.map(coment => (
                    <CommentCard  className={cls.comment} comment={coment}/>
                ))
                : <Text align={TextAlign.CENTER} text={t('Комментарий отсудствуют')}/>
            }
        </div>
    );
});

CommentList.displayName = 'CommentList'