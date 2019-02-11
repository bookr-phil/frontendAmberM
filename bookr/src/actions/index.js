
import axios from 'axios';



export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const LoginAction = () => dispatch => {
    dispatch ({
        type: LOGIN_START
    });

    axios

    .get ('https://swapi.co/api/people/')
    
    .then (res => {
        console.log(res)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data.results
        })
    })

        
    .catch(err => {
        console.log(err)
        dispatch ({
            type: LOGIN_FAIL,
            payload: "Login Failed"
        })
    })

}
