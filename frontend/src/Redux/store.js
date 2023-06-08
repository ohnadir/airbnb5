import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from "./reducers/user";
import { placesReducer, placeReducer } from "./reducers/place";
const reducer = combineReducers({
    auth : authReducer,
    places : placesReducer,
    place : placeReducer
})
const middleware = [thunk];
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))  
export default store;