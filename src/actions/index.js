import { RECEIVE_ERROR } from "./types";

export const startRequest = (type) => {
    return {
        type
    }
};

export const saveData = (data, type) => {
    return {
        data: data,
        type: type
    }
};

export const receiveError = (data) => {
    return {
        data: data,
        type: RECEIVE_ERROR
    }
}