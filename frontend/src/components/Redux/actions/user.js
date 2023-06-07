import axios from  'axios';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS
} from "../constants/user"

const baseUrl = "http://localhost:5003"

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

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}