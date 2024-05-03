import {StateSchema} from "app/providers/StoreProvider";
import {ArticleView} from "../../../../entities/Article";

export const getArticlePagesIsLoading = (state: StateSchema) => state.articlePages?.isLoading || false;
export const getArticlePagesError = (state: StateSchema) => state.articlePages?.error || '';
export const getArticlePagesView = (state: StateSchema) => state.articlePages?.view || ArticleView.SMALL;
