import { 
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,   
    CLEAR_ERRORS
} from "../constants/user";

export const authReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                loading: true,
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.user
            }
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}