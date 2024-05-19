import { rtkApi } from "@/shared/api/rtkApi";
import { User } from "../types/user";
import { JsonSettingsOption } from "../types/jsonSettings";

interface SetJsonSettingsArg {
    userId: string | undefined;
    jsonSettings?: JsonSettingsOption;
}

const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        setJsonSettings: build.mutation<User, SetJsonSettingsArg>({
            query: ({ userId, jsonSettings }) => ({
                url: `/users/${userId}`,
                method: "PATCH",
                body: {
                    jsonSettings
                }
            })
        }),
        getUserDataById: build.query<User, string>({
            query: (userId) => ({
                url: `/users/${userId}`,
                method: "GET"
            })
        })
    })
});

export const setJsonSettingsMutation = userApi.endpoints.setJsonSettings.initiate;
export const getUserDataByIdQuery = userApi.endpoints.getUserDataById.initiate;