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

export const placeReducer = (state = { place: {} }, action) => {
    switch (action.type) {
        case PLACE_REQUEST:
            return {
                loading: true,
                place: {}
            }

        case PLACE_SUCCESS:
            return {
                loading: false,
                place: action.payload.place
            }
        case PLACE_FAIL:
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

export const putBookingDateReducer = (state = {}, action) => {
    switch (action.type) {
        case BOOKED_DATE_PUT_REQUEST:
            return {
                loading: true
            }
        case BOOKED_DATE_PUT_SUCCESS:
            return {
                loading: false,
                booking: action.payload.message
            }
        case BOOKED_DATE_PUT_FAIL:
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