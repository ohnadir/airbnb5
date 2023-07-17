import { useState } from 'react'
import './Navbar.scss'
import { BiSearch } from 'react-icons/bi'
import { CgOptions } from 'react-icons/cg'
import { MdClose } from 'react-icons/md'
import { TbSearch } from 'react-icons/tb';
import Region from "../../JSON/Area.json"
import { useNavigate } from 'react-router-dom';
import { format, differenceInDays  } from "date-fns";
import { DateRange } from "react-date-range";
import FilterModal from '../Category/FilterModal'
import Slider from "react-slick";
import {addDate } from "../../utils/LocalStorage"
import { HiMenuAlt1 } from 'react-icons/hi';
import MobileDrawer from './MobileDrawer'

const MobileNavbar = (setAuthModal) => {
    const [open1, setOpen1] = useState(false);
    const [open, setOpen] = useState(false);
    const [drawer, setDrawer] = useState(false);
    const [item, setItem] = useState("")
    const [search, setSearch] = useState("")
    const [date, setDate] = useState([
        {
        startDate: new Date(), 
        endDate: new Date(),
        key: "selection",
        }
    ]);
    const navigate = useNavigate()
    const [options, setOptions] = useState({
        adult: 0,
        children: 0,
        infants : 0,
        pets: 0
    });

    const startDate = `${format(date[0].startDate, "dd/MM/yyyy")}`

    const handleOption = (name, operation) => {
        setOptions((prev) => {
          return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
          };
        });
    };
    let guest = (options.adult + options.children) ? (options.adult + options.children) : 1;
    const handleSearch=()=>{
        if(guest > 0 && startDate){
            navigate('/search-place')
            setOpen1(false)
            setItem("")
        } else if(search){
            navigate(`/search-place/${search}`)
            setOpen1(false)
            setItem("")
        }
        else{
            setOpen1(!open)
            setItem("")
        }
        const booking = {
            check_in: String(date[0]?.startDate)?.slice(4, 16), 
            check_out: String(date[0]?.endDate)?.slice(4, 16),
            night: (differenceInDays(date[0].endDate, date[0].startDate)) ? (differenceInDays(date[0].endDate, date[0].startDate)) : 1,
            guest: guest 
        }
        if(booking){
            addDate(booking);
        }
    }
    
      const settings = {
        dots: false,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 0,
              infinite: true
            }
          },
          {
            breakpoint: 631,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 525,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 420,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          } 
        ]
      }
    return (
        <div className=' md:hidden mobile-navbar-container px-5 flex gap-5 items-center'>
            
            <div className='mobile-navbar-content w-full'>
                <div className='mobile-search-label cursor-pointer w-full' onClick={()=>setOpen1(true)}>
                    <BiSearch className='text-xl'/>
                    <div className='py-2 ' >
                        <h1 className='m-0 text-[13px] font-semibold'>Anywhere</h1>
                        <ul className="custom-search-label">
                            <span>Any week</span>
                            <li>Add guests</li>
                        </ul>
                    </div>
                </div>
                <CgOptions onClick={()=>setOpen(true)} className='filter-icon' />
            </div>
            <div>
                <HiMenuAlt1 onClick={()=>setDrawer(true)} size={30} className='cursor-pointer'/>
            </div>
            {
                open1
                ?
                <div className='navbar-mask'>
                    <div className='navbar-mask-container'>
                        <div data-aos="fade-down" className='close-icon-container flex items-center'>
                            <div className='close-icon w-fit' onClick={()=>setOpen1(false)}>
                                <MdClose size={20}/>
                            </div>
                            <div className='flex mx-auto gap-5 items-center justify-center font-semibold text-gray-600'>
                                <span className='border-b-2 text-black border-black py-2'>Stays </span>
                                <span>Experiences</span>
                            </div>
                        </div>
                        <div className="mask-content" >
                            <div data-aos="fade-down" data-aos-delay="200" className='options' onClick={()=>setItem("location")}>
                                {
                                    item === "location"
                                    ?
                                    <div className='destinations'>
                                        <h1 className='option-heading'>Where to?</h1>
                                        <div className='search-container flex items-center gap-3'>
                                            <TbSearch size={20}/>
                                            <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder='Search destinations' />
                                        </div>
                                        <div className="region-map-container overflow-hidden">
                                            <Slider {...settings}>
                                                {
                                                    Region.map((item, index)=>
                                                        <div key={index} className='region-map'>
                                                            <img src={item?.photo} alt="" />
                                                            <p>{item.name}</p>
                                                        </div>
                                                    )
                                                }
                                            </Slider>
                                        </div>
                                        
                                    </div>
                                    :
                                    <div className='options-item' >
                                        <p className='name'>Where</p>
                                        <p className='add-option'>Add locations</p>
                                    </div>
                                }
                            </div>
                            <div data-aos="fade-down" data-aos-delay="300" className='options' onClick={()=>setItem("date")}>
                                {
                                    item === "date"
                                    ?
                                    <div>
                                        <h1 className='option-heading'>When&apos;s your trip?</h1>
                                        <div className="calender-container">
                                            <DateRange
                                                editableDateInputs={true}
                                                onChange={item => setDate([item.selection])}
                                                moveRangeOnFirstSelection={false}
                                                ranges={date}
                                             />
                                        </div>
                                    </div>
                                    :
                                    <div className='options-item' >
                                        <p className='name'>When</p>
                                        <p className='add-option'>Add dates</p>
                                    </div>
                                }
                            </div>
                            <div data-aos="fade-down" data-aos-delay="300" className='options' onClick={()=>setItem("guests")}>
                                {
                                    item === "guests"
                                    ?
                                    <div className="options-container">
                                        <h1 className='option-heading'>Who&apos;s coming?</h1>
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
                                                    <p>-</p>
                                                </button>
                                                <span className=" counter-number">
                                                {options.adult}
                                                </span>
                                                <button
                                                className="counter-btn"
                                                onClick={() => handleOption("adult", "i")}
                                                >
                                                    <p>+</p>
                                                </button>
                                            </div>
                                        </div>

                                        <div className='divider my-4'></div>
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
                                                    <p>-</p>
                                                </button>
                                                <span className="counter-number">
                                                {options.children}
                                                </span>
                                                <button
                                                className="counter-btn"
                                                onClick={() => handleOption("children", "i")}
                                                >
                                                    <p>+</p>
                                                </button>
                                            </div>
                                        </div>

                                        <div className='divider my-4'></div>
                                        <div className="counter-item">
                                            <div className='flex flex-col'>
                                                <span className="counter-heading">Infants</span>
                                                <span className="counter-criteria">Under 2</span>
                                            </div>
                                            <div className="counter-btn-container">
                                                <button
                                                disabled={options.infants <= 0}
                                                className="counter-btn"
                                                onClick={() => handleOption("infants", "d")}
                                                >
                                                    <p>-</p>
                                                </button>
                                                <span className="counter-number">
                                                {options.infants}
                                                </span>
                                                <button
                                                className="counter-btn"
                                                onClick={() => handleOption("infants", "i")}
                                                >
                                                    <p>+</p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className='options-item'>
                                        <p className='name'>Who</p>
                                        <p className='add-option'>Add guest</p>
                                    </div>
                                }
                                
                            </div>
                        </div>
                        <div className="bottom-content" >
                            <div className='bottom-container' >
                                <div className='flex items-center justify-between'>
                                    <button onClick={()=>setItem("")} className='font-semibold text-[16px] underline'>Clear all</button>
                                    <button onClick={handleSearch} className='search-btn'>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                null
            }
            {
                open
                ?
                <FilterModal open={open} setOpen={setOpen}/>
                :
                null
            }
            {
                drawer && <MobileDrawer drawer={drawer} setDrawer={setDrawer} setAuthModal={setAuthModal}/>
            }
        </div>
    )
}

export default MobileNavbar