import axios from 'axios';
import Auth from '../service/api'

export const userActions = {
    login,
    logout,
    register,
    getAll,
};

function login(username, password) {

    return dispatch => {
        console.log(Auth.login(username, password));
    }

    function request(user) { return { type: userActions.LOGIN_REQUEST, user } }
    function success(user) { return { type: userActions.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userActions.LOGIN_FAILURE, error } }

}
