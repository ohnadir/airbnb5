import { useEffect} from 'react'
import './Trip.scss'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { emailBooking } from '../../../Redux/actions/booking'

const Trip = () => {
  const { bookings } = useSelector(state=> state.emailBookings)
  const { user } = useSelector(state=> state.auth)
  const navigate =useNavigate();
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(emailBooking(user?.email))
  }, [user, dispatch]);
  return (
    <div className='trip'>
      <div className="trip-container">
        <h1>Trip</h1>
        <div className="divider my-6"></div>
        {
          bookings === undefined
          ?
          <div className='empty-booking'>
            <h2>No trips booked...yet!</h2>
            <p>Time to dust off your bags start planing your next adventure</p>
            <button onClick={()=>navigate('/')}>Start searching</button>
          </div>
          :
          <div className="trip-table">
            <table className='trip-table-container'>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Place Name</th>
                <th>Guest</th>
                <th>Check in</th>
                <th>Check out</th>
                <th>Total</th>
                <th>TransactionId</th>
                <th>Payment Status</th>
              </tr>
              {
                bookings?.map(booking=>
                  <tr key={booking._id}>
                    <td>{booking?.name}</td>
                    <td>{booking?.email}</td>
                    <td>{booking?.phone}</td>
                    <td>{booking?.placeName}</td>
                    <td>{booking?.guest}</td>
                    <td>{booking?.check_in}</td>
                    <td>{booking?.check_out}</td>
                    <td>{booking?.total ? booking?.total : "Not Found"}</td>
                    <td>{booking?.transactionId}</td>
                    <td className='text-green-500 font-semibold'>{booking?.paymentStatus}</td>
                  </tr>
                )
              }
            </table>
          </div>
        }
      </div>
    </div>
  )
}

export default Trip