import './Checkout.scss'
import { useDispatch, useSelector } from "react-redux";
import { placeDetails } from "../../Redux/actions/place";
import { makePayment } from "../../Redux/actions/payment";
import { makeBooking } from "../../Redux/actions/booking";
import { putBookedDate } from "../../Redux/actions/place";
import { useEffect, useState } from 'react';
import {  FaStar } from 'react-icons/fa';
import Spinner from "../../components/Spinner"
import { FiChevronDown } from "react-icons/fi";
// stripe
import { useElements, useStripe } from '@stripe/react-stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import AuthCheckout from './LoginCheckout';
import { message } from 'antd';
import { useNavigate, useParams } from "react-router-dom"
import { getDate, bookingDate } from "../../utils/LocalStorage"
import ChangeDate from './ChangeDate';
import ChangeGuest from './ChangeGuest';

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
const Checkout = () => {
    const [address, setAddress] = useState('');
    const { place, loading } = useSelector(state=> state.place);
    const { isAuthenticated, user, error, messages    } = useSelector(state => state.auth);
    const { client_secret } = useSelector(state => state.payment);
    const { booking } = useSelector(state => state.booking);
    const [messageApi, contextHolder] = message.useMessage();
    const dispatch = useDispatch();
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const { id } = useParams();
    const [modal1Open, setModal1Open] = useState('');

    const handleChange = (e) => {
        setAddress(prev=>({...prev, [e.target.name]:e.target.value}))
    }
    useEffect(()=>{
        dispatch(placeDetails(id))
    },[id, dispatch]);
    

    const date = getDate();
    const bookedDate = bookingDate()

    
    const total = ((place?.price * (date?.night ? date?.night : 1)) + place?.serviceCharge)
    const paymentAmount = {
        amount: Math.round(total * 100)
    }
    useEffect(() => {
        if(total){
            dispatch(makePayment(paymentAmount));
        }
    }, [dispatch, total]);

    

    const stripeCall= async()=>{
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
          return;
        }
        
        // confirm payment 
        const result = await stripe.confirmCardPayment(
            client_secret,
            {
              payment_method: {
                card: card,
                billing_details: {
                    name: user.name,
                    email: user.email,
                    phone: user?.phone,
                    address: user?.address
                },
                
              },
            },
        );
        return result;
    }
    const handleSubmit= async()=>{
        const data = await stripeCall();
        const booking = {
            placeName: place?.name,
            placeImg : place?.img[0],
            check_in: date?.check_in,
            check_out: date?.check_out,
            guest : date?.guests,
            name: user?.firstName + " " + user?.lastName,
            email: user?.email,
            phone: user?.phone,
            total : Number(total),
            address : address,
            transactionId : data?.paymentIntent?.id,
            paymentStatus : data?.paymentIntent?.status
        }
        if(data.paymentIntent?.id){
            dispatch(makeBooking(booking))
        }
        if(bookingDate){
            dispatch(putBookedDate(place?._id, bookedDate))
        }
    }
    useEffect(()=>{
        if(booking?.newBooking?._id){
            messageApi.success("Booking is successful")
            setTimeout(() => {
                localStorage.removeItem("date");
                navigate(`/confirmation/${booking?.newBooking?._id}`)
              }, 1000);
        }
    },[booking]);
    useEffect(()=>{
        if (messages=== "login successfully") {
            messageApi.success(messages);
        }
        if (messages=== "Registration successfully") {
            messageApi.success(messages);
        }
        if(error === "Incorrect credential"){
            messageApi.warning("Incorrect credential");
        }
    },[error, user])
    return (
        <>
            {contextHolder}
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
                    <div className="card-divider mt-5 md:hidden"></div>

                    <div className="checkout-container flex  gap-10">
                        <div className="checkout-option pb-8">
                            <section>
                                <h2 className='text-[22px] text-[#222222] font-semibold font-sans '>Your trip</h2>
                                <div className="date-container my-4">
                                    <div >
                                        <h2>Dates</h2>
                                        <h5>{date?.check_in ? date?.check_in : "Add date"} – {date?.check_out ? date?.check_out : "Add date"}</h5>
                                    </div>
                                    <span className="edit-button cursor-pointer" onClick={() => setModal1Open("date")}>Edit</span>
                                </div>
                                <div className="guest-container">
                                    <div>
                                        <h2>Guests</h2>
                                        <h5>{date?.guests ? date?.guests : "Add "} guests</h5>
                                    </div>
                                    <span className="edit-button cursor-pointer" onClick={() => setModal1Open("guest")}>Edit</span>
                                </div>
                            </section>

                            <div className="card-divider my-5 md:hidden"></div>
                            <section className='mobile-price-container'>
                                <h2 className='price-heading'>Price details</h2>
                                <div className="mt-3 grid grid-cols-1 gap-1">
                                    <div className='price-container'>
                                        <span>${place?.price} x {date?.night ? date?.night : 1} nights</span>
                                        <span>${Number(place?.price) * Number(date?.night ? date?.night : 1)}</span>
                                    </div>
                                    <div className='price-container'>
                                        <span className="text-[#696969]">Service fee</span>
                                        <span className="text-[#54B157]">${place?.serviceCharge}</span>
                                    </div>
                                    <div className='price-container total-price'>
                                        <span>Total </span>
                                        <span>${total}</span>
                                    </div>
                                </div>
                            </section>

                            <div className="card-divider my-5"></div>
                            {
                                isAuthenticated
                                ?
                                <>
                                    {/* payment section start */}
                                    <section className="payment-section">
                                        <div className='payment-heading'>
                                            <h1 className="text-[18px] font-semibold">Pay With</h1>
                                            <div className="flex items-center gap-3">
                                                <img className="w-9" src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_visa.0adea522bb26bd90821a8fade4911913.svg" alt=""/>
                                                <img className="w-7" src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_mastercard.f18379cf1f27d22abd9e9cf44085d149.svg" alt=""/>
                                            </div>
                                        </div>
                                        <div className='border m-0 p-3 rounded-[4px]'>
                                            <CardElement options={options}/>
                                        </div>
                                    </section>
                                    {/* Billing address start */}
                                    <section className="billing-address">
                                        <h1 className=" mb-5 mt-6 font-semibold">Billing Address</h1>
                                        <div className="billing-address-container border rounded-[8px]">
                                            <div className="relative" style={{borderBottom:"1px solid #ddd"}}>
                                                <label className='relative cursor-pointer'>
                                                    <input onChange={handleChange} name='address'  type="text" placeholder="Input" className='pt-5 pb-3 w-full px-[14px] text-[14px]  border-none rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                                                    <span className='text-opacity-80  absolute left-[14px] top-[30%] text-black translate-y-[-50%] text-[15px]  transition duration-200 input-text'>Street Address</span>
                                                </label>
                                            </div>
                                            <div className="relative" style={{borderBottom:"1px solid #ddd"}}>
                                                <label className='relative cursor-pointer'>
                                                    <input onChange={handleChange} name='aptNumber'  type="text" placeholder="Input" className='pt-5 pb-3 w-full px-[14px] text-[14px]  border-none rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                                                    <span className='text-opacity-80  absolute left-[14px] top-[30%] text-black translate-y-[-50%] text-[15px] transition duration-200 input-text-a'>Apt or suite number</span>
                                                </label>
                                            </div>
                                            <div className="" style={{borderBottom:"1px solid #ddd"}}>
                                                <label className='relative cursor-pointer'>
                                                    <input onChange={handleChange} name='city'  type="text" placeholder="Input" className='pt-5 pb-3 w-full px-[14px] text-[14px]  border-none rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                                                    <span className='text-opacity-80  absolute left-[14px] top-[30%] text-black translate-y-[-50%] text-[15px] transition duration-200 input-text-c'>City</span>
                                                </label>
                                            </div>
                                            <div className="sm:flex ">
                                                <div className="w-full">
                                                    <label  className='relative cursor-pointer'>
                                                        <input onChange={handleChange} name='state'  type="text" placeholder="Input" className='pt-5 pb-3 w-full px-[14px] text-[14px]  border-none rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                                                        <span className='text-opacity-80  absolute left-[14px] top-[30%] text-black translate-y-[-50%] text-[15px] transition duration-200 input-text-z'>State</span>
                                                    </label>
                                                </div>
                                                <div className="zip-container">
                                                    <label className='relative cursor-pointer'>
                                                        <input onChange={handleChange} name='zipCode'  type="text" placeholder="Input" className='pt-5 pb-3 w-full px-[14px] text-[14px]  border-none rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                                                        <span className='text-opacity-80  absolute left-[14px] top-[30%] text-black translate-y-[-50%] text-[14px] transition duration-200 input-text-z'>ZIP Code</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        {/* country name modal start */}
                                        <div className="country-name border rounded-[8px] mt-5">
                                            <div>
                                                <p className=''>Country/Region</p>
                                                <h3>Bangladesh</h3>
                                            </div>
                                            <FiChevronDown size={18} />
                                        </div>
                                    </section>

                                    {/* cancellation policy term start */}
                                    <section className="cancellation-policy">
                                        <h1 className="heading">Cancellation Policy</h1>
                                        <p className="m-0 text-[15px]">
                                            <span className="font-bold">Free cancellation for 48 hours. </span> 
                                            Cancel before Dec 24 for a partial refund. 
                                            <span className="font-bold underline">Learn more</span>
                                        </p>
                                        <div className="card-divider my-5"></div>
                                        <p className="m-0 text-[13px] leading-5 mb-6">By selecting the button below, I agree to the Host&apos;s House Rules, Airbnb&apos;s Rebooking and Refund Policy, and that Airbnb can charge my payment method if I&apos;m responsible for damage. I agree to pay the total amount shown if the Host accepts my booking request.</p>
                                    </section>

                                    {/* submit button */}
                                    {/* <ConfirmButton place={place} total={total} CardElement={CardElement} client_secret={client_secret} /> */}
                                    <button onClick={handleSubmit}  className="confirm-btn">Confirm and pay</button>
                                </>
                                :
                                <AuthCheckout/>
                            }
                        </div>
                        <div className="checkout-card">
                            <div className='place-card'>
                                {
                                    loading
                                    ?
                                    <Spinner/>
                                    : place?.img ? <img  src={place?.img[0]} alt="" /> : null 
                                }
                                {/* <img  src={place?.img[0]} alt="" /> */}
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
                                    <span>${place?.price} x {date?.night ? date?.night : 1} nights</span>
                                    <span>${place?.price * (date?.night ? date?.night : 1)}</span>
                                </div>
                                <div className='price-container'>
                                    <span className="text-[#696969]">Service fee</span>
                                    <span className="text-[#54B157]">${place?.serviceCharge}</span>
                                </div>
                                <div className="card-divider my-4"></div>
                                <div className='price-container total-price'>
                                    <span>Total </span>
                                    <span>${total}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {
                        modal1Open === "date" && 
                        <ChangeDate modal1Open={modal1Open}  setModal1Open={setModal1Open}/>
                    }
                    {
                        modal1Open === "guest" &&
                        <ChangeGuest modal1Open={modal1Open} setModal1Open={setModal1Open} />
                    }
                </div>
            }
        </>
    )
}

export default Checkout