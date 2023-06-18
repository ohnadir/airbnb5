import { 
    MAP_API_REQUEST,
    MAP_API_SUCCESS,
    MAP_API_FAIL,
    CLEAR_ERRORS
} from "../constants/map";

export const mapReducer = (state = {}, action) => {
    switch (action.type) {
        case MAP_API_REQUEST:
            return {
                loading: true
            }

        case MAP_API_SUCCESS:
            return {
                loading: false,
                api: action.payload
            }
        case MAP_API_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}