import { 
    PLACES_REQUEST,
    PLACES_SUCCESS,
    PLACES_FAIL,
    CLEAR_ERRORS
} from "../constants/place";

export const placesReducer = (state = { places: [] }, action) => {
    switch (action.type) {
        case PLACES_REQUEST:
            return {
                loading: true,
                places: []
            }

        case PLACES_SUCCESS:
            return {
                loading: false,
                places: action.payload.places
            }
        case PLACES_FAIL:
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