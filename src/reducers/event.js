import {
    START_REQUEST,
    FINISH_REQUEST,
    RECEIVE_ERROR,
    GET_ALL_EVENTS,
} from "../actions/types";

const initialState = {
    isFetching: false,
    error: "",
    isError: false,
    events: [],
    totalEvents: "",
};

export const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                error: "",
                isError: false
            });
        case GET_ALL_EVENTS:
            return Object.assign({}, state, {
                events: action.data.rows,
                totalEvents: action.data.count,
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
