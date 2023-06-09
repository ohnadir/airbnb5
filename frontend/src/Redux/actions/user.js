import axios from  'axios';
import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    CLEAR_ERRORS
} from "../constants/user"

const baseUrl = "https://airbnb5.vercel.app"

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

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}