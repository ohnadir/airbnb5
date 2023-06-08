import "./Dashboard.scss";
import CountUp from 'react-countup';
import { FaTasks } from "react-icons/fa"
import PieChart from "./PieChart";
import RecentBooking from "./RecentBooking"
import LineChart from "./LineChart";

const Dashboard = () => {
  return (
    <div className="dashboard">
        <div className="dashboard-container">
            <div className="mt-[40px]">
                <p className="m-0 p-0 text-[20px] font-bold">Dashboard Overview</p>
            </div>
            <div className="booking">
                <div className="booking today-booking">
                    <div>
                        <FaTasks className="pb-1" style={{color : "white", margin : "0 auto"}} size={25}/>
                        <p>Today Bookings</p>
                        <h1>$ <CountUp end={500} /></h1>
                    </div>
                </div>
                <div className="booking yesterday-booking">
                    <div>
                        <FaTasks className="pb-1" style={{color : "white", margin : "0 auto"}} size={25}/>
                        <p>Yesterday Booking</p>
                        <h1>$ <CountUp end={200} /></h1>
                    </div>
                </div>
                <div className="booking month-booking">
                    <div>
                        <FaTasks className="pb-1" style={{color : "white", margin : "0 auto"}} size={25}/>
                        <p>This Month</p>
                        <h1>$ <CountUp end={3000} /></h1>
                    </div>
                </div>
                <div className="booking total-booking">
                    <div>
                        <FaTasks className="pb-1" style={{color : "white", margin : "0 auto"}} size={25}/>
                        <p>All Time Booking</p>
                        <h1>$ <CountUp end={5000} /></h1>
                    </div>
                </div>
            </div>
            <div className="booking-status">
                <div className='booking-item'>
                    <div className='booking-icon cart-icon'>
                    <span>
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                    </span>
                    </div>
                    <div>
                    <p className='counter-text'>Total Booking</p>
                    <p className='counter-number'>
                        <CountUp end={20} />
                    </p>
                    </div>
                </div>
                <div className='booking-item'>
                    <div className='booking-icon pending-icon'>
                    <span>
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline>
                        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                        </svg>
                    </span>
                    </div>
                    <div>
                    <p className='counter-text'>Pending Booking</p>
                    <p className='counter-number'>
                        <CountUp end={18} />
                    </p>
                    </div>
                </div>
                <div className='booking-item'>
                    <div className='booking-icon process-icon'>
                    <span>
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="3" width="15" height="13"></rect>
                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                        <circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>
                        </svg>
                    </span>
                    </div>
                    <div>
                    <p className='counter-text'>Processing Booking</p>
                    <p className='counter-number'>
                        <CountUp end={11} />
                    </p>
                    </div>
                </div>
                <div className='booking-item'>
                    <div className='booking-icon complete-icon'>
                    <span>
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </span>
                    </div>
                    <div>
                    <p className='counter-text'>Complete Booking</p>
                    <p className='counter-number'>
                        <CountUp end={29} />
                    </p>
                    </div>
                </div>
            </div>
            <div className="booking-chart">
                <div className="chart booking-table-chart">
                    <LineChart/>
                </div>
                <div className="chart booking-pie-chart">
                    <PieChart/>
                </div>
            </div>
            <div className="recent-order">
                <div >
                    <p className="m-0 p-0 text-[20px] font-bold">Recent Order</p>
                </div>
                <div className="order-container mt-[20px]"> 
                    <RecentBooking/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard