import {
    START_REQUEST,
    FINISH_REQUEST,
} from "./types";
import store from "../store";
import { startRequest, receiveError } from "./index";
import Api from "../utils/api";
import { API } from "../utils/apiPath";

export const login = (body) => {
    store.dispatch(startRequest(START_REQUEST));
    return async (dispatch) => {
        try {
            const response = await Api.post(`${API.LOGIN}`, body);
            if (response) {
                localStorage.setItem("token", response.data.successData.accessTokens);
                localStorage.setItem("user", JSON.stringify(response.data.successData.userInfo));
                dispatch(startRequest(FINISH_REQUEST));
                return response.data;
            }
            dispatch(startRequest(FINISH_REQUEST));
        }
        catch (error) {
            dispatch(receiveError(error));
        }
    }
}

export const signup = (body) => {
    store.dispatch(startRequest(START_REQUEST));
    return async (dispatch) => {
        try {
            const response = await Api.post(`${API.SIGNUP}`, body);
            if (response) {
                localStorage.setItem("token", response.data.successData.accessToken);
                localStorage.setItem("user", response.data.successData.user);
                dispatch(startRequest(FINISH_REQUEST));
                return response.data;
            }
            dispatch(startRequest(FINISH_REQUEST));
        }
        catch (error) {
            dispatch(receiveError(error));
        }
    }
}