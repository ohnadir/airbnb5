import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";


// redux
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Provider } from 'react-redux'
import store from './Redux/store.js';
import { BrowserRouter } from "react-router-dom"
const stripePromise = loadStripe('pk_test_51MJynOHzN4rqAg27o1nDk5hQeHaX8cuaBkInxAzGMEnEqee4QMyeztVLqyeuAhzgK9ZRdwPAF8uWFrRX2Qj8iuQ9005XC9m0sA');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
