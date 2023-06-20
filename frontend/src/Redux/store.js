import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from "./reducers/user";
import { placesReducer, placeReducer } from "./reducers/place";
import { paymentReducer } from "./reducers/payment";
import { mapReducer } from "./reducers/map";
import { bookingReducer } from "./reducers/booking";
const reducer = combineReducers({
    auth : authReducer,
    places : placesReducer,
    place : placeReducer,
    payment : paymentReducer,
    mapApi : mapReducer,
    booking : bookingReducer
})
const middleware = [thunk];
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))  
export default store;