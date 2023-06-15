import { useState } from 'react';
import './Navbar.scss'
import { GrFormClose } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { format } from "date-fns";
import Area from "../../JSON/Area.json";
import { DateRange } from "react-date-range";
import { BiSearch } from 'react-icons/bi';

const FloatNavContent = ({open, setOpen, click, setClick}) => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()
    const [date, setDate] = useState([
        {
        startDate: new Date(), 
        endDate: new Date(),
        key: "selection",
        },
    ]);
    
    const [options, setOptions] = useState({
        adult: 0,
        children: 0
    });
    let guest = options.adult ? options.adult + options.children + " guest" : "Add guest"
    const handleOption = (name, operation) => {
        setOptions((prev) => {
          return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
          };
        });
    };
    const handleSearch=()=>{
        if(search ){
            if(guest !== "Add guest"){
                navigate(`/search-place/${search}`)
                setOpen(false)
            }
            else{
                setOpen(!open)
            }
        }
        else{
            setOpen(!open)
        }
        setClick('')
    }
    
    const handleClick=(e)=>{ 
        setClick(e)
    }
    const startDate = `${format(date[0].startDate, "MM/dd/yyyy")}`
    const endDate = `${format(date[0].endDate,"MM/dd/yyyy")}`
    return (
        <div className="destination-container w-[70%] mx-auto" style={{backgroundColor : open ? "#ebebeb" : "white"}}>
            <div className="destination-item relative flex justify-between items-center w-[30%]" style={{backgroundColor : click==="destination" ? "white" : "", borderRadius : click==="destination" ? "42px" : "", boxShadow:click==="destination" ? "rgba(0, 0, 0, 0.35) 0px 5px 15px" : ""}}>
                <div className="search-option"   onClick={()=> handleClick("destination" )}>
                    <p className="option-header m-0 p-0 ">Where</p>
                    <input className="footer-input" onChange={(e)=>setSearch(e.target.value)} value={search} name="search" type="text" placeholder='Search destinations'/>
                </div>
                {
                    search && <div className='search-close-icon' ><GrFormClose className='text-[16px] font-bold' onClick={()=>setSearch("")} /></div>
                }
                {
                
                   click==="destination" ? <div className='location'>
                        {
                            search 
                            ? 
                            <div>
                                {/* <SearchItem keyword={search}/> */}
                            </div>
                            :
                            <div className='grid grid-cols-3 gap-5 w-[550px] p-5'>
                                {
                                    Area.map((item) => <div key={item.id} className="">
                                        <img onClick={()=>navigate(`/search/${item.name}`)} className='border  rounded-[10px]' src={item.photo} alt={item.name} />
                                        <p className='m-0 text-black'>{item.name}</p>
                                    </div>)
                                }
                            </div>
                        }
                   </div>
                   : ""
                }
            </div>
            <div className="destination-item flex justify-between items-center w-[20%]" onClick={()=> handleClick("date")} style={{backgroundColor : click === "date" ? "white" : "",  borderRadius : click === "date" ? "42px" : "",  boxShadow:click === "date" ? "rgba(0, 0, 0, 0.35) 0px 5px 15px" : ""}}>
                <div className="date-picker" >
                    <p className="option-header">Check in</p>
                    <p className="optionFooter footer-option">
                        {
                          startDate == endDate ?  "Add dates" : startDate
                        }
                    </p>
                </div>
                {
                    click === "date" ? (
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
                    )
                    : ""
                }
            </div>
            <div className="destination-item flex justify-between items-center w-[20%]" onClick={()=> handleClick("dateO")} style={{backgroundColor : click === "dateO" ? "white" : "",  borderRadius : click === "dateO" ? "42px" : "",  boxShadow:click === "dateO" ? "rgba(0, 0, 0, 0.35) 0px 5px 15px" : ""}} >
                <div className="date-picker" >
                    <p className="option-header">Check out</p>
                    <p className="footer-option">
                        {
                          startDate == endDate ?  "Add dates" : endDate
                        }
                    </p>
                </div>
                {/* <div className='mr-5 bg-[#DDDDDD] p-[2px] rounded-full'><GrFormClose className='text-[16px] font-bold' /></div> */}
                {
                    click === "dateO" ? (
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
                    )
                    : ""
                }
            </div>
            <div  className="destination-item w-[30%]" onDoubleClick={()=> handleClick("")}   style={{backgroundColor : click === "options" ? "white" : "",  borderRadius : click === "options" ? "42px" : "", boxShadow:click === "options" ? "rgba(0, 0, 0, 0.35) 0px 5px 15px" : ""}}>
                <div className="guest-counter" >
                    <div className="guest-input-option" >
                        <div className='' onClick={()=> handleClick("options")} >
                            <p className="option-header">Who</p>
                            <p className="footer-option">{guest}</p>
                        </div>
                        <div className="search-btn" onClick={handleSearch}>
                            <BiSearch className="search-icon"/>
                            <span className=''>Search</span>
                        </div>
                    
                    </div>
                    { click === "options" ? (
                        <div className="options">
                            <div className="counter-item">
                                <div className='flex flex-col'>
                                    <span className="counter-heading">Adult</span>
                                    <span className="counter-criteria">Ages 13 or above</span>
                                </div>
                                <div className="counter-btn-container">
                                    <button
                                    disabled={options.adult <= 0}
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
                    ) : ""
                    }
                </div>
            </div>
        </div>
    )
}

export default FloatNavContent