import {
    START_REQUEST,
    FINISH_REQUEST,
    GET_ALL_EVENTS
} from "./types";
import store from "../store";
import { startRequest, receiveError, saveData } from "./index";
import Api from "../utils/api";
import { API } from "../utils/apiPath";

export const getAllEvents = (params) => {
    store.dispatch(startRequest(START_REQUEST));
    return async (dispatch) => {
        try {
            const response = await Api.get(`${API.GET_EVENTS}`, params);
            response && dispatch(saveData(response.data.successData, GET_ALL_EVENTS));
            dispatch(startRequest(FINISH_REQUEST));
        }
        catch (error) {
            dispatch(receiveError(error));
        }
    }
}

export const createEvent = (body) => {
    store.dispatch(startRequest(START_REQUEST));
    return async (dispatch) => {
        try {
            const response = await Api.post(`${API.CREATE_EVENT}`, body);
            dispatch(startRequest(FINISH_REQUEST));
            if (response)
                return response.data;
        }
        catch (error) {
            dispatch(receiveError(error));
        }
    }
}