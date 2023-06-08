import axios from 'axios';
import { 
    STRIPE_API_REQUEST,
    STRIPE_API_SUCCESS,
    STRIPE_API_FAIL,
    CLEAR_ERRORS
} from "../constants/payment";


const baseUrl = "http://localhost:5003"

export const stripeApi = () => async (dispatch) => {
    try {

        dispatch({ type: STRIPE_API_REQUEST})
        const config = {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.get(`${baseUrl}/api/v1/payment/api`, config)
        dispatch({
            type: STRIPE_API_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: STRIPE_API_FAIL,
            payload: error.response.data.message
        })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}