import { useState } from 'react'
import { Modal } from 'antd'
import { RiCloseFill } from 'react-icons/ri'
import { Slider } from 'antd';
import Property from "../../JSON/property.json"
import Essential from "../../JSON/Essential.json"

const FilterModal = ( {open , setOpen}) => {
    const [property, setProperty] = useState("")
    const [Room, setRoom] = useState("")
    const [Essentials, setEssentials] = useState("")
    const [BedRooms, setBedRooms] = useState("any")
    const [Bed, setBed] = useState("any")
    const [BathRoom, setBathRoom] = useState("any")
    const [Min, setMin] = useState(0)
    const [Max, setMax] = useState(100)
    const [auth, setAuth] = useState('');
    const handleRange=(e)=>{
        setMin(e[0]);
        setMax(e[1]);
    }
    const handleSubmit=()=>{
        // dispatch(getPlace(price(Min, Max), ))
    }
    const handleChange = (e) => {
        setAuth(prev=>({...prev, [e.target.name]:e.target.value}))
    }
    const handleClear=()=>{
        setProperty("")
        setBedRooms("any" )
        setBed("any")
        setBathRoom("any")
        setMax(100)
        setMin(0);
        document.getElementById('input').checked = false;
        document.getElementById('input2').checked = false;
        document.getElementById('input3').checked = false;
        document.getElementById('input4').checked = false;
        document.getElementById('input5').checked = false;
        document.getElementById('input6').checked = false;
        document.getElementById('input7').checked = false;
        document.getElementById('input8').checked = false;
        document.getElementById('input9').checked = false;
    }
    return (
        <Modal
            centered
            open={open}
            width={670}
            closable={false}
            footer={false}
            className={{borderRadius:"30px"}}
            bodyStyle={{margin:"0", border:"none", padding:0  }}
          >
            <div className='filter-modal'>
                <header>
                    <div className='border-b-[1px]'>
                        <div className='flex items-center px-5 py-3'>
                            <RiCloseFill size={25} onClick={() => setOpen(false)} className='  rounded-full hover:bg-gray-100 p-1 border cursor-pointer'/>
                            <p className='m-0 mx-auto font-bold text-[14px] '>Filters</p>
                        </div>
                    </div>
                </header>
                <body>
                    <div className='px-5 pt-5' style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 200px)' }}>
                        <p className="text-[18px] font-semibold text-black m-0">Price range</p>
                        <p className='text-[14px] text-[#717171]'>The average nightly price is 764</p>

                        <div className='price-range-container my-5'>
                            <div className='px-10'>
                                <Slider onChange={handleRange}  range={{draggableTrack: true,}}defaultValue={[0, 1000]}/>
                            </div>

                            <div className="range-details mt-5 flex items-center justify-between gap-5 px-10">
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
                        <div className="w-full h-[1px] bg-[#717171] mb-5"></div>
                        <div className="room-type">
                            <p className="text-[18px] font-semibold text-black m-0">Type of place</p>
                            <div className='grid grid-cols-1 md:grid-cols-2 mt-4'>
                                <div className="check relative">
                                    <input id="input" name="place" type="checkbox" onChange={handleChange} value="entire" style={{fontSize : "30px"}} className='h-5 w-5 m-0 p-0 absolute top-1 '   />
                                    <div className=' ml-10'>
                                        <p className='m-0 text-[14px] text-[px]'>Entire place</p>
                                        <p className='m-0 text-[13px] text-[#717171]'>A place to yourself</p>
                                    </div>
                                </div>
                                <div className="check relative">
                                    <input id="input2" name="place" onChange={handleChange} value="private" type="checkbox" style={{fontSize : "30px"}} className='h-5 w-5 m-0 p-0 absolute top-1 '   />
                                    <div className='ml-10'>
                                        <p>Private room</p>
                                        <p className='m-0 text-[13px] text-[#717171]'>Your own room in a home or a hotel, plus some shared common spaces</p>
                                    </div>
                                </div>
                                <div className="check relative">
                                    <input id="input3" name="place" onChange={handleChange} value="shared" type="checkbox" style={{fontSize : "30px"}} className='h-5 w-5 m-0 p-0 absolute top-1 '  />
                                    <div className='ml-10'>
                                        <p>Shared room</p>
                                        <p className='m-0 text-[13px] text-[#717171]'>A sleeping space and common areas that may be shared with others</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-[#717171] my-5"></div>
                        <div className="rooms-and-beds">
                            <p className="text-[18px] font-semibold text-black m-0">Rooms and beds</p>
                            <div>
                                <p>Bedrooms</p>
                                <div className='flex gap-2 my-3'>
                                    <p style={{backgroundColor : "any" === BedRooms ? "black" : null, color : "any" === BedRooms ? "white" : "black"}} onClick={()=>setBedRooms("any")} className='button text-[13px]'>Any</p>
                                    {
                                        [...Array(8).keys()].map((item, index)=> <p key={index} style={{backgroundColor : item === BedRooms ? "black" : null, color : item === BedRooms ? "white" : "black"}} onClick={()=>setBedRooms(item)} className='button'>{item + 1}</p>)
                                    }
                                </div>

                                <p>Beds</p>
                                <div className='flex gap-2 my-3'>
                                    <p className='button text-[13px]' style={{backgroundColor : "any" === Bed ? "black" : null, color : "any" === Bed ? "white" : "black"}} onClick={()=>setBed("any")}>Any</p>
                                    {
                                        [...Array(8).keys()].map((item, index)=> <p key={index} style={{backgroundColor : item === Bed ? "black" : null, color : item === Bed ? "white" : "black"}} onClick={()=>setBed(item)} className='button'>{item + 1}</p>)
                                    }
                                </div>

                                <p>Bathrooms</p>
                                <div className='flex gap-2 my-3'>
                                    <p className='button text-[13px]' style={{backgroundColor : "any" === BathRoom ? "black" : null, color : "any" === BathRoom ? "white" : "black"}} onClick={()=>setBathRoom("any")}>Any</p>
                                    {
                                        [...Array(8).keys()].map((item, index)=> <p key={index} style={{backgroundColor : item === BathRoom ? "black" : null, color : item === BathRoom ? "white" : "black"}} onClick={()=>setBathRoom(item)} className='button'>{item + 1}</p>)
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-[#717171] my-10"></div>
                        <div className="property-types">
                            <p className="text-[18px] font-semibold text-black m-0">Type of place</p>
                            <div className='mt-3'>
                                <div className="types flex items-center justify-between gap-5">
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
                        <div className="w-full h-[1px] bg-[#717171] my-10"></div>
                        <div className="amenities mb-5">
                            <p className="text-[18px] font-semibold text-black m-0">Amenities</p>
                            <div className='mt-5'>
                                <p className=''>Essentials</p>
                            </div>
                            <div>
                                <div className='grid grid-cols-1 md:grid-cols-2 mt-4 gap-4'>
                                    {
                                        Essential.map((item, index)=>
                                            <div key={index} className="check relative">
                                                <input id={`input${index + 4}`} type="checkbox" onChange={handleChange} value={`${item.name}`} style={{fontSize : "30px"}} className='h-5 w-5 m-0 p-0 absolute top-0 ' name="essential" />
                                                <div className=' ml-9'>
                                                    <p className='m-0 text-[13px]'>{item.name}</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
                <footer>
                    <div className='filter-footer flex justify-between items-center px-5 py-4'>
                        <button onClick={handleClear} type="" className='underline font-semibold text-[13px] clear-btn'>Clear all</button>
                        <button onClick={handleSubmit} type="" className='show-btn'>Show stay</button>
                    </div>
                </footer>
                
            </div>
          </Modal>
    )
}

export default FilterModal