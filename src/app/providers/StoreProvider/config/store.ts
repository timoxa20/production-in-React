import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { userReducer } from '@/entities/User';
import { createReducerManager } from './reducerManager';
import { $api } from '@/shared/api/api';
import { scrollSaveReducer } from '@/features/ScrollSave';
import { rtkApi } from '@/shared/api/rtkApi';
import { DeepPartial } from 'ts-essentials';

export function createReduxStore(
    initialState: StateSchema | undefined,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        user: userReducer,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        scrollSave: scrollSaveReducer,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        [rtkApi.reducerPath]: rtkApi.reducer,
    };
    const reduceManager = createReducerManager(rootReducer);
    const extraArg: ThunkExtraArg = {
        api: $api,
    };
    const store = configureStore<StateSchema>({
        reducer: reduceManager.reduce as ReducersMapObject<StateSchema>,
        devTools: __IS_DEV_,
        preloadedState: initialState,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }).concat(rtkApi.middleware),
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    store.reducerManager = reduceManager;

    return store;
}
export type AppDispatch = typeof createReduxStore.arguments.dispatch;
