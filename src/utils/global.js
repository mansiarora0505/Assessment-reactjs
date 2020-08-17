import store from "../store";
import { startRequest, receiveError } from "../actions/index";
import { LOGOUT } from "../actions/types";
import { routePath } from "../constants/appRoutes";
import moment from "moment";

export const clear = () => {
    localStorage.clear();
    store.dispatch(startRequest(LOGOUT));
}

export const logout = (history) => {
    clear();
    history.push(routePath.LOGIN);
}


export const tokenExpire = (error) => {
    const {
        response,
    } = error;
    if (response) {
        if (response.status === 401) {
            clear();
            store.dispatch(receiveError("Token Expired!!"));
        }
        else {
            return Promise.reject(error.response.data.message);
        }
    }
}

export const disappear = (toggle) => {
    setTimeout(toggle, 5000);
}
export const dateFormat = (date) => moment(date).format("Do MMM YYYY")

export const timeFormat = (date1) => {
    const a = moment(date1).format("hh:mm A DD-MM-YYYY").split(" ");
    return `${a[0]} ${a[1]}`
}