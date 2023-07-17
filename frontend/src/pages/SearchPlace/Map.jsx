import { useEffect, useState } from 'react';
import './SearchPlace.scss'
import  Map, { Marker, Popup } from "react-map-gl";
import { useDispatch, useSelector } from "react-redux"
import { mapApi } from "../../Redux/actions/map"
import Spinner from "../../components/Spinner"


const Maps = ({places}) => {
    const dispatch = useDispatch();
    const {loading, api} = useSelector(state=> state.mapApi)
    const [viewport, setViewport] = useState({
        latitude: 45.833858,
        longitude: 6.163890,
        zoom: 2
    });
    useEffect(()=>{
        dispatch(mapApi())
    },[dispatch]);
    return (
        <>
            {
                loading
                ?
                <Spinner/>
                :
                <div>
                    <Map
                        {...viewport}
                        style={{width: "100%", height: "85vh"}}
                        mapboxAccessToken={api}
                        mapStyle="mapbox://styles/mapbox/streets-v9"
                        onViewportChange={nextViewport => setViewport(nextViewport)}
                        >
                            {
                                places?.map((p, index)=>(
                                    <>
                                        <Marker
                                            
                                            latitude={p.latitude}
                                            longitude={p.longitude}
                                        >
                                            <div
                                                className='flex items-center justify-center font-bold text-center text-[16px] rounded-[42px]'
                                                style={{
                                                    height: `${12 * viewport.zoom}px`,
                                                    width: `${30 * viewport.zoom}px`,
                                                    color: "black",
                                                    backgroundColor : "white"
                                                }}
                                                >
                                                    <p>${p?.price}</p>
                                            </div>
                                        </Marker>
                                    </>
                            ))}
                    </Map>
                </div>
            }
        
        </>
    )
}

export default Maps