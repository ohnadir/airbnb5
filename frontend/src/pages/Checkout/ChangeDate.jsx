import "./Checkout.scss"
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import {  RiCloseFill } from 'react-icons/ri';
import { addDate, getDate } from "../../utils/LocalStorage"
import { format, differenceInDays  } from "date-fns";
import { Modal } from 'antd';
const ChangeDate = ({ modal1Open, setModal1Open }) => {
    const [date, setDate] = useState([
        {
        startDate: new Date(), 
        endDate: new Date(),
        key: "selection",
        }
    ]);
    const guest = getDate()
    const startDate = `${format(date[0].startDate, "dd/MM/yyyy")}`;
    const endDate = `${format(date[0].endDate,"dd/MM/yyyy")}`;
    const night= differenceInDays(date[0].endDate, date[0].startDate);
    const handleSave=()=>{
        if(night > 0 ){
            setModal1Open(false)
            const booking = {
                check_in: String(date[0]?.startDate)?.slice(4, 16), 
                check_out: String(date[0]?.endDate)?.slice(4, 16),
                night: night,
                guest: guest?.guests
            }
            addDate(booking);
        }
    }
    return (
        <Modal
            open={modal1Open}
            centered
            width={570}
            style={{borderRadius:"30px"}}
            closable={false}
            footer={false}
            className={{borderRadius:"30px"}}
            bodyStyle={{margin:"0", border:"none", padding:0, borderRadius:"30px"}}
        >
            <div className="change-date">
                <div className='absolute top-1 right-1'>
                    <RiCloseFill onClick={() => setModal1Open(false)} className='w-8 h-8  rounded-full hover:bg-gray-100 p-1 cursor-pointer'/>
                </div>
                <div className="date-pick">
                    <div>
                        {
                            night
                            ?
                            <div>
                                <h1>{night} nights</h1>
                                <span>2 beds, 1 bath</span>
                            </div>
                            :
                            <div>
                                <h1>Select dates</h1>
                                <span>Add your travel dates for exact pricing</span>
                            </div>
                        }
                    </div>
                    <div className=' date-container'>
                        <div className="check-in" tabIndex="1">
                            <p className="check-head">CHECK-IN</p>
                            <p className="check-footer">{startDate === endDate ? "Add dates" : startDate}</p>
                        </div>
                        <div className="check-out" tabIndex="2" style={{borderLeft : "1px solid #ddd"}}>
                            <p className="check-head">CHECKOUT</p>
                            <p className="check-footer">{endDate === startDate ? "Add dates" : endDate}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="calender"
                        months={2}
                        direction="horizontal"
                        minDate={new Date()}
                    />
                </div>
                <div className="button-container">
                    <button onClick={handleSave} className="save-btn">Save</button>
                </div>
            </div>
        </Modal>
    )
}

export default ChangeDate