import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from "./StateSchema";
import { userReducer } from "../../../../entities/User";
import {createReducerManager} from "./reducerManager";


export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema> ) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
    }
    const reduceManager = createReducerManager(rootReducer)

    const store = configureStore<StateSchema>({
        reducer: reduceManager.reduce,
        devTools: __IS_DEV_,
        preloadedState: initialState
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    store.reducerManager = reduceManager
    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

