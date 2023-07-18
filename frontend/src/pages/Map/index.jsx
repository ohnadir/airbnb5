import './Map.scss'
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useNavigate } from 'react-router-dom';
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { FaStar } from 'react-icons/fa';
import Slider from "react-slick";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlaces } from "../../Redux/actions/place"
import { BsFillMapFill, BsListUl } from 'react-icons/bs';

const Map = () => {
    const [name, setName] = useState("")
    const { loading, places} = useSelector(state=> state.places);
    const filter = places?.find((item)=> item?._id === name);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [viewport, setViewport] = useState({
        latitude: 45.833858,
        longitude: 6.163890,
        zoom: 2
    });

    useEffect(()=>{
        dispatch(getPlaces())
    },[dispatch]);


    const ArrowLeft = (props) => (
        <button
            {...props}
            style={{visibility:props?.currentSlide === 0 ? "hidden" : "visible"}}
            className="prev">
            <BiChevronLeft/>
        </button>
    );
    const ArrowRight = (props) => (
        <button
          {...props}
          style={{visibility:props?.currentSlide === 4 ? "hidden" : "visible"}}
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
            style={{position:"absolute", bottom:"8px", }}>
              <ul className="sideDots" style={{ margin: "0px" }}> <span className="dots">{dots}</span> </ul>
          </div>
        )
    };
    return (
        <div className='map-container'>
            <section>
                <div className="location-tiger">
                    <div className="map" onClick={()=>navigate('/')}> <span>Show map</span> <BsListUl size={18} /></div>
                </div>
          </section>
            <ReactMapGL
                    {...viewport}
                    style={{width: "100%", height: "85vh"}}
                    mapboxAccessToken="pk.eyJ1Ijoib2huYWRpciIsImEiOiJjbGYzbXB2cG4wcjNsM3FuZGkyeXgzaGp3In0.UW7J5lIaWc-P3nXa2WmRxQ"
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    onViewportChange={nextViewport => setViewport(nextViewport)}
                >
                    {
                        places?.map((p, index)=>(
                            <>
                                <Marker
                                    key={index}
                                    latitude={p.latitude}
                                    longitude={p.longitude}
                                    onClick={()=>setName(p._id)}
                                >
                                    <div >
                                        <svg
                                            className="marker yellow"
                                            style={{
                                                height: `${10 * viewport.zoom}px`,
                                                width: `${10 * viewport.zoom}px`,
                                            }}
                                            version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512">
                                            <g>
                                                <g>
                                                <path d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035
                                                    c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719
                                                    c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"/>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </Marker>
                                {
                                    name && (
                                        <Popup
                                            latitude={filter.latitude}
                                            longitude={filter.longitude}
                                            closeButton={true}
                                            closeOnClick={false}
                                            onClose={() => setName("")}
                                            anchor="top"
                                            dynamicPosition={true}
                                            >
                                            <div className="popup">
                                                <div className=" card-item">
                                                    <div className="img-container">
                                                        <Slider {...settings}>
                                                        {
                                                            filter?.img?.map((another, index)=>
                                                                <img key={index} src={another} alt="" />
                                                            )
                                                        }
                                                        </Slider>
                                                    </div>
                                                    <div className='info-container' onClick={()=>navigate(`/placeDetails/${filter?._id}`)}>
                                                        <div className="flex mt-3 items-center justify-between">
                                                        <p>{filter?.name}</p>
                                                        <div className="flex items-center gap-1 font-bold">
                                                            <FaStar className="text-[13px]"/>
                                                            <span className="text-[14px] font-semibold">{filter?.rating}</span>
                                                        </div>
                                                        </div>
                                                        <p style={{"fontSize":"14px", "color": "#717175"}} className="m-0">3,390 kilometers away</p>
                                                        <p style={{"fontSize":"14px", "color": "#717175"}} className="m-0">Nov 7-12</p>
                                                        <div className="flex items-center gap-1">
                                                            <span className="text-[14px] font-bold">${filter?.price}</span>
                                                            <span className='text-[14px]'>night </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Popup>
                                    )
                                }
                            </>
                    ))}
            </ReactMapGL>
        </div>
    )
}

export default Map