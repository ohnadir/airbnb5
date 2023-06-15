import { useEffect, useState } from 'react'
import './Trip.scss'
import { useNavigate } from "react-router-dom"

const Trip = () => {
  const [show, setShow] = useState(false);
  const navigate =useNavigate()
  const controlNavbar = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop){
        // setShow(true);
    }
    if (scrollTop > 1) {
        setShow(true);
    }else{
        setShow(false);
    }
}
useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
        window.removeEventListener('scroll', controlNavbar)
    }
}, []);
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