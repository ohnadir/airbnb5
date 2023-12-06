import { useEffect, useState } from 'react';
import './Navbar.scss'
import { FiUser } from 'react-icons/fi'
import { FaAirbnb } from 'react-icons/fa'
import { BiHomeAlt2 } from 'react-icons/bi'
import { GrFormClose } from 'react-icons/gr'
import { IoMdHeartEmpty } from 'react-icons/io';
import { useSelector } from "react-redux"
import { Drawer, Slider } from 'antd';
import { useNavigate } from "react-router-dom"
import Property from "../../JSON/property.json"
import Essential from "../../JSON/Essential.json"

const MobileDrawer = ({ open, setOpen, setAuthModal})  => {
    const [BedRooms, setBedRooms] = useState("any")
    const [Bed, setBed] = useState("any")
    const [BathRoom, setBathRoom] = useState("any")
    const [property, setProperty] = useState("")
    const [essential, setEssential] = useState("")
    const [Min, setMin] = useState(0)
    const [Max, setMax] = useState(100)
    const { isAuthenticated, user } = useSelector(state=>state.auth)
    const navigate = useNavigate()
    const handleRoute=(e)=>{
        if(e === "login"){
            setAuthModal(true)
            setOpen(false)
        }
        if(e === "profile"){
            navigate('/profile')
            setOpen(false)
        }
        if(e === "trip"){
            navigate('/trip')
            setOpen(false)
        }
        if(e === "wish"){
            navigate('/wish')
            setOpen(false)
        }
        if(e === "home"){
            navigate('/')
            setOpen(false)
        }
    }
    const handleRange=(e)=>{
        setMin(e[0]);
        setMax(e[1]);
    }
    const handleChange = (e) => {
        // setAuth(prev=>({...prev, [e.target.name]:e.target.value}))
    }
    return (
        <Drawer
            bodyStyle={{"padding": "0px"}}
            height="98%"
            headerStyle={{"borderBottom": "0px ", "display": "none"}}
            placement="bottom" closable={false}
            open={open}
        >
            <div className='mobile-drawer' >
                <div className="header">
                    <GrFormClose onClick={()=>setOpen(false)} className='cursor-pointer' size={25}/>
                    <div className='m-auto font-bold text-[17px]'>Filters</div>
                </div>
                <main className='pb-16 pt-[60px]'>
                    <div className='input-slider'>
                        <p className="text-[18px] font-semibold text-black m-0">Price range</p>
                        <p className='text-[14px] text-[#717171]'>Total prices for 5 nights before taxes</p>

                        <Slider className='slider' onChange={handleRange}  range={{draggableTrack: true,}}defaultValue={[0, 1000]}/>
                        <div className="range-details mt-5">
                            <div className="min-range">
                                <p className='m-0'>min price</p>
                                $ {Min}
                            </div>
                            <div>-</div>
                            <div className="max-range">
                                <p className='m-0'>max price</p>
                                $ {Max}
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-[1px] bg-[#eee] my-5 px-5'></div>

                    <div className="rooms-and-beds">
                        <p className="text-[18px] font-semibold text-black m-0">Rooms and beds</p>
                        <div>
                            <p className='text-[15px]'>Bedrooms</p>
                            <div className='room-item'>
                                <p style={{backgroundColor : "any" === BedRooms ? "black" : null, color : "any" === BedRooms ? "white" : "black"}} onClick={()=>setBedRooms("any")} className='button text-[13px]'>Any</p>
                                {
                                    [...Array(8).keys()].map((item, index)=> <p key={index} style={{backgroundColor : item === BedRooms ? "black" : null, color : item === BedRooms ? "white" : "black"}} onClick={()=>setBedRooms(item)} className='button'>{item + 1}</p>)
                                }
                            </div>
                            <p className='text-[15px]'>Beds</p>
                            <div className='room-item'>
                                <p className='button text-[13px]' style={{backgroundColor : "any" === Bed ? "black" : null, color : "any" === Bed ? "white" : "black"}} onClick={()=>setBed("any")}>Any</p>
                                {
                                    [...Array(8).keys()].map((item, index)=> <p key={index} style={{backgroundColor : item === Bed ? "black" : null, color : item === Bed ? "white" : "black"}} onClick={()=>setBed(item)} className='button'>{item + 1}</p>)
                                }
                            </div>
                            <p className='text-[15px]'>Bathrooms</p>
                            <div className='room-item'>
                                <p className='button text-[13px]' style={{backgroundColor : "any" === BathRoom ? "black" : null, color : "any" === BathRoom ? "white" : "black"}} onClick={()=>setBathRoom("any")}>Any</p>
                                {
                                    [...Array(8).keys()].map((item, index)=> <p key={index} style={{backgroundColor : item === BathRoom ? "black" : null, color : item === BathRoom ? "white" : "black"}} onClick={()=>setBathRoom(item)} className='button'>{item + 1}</p>)
                                }
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-[1px] bg-[#eee] my-5 px-5'></div>
                    
                    <div className="property-types">
                            <p className="text-[18px] font-semibold text-black m-0">Type of place</p>
                            <div className='mt-3'>
                                <div className="type flex items-center justify-between gap-5">
                                    {
                                        Property.map((item, index) => 
                                            <div key={index} onClick={()=>setProperty(item.name)} className="contain" style={{border: item.name === property ? "1px solid black " : null}}>
                                                <img src={item.img} alt="" />
                                                <p className='m-0 text-[13px]'>{item.name}</p>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                    </div>
                    
                    <div className='w-full h-[1px] bg-[#eee] my-5 px-5'></div>

                    <div className="amenities mb-5 px-5">
                            <p className="text-[20px] font-semibold text-black m-0">Amenities</p>
                            <div className='mt-5'>
                                <p className='text-[18px] font-semibold'>Essentials</p>
                            </div>
                            <div>
                                <div className='grid grid-cols-1 mt-4 gap-4'>
                                    {
                                        Essential.map((item, index)=>
                                            <div key={index} className="check flex items-center justify-between">
                                                <p className='text-[16px]'>{item.name}</p>
                                                <input id={`input${index + 4}`} type="checkbox" onChange={handleChange} value={`${item.name}`} style={{fontSize : "30px"}} className='h-4 w-4' name="essential" />
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                </main>
                <footer className='filter-footer'>
                    <button  type="" className='underline font-semibold text-[15px] clear-btn'>Clear all</button>
                    <button type="" className='show-btn'>Show stay</button>
                </footer>
            </div>
        </Drawer>
    )
}

export default MobileDrawer