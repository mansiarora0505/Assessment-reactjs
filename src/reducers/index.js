import { combineReducers } from "redux";
import { LOGOUT } from "../actions/types";
import { loginReducer } from "./auth";
import { eventReducer } from "./event";

const allReducer = combineReducers({
    Login: loginReducer,
    Event: eventReducer
});

export const Reducer = (state, action) => {
    if (action.type === LOGOUT)
        state = undefined;

    return allReducer(state, action);
}
