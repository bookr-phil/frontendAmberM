
import axios from 'axios';



export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const loginAction = userinfo => dispatch => {
    dispatch ({
        type: LOGIN_START
    });

    axios

    .post ('https://bookr-app.herokuapp.com/api/login', userinfo)
    
    .then (res => {
        console.log(res)
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
