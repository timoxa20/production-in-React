import {StoreProvider} from "./ui/StoreProvider";
import {createReduxStore} from "./config/store";

export {
    StoreProvider,
    createReduxStore,

}

export type {
    StateSchema,
    ThunkConfig,
    ReduxStoreWithManager,
    StateSchemaKey

} from './config/StateSchema'
