import { useDispatch, useSelector } from 'react-redux';
import { bookingList } from '../../../Redux/actions/booking'
import { useEffect } from 'react';
const RecentBooking = () => {
  const { bookings } = useSelector(state=> state.bookings)
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(bookingList())
  }, [dispatch]);
  return (
    <div className=''>
      <table className='recent-booking-table-container'>
              <tr>
                <th>Place Name</th>
                <th>Check in</th>
                <th>Check out</th>
                <th>Guest</th>
                <th>Total</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>TransactionId</th>
                <th>Payment Status</th>
              </tr>
              {
                bookings?.map(booking=>
                  <tr key={booking._id}>
                    <td>{booking?.placeName}</td>
                    <td>{booking?.check_in}</td>
                    <td>{booking?.check_out}</td>
                    <td>{booking?.guest}</td>
                    <td>{booking?.total ? booking?.total : "Not Found"}</td>
                    <td>{booking?.name}</td>
                    <td>{booking?.email}</td>
                    <td>{booking?.phone}</td>
                    <td>{booking?.transactionId}</td>
                    <td className='text-green-500 font-semibold'>{booking?.paymentStatus}</td>
                  </tr>
                )
              }
      </table>
    </div>
  )
}

export default RecentBooking