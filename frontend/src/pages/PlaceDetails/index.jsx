import './PlaceDetails.scss'
import { useDispatch, useSelector } from "react-redux";
import { placeDetails } from "../../Redux/actions/place"
import { useEffect, useState } from 'react';
import {  FaStar } from 'react-icons/fa';
import Slider from "react-slick";
import { AiOutlineStar } from 'react-icons/ai';
import { BiBed } from 'react-icons/bi';
import { BsWifi } from 'react-icons/bs';
import { MdMonitor,  MdOutlinePostAdd } from 'react-icons/md';
import { TbPool } from 'react-icons/tb';
import { IoIosArrowUp } from 'react-icons/io';
import { useParams  } from 'react-router-dom';
const PlaceDetails = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showReserveBtn, setShowReserveBtn] = useState(false)
  const {place} = useSelector(state=> state.place);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(()=>{
    dispatch(placeDetails(id))
  },[id]);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const controlNavbar = () => {
    if (window.scrollY > 450) {
      setShowNavbar(true)
    } else {
      setShowNavbar(false)
    }

    if (window.scrollY > 650) {
      setShowReserveBtn(true)
    } else {
    setShowReserveBtn(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, []);
  return (
    <div className='place-details'>
      <div className="place-details-container">

        <div className="mobile-version">
          <div className=''>
            <Slider {...settings}>
              {
                place?.img?.map((img, index)=> <img key={index} className='overflow-y-hidden' src={img} alt=""/>)
              }
            </Slider>
          </div>
        </div>
        <div className='header'>
          <h1>{place?.name?.split(',')[0]}</h1>
          <div className="flex items-center gap-2">
            <div className='flex items-center gap-1'>
              <FaStar size={13} />
              <span className="text-[14px] font-semibold">5</span>
              <span className="text-[14px] font-semibold pl-1 underline">326 reviews</span>
            </div>
            <p >{place?.name?.split(',')[1]}</p>
          </div>
        </div>

        <section className='desktop-img-container' id="photos">
          <div className="large-img">
            { place?.img ? <img src={place.img[0]}  alt=""/> : "" }
          </div>
          <div className="grid-img">
            <div className='flex gap-5'>
              <div className='img'>
                { place?.img ? <img  src={place?.img[1]}  alt=""/> : "" }
              </div>
              <div className='img'>
                { place?.img ? <img className="top-corner" src={place?.img[2]}  alt=""/> : "" }
              </div >
            </div>
            <div className='flex gap-5'>
              <div className='img'>
                { place?.img ? <img src={place?.img[3]}  alt=""/> : "" }
              </div>
              <div className='img'>
                { place?.img ? <img className="bottom-corner" src={place?.img[4]}  alt=""/> : "" }
              </div>
            </div>
          </div>
        </section>
        
        <div className='place-info flex gap-10 mt-10'>
          <div className='place-advantage'>
            <div className='room-facilities-container'>
              <div className='room-facilities'>
                <p className='host-heading'>Dome hosted by LookBook </p>
                <ul className="bed-option">
                  <p>3 guests</p>
                  <li>1 bedroom</li>
                  <li>1 bed</li>
                  <li>1 bath</li>
                </ul>
                {/* <span >6 guests1 bedroom1 bed1 bath</span> */}
              </div>
              <div>
                <img className='w-12' src="https://a0.muscache.com/im/pictures/user/0ea3cd74-7ce9-4f59-bf57-334651d552c6.jpg?im_w=240" alt="" />
              </div>
            </div>
            <div className="card-divider my-6"></div>
            <div className='grid grid-cols-1 gap-4 '>
              <div className='flex gap-3'>
                <AiOutlineStar className='text-xl'/>
                <div className='-mt-1'>
                  <p className="dive-head">Dive right in</p>
                  <p className="dive-header">This is one of the few places in the area with a pool.</p>
                </div>
              </div>
              <div className='flex gap-3'>
                <AiOutlineStar className='text-xl'/>
                <div className='-mt-1'>
                  <p className="dive-head">Experienced host</p>
                  <p className="dive-header">LookBook has 821 reviews for other places.</p>
                </div>
              </div>
            </div>
            <div className="card-divider my-6"></div>
            <div className='mb-8'>
              <img className='w-28 my-6' src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" alt="" />
              <p className='text-[14px]  leading-6'>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
              <p className='underline font-semibold cursor-pointer text-[14px]' >Learn more</p>
            </div>
            <div className="card-divider my-3"></div>
            <p className=' text-[14px] leading-6'>
              ALL INCLUSIVE RESORT AWARD WINNER
              Lily Beach is proud to have once again won the prestigious All Inclusive Resort Award this year.
            </p>
            <div className="card-divider my-7"></div>
            <div>
              <h2 className='text-xl font-bold font-sans'>Where you&apos;ll sleep</h2>
              <div className="room-type">
                <BiBed className='text-xl mb-3' />
                <div className='flex flex-col'>
                  <span className='text-black text-[14px] font-semibold'>Bedroom</span>
                  <span className='text-[13px]'>1 double bed</span>
                </div>
              </div> 
            </div> 
            <div className="card-divider my-6"></div>
            <div id="amenities">
                <h2 className='text-xl font-bold font-sans mb-2'>What this place offers</h2>
                <div className='grid grid-cols-1 gap-3'>
                    <div className="service-container">
                      <BsWifi className="service-icon"/>
                      <span className="service-name">Wifi</span>
                    </div>
                    <div className="service-container">
                      <TbPool className="service-icon"/>
                      <span className="service-name">Pool</span>
                    </div>
                    <div className="service-container">
                        <MdMonitor className="service-icon"/>
                        <span className="service-name">TV</span>
                    </div>
                    <div className="service-container">
                      <MdMonitor className="service-icon"/>
                      <span className="service-name">Air conditioning</span>
                    </div>
                    <div className="service-container">
                      <img className='w-5' src="https://www.shareicon.net/data/128x128/2016/06/06/776638_technology_512x512.png" alt=""/>
                      <span className="service-name">Hair dryer</span>
                    </div>
                </div>
                <button  type="" className='border px-8 text-[14px] font-bold py-2 mt-10 border-black rounded-md '>Show all 15 amenities</button>
            </div>
            <div className="card-divider my-7"></div>
          </div>
          <div className="place-info-card">
              <div className='card-header'>
                <div className='card-header-option'>
                  <span className=' font-semibold'>$10</span>
                  <span style={{color:" #979797"}} className='text-[14px]'>night</span>
                </div>
                <div className="text-[13px] card-header-option">
                  <FaStar className=""/>
                  <span className="font-semibold">{place?.rating}</span>
                  <div style={{color:" #979797"}} className='text-[14px] m-0'>reviews</div>
                </div>
              </div>
              <div className="reserve-option">
                <div className='date-picker'>
                  <div className="check-in">
                    <p className="check-head">CHECK-IN</p>
                    <p className="check-counter">10-10</p>
                  </div>
                  <div className="check-out">
                    <p className="check-head">CHECKOUT</p>
                    <p className="check-counter">10-30</p>
                  </div>
                </div>
                <div className="guest-picker">
                  <div>
                    <p className="check-head">GUESTS</p>
                    <p className="check-counter">10</p>
                  </div>
                  <IoIosArrowUp/>
                </div>
              </div>
              <button className="reserve-btn" type="">Reserve</button>
              <div>
                  <h1 className='mt-2 text-[13px] text-center'>You won&apos;t be charged yet</h1>
                  <div className='flex items-center text-[14px] justify-between  mt-3'>
                      <span className='underline '>$ 20 x 2 nights</span>
                      <span>$10</span>
                  </div>
                  <div className='my-1 text-[14px] flex items-center justify-between font-[400]'>
                      <span className='underline '>Service fee</span>
                      <span>$ 24</span>
                  </div>
                  <div className="card-divider my-4"></div>
                  <div className='flex items-center justify-between font-semibold text-[15px]'>
                      <span>Total before taxes</span>
                      <span>$10</span>
                  </div>
              </div>
          </div>
        </div>

        <section className='map' id="location">
          <h2 className='heading'>Where you&apos;ll be</h2>
          <p>Maldives</p>
          <div></div>
        </section>

        <div className="card-divider my-6"></div>
        <section className='review' id="review">
          <h2  className='heading'>Reviews</h2>
          <div className='review-container'>
            <div className='empty-review'>
              <MdOutlinePostAdd size={30}/>
            </div>
            <p className='m-0 text-center'>No reviews (yet)</p>
          </div>
        </section>

        <section className="mobile-bottom-navbar">
          <div className="mobile-bottom-navbar-container">
            <div>
              <span className='text-[14px] font-bold'>$ {place.price} </span> <span className='text-[14px]'>night</span>
              <div className='flex items-center gap-1 text-[14px]'>
                <FaStar className=""/>
                <span className=" font-semibold">{place?.rating}</span>
              </div>  
            </div>
            <div>
              <button className="mobile-reserve-btn" type="">Reserve</button>
            </div>
          </div>
        </section>
        {
          showNavbar 
          &&
          <section className="top-navbar">
            <div className='top-navbar-container'>
              <ul>
                <a href="#photos">
                  <li>Photos</li>
                </a>
                <a href="#amenities">
                  <li>Amenities</li>
                </a>
                <a href="#review">
                  <li>Reviews</li>
                </a>
                <a href="#location">
                  <li>Location</li>
                </a>
              </ul>
                <div className='w-[200px] h-[38px]'>
                  {
                    showReserveBtn
                    &&
                    <div className='flex items-center justify-between w-full'>  
                      <div>
                        <p className='m-0 text-[13px]'>
                          <span className='font-semibold'>${place?.price} </span>
                          <span style={{color:" #979797"}}>night</span>
                        </p>
                        <div className="flex items-center gap-1  text-xs">
                          <FaStar className=""/>
                          <p className='m-0'>
                            <span className='font-semibold'>{place?.rating} </span>
                            <span style={{color:" #979797"}}>reviews</span>
                          </p>
                        </div>
                      </div>
                      <button  className="reserve-btn">Reserve</button>
                    </div>
                  }
                </div>
            </div>
          </section>
        }
      </div>
    </div>
  )
}

export default PlaceDetails