import {StateSchema} from "@/app/providers/StoreProvider";
import {AsyncThunkAction} from "@reduxjs/toolkit";
import axios, {AxiosStatic} from "axios";

type ActionCreatorType<Return, Agr, RejectedValue> = (arg: Agr) =>  AsyncThunkAction<Return, Agr, { rejectValue: RejectedValue }>
jest.mock('axios')
const mockedAxios = jest.mocked(axios,)
export class TestAsyncThunk<Return, Agr, RejectedValue> {
    dispatch: jest.MockedFn<any>;
    getState: () => StateSchema;
    actionCreator: ActionCreatorType<Return, Agr, RejectedValue>

    api:  jest.MockedFunctionDeep<AxiosStatic>;
    navigate: jest.MockedFn<any> ;
    constructor(actionCreator: ActionCreatorType<Return, Agr, RejectedValue>, state?: Partial<StateSchema> ) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn()
        this.getState = jest.fn(() => state as StateSchema)
        this.api = mockedAxios
        this.navigate = jest.fn()
    }
    async callThumnk(arg: Agr) {
        const action = this.actionCreator(arg)
        const result = await action(
            this.dispatch,
            this.getState,
            {api: this.api, navigate: this.navigate})

        return result;
    }
}