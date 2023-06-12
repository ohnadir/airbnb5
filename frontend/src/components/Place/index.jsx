import './Place.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getPlaces } from "../../Redux/actions/place";
import { useEffect } from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import Slider from "react-slick";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { FaStar } from 'react-icons/fa';
import Spinner from "../Spinner"
import { useNavigate } from "react-router-dom"

const Place = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { loading, places } = useSelector(state => state.places);
    useEffect(() => {
        dispatch(getPlaces());
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
        <>
            {
                loading
                ?
                <Spinner/>
                :
                <div className="max-w-7xl mx-auto px-10 mt-8 pb-[55px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:grid-cols-2">
                        {
                        places?.map((item, index)=> 
                            <div  key={index}  className="cardItem" >
                                <div className="relative">
                                    <div style={{"zIndex":"1"}} className="absolute text-white transition-all hover:text-[#ddd] right-2 top-2">
                                        <button ><IoMdHeartEmpty size={26}/></button>
                                    </div>
                                    <Slider {...settings}>
                                    {
                                        item.img.map((another, index)=>
                                        <img key={index}  className="rounded-xl" src={another} alt="" />
                                        )
                                    }
                                    </Slider>
                                </div>
                                <div className='informationContainer' onClick={()=>navigate(`/placeDetails/${item._id}`)}>
                                    <div className="flex mt-3 items-center justify-between  font-bold">
                                    <p style={{"fontSize":"15px"}}  className="m-0">{item.name}</p>
                                    <div className="flex items-center gap-1">
                                        <FaStar className="text-[13px]"/>
                                        <span className="text-[14px] font-semibold">{item.rating}</span>
                                    </div>
                                    </div>
                                    
                                    <p style={{"fontSize":"14px", "color": "#717175"}} className="m-0">Nov 7-12</p>
                                    <div className="flex items-center gap-1">
                                    <span className="text-[14px] font-bold">{item.price}</span>
                                    <span className='text-[14px]'>night </span>
                                    </div>
                                </div>
                            </div>
                        )
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default Place