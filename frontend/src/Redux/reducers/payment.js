import { 
    STRIPE_API_REQUEST,
    STRIPE_API_SUCCESS,
    STRIPE_API_FAIL,
    CLEAR_ERRORS
} from "../constants/payment";

export const apiReducer = (state = {}, action) => {
    switch (action.type) {
        case STRIPE_API_REQUEST:
            return {
                loading: true
            }

        case STRIPE_API_SUCCESS:
            return {
                loading: false,
                api: action.payload.api
            }
        case STRIPE_API_FAIL:
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