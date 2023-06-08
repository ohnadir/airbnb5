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
                        <div className="w-1/2 flex flex-col justify-between">
                            <div>
                                <p style={{color:"#696969"}} className="m-0 text-xs">{place?.name}</p>
                                <p className="m-0 mt-[-5px] text-[16px]">{place?.des}</p>
                            </div>
                            <div className="flex items-center gap-1  text-[13px]">
                                <span className="flex items-center gap-1 "><FaStar/>{place?.rating}</span>
                                <span className=''>(17)</span>
                            </div>
                        </div>
                    </div>

                    <div className="checkout-container">
                    </div>
                </div>
            }
        </>
    )
}

export default Checkout