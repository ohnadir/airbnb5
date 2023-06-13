import './Trip.scss'
import { useNavigate } from "react-router-dom"

const Trip = () => {
  const navigate =useNavigate()
  return (
    <div className='trip'>
      <div className="trip-container">
        <h1>Trip</h1>
        <div className="divider my-6"></div>
        <div className='empty-booking'>
          <h2>No trips booked...yet!</h2>
          <p>Time to dust off your bags start planing your next adventure</p>
          <button onClick={()=>navigate('/')}>Start searching</button>
        </div>
      </div>
    </div>
  )
}

export default Trip