import {SET_CURRENT_USER} from './type';
import axios from 'axios';
import setAuthorizationToken from '../../../utils/authorization';
import jwtDecode from 'jwt-decode';

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER, 
        user
    }
}

export function userSignupRequest (data) {
    return dispatch => {
        return axios.post('http://localhost:3000/signup', data)
     }
}
export function isUserExists (data) {
    return dispatch => {
        return axios.post('http://localhost:3000', data)
     }
}


export function userSigninRequest (data) {
    return dispatch => {
        return axios.post('http://localhost:3000/login', data)
        .then(res => {
            const token = res.data.token;
            if(window !== undefined) {
                localStorage.setItem('jwt', token);
                setAuthorizationToken(token);
                dispatch(setCurrentUser(jwtDecode(token)));
            }
        })
     }
}