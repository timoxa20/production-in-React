import {StateSchema} from "app/providers/StoreProvider";
import {AsyncThunkAction} from "@reduxjs/toolkit";
import {loginByUserName} from "features/AuthByUserName/model/services/loginByUserName/loginByUserName";

type ActionCreatorType<Return, Agr, RejectedValue> = (arg: Agr) =>  AsyncThunkAction<Return, Agr, { rejectValue: RejectedValue }>
export class TestAsyncThunk<Return, Agr, RejectedValue> {
    dispatch: jest.MockedFn<any>;
    getState: () => StateSchema;
    actionCreator: ActionCreatorType<Return, Agr, RejectedValue>
    constructor(actionCreator: ActionCreatorType<Return, Agr, RejectedValue> ) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn()
        this.getState = jest.fn()
    }
    async callThumnk(arg: Agr) {
        const action = this.actionCreator(arg)
        const result = await action(this.dispatch, this.getState, undefined)

        return result;
    }
}