
import axios from 'axios';

import {API, demoAPI} from '../api';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const REGIS_START = 'REGIS_START';
export const REGIS_SUCCESS = 'REGIS_SUCCESS';
export const REGIS_FAIL = 'REGIS_FAIL';

export const GET_START = 'GET_START';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAIL = 'GET_FAIL';

export const REVIEW_START = 'REVIEW_START';
export const REVIEW_SUCCESS = 'REVIEW_SUCCESS';
export const REVIEW_FAIL = 'REVIEW_FAIL';

export const NEWREVIEW_START = 'NEWREVIEW_START';
export const NEWREVIEW_SUCCESS = 'NEWREVIEW_SUCCESS';
export const NEWREVIEW_FAIL = 'NEWREVIEW_FAIL';

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

export const getBooks = () => dispatch => {
    dispatch({
        type: GET_START
    })

    demoAPI

    .get ('books')
    
    .then (res => {
        console.log(res)
        dispatch({
            type: GET_SUCCESS,
            payload: res.data
        })
    })

    .catch(err => {
        console.log(err)
        dispatch({
            type:GET_FAIL,
            payload: err.data
        })
    })
}

export const getReviews = () => dispatch => {
    dispatch({
        type: REVIEW_START
    })

    demoAPI

    .get ('reviews')
    
    .then (res => {
        console.log(res)
        dispatch({
            type: REVIEW_SUCCESS,
            payload: res.data
        })
    })

    .catch(err => {
        console.log(err)
        dispatch({
            type: REVIEW_FAIL,
            payload: err.data
        })
    })
}


export const giveReviews = rev => dispatch => {
    dispatch({
        type: NEWREVIEW_START
    })

    demoAPI

    .post ('reviews', rev)
    
    .then (res => {
        console.log(res)
        dispatch({
            type: NEWREVIEW_SUCCESS,
            payload: res.data
        })
    })

    .catch(err => {
        console.log(err)
        dispatch({
            type: NEWREVIEW_FAIL,
            payload: err.data
        })
    })
}

