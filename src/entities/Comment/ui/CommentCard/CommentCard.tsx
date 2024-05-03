import {classNames} from "shared/lib/classNames/classNames";
import cls from './CommentCard.module.scss'
import {memo} from "react";
import {Comment} from '../../model/types/comment'
import {Avatar} from "shared/ui/Avatar/Avatar";
import {Text} from "shared/ui/Text/Text";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";
import {AppLinks} from "shared/ui/AppLink/AppLinks";
import {RoutePath} from "shared/config/routeConfig/routeConfig";


interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean
}

export const CommentCard = memo(({className, comment, isLoading}: CommentCardProps) => {

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border={'50%'}/>
                    <Skeleton width={100} height={16} className={cls.username}/>
                </div>
                <Skeleton width={'100%'} height={50} className={cls.text}/>
            </div>
        )
    }

    if (!comment) {
        return null
    }


    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLinks
                to={`${RoutePath.profile}${comment?.user.id}`}
                className={cls.header}
            >
                {comment?.user.avatar ? <Avatar size={'30px'} src={comment?.user.avatar}/> : null}
                <Text className={cls.username} title={comment?.user.username}/>
            </AppLinks>
            <Text className={cls.text} text={comment?.text}/>
        </div>
    );
});

CommentCard.displayName = 'CommentCard'