import {StateSchema} from "app/providers/StoreProvider";
import {ArticleView} from "../../../../entities/Article";

export const getArticlePagesIsLoading = (state: StateSchema) => state.articlePages?.isLoading || false;
export const getArticlePagesError = (state: StateSchema) => state.articlePages?.error || '';
export const getArticlePagesView = (state: StateSchema) => state.articlePages?.view || ArticleView.SMALL;
export const getArticlePagesNum = (state: StateSchema) => state.articlePages?.page || 1;
export const getArticlePagesLimit = (state: StateSchema) => state.articlePages?.limit || 9;
export const getArticlePagesHasMore = (state: StateSchema) => state.articlePages?.hasMore;
