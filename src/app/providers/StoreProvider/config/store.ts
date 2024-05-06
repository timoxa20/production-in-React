import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema, ThunkExtraArg} from "./StateSchema";
import { userReducer } from "../../../../entities/User";
import {createReducerManager} from "./reducerManager";
import {$api} from "shared/api/api";

export function createReduxStore(
    initialState: StateSchema | undefined,
    asyncReducers?: Partial<ReducersMapObject<StateSchema>> | undefined,
) {

    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        user: userReducer,
    }
    const reduceManager = createReducerManager(rootReducer)
    const extraArg : ThunkExtraArg = {
        api: $api,
    }
    const store = configureStore<StateSchema>({

        reducer: reduceManager.reduce as ReducersMapObject<StateSchema> ,
        devTools: __IS_DEV_,
        preloadedState: initialState,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg
            },
        })
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    store.reducerManager = reduceManager

    return store
}
export type AppDispatch = typeof createReduxStore.arguments.dispatch


