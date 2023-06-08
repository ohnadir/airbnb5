import "./Dashboard.scss";
import CountUp from 'react-countup';
import { FaTasks } from "react-icons/fa"


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
        </div>
    </div>
  )
}

export default Dashboard