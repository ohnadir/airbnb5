import axios from 'axios';
import { 
    PLACES_REQUEST,
    PLACES_SUCCESS,
    PLACES_FAIL,
    PLACE_REQUEST,
    PLACE_SUCCESS,
    PLACE_FAIL,
    BOOKED_DATE_PUT_REQUEST,
    BOOKED_DATE_PUT_SUCCESS,
    BOOKED_DATE_PUT_FAIL,
    CLEAR_ERRORS
} from "../constants/place";


const baseUrl = "https://airbnb5.vercel.app"
// const baseUrl = "http://localhost:5003"

export const getPlaces = ( keyword="",  region) => async (dispatch) => {
    try {
        
        dispatch({ type: PLACES_REQUEST })
        const config = {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        let link = `${baseUrl}/api/v1/place?q=${keyword}`;
        if(region){
            link = `${baseUrl}/api/v1/place?q=${keyword}&zone=${region}`            
        }
        const { data } = await axios.get( link , config);
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

export const putBookedDate = (id, booking) => async (dispatch) => {
    try {

        dispatch({ type: BOOKED_DATE_PUT_REQUEST})
        const config = {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }
        const { data } = await axios.put(`${baseUrl}/api/v1/place/put/${id}`, booking, config)
        dispatch({
            type: BOOKED_DATE_PUT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BOOKED_DATE_PUT_FAIL,
            payload: error.response.data.message
        })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}