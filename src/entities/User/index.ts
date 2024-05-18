export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';

export { userReducer, userActions } from './model/slice/userSlice';

export type { User, UserSchema } from './model/types/user';
export { UserRole } from './model/types/user';

export {
    isUserAdmin,
    isUserManager,
    getUserRole,
} from './model/selectors/roleSelectors/roleSelectors';

export {
    useJsonSettings,
    getJsonSettings
} from './model/selectors/jsonSelectors/jsonSelectors'

export {saveJsonSettings} from './model/services/saveJsonSettings'
