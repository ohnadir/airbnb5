import axios from  'axios';
import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    ALL_USERS_REQUEST,
    ALL_USERS_SUCCESS,
    ALL_USERS_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    CLEAR_ERRORS
} from "../constants/user"

const baseUrl = "https://airbnb5.vercel.app"
// const baseUrl = "http://localhost:5003"

export const  register = (validUser)=> async(dispatch)=>{
    try {
        dispatch({ type:REGISTER_USER_REQUEST})
        const config = {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post(`${baseUrl}/api/v1/user/signup`, validUser, config)
        console.log(data);
        if(data.token){
            localStorage.setItem("token", JSON.stringify(data.token));
        }
        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message
        })
    }
}


export const  login = (auth)=> async(dispatch)=>{
    let { email, password} = auth;
    try {
        dispatch({ type:LOGIN_REQUEST})
        const config = {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post(`${baseUrl}/api/v1/user/login`, { email, password }, config)
        if(data.token){
            localStorage.setItem("token", JSON.stringify(data.token));
        }
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}

// all user
export const allUser = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_USERS_REQUEST })
        const config = {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }
        const { data } = await axios.get(`${baseUrl}/api/v1/user`, config)
        dispatch({
            type: ALL_USERS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_USERS_FAIL,
            payload: error.response.data.message
        })
    }
}


export const loadUser = (token) => async(dispatch)=>{
    try{
        dispatch({ type: LOAD_USER_REQUEST })
        const config = {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.get(`${baseUrl}/api/v1/user/me/${token}`, config )
        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data
        })
    }
    catch (error){
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

export const logout = () => async (dispatch) => {
    try {
        dispatch({ type: LOGOUT_REQUEST })
        const config = {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        localStorage.removeItem("token");
        await axios.get(`${baseUrl}/api/v1/user/logout`, config)
        dispatch({
            type: LOGOUT_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response.data.message
        })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}