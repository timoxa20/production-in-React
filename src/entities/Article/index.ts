export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export {
    ArticleView,
    ArticleSortField,
    ArticleType,
} from './model/types/article';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
export type { Article } from './model/types/article';
export { ArticleList } from './ui/ArticleList/ArticleList';
export { getArticleDetailsData } from './model/selectors/articleDetails';
export {
    articleDetailsReducer,
    articleDetailsSlice,
    articleDetailsActions,
} from './model/slice/articleDetailsSlice';
