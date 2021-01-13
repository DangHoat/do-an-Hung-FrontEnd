import * as types from "../configType";
const axios = require('axios');
import {setUser,setToken} from '../../../define/SharePreference'
export function loginUser(state) {
    setUser(state.user)
    setToken(state.token)
    return {
        type: types.LOGIN_USER,
        users : state.user
    };
}

export function meFromToken() {
    const request = axios({
        url: '',
        method: 'GET',
        withCredentials: true,
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
    });

    return {
        type: types.ME_FROM_TOKEN,
        payload: request
    };
}

