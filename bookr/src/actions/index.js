
import axios from 'axios';

import {API, demoAPI} from '../api';



export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const REGIS_START = 'REGIS_START';
export const REGIS_SUCCESS = 'REGIS_SUCCESS';
export const REGIS_FAIL = 'REGIS_FAIL';

export const loginAction = userinfo => dispatch => {
    dispatch ({
        type: LOGIN_START
    });

    API

    .post ('login', userinfo)
    
    .then (res => {
        console.log(res)
        API.defaults.headers.common['Authorization'] = res.data.token
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res
        })
       
    })

        
    .catch(err => {
        console.log(err)
        dispatch ({
            type: LOGIN_FAIL,
            payload: err
        })
    })

}

export const registerAction = userinfo => dispatch => {
    dispatch ({
        type: REGIS_START
    })
    
    API

    .post ('register', userinfo)
    
    .then (res => {
        console.log(res)
        dispatch({
            type: REGIS_SUCCESS,
            payload: res
        })
    })

        
    .catch(err => {
        console.log(err)
        dispatch ({
            type: REGIS_FAIL,
            payload: err
        })
    })

}

export const getBooks = dispatch => {
    demoAPI
    .get ('books')
    .then (res => {
        console.log(res)
    })
}
