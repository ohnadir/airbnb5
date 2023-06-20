import { useState } from 'react'
import './Navbar.scss'
import { BiSearch } from 'react-icons/bi'
import { CgOptions } from 'react-icons/cg'
import { MdClose } from 'react-icons/md'

const MobileNavbar = () => {
    const [open, setOpen] = useState(false);
    const [item, setItem] = useState("")
    const [options, setOptions] = useState({
        adult: 0,
        children: 0,
        infants : 0,
        pets: 0
    });
    const handleOption = (name, operation) => {
        setOptions((prev) => {
          return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
          };
        });
    };
    const handleSearch=()=>{
        setItem("")
        setOpen(false)
    }
    return (
        <div className='block md:hidden mobile-navbar-container px-5'>
            <div className='mobile-navbar-content'>
                <div className='mobile-search-label cursor-pointer w-full' onClick={()=>setOpen(true)}>
                    <BiSearch className='text-xl'/>
                    <div className='py-2 ' >
                        <h1 className='m-0 text-[13px] font-semibold'>Anywhere</h1>
                        <ul className="custom-search-label">
                            <span>Any week</span>
                            <li>Add guests</li>
                        </ul>
                    </div>
                </div>
                <CgOptions className='filter-icon' />
            </div>
            {
                open
                ?
                <div className='navbar-mask'>
                    <div className='navbar-mask-container'>
                        <div data-aos="fade-down" className='close-icon-container flex items-center'>
                            <div className='close-icon w-fit' onClick={()=>setOpen(false)}>
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
                                    <div>
                                        <h1 className='option-heading'>Where to?</h1>
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

                                        <div className='divider my-4'></div>
                                        <div className="counter-item">
                                            <div className='flex flex-col'>
                                                <span className="counter-heading">Pets</span>
                                                <span className="counter-criteria">Bringing a service animal?</span>
                                            </div>
                                            <div className="counter-btn-container">
                                                <button
                                                disabled={options.pets <= 0}
                                                className="counter-btn"
                                                onClick={() => handleOption("pets", "d")}
                                                >
                                                    <p>-</p>
                                                </button>
                                                <span className="counter-number">
                                                {options.pets}
                                                </span>
                                                <button
                                                className="counter-btn"
                                                onClick={() => handleOption("pets", "i")}
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
        </div>
    )
}

export default MobileNavbar