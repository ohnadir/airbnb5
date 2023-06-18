import axios from 'axios';
import { 
    MAP_API_REQUEST,
    MAP_API_SUCCESS,
    MAP_API_FAIL,
    CLEAR_ERRORS
} from "../constants/map";


const baseUrl = "https://airbnb5.vercel.app"
export const mapApi = () => async (dispatch) => {
    try {

        dispatch({ type: MAP_API_REQUEST})
        const config = {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.get(`${baseUrl}/api/v1/map/api`, config)
        dispatch({
            type: MAP_API_SUCCESS,
            payload: data.mapApi
        })

    } catch (error) {
        dispatch({
            type: MAP_API_FAIL,
            payload: error.response.data.message
        })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}