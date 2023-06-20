import {
    BOOKING_REQUEST,
    BOOKING_SUCCESS,
    BOOKING_FAIL,
    CLEAR_ERRORS
} from "../constants/booking";

export const bookingReducer = (state = {}, action) => {
    switch (action.type) {
        case BOOKING_REQUEST:
            return {
                loading: true
            }
        case BOOKING_SUCCESS:
            return {
                loading: false,
                booking: action.payload
            }
        case BOOKING_FAIL:
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