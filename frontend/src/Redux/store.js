import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer, allUsersReducer } from "./reducers/user";
import { placesReducer, placeReducer, putBookingDateReducer } from "./reducers/place";
import { paymentReducer } from "./reducers/payment";
import { mapReducer } from "./reducers/map";
import { bookingReducer, bookingListReducer, bookingDetailsReducer, emailBookingReducer } from "./reducers/booking";
const reducer = combineReducers({
    auth : authReducer,
    places : placesReducer,
    place : placeReducer,
    payment : paymentReducer,
    users: allUsersReducer,
    mapApi : mapReducer,
    booking : bookingReducer,
    bookings : bookingListReducer,
    bookingDetails : bookingDetailsReducer,
    emailBookings: emailBookingReducer,
    putBookingDate: putBookingDateReducer,

})
const middleware = [thunk];
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))  
export default store;