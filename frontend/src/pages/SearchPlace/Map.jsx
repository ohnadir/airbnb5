import { useEffect, useState } from 'react';
import './SearchPlace.scss'
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { BiMapPin } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { mapApi } from "../../Redux/actions/map"
import Spinner from "../../components/Spinner"

const Map = ({places}) => {
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
                    <ReactMapGL
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
                                            <div >
                                                <BiMapPin 
                                                    style={{
                                                        height: `${10 * viewport.zoom}px`,
                                                        width: `${10 * viewport.zoom}px`,
                                                        color: "#ff385c"
                                                    }}
                                                />
                                            </div>
                                        </Marker>
                                    </>
                                ))}
                    </ReactMapGL>
                </div>
            }
        
        </>
    )
}

export default Map