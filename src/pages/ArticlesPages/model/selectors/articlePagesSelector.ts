import {StateSchema} from "@/app/providers/StoreProvider";
import {ArticleSortField, ArticleType, ArticleView} from "@/entities/Article";

export const getArticlePagesIsLoading = (state: StateSchema) => state.articlePages?.isLoading || false;
export const getArticlePagesError = (state: StateSchema) => state.articlePages?.error || '';
export const getArticlePagesView = (state: StateSchema) => state.articlePages?.view || ArticleView.SMALL;
export const getArticlePagesNum = (state: StateSchema) => state.articlePages?.page || 1;
export const getArticlePagesLimit = (state: StateSchema) => state.articlePages?.limit || 9;
export const getArticlePagesHasMore = (state: StateSchema) => state.articlePages?.hasMore;
export const getArticlePagesInited = (state: StateSchema) => state.articlePages?._inited;
export const getArticlePagesOrder = (state: StateSchema) => state.articlePages?.order ?? 'asc'
export const getArticlePagesSearch = (state: StateSchema) => state.articlePages?.search ?? '' ;
export const getArticlePagesSort = (state: StateSchema) => state.articlePages?.sort ?? ArticleSortField.CREATED
export const getArticlePagesType = (state: StateSchema) => state.articlePages?.type ?? ArticleType.ALL
