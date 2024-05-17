import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
    getArticlePagesHasMore,
    getArticlePagesIsLoading,
    getArticlePagesNum,
} from '../../selectors/articlePagesSelector';
import { articlePagesAction } from '../../slice/articlePagesSlice';
import { fetchArticleList } from '../fetchArticleList';

export const fetchNextArticlePage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('articlePagesNext/fetchNextArticlePage', async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const hasMore = getArticlePagesHasMore(getState());
    const page = getArticlePagesNum(getState());
    const isLoading = getArticlePagesIsLoading(getState());

    if (hasMore && !isLoading) {
        dispatch(articlePagesAction.initPage(page + 1));
        dispatch(fetchArticleList({}));
    }
});
