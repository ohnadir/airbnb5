import { RiCloseFill } from "react-icons/ri";
import "./Checkout.scss"
import { useState } from 'react'
import { addDate, getDate } from "../../utils/LocalStorage";
import { Modal } from 'antd';

const ChangeGuest = ({modal1Open, setModal1Open}) => {
    const [options, setOptions] = useState({
        adult: 1,
        children: 0
    });
    const handleOption = (name, operation) => {
        setOptions((prev) => {
          return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
          };
        });
    };
    const date = getDate();
    const guest = Number(options.adult) + Number(options.children) 
    const handleSave=()=>{
        if(guest > 1 ){
            setModal1Open(false)
            const booking = {
                check_in: date?.check_in, 
                check_out: date?.check_out,
                night: date?.night,
                guest: guest
            }
            addDate(booking);
        }
    }
    return (
        <Modal
            open={modal1Open}
            centered
            width={270}
            style={{borderRadius:"30px"}}
            closable={false}
            footer={false}
            className={{borderRadius:"30px"}}
            bodyStyle={{margin:"0", border:"none", padding:0, borderRadius:"30px"}}
        >
            <div className="change-guest">
                <div className='absolute top-1 right-1'>
                    <RiCloseFill onClick={() => setModal1Open(false)} className='w-8 h-8  rounded-full hover:bg-gray-100 p-1 cursor-pointer'/>
                </div>
                <div>
                    <h1>Guests</h1>
                </div>
                <div className="options">
                    <div className="counter-item">
                        <div className='flex flex-col'>
                            <span className="counter-heading">Adult</span>
                            <span className="counter-criteria">Ages 13 or above</span>
                        </div>
                        <div className="counter-btn-container">
                            <button
                            disabled={options.adult <= 1}
                            className="counter-btn"
                            onClick={() => handleOption("adult", "d")}
                            >
                            -
                            </button>
                            <span className=" counter-number">
                            {options.adult}
                            </span>
                            <button
                            className="counter-btn"
                            onClick={() => handleOption("adult", "i")}
                            >
                            +
                            </button>
                        </div>
                    </div>
                    <div className="counter-item">
                        <div className='flex flex-col'>
                            <span className="counter-heading">Children</span>
                            <span className="counter-criteria">Ages 2-12</span>
                        </div>
                        <div className="counter-btn-container">
                            <button
                            disabled={options.children <= 0}
                            className="counter-btn"
                            onClick={() => handleOption("children", "d")}
                            >
                            -
                            </button>
                            <span className="counter-number">
                            {options.children}
                            </span>
                            <button
                            className="counter-btn"
                            onClick={() => handleOption("children", "i")}
                            >
                            +
                            </button>
                        </div>
                    </div>              
                </div>
                <div className="button-container">
                    <button onClick={handleSave} className="save-btn">Save</button>
                </div>
            </div>
        </Modal>
    )
}

export default ChangeGuest