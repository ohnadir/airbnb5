import  './Confirmation.scss'
import { Result } from 'antd';
import { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { bookingDetails } from "../../Redux/actions/booking"

const Confirmation = () => {
    const {id} = useParams();
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { booking } = useSelector(state=> state.bookingDetails)
    useEffect(()=>{
        dispatch(bookingDetails(id))
    },[id, dispatch]);
    const handleHome=()=>{
        navigate('/')
        window.location.reload();
    }
    return (
        <div className=''>
            <Result
                status="success"
                title= {`Successfully Booked in ${booking?.placeName}`}
                subTitle="Order number: 2017182818828182881 .  Please wait 1-5 minutes to get your booking confirmation"
                extra={[
                <button key="buy" className='btn' onClick={handleHome}>Explore More</button>,
                ]}
            />
        </div>
    )
}

export default Confirmation