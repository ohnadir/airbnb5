import axios from 'axios';
import { 
    STRIPE_API_REQUEST,
    STRIPE_API_SUCCESS,
    STRIPE_API_FAIL,
    PAYMENT_PROCESS_REQUEST,
    PAYMENT_PROCESS_SUCCESS,
    PAYMENT_PROCESS_FAIL,
    CLEAR_ERRORS
} from "../constants/payment";


const baseUrl = "https://airbnb5.vercel.app/api/v1"

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
export const  makePayment = (paymentData)=> async(dispatch)=>{
    try {
        dispatch({ type: PAYMENT_PROCESS_REQUEST })
        const config = {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post(`${baseUrl}/payment/process`, paymentData, config) 
        console.log(data)
        dispatch({
            type: PAYMENT_PROCESS_SUCCESS,
            payload: data.client_secret
        })
    } catch (error) {
        dispatch({
            type: PAYMENT_PROCESS_FAIL,
            payload: error?.response?.data?.message
        })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}