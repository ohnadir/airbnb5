import axios from 'axios';
import { 
    BOOKING_REQUEST,
    BOOKING_SUCCESS,
    BOOKING_FAIL,
    BOOKING_LIST_REQUEST,
    BOOKING_LIST_SUCCESS,
    BOOKING_LIST_FAIL,
    BOOKING_DETAILS_REQUEST,
    BOOKING_DETAILS_SUCCESS,
    BOOKING_DETAILS_FAIL,
    EMAIL_BOOKING_REQUEST,
    EMAIL_BOOKING_SUCCESS,    
    EMAIL_BOOKING_FAIL,
    CLEAR_ERRORS
} from "../constants/booking";

const baseUrl = "https://airbnb5.vercel.app"
// const baseUrl = "http://localhost:5003"
export const makeBooking = (booking) => async (dispatch) => {
    try {

        dispatch({ type:BOOKING_REQUEST})
        const config = {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }
        const { data } = await axios.post(`${baseUrl}/api/v1/booking`, booking, config)
        dispatch({
            type: BOOKING_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BOOKING_FAIL,
            payload: error.response.data.message
        })
    }
}
export const bookingList= () => async (dispatch) => {
    try {

        dispatch({ type: BOOKING_LIST_REQUEST})
        const config = {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }
        const { data } = await axios.get(`${baseUrl}/api/v1/booking`, config)
        dispatch({
            type: BOOKING_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BOOKING_LIST_FAIL,
            payload: error.response.data.message
        })
    }
}

export const bookingDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: BOOKING_DETAILS_REQUEST})
        const config = {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }
        const { data } = await axios.get(`${baseUrl}/api/v1/booking/${id}`, config)
        dispatch({
            type: BOOKING_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BOOKING_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const emailBooking = (email) => async (dispatch) => {
    try {

        dispatch({ type: EMAIL_BOOKING_REQUEST})
        const config = {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }
        const { data } = await axios.get(`${baseUrl}/api/v1/booking/email/${email}`, config)
        dispatch({
            type: EMAIL_BOOKING_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: EMAIL_BOOKING_FAIL,
            payload: error.response.data.message
        })
    }
}
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}