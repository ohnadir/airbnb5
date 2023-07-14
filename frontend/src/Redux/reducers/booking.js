import {
    BOOKING_REQUEST,
    BOOKING_SUCCESS,
    BOOKING_FAIL,
    BOOKING_LIST_REQUEST,
    BOOKING_LIST_SUCCESS,
    BOOKING_LIST_FAIL,
    BOOKING_DETAILS_REQUEST,
    BOOKING_DETAILS_SUCCESS,
    BOOKING_DETAILS_FAIL,
    EMAIL_BOOKING_REQUEST,
    EMAIL_BOOKING_SUCCESS,    
    EMAIL_BOOKING_FAIL,
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

export const bookingListReducer = (state = {bookings : []}, action) => {
    switch (action.type) {
        case BOOKING_LIST_REQUEST:
            return {
                loading: true
            }
        case BOOKING_LIST_SUCCESS:
            return {
                loading: false,
                bookings: action.payload.bookings
            }
        case BOOKING_LIST_FAIL:
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

export const bookingDetailsReducer = (state = {booking : []}, action) => {
    switch (action.type) {
        case BOOKING_DETAILS_REQUEST:
            return {
                loading: true
            }
        case BOOKING_DETAILS_SUCCESS:
            return {
                loading: false,
                booking: action.payload.booking
            }
        case BOOKING_DETAILS_FAIL:
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

export const emailBookingReducer = (state = {bookings : []}, action) => {
    switch (action.type) {
        case EMAIL_BOOKING_REQUEST:
            return {
                loading: true
            }
        case EMAIL_BOOKING_SUCCESS:
            return {
                loading: false,
                bookings: action.payload.bookings
            }
        case EMAIL_BOOKING_FAIL:
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