import './Checkout.scss'
import { useDispatch, useSelector } from "react-redux";
import { placeDetails } from "../../Redux/actions/place"
import { useEffect } from 'react';
import {  FaStar } from 'react-icons/fa';
import Spinner from "../../components/Spinner"

const Checkout = () => {
    const { place, loading } = useSelector(state=> state.place);
    console.log(place)
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
                    </div>
                </div>
            }
        </>
    )
}

export default Checkout