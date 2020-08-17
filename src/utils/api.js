import Axios from "axios";
import { tokenExpire } from "./global";

Axios.defaults.baseURL = process.env.REACT_APP_BACKEND;
Axios.defaults.timeout = 6000;

Axios.interceptors.response.use(
    (res) => {
        return res;
    },
    (error) => {
        return tokenExpire(error)
    }
);

class Api {
    static get headers() {
        return {
            Authorization: `bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json"
        }
    };
    static async get(route, params) {
        return await Axios.get(route, {
            headers: Api.headers,
            params: params
        })
    };
    static async post(route, body) {
        return await Axios.post(route, body, {
            headers: Api.headers
        });
    }

}
export default Api;