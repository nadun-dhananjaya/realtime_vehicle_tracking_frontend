import react, {useState} from "react";
import {GoogleMap, LoadScript, MarkerF, Map, Marker} from "@react-google-maps/api";
import classes from "./GMap.module.css"
import RacingCarIcon from "../../assets/car/racing-car-icon.png"

const center = {lat: 6.906667, lng: 79.870414}

const GMap = () => {


    const GMAP_API_KEY = process.env.REACT_APP_GMAP_API_KEY
    const [map, setMap] = useState(null)
    const [markers, setMarkers] = useState([
        {lat: 6.906667, lng: 79.870414},
        {lat: 6.904693, lng: 79.869113},
        {lat: 6.906294, lng: 79.871430},
        {lat: 6.906047, lng: 79.868154},
        {lat: 6.906047, lng: 79.868154}
    ]);


    return <div className={classes['map-holder']}>
        {/*<div className={classes['banner']}>*/}
        {/*    Hello Banner*/}
        {/*</div>*/}
        <div className={classes['map']}>
            <LoadScript googleMapsApiKey={GMAP_API_KEY}>
                <GoogleMap
                    center={center}
                    zoom={18}
                    // mapTypeControlOptions={}
                    mapContainerStyle={{width: '100%', height: '100%'}}
                    options={{
                        zoomControl: false,
                        streetViewControl: false,
                        mapTypeControl: true,
                        fullscreenControl: false,
                        styles: []
                    }}
                    // onLoad={map => setMap(map)},
                >
                    {markers.map((marker, index) => (
                        <MarkerF position={marker} icon={RacingCarIcon}/>
                    ))}

                </GoogleMap>
            </LoadScript>
        </div>

    </div>
}


export default GMap
