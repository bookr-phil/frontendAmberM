import axios from 'axios';

export const API = axios.create({
    baseURL: 'https://bookr-app.herokuapp.com/api/'
})

export const demoAPI = axios.create({
    baseURL: 'https://bookr-app.herokuapp.com/demo/api/'
})
