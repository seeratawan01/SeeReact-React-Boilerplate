import {
    SET_USER,
    LOG_OUT,
} from './types';

export const setUser = (userObj) => {
    localStorage.setItem('user', JSON.stringify(userObj));
    return {
        type: SET_USER,
        payload: userObj
    }
}

export const logOut = () => {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    return {
        type: LOG_OUT
    }
}

export default {
    setUser,
    logOut
}