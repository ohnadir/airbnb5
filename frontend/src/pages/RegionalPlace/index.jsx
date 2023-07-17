import './RegionalPlace.scss'
import { useParams, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from 'react'
import { getPlaces } from "../../Redux/actions/place"
import { IoMdHeartEmpty } from 'react-icons/io'
import Slider from "react-slick";
import { FaStar } from 'react-icons/fa'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import Spinner from "../../components/Spinner";
import Map from '../SearchPlace/Map';
const RegionalPlace = () => {
    const { places, loading } = useSelector(state=> state.places)
    const [Switch, setSwitch] = useState(false)
    const { region } = useParams();
    const dispatch= useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(getPlaces(region));
    },[region, dispatch]);

    useEffect(() => {
        const inputElement = document.getElementById('switch');
        inputElement.addEventListener('change', function(){
          setSwitch(inputElement.checked);
        });
      }, []);


    const ArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            style={{visibility:currentSlide === 0 ? "hidden" : "visible"}}
            className="prev">
                
            <BiChevronLeft/>
        </button>
    );

    const ArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <button
          {...props}
          style={{visibility: currentSlide === 4 ? "hidden" : "visible"}}
          className="next">
            <BiChevronRight/>
        </button>
    );

    const settings = {
        arrows: true,
        dots: true,
        prevArrow: <ArrowLeft />,
        nextArrow: <ArrowRight />,
        appendDots: dots => (
          <div
            style={{position:"absolute", bottom:"8px"}}>
              <ul className="sideDots" style={{ margin: "0px" }}> <span className="dots">{dots}</span> </ul>
          </div>
        )
    };
    return (
        <div className='regional-place'>
            <h1 className='heading'>Regional Place <span>{region}</span></h1>
            <div className="regional-place-container">
                <div className="places">
                    <div className='switch-container'>
                        <div className="switch-tag">
                            <h1>Display total price</h1>
                            <div className='divider'></div>
                            <p>Includes all fees, before tax&apos;s</p>
                        </div>
                        <div>
                            <label className="switch">
                                <input type="checkbox" readOnly  id="switch" />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                    {
                        loading
                        ?
                        <Spinner/>
                        :
                        <div className="places-container">
                            {/* {[...Array(20)].map((item, index)=>{})} */}
                            {
                                places?.map((item, index)=> 
                                    <div  key={index}  className="place-card">
                                        <div className="img-container">
                                            <button className='wish-btn'><IoMdHeartEmpty size={26}/></button>
                                            <Slider {...settings}>
                                                {
                                                    item.img.map((another, index)=>
                                                        <img key={index} src={another} alt="place-img" />
                                                    )
                                                }
                                            </Slider>
                                        </div>
                                        <div className='info-container' onClick={()=>navigate(`/placeDetails/${item._id}`)}>
                                            <div className="flex mt-3 items-center justify-between">
                                                <h1>{item.name}</h1>
                                                <div className="flex items-center gap-1 font-bold">
                                                    <FaStar className="text-[13px]"/>
                                                    <span className="text-[14px] font-semibold">{item.rating}</span>
                                                </div>
                                            </div>
                                            
                                            <p className='booking-list'>Nov 7-12</p>
                                            {
                                                Switch
                                                ?
                                                <p className='text-black text-[15px]'>
                                                    <span className="font-bold">${Number(item?.price) + Number(item?.serviceCharge)} </span>
                                                    <span>total before taxes</span>
                                                </p>
                                                :
                                                <p className='text-black text-[15px]'>
                                                    <span className="font-bold">${item?.price} </span>
                                                    <span >night </span>
                                                </p>
                                            }
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    }
                </div>
                <div className="map">
                    <Map places={places} />
                </div>
            </div>
        </div>
    )
}

export default RegionalPlace