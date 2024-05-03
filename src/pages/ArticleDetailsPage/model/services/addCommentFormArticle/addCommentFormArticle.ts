import {createAsyncThunk} from "@reduxjs/toolkit";
import {getUserAuthData} from "../../../../../entities/User";
import {ThunkExtraArg} from "app/providers/StoreProvider/config/StateSchema";
import {Comment} from "entities/Comment";
import {getArticleDetailsData} from "entities/Article/model/selectors/articleDetails";
import {
    fetchCommentsArticleById
} from "../../services/fetchCommentsArticleById/fetchCommentsArticleById";


export const addCommentFormArticle = createAsyncThunk<
    Comment,
    string,
    {rejectValue: string, extra: ThunkExtraArg}
>(
    'articleDetails/addCommentFormArticle',
    async (text, thunkApi) => {

        const { rejectWithValue, extra, getState, dispatch} = thunkApi

        // @ts-ignore
        const userData = getUserAuthData(getState());
        // @ts-ignore
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue('no data')
        }
        try {

            const response = await extra.api.post<Comment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text,
            })

            if (!response.data) {
                throw new Error()
            }

            // @ts-ignore
            dispatch(fetchCommentsArticleById(article.id))

            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    },
)