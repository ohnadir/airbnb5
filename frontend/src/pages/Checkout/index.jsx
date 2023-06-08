import './Checkout.scss'
import { useDispatch, useSelector } from "react-redux";
import { placeDetails } from "../../Redux/actions/place"
import { useEffect } from 'react';
import {  FaStar } from 'react-icons/fa';
import Spinner from "../../components/Spinner"

// stripe
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const options = {
    style: {
        base: {
            fontSize: '14px'
        },
        invalid: {
            color: '#C13515'
        }
    }
}
const stripePromise = loadStripe("pk_test_51MJynOHzN4rqAg27o1nDk5hQeHaX8cuaBkInxAzGMEnEqee4QMyeztVLqyeuAhzgK9ZRdwPAF8uWFrRX2Qj8iuQ9005XC9m0sA");
const Checkout = () => {
    const { place, loading } = useSelector(state=> state.place);
    const dispatch = useDispatch();
    const id = "64770dde9c9a8f27aee50f5c"
    useEffect(()=>{
        dispatch(placeDetails(id))
    },[id]);
    return (
        <>
            {
                loading
                ?
                <Spinner/>
                :
                <div className='checkout'>
                    <h1 className='heading'>Confirm and Pay</h1>

                    {/* this card for mobile and tablet version */}
                    <div className='mobile-place-card'>
                        <img  src="https://a0.muscache.com/im/pictures/c1fa3691-1287-4334-981d-ef9a9a8f5a56.jpg?im_w=720" alt="" />
                        <div className="place-info">
                            <div>
                                <p className="place-name">{place?.name}</p>
                                <p className="place-des">{place?.des}</p>
                            </div>
                            <div className="flex items-center gap-1  text-[13px]">
                                <span className="flex items-center gap-1 ">
                                    <FaStar/>{place?.rating}
                                </span>
                                <span className=''>(17)</span>
                            </div>
                        </div>
                    </div>

                    <div className="checkout-container">
                        <div className="checkout-card">
                            <div className='place-card'>
                                <img  src="https://a0.muscache.com/im/pictures/c1fa3691-1287-4334-981d-ef9a9a8f5a56.jpg?im_w=720" alt="" />
                                <div className="place-info">
                                    <div>
                                        <p className="place-name">{place?.name}</p>
                                        <p className="place-des">{place?.des}</p>
                                    </div>
                                    <div className="flex items-center gap-1  text-[13px]">
                                        <span className="flex items-center gap-1 ">
                                            <FaStar/>{place?.rating}
                                        </span>
                                        <span className=''>(17)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-divider my-5"></div>
                            <h2 className='price-heading'>Price details</h2>
                            <div className="mt-3 grid grid-cols-1 gap-2">
                                <div className='price-container'>
                                    <span>$56.24 x 7 nights</span>
                                    <span>$393.67</span>
                                </div>
                                <div className='price-container'>
                                    <span className="text-[#696969]">Service fee</span>
                                    <span className="text-[#54B157]">$55.58</span>
                                </div>
                                <div className="card-divider my-4"></div>
                                <div className='price-container total-price'>
                                    <span>Total </span>
                                    <span>$496.49</span>
                                </div>
                            </div>
                        </div>
                        <div className="checkout-option">
                            <section>
                                <h2 className='text-[22px] text-[#222222] font-semibold font-sans '>Your trip</h2>
                                <div className="date-container my-4">
                                    <div >
                                        <h2>Dates</h2>
                                        <h5>Jun 8 – 15</h5>
                                    </div>
                                    <span className="edit-button">Edit</span>
                                </div>
                                <div className="guest-container">
                                    <div>
                                        <h2>Guests</h2>
                                        <h5>3 guests</h5>
                                    </div>
                                    <span className="edit-button">Edit</span>
                                </div>
                            </section>
                            <div className="card-divider my-5"></div>
                            <section className="payment-section">
                                <div className='payment-heading'>
                                    <h1 className="text-[18px] font-semibold">Pay With</h1>
                                    <div className="flex items-center gap-3">
                                        <img className="w-9" src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_visa.0adea522bb26bd90821a8fade4911913.svg" alt=""/>
                                        <img className="w-7" src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_mastercard.f18379cf1f27d22abd9e9cf44085d149.svg" alt=""/>
                                    </div>
                                </div>
                                <div className='border m-0 p-3 rounded-[4px]'>
                                    <Elements stripe={stripePromise}>
                                        <CardElement options={options}/>
                                    </Elements>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Checkout