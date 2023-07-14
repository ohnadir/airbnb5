import "./Dashboard.scss";
import CountUp from 'react-countup';
import { FaTasks } from "react-icons/fa"
import PieChart from "./PieChart";
import RecentBooking from "./RecentBooking"
import RecentUser from "./RecentUser"
import LineChart from "./LineChart";

const Dashboard = () => {
  return (
    <div className="dashboard">
        <div className="dashboard-container">
            <div className="">
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
            <div className="booking-chart">
                <div className="chart booking-table-chart">
                    <LineChart/>
                </div>
                <div className="chart booking-pie-chart">
                    <PieChart/>
                </div>
            </div>
            <div className="recent-order">
                <div className="bg-white p-5 mb-5 rounded-[8px] border">
                    <div >
                        <p className="m-0 p-0 text-[20px] font-bold">Recent Booking</p>
                    </div>
                    <div className="booking-container mt-[20px]" style={{overflowX : "auto"}}> 
                        <RecentBooking/>
                    </div>
                </div>
                <div className="bg-white p-5 mb-5 rounded-[8px] border">
                    <div className="">
                        <p className="m-0 p-0 text-[20px] font-bold">Recent user</p>
                    </div>
                    <div className="user-container mt-[20px] " style={{overflowX : "auto"}}> 
                        <RecentUser/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard