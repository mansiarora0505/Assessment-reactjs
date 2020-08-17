import {
    START_REQUEST,
    FINISH_REQUEST,
    RECEIVE_ERROR,
} from "../actions/types";

const initialState = {
    isFetching: false,
    error: "",
    isError: false
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                error: "",
                isError: false
            });
        case RECEIVE_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                isError: true,
                error: action.data
            });
        case FINISH_REQUEST:
            return Object.assign({}, state, {
                isFetching: false,
            });
        default: return state
    }
}
