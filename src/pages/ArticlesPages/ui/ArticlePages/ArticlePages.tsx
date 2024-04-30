import {classNames} from "shared/lib/classNames/classNames";
import cls from './ArticlePages.module.scss'
import {useTranslation} from "react-i18next";
import {memo} from "react";


interface ArticlePagesProps {
    className?: string;
}

const ArticlePages = ({className}: ArticlePagesProps) => {
    const {t} = useTranslation('article')
    return (
        <div className={classNames(cls.ArticlePages, {}, [className])}>
            {t('ArticlePages')}
        </div>
    );
};

export default memo(ArticlePages)

