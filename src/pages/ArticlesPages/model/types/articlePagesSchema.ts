import {
    Article,
    ArticleView,
    ArticleSortField,
    ArticleType,
} from '@/entities/Article';
import { EntityState } from '@reduxjs/toolkit';
import { SortOrder } from '@/shared/types';

export interface ArticlePagesSchema extends EntityState<Article, string> {
    isLoading?: boolean;
    error?: string;
    // pagination
    limit?: number;
    page: number;
    hasMore: boolean;
    // filter
    view?: ArticleView;
    order?: SortOrder;
    sort?: ArticleSortField;
    search?: string;
    type?: ArticleType;
    _inited?: boolean;
}
