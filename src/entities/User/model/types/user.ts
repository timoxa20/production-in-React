import { FeatureFlag } from "@/shared/types/featureFlag";

export enum UserRole {
    ADMIN = "ADMIN",
    USER = "USER",
    MANAGER = "MANAGER",
}

export interface User {
    id?: string;
    username?: string;
    avatar?: string;
    roles?: UserRole[];
    features?: FeatureFlag;
}

export interface UserSchema {
    authData?: User;

    _inited?: boolean;
}
