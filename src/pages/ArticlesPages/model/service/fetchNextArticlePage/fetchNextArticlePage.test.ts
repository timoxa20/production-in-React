import {TestAsyncThunk} from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import {fetchNextArticlePage} from "./fetchNextArticlePage";
import {fetchArticleList} from "../fetchArticleList";
import {ArticleSortField} from "../../../../../entities/Article";


jest.mock('../fetchArticleList')

describe('fetchNextArticlePage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlePages: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                order: 'asc',
                sort: ArticleSortField.CREATED,
                search: ''
            }
        })
        await thunk.callThumnk()
        expect(thunk.dispatch).toBeCalledTimes(4)
        expect(fetchArticleList).toHaveBeenCalledWith({page : 3})
    });

    test('fetchArticleList not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlePages: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
                order: 'asc',
                sort: ArticleSortField.CREATED,
                search: ''
            }
        })
        await thunk.callThumnk()
        expect(thunk.dispatch).toBeCalledTimes(2)
        expect(fetchArticleList).not.toHaveBeenCalled()
    });
})