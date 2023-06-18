import { useEffect, useState } from 'react'
import ReactMapGL, { Marker } from "react-map-gl";
import { MdHome } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { placeDetails } from '../../Redux/actions/place';
import { mapApi } from '../../Redux/actions/map';
import Spinner from "../../components/Spinner"
const SingleMap = ({id}) => {
    const { place} = useSelector(state=> state.place);
    const {loading, api}=useSelector(state=> state.mapApi)
    const [viewport, setViewport] = useState({
        latitude: place?.latitude,
        longitude: place?.longitude,
        zoom: 15
    });

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(placeDetails(id))
        dispatch(mapApi())
    },[id, dispatch]);

    
    return (
        <>
            {
                loading
                ?
                <Spinner/>
                :
                <ReactMapGL
                    {...viewport}
                        style={{width: "100%", height: 500}}
                        mapboxAccessToken={api}
                        mapStyle="mapbox://styles/mapbox/streets-v9">
                        <Marker
                            latitude={viewport?.latitude}
                            longitude={viewport?.longitude}
                            
                        >
                            <div className='singleMap' style={{backgroundColor : "#F2D4DC", padding: "20px", borderRadius : "100%", opacity : "0.9"}}>
                                <div className=' rounded-full' style={{backgroundColor : "#FF385C", color: "white"}}>
                                    <MdHome  className='p-[4px] ' size={35}/>
                                </div>
                            </div>
                        </Marker>   
                </ReactMapGL>

            }
        </>
    )
}

export default SingleMap