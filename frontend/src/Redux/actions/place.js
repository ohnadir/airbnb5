import axios from 'axios';
import { 
    PLACES_REQUEST,
    PLACES_SUCCESS,
    PLACES_FAIL,
    PLACE_REQUEST,
    PLACE_SUCCESS,
    PLACE_FAIL,
    CLEAR_ERRORS
} from "../constants/place";


const baseUrl = "https://airbnb5.vercel.app"

export const getPlaces = () => async (dispatch) => {
    try {

        dispatch({ type: PLACES_REQUEST })
        const config = {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.get(`${baseUrl}/api/v1/place`, config)
        dispatch({
            type: PLACES_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PLACES_FAIL,
            payload: error.response.data.message
        })
    }
}

export const placeDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: PLACE_REQUEST })
        const config = {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.get(`${baseUrl}/api/v1/place/${id}`, config)
        dispatch({
            type: PLACE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PLACE_FAIL,
            payload: error.response.data.message
        })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}