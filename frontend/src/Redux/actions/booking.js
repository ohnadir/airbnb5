import axios from 'axios';
import { 
    BOOKING_REQUEST,
    BOOKING_SUCCESS,
    BOOKING_FAIL,
    CLEAR_ERRORS
} from "../constants/booking";
const baseUrl = "https://airbnb5.vercel.app"

export const makeBooking = (booking) => async (dispatch) => {
    try {

        dispatch({ type:BOOKING_REQUEST})
        const config = {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
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

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}