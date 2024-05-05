import {Article, ArticleView} from "entities/Article";
import {EntityState} from "@reduxjs/toolkit";

export interface ArticlePagesSchema extends EntityState<Article, string>{
    isLoading?: boolean;
    error?: string;
    view?: ArticleView;

    limit?: number;
    page: number;
    hasMore  : boolean;
}